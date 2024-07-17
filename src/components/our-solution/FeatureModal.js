import React, { useEffect, useState } from 'react';
import './OurSolution.css';
import image from '../../assets/images/happyCampers.jpg';

const FeatureModal = ({ feature, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation by changing the state
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    // First trigger the closing animation
    setIsVisible(false);
    // Then wait for the animation to complete before closing the modal
    setTimeout(onClose, 300); // Match the duration of the CSS transition
  };

  return (
    <div className={`modal-overlay ${isVisible ? 'show' : ''}`} onClick={handleClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content-text'>
          <div className='modal-header'>
            <div className='modal-title'>{feature.title}</div>
            <button className='close-button' onClick={handleClose}>&times;</button>
          </div>
          <p>{feature.details}</p>
          <div className='modal-bullet'>More details coming soon!</div>
        </div>
        <img src={image} alt={feature.title} className='modal-image' />
      </div>
    </div>
  );
};

export default FeatureModal;
