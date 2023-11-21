import React from 'react';
import backgroundimg from './images/ladder1.png'; 
import ITseeds from './images/ITseeds.jpg'; 
function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${backgroundimg})`, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
      className="bg-cover bg-center bg-fixed bg-no-repeat bg-blend-overlay">
     
      <div className="max-w-lg mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        <h2 className="mb-80 text-2xl font-extrabold text-gray-900">Title</h2>

        <p className="mb-80 text-gray-500">Your description goes here.</p>

      </div>
    </div>
  );
}

export default Home;