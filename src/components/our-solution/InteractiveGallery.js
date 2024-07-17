import React, { useState } from 'react';
import './OurSolution.css';

const galleryImages = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

const InteractiveGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className='interactive-gallery'>
      <h2>Gallery</h2>
      <div className='gallery-container'>
        <button onClick={prevImage} className='gallery-button'>Previous</button>
        <img src={galleryImages[currentImage]} alt='Gallery' className='gallery-image' />
        <button onClick={nextImage} className='gallery-button'>Next</button>
      </div>
    </div>
  );
};

export default InteractiveGallery;
