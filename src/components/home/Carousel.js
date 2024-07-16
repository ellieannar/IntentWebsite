import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomeContent.css'

const ImageCarousel = ({ panels }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? panels.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex === panels.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        selectedItem={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      >
        {panels.map((panel, index) => (
          <div key={index}>
            panel
          </div>
        ))}
      </Carousel>
      <button className="arrow-button left" onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      <button className="arrow-button right" onClick={handleNextClick}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
