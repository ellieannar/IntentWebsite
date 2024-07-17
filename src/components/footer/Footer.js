import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <h2 className='footer-title'>About Us</h2>
          <p>Intent provides comprehensive solutions to streamline camp operations, simplifying management and enhancing the camp experience for directors and attendees alike.</p>
        </div>
        <div className='footer-section links'>
          <h2 className='footer-title'>Quick Links</h2>
          <ul>
          <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/our-solution'>Our Solution</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-section contact'>
          <h2 className='footer-title'>Contact Us</h2>
          <p>Email: ellieanna@campintent.org</p>
          {/* <p>Phone: (123) 456-7890</p> */}
          <div className='social-icons'>
            <a href='https://facebook.com/campintent' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href='https://www.instagram.com/camp.intent/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://linkedin.com/company/campintent' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© Intent 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
