import React from 'react'
import RoundedCornerImage from './RoundedCornerImage'
import { CORNER } from '../../constants'
import Button from './Button'

const PhotoPanel = ( {image} ) => {
  return (
    <div className='photo-panel'>
        <RoundedCornerImage className='photo-panel-image' image={image} corners={[CORNER.bottom_left, CORNER.bottom_right, CORNER.top_left, CORNER.top_right]}/>
        <div className='photo-panel-text'>
            <div className='photo-panel-header'>Take the Hassle out of Camp Management</div>
            <div className='photo-panel-body'>Reach out to join our beta group or find out more!</div>
            <div className='video-panel-buttons'>
                <Button text={"Beta Group"} link={""} backgroundColor={"black"} textColor={"white"} />
                <Button text={"More Info"} link={""} backgroundColor={"black"} textColor={"white"} />
          </div>
        </div>
    </div>
  )
}

export default PhotoPanel
