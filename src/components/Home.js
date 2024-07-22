import React from 'react';
import './Homepage.css';
import profilePic from './phani.jpg'; // Ensure you have this image in the right path
import resumeFile from './RESUME_PHANINDRAKONDEPU.pdf'; // Ensure you have this file in the right path
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing icons

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="profile-container">
        <img src={profilePic} alt="Phanindra Kondepu" className="profile-pic" />
        <div className="profile-info">
          {/* <h1>My Profile</h1> Updated heading */}
          <h2>Hi, I'm Phanindra Kondepu</h2>
          <p>
            I am a 3rd-year student at KL University, specializing in web development.
            I am passionate about creating dynamic and responsive web applications and
            enjoy working with modern technologies to solve real-world problems.
          </p>
          <a href={resumeFile} className="download-button" download>
            Download Resume
          </a>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/phanindra-kondepu-50167a25a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.instagram.com/phani_online_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://x.com/Phani_online__" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@PhaniTechSpark123" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
