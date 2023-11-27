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
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const fetchImage = () => {
    setIsLoading(true);
    fetch('http://elderladder.ap-southeast-2.elasticbeanstalk.com/image')
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

  const questions = [
    {
      question: "你常常與家中長輩相處嗎",
      options: ["非常", "很常", "還好", "不常", "完全沒有"]
    },
    {
      question: "你愛你的家中長輩嗎",
      options: ["非常愛", "很愛", "還好捏", "不愛", "痾..."]
    },
    {
      question: "你是酷 guy 嗎",
      options: ["老酷了", "[酷guy不說話]", "不好說", "害羞", "應該不是但我們相信你是"]
    },
    {
      question: "你有多愛資訊種子",
      options: ["老愛老愛了", "山無稜 天地合", "除了準備TUV的半夜都很愛", "愛不是用說的", "痾...請學員部把你帶走"]
    },
    {
      question: "第五組是個好團隊嗎",
      options: ["不只是", "肯定是", "是", "基本上是", "痾...請你離開"]
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
                <input type="radio" name={`question-${qIndex}`} />
                <span className="ml-1">{option}</span>
              </label>
            ))}
          </div>
        ))}
       <button 
         type="submit" 
         className="bg-gradient-to-r from-blue-400 to-blue-800 text-white px-4 py-2 rounded shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
         onClick={fetchImage}
        >
         生成你的客製化任務卡
      </button>   
      </div>
      <div className="flex justify-center items-center h-full">
      {isLoading ? (
      <>
      <span className="text-2xl font-bold mb-2">{loadingText}</span>
      <img src={loadingGif} alt="Loading..." className="w-1/2 m-4"/>
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
  );
}

export default CardsPage;
