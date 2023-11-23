import React, { useState } from 'react';

function CardsPage() {
  const [imageSrc, setImageSrc] = useState(null);

  const fetchImage = () => {
    fetch('http://localhost:8080/image')
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
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
      options: ["老愛老愛了", "山無稜 天地合", "除了準備TUV的半夜都很愛", "愛不是用說的", "痾...建議直接連絡[]"]
    },
    {
      question: "第五組是個好團隊嗎",
      options: ["不只是", "肯定是", "是", "基本上是", "痾...請你離開"]
    },
  ];

  return (
    <div className="h-screen">
      <div className="float-left m-4">
        <h2 className="text-2xl font-bold mb-4">描述一下你跟家中長輩的關係</h2>
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="mb-4">
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
          className="bg-blue-500 text-white px-4 py-2"
          onClick={fetchImage}
        >
          生成你的客製化任務卡
        </button>
      </div>
      <div className="flex justify-center items-center h-full">
        {imageSrc && 
          <img 
            src={imageSrc} 
            alt="Fetched from API" 
            className="w-1/3 m-4"
          />
        }
      </div>
    </div>
  );
}

export default CardsPage;
