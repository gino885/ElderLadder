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

  return (
    <div>
      <h2>Cards</h2>
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2"
        onClick={fetchImage}
      >
        Submit
      </button>
      {imageSrc && <img src={imageSrc} alt="Fetched from API" />}
    </div>
  );
}

export default CardsPage;