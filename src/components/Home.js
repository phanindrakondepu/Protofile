import React from 'react';
import './Homepage.css';
import profilePic from './phani.jpg'; // Ensure correct path
import resumeFile from './RESUME_PHANINDRAKONDEPU.pdf';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Left Side - Profile Photo */}
      <div className="photo-container">
        <img src={profilePic} alt="Phanindra Kondepu" className="profile-photo" />
      </div>

      {/* Right Side - Information */}
      <div className="info-container">
        <h2>Hi, I'm <span className="highlight">Phanindra Kondepu</span></h2>
        <p>
          I am a 3rd-year student at KL University, specializing in web development.
          Passionate about creating dynamic and responsive web applications using modern technologies.
        </p>
        
        {/* Skills Section */}
        <h3>Skills</h3>
        <ul>
          <li><strong>Programming:</strong> Java, DSA, C, JavaScript</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Soft Skills:</strong> Communication, Problem-Solving, Adaptability</li>
        </ul>

        {/* Resume Download Button */}
        <a href={resumeFile} className="download-button" download>Download Resume</a>

        {/* Social Media Links */}
        <div className="social-media">
          <a href="https://www.linkedin.com/in/phanindra-kondepu-50167a25a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="https://www.instagram.com/phani_online_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://x.com/Phani_online__" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon twitter" />
          </a>
          <a href="https://www.youtube.com/@PhaniTechSpark123" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
