// src/components/ui/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import '../../styles/Navbar.css'; // make sure this path is correct

const Navbar = () => {
  return (
    <div className='navl'>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Skillware4u Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="active">HOME</Link></li>
        <li><Link to="#about">ABOUT</Link></li>
        <li><Link to="#services">SERVICES</Link></li>
        <li><Link to="#process">PROCESS</Link></li>
        <li><Link to="#projects">LATEST PROJECTS</Link></li>
        <li><Link to="#blogs">BLOGS</Link></li>
        <li><Link to="#contact">CONTACT</Link></li>
      </ul>
    </nav></div>
  );
};

export default Navbar;
