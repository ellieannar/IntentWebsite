import React from 'react'
import './AboutContent.css'
import TeamMember from './TeamMember'
import Ellieanna from '../../assets/images/ellieanna.png'
import Hakeyom from '../../assets/images/hakyeom.png'
import Abigail from '../../assets/images/abigail.png'

const Team = () => {
  return (
    <div className='team'>
      <div className='team-heading'>Meet the Team</div> 
      <div className='team-member-container'>
        <TeamMember name={"Ellieanna Ross"} photo={Ellieanna} title={"CEO, Founder"} bio={"Ellieanna is the visionary behind our company..."}/>
        <TeamMember name={"Hakyeom Park"} photo={Hakeyom} title={"CFO"} bio={"Hakyeom is the financial genius..."}/>
        <TeamMember name={"Abigail Park"} photo={Abigail} title={"Art Director"} bio={"Abigail brings creativity and artistry..."} />
      </div>
    </div>
  )
}

export default Team
