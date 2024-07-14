import React from 'react';
import './HomeContent.css';
import RoundedCornerImage from './RoundedCornerImage';
import { CORNER } from '../../constants';
import worshiping from '../../assets/images/campersWorshiping.jpg';
import guitarPlayer from '../../assets/images/guitarplaying.jpg';
import hiking from '../../assets/images/hiking.jpg';

const HomeContent = () => {
  const videoUrl = process.env.PUBLIC_URL + '/videos/intentBanner.mp4';

  return (
    <div>
      <video muted autoPlay loop width="100%">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='quadrant-container'>
        <div className='quadrant'>
          <RoundedCornerImage image={worshiping} corners={[CORNER.top_right]} width='100%' className='quadrant-image' />
        </div>
        <div className='quadrant'></div>
        <div className='quadrant'>
            <div className='heading'>
                Camp Management Software
            </div>
            <div className='body'>
                Intent is set on making camp management easier through custom camp management solutions, allowing camp professionals to devote resources to other aspects of camp.
            </div>
            
        </div>
        <div className='quadrant'>
          <RoundedCornerImage image={guitarPlayer} corners={[CORNER.bottom_left]} width='100%' className='quadrant-image' />
        </div>
      </div>
      <RoundedCornerImage image={hiking} corners={[]} width='100%'/>
    </div>
  );
};

export default HomeContent;
