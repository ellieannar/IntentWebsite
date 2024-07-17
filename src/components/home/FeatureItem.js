import React from 'react';
import './HomeContent.css'; // Assuming this is the correct CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureItem = ({ icon, title, body, image, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick function passed from parent
    }
  };

  return (
    <div className='feature-item' onClick={handleClick}>
      {image && <img src={image} alt={title} className='feature-image' />}
      <FontAwesomeIcon icon={icon} className='fai' />
      <div className='feature-title'>{title}</div>
      <div className='feature-body'>{body}</div>
    </div>
  );
}

export default FeatureItem;
