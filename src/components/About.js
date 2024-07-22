import React from 'react';
import profilePhoto from './phani.jpg'; // Ensure you have a profile photo in the same directory
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>Hello! I'm <strong>Phanindra Kondepu</strong>, a passionate web developer currently in my 3rd year at <strong>KL University</strong>.</p>
        <p>Specializing in creating dynamic and efficient web applications, I am always eager to learn and explore new technologies.</p>
        <h2>Education</h2>
        <p><strong>Bachelor's in B.Tech</strong>, KL University (Expected Graduation: 2026)</p>
        <h2>Skills</h2>
        <ul>
          <li><strong>Web Development:</strong> Proficient in HTML, CSS, JavaScript, and modern frameworks like React,Spring Boot,.</li>
          <li><strong>Backend Development:</strong> Experience with Java, JSP, Servlets,MongoDB and SQL.</li>
          <li><strong>Cloud Computing:</strong> Certified AWS Cloud Practitioner.</li>
        </ul>
        <h2>Internships</h2>
        <p>Completed a cloud virtual internship at AICTE portal.</p>
        <h2>Certifications</h2>
        <p><strong>AWS Cloud Practitioner:</strong> Acquired global certification in AWS Cloud Practitioner.</p>
        <h2>Projects</h2>
        <ul>
          <li><strong>Banking Application:</strong> Developed a banking application with functionalities like user signup, login, fund transfer, and balance retrieval.Front-End Technologie
JavaServer Pages (JSP) used for creating dynamic web pages that
interact with the backend.JavaServer Faces (JSF) utilized for
building component-based user interfaces for the web
application.Back-End :
Back-End :
SQL,Used to create and manage database schemas, as well as
perform CRUD operations on the data.
Server:JBoss ,Used as the application server to deploy and
manage the banking application</li>
          <li><strong>Online Job Portal:</strong> Developed a online Job portal Frontend Development (React):
Implemented a modern and user-friendly interface using React,
leveraging components, hooks, and state management to ensure
a smooth user experience.
Backend Development (MongoDB, Express, Node.js):
Designed a robust backend using Node.js and Express to handle
server-side logic and API endpoints.
</li>
        </ul>
        <h2>Contact</h2>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/phanindra-kondepu-50167a25a/" target="_blank" rel="noopener noreferrer">Phanindra Kondepu</a></p>
        <p><strong>Email:</strong> [phanindrakondepu@gmail.com]</p>
      </div>
      <div className="about-photo">
        <img src={profilePhoto} alt="Phanindra" />
      </div>
    </div>
  );
};

export default About;
