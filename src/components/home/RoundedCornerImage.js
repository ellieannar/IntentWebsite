import React from "react";
import { CORNER } from "../../constants";
import './HomeContent.css'

const RoundedCornerImage = ({ image, corners, width, className }) => {
  // Function to generate CSS styles for rounded corners based on corners array
  const getBorderStyle = () => {
    let style = '';
    if (corners.includes(CORNER.top_left)) {
      style = `${style} 90px`;
    } else {
        style = `${style} 0px`
    }
    if (corners.includes(CORNER.top_right)) {
      style = `${style} 90px`;
    } else {
        style = `${style} 0px`
    }
    if (corners.includes(CORNER.bottom_right)) {
      style = `${style} 90px`;
    } else {
        style = `${style} 0px`
    }
    if (corners.includes(CORNER.bottom_left)) {
      style = `${style} 90px`;
    } else {
        style = `${style} 0px`
    }

    return style;
  };

  return (
  
      <img src={image} alt='campers worshiping with raised hands' className={className} width={width} style={{ borderRadius: getBorderStyle()}}/>

  );
};

export default RoundedCornerImage;
