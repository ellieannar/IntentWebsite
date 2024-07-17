import React from 'react'
import './AboutContent.css'

const TeamMember = ({ name, photo, title, bio }) => {
  return (
    <div className='team-member-item'>
      <img src={photo} alt={name} className='team-member-photo'/>
      <div className='team-member-info'>
        <h3 className='team-member-name'>{name}</h3>
        <p className='team-member-title'>{title}</p>
        <p className='team-member-bio'>{bio}</p>
      </div>
    </div>
  )
}

export default TeamMember
