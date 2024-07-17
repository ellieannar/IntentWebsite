import React from 'react'
import './AboutContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ValueItem = ({ icon, title, body, link }) => {
  return (
    <div className='value-item'>
      <FontAwesomeIcon icon={icon} className='fai' />
      <div className='value-title'> {title} </div>
      <div className='value-body'> {body} </div>
    </div>
  )
}

export default ValueItem
