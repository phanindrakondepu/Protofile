import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import {FaInstagram } from 'react-icons/fa';
import profilePic from './phani.jpg'; // Import the image
import { FaLinkedin } from 'react-icons/fa'; // Importing icons


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={profilePic} alt="Profile" /> {/* Use the imported image */}
        <span>Profile</span>
      </div>
      <div className="nav-center">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Certificates" className="nav-link">Certificates</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Internships" className="nav-link">Internships</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
            <a href="https://www.linkedin.com/in/phanindra-kondepu-50167a25a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
        <a href="https://www.instagram.com/phani_online_/" className="nav-link nav-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
