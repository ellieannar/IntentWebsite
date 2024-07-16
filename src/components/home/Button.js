import React from 'react';
import './HomeContent.css'; // Ensure you import the CSS

const Button = ({ text, backgroundColor, textColor }) => {
  const customStyles = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderColor: backgroundColor // Ensure the border color matches the background
  };

  const hoverStyles = {
    backgroundColor: textColor,
    color: backgroundColor,
    borderColor: textColor // Ensure the border color matches the hover background
  };

  return (
    <div
      className='generic-button'
      style={customStyles}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, customStyles);
      }}
    >
      {text}
    </div>
  );
};

export default Button;
