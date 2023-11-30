import React, { useState,useEffect } from 'react';
import './animations.css';

function CardsPage() {
  const loadingGif = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/loadingGif.gif";
  const dolu = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/dolu.jpg";
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('loading');

  
  useEffect(() => {

    let dotCount = 0;
    const intervalId = setInterval(() => {
      setLoadingText(`loading${'.'.repeat((dotCount % 4) + 3)}`); 
      dotCount++;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchImage = () => {
    setIsLoading(true);
    fetch('https://api.elderladder.live/image', {
      method: 'GET',
      mode: 'cors', // 确保 mode 设置为 'cors'
      headers: {
     'Content-Type': 'application/json',
      }
      })
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        setIsLoading(false);
      });
  };

  const [gender, setGender] = useState('');
  const [taskDifficulty, setTaskDifficulty] = useState('');

  const handleOptionChange = (questionIndex, event) => {
    const value = event.target.value;
    if (questionIndex === 0) { // 假設性別問題是第一個問題
      setGender(value);
    } else if (questionIndex === 4) { // 假設任務卡難度問題是第五個問題
      setTaskDifficulty(value);
    }
  };

  const onClick2 = () => {
    fetchImage();
    handleSubmit(); // 替换成你的另一个函数
  };
  const handleSubmit = async () => {
    // 創建只包含這兩個問題答案的數據對象
    const dataToSend = {
      gender: gender,
      taskDifficulty: taskDifficulty
    };

    // 使用fetch發送數據
    try {
      const response = await fetch('https://api.elderladder.live/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Failed to submit survey:', error);
    }
  }
  





  const questions = [
    {
      question: "你的性別是什麼",
      options: ["生理男", "生理女", "雙棲性別", "我是百bang怪", "唉呦你幹嘛問那麼敏感的問題"]
    },
    {
      question: "你常常與家中長輩相處嗎",
      options: ["非常", "很常", "還好", "不常", "完全沒有"]
    },
    {
      question: "你愛你的家中長輩嗎",
      options: ["非常愛", "很愛", "還好捏", "是沒到那麼愛啦", "痾..."]
    },
    {
      question: "你有多愛資訊種子",
      options: ["老愛老愛了", "山無稜 天地合", "除了每個熬夜做專案朝地中海發展的夜晚都很愛", "愛不是用說的", "強制愛也是愛"]
    },
    {
      question: "你希望的任務卡難度？",
      options: ["簡單", "普通", "困難"]
    },  
  ];

  return (
    <div className="h-screen" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="float-left m-4">
        <h2 className="text-2xl font-bold mb-8">花 5 秒鐘讓我們更了解你</h2>
        {questions.map((q, qIndex) => (
          <div key={qIndex} className=" mb-10">
            <span className="font-semibold">{q.question}</span>
            {q.options.map((option, oIndex) => (
              <label key={oIndex} className="inline-flex items-center ml-2">
                 <input 
                  type="radio" 
                  name={`question-${qIndex}`} 
                  value={option}
                  onChange={(e) => handleOptionChange(qIndex, e)} 
                />
                <span className="ml-1">{option}</span>
              </label>
            ))}
          </div>
        ))}
       <div className="flex items-center mt-4 md:mt-0">
       <button 
         type="submit" 
         className="bg-gradient-to-r from-blue-400 to-blue-800 text-white px-4 py-2 rounded shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
         onClick={onClick2}
        >
         生成你的客製化任務卡
      </button>   
      </div>
      <div className="flex float-right h-full">
      {isLoading ? (
      <>
      <span className="text-2xl font-bold mb-2 ">{loadingText}</span>
      <img src={loadingGif} alt="Loading..." className=" w-60  m-4"/>
       </>
       ) : imageSrc ? (
        //bg-gradient-to-r from-red-50 via-red-100 to-red-200 shadow-2xl rounded-xl p-4 border border-blue-300
        //
        <div className="bg-gradient-to-r from-red-50 via-red-100 to-red-200 shadow-2xl rounded-xl p-4 border border-blue-300 "> {/* Flex 容器 */}
        <a href={imageSrc} download="fetchedImage.jpg">
          <img src={imageSrc} alt="Fetched content" className=" w-60 m-4 -mt-30 slide-in-from-bottom hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
        </a>
        <p className='text-2xl font-bold mb-4 text-center'>點擊卡片收下小挑戰</p>
        <img src={dolu} alt="抽卡失敗" className=" w-60 m-4" />
        </div>
        ) : null}
        </div>
    </div>
    </div>
  );
}


export default CardsPage;
