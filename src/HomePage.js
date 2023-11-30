import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import PostsPage from './PostsPage';
import CardsPage from './CardsPage';

<Routes>
  <Route path="/posts" element={<PostsPage />} />
  <Route path="/cards" element={<CardsPage />} />
</Routes>



function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/group5.jpg",
    "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/5-1.jpg",
    "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/5-7.jpg",
    "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/group5-2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 切換圖片的時間間隔（以毫秒為單位）

    return () => clearInterval(interval);
  }, [images.length]); 

  function ImageBoxWithNavigation({ imageUrl, navigateTo }) {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(navigateTo);
    };
    return (
      <div className="group relative m-4" onClick={handleClick}>
        <img src={imageUrl} alt="" className="w-60 h-60 object-cover rounded-lg transition duration-300 ease-in-out group-hover:scale-125" />
      </div>
    );
  
  }
  
  return (
    <div className="relative bg-gray-900">
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover', // Add this line for full display
          backgroundRepeat: 'no-repeat', // Add this line to prevent repetition
          backgroundPosition: 'center', // Center the image
        }}
      >
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-30 transition duration-600">
        <h1 className="text-white text-4xl font-bold custom-font shadow-lg h-full">elderLadder.live</h1>
        </div>
      </div>
      <div className='flex justify-center'>
      <p className=" responsive-text mt-8 text-4xl  text-white custom-font font-semibold">elderLadder 使用四步驟</p>
      </div>
      <div className='flex justify-center '>
      <p className="responsive-text2 mt-8 text-3xl text-white custom-font font-semibold">親近家中長者 領取免費辛巴克</p>
      </div>

      <div className="grid homeGrid justify-items-center mt-3">
      <div className="group relative m-1 flex flex-col items-center justify-center w-full">
      <a href={"https://docs.google.com/forms/d/e/1FAIpQLSekCkEwOXJt32iBUyAYhmC3Rg__daP1vZS99_9vMaHjrxXRvw/viewform?pli=1"} target="_blank" rel="noopener noreferrer">
      <img src={"https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/googleForm.png"} alt="" className="w-60 h-60 object-cover rounded-lg transition duration-300 ease-in-out group-hover:scale-125" />
      </a>
      <div className="flex items-center">
      <p className="additional-text flex text-2xl mt-8 text-white custom-font font-semibold">1.</p>
      <p className="mt-8 text-2xl text-white custom-font font-semibold">填寫前測問卷</p>
      </div>
       </div>
        <div className="flex items-center justify-center w-full">
          <img src="https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/arrow.png" alt="Arrow" className=" h-3/5 responsive-image" /> {/* Arrow image */}
        </div>
        <div className="group relative m-1 flex flex-col items-center justify-center w-full onClick={handleClick}">
        <ImageBoxWithNavigation imageUrl="https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/video.jpg" navigateTo="/posts"  />
        <div className="flex items-center">
       <p className="additional-text flex text-2xl mt-8 text-white custom-font font-semibold">2.</p>
        <p className="mt-8 text-2xl text-white custom-font font-semibold">觀看共學 prototype</p>
        </div>
       </div>
        <div className="group relative m-1 flex flex-col items-center justify-center w-full onClick={handleClick}">
        <ImageBoxWithNavigation className="w-60 h-60 object-cover rounded-lg transition duration-300 ease-in-out group-hover:scale-110" imageUrl="https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/cardIcon.png" navigateTo="/cards" />
        <div className="flex items-center">
       <p className="additional-text flex text-2xl mt-8 text-white custom-font font-semibold">3.</p>
       <p className="mt-8 text-2xl text-white custom-font font-semibold">抽取任務卡片 </p>
       </div>
       <p className="mt-8 text-2xl text-white custom-font font-semibold">與長輩展開對話的第一步</p>
       </div>
       <div className="flex items-center justify-center w-full">
          <img  src="https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/arrow.png" alt="Arrow" className=" h-3/5 responsive-image" /> {/* Arrow image */}
        </div>
       <div className="group relative m-1 flex flex-col items-center justify-center w-full">
       <a href={"https://docs.google.com/forms/d/10jcR4gD4YF0sxWiEi2FU-gq_qCGR5oBDtILhHauneX4/edit"} target="_blank" rel="noopener noreferrer">
      <img src={"https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/form.png"} alt="" className="w-60 h-60 object-cover rounded-lg transition duration-300 ease-in-out group-hover:scale-125" />
      </a>
      <div className="flex items-center">
       <p className="additional-text flex text-2xl mt-8 text-white custom-font font-semibold">4.</p>
      <p className="mt-8 text-2xl text-white custom-font font-semibold">填寫後測問卷 抽星巴克！</p>
      </div>
       </div>
      </div>
      <hr className="border-0 bg-gray-300 h-0.5 mt-4 mb-8" />
      <div className="text-center mt-4 ">
        <h2 className="text-2xl font-semibold text-white custom-font">About</h2>
       
      </div>
      <p className="mt-4 text-2xl text-white text-center  ">This website acts as a ladder, connecting you with the elders</p>
    </div>
    
  );
  
}


export default Home;
