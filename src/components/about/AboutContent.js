import React from 'react'
import Mission from './Mission'
import Values from './Values'
import Team from './Team'
import campersWorshiping from '../../assets/images/campersWorshiping.jpg'
import './AboutContent.css'

const AboutContent = () => {
  return (
    <div>
        <div className='photo-container'>
            <img src={campersWorshiping} alt='Campers Worshiping' className='about-heading-image'/>
            <div className='photo-overlay'>
            <div className='photo-panel-title'>WHO WE ARE</div>
            <div className='photo-panel-body'>It's why we do what we do.</div>
            </div>
        </div>
      <Mission />
      <Values />
      <Team />
    </div>
  )
}

export default AboutContent
