import React from 'react';
import './App.css';
function Home() {
  const backgroundimg = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/ladder2.png";
  const cloud = "https://elasticbeanstalk-ap-southeast-2-617849466687.s3.ap-southeast-2.amazonaws.com/images/cloud.jpg";
  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
   
    <div 
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat bg-blend-overlay"
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundColor: 'rgba(100, 100, 100, 0.5)'
      }}
    >
       <div className="text-center py-4" style={{cloud: `url(${cloud})`, backgroundSize: 'cover'}}>
          <h2 className="text-3xl font-extrabold text-gray-900 inline-block bg-white bg-opacity-50 px-4 text-shadow">
            ElderLadder - the ladder leads you to the elder
          </h2>
        </div>
     
      <div className="max-w-lg mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="mb-80 text-gray-500">Y.</p>
      </div>
    </div>
  </div>
  );
}

export default Home;