import React from 'react'
import './HomeContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FeatureItem = ({icon, title, body, link}) => {
    //TODO: Make this link to something
  return (
    <div className='feature-item'>
        <FontAwesomeIcon icon={icon} className='fai'/>
        <div className='title'> {title} </div>
        <div className='body'> {body} </div>
    </div>
  )
}

export default FeatureItem;
