// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo-full.png';

const Navbar = () => {
  return (
    <div className='nav-links'>
      <Link to="/" className='nav-link-logo'>
        <img src={logo} alt='Intent logo' />
      </Link>
      <div className='nav-links-right'>
        <Link to="/" className='nav-link-item'>Home</Link>
        <Link to="/about" className='nav-link-item'>About</Link>
        <Link to="/our-solution" className='nav-link-item'>Our Solution</Link>
        <Link to="/contact" className='nav-link-item'>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
