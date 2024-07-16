import React from 'react'
import RoundedCornerImage from './RoundedCornerImage'
import { CORNER } from '../../constants'
import worshiping from '../../assets/images/campersWorshiping.jpg';
import guitarPlayer from '../../assets/images/guitarplaying.jpg';

const QuadrantContainer = () => {
  return (
    <div className='quadrant-container'>
        <div className='quadrant'>
          <RoundedCornerImage image={worshiping} corners={[CORNER.top_right]} width='100%' className='quadrant-image' />
        </div>
        <div className='quadrant'>
            <div className='heading'>
                Camp Management Software
            </div>
            <div className='body'>
                Intent is set on making camp management easier through custom camp management solutions, allowing camp professionals to devote resources to other aspects of camp.
            </div>
            
        </div>
        <div className='quadrant'>
          <div className='heading'>
            Get in Touch
          </div>
          <div className='body'>
            Have questions? Interested in joining our beta group?
          </div>
          <a href='mailto:ellieanna@campintent.org' className='contact-button'>
            Contact Us
          </a>
        </div>
        <div className='quadrant'>
          <RoundedCornerImage image={guitarPlayer} corners={[CORNER.bottom_left]} width='100%' className='quadrant-image' />
        </div>
      </div>
  )
}

export default QuadrantContainer
