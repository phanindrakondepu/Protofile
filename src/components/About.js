import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            {/* Profile Photo */}
          

            {/* Skills Section */}
            <div className="about-section">
                <h2>Skills</h2>
                <p><span className="highlight">Programming Languages:</span> Java, DSA, C, JavaScript</p>
                <p><span className="highlight">Databases:</span> MySQL, MongoDB</p>
                <p><span className="highlight">Soft Skills:</span> Communication, collaboration, adaptability, problem-solving, fluency in English.</p>
            </div>

            {/* Project Experience */}
            <div className="about-section">
                <h2>Project Experience</h2>
                <p><span className="highlight">Online Job Portal</span>  - Dec 2023–May 2024</p>
                <p>Technologies: React.js, Node.js, MongoDB</p>
                <ul>
                    <li>Admin manages recruiter and user records with full CRUD capabilities.</li>
                    <li>Recruiters post jobs, review applications, and manage listings.</li>
                    <li>Users explore job opportunities, apply, and track application progress.</li>
                </ul>

                <p><span className="highlight">Online Banking System</span>- June 2024–Aug 2024</p>
                <p>Technologies: JSP, JBoss, MySQL</p>
                <ul>
                    <li>Developed a web application for core banking operations.</li>
                    <li>Designed a dashboard for users to send money, check balances, and apply for loans.</li>
                    <li>Admin dashboard for approving accounts and managing users.</li>
                </ul>
            </div>

            {/* Internships */}
            <div className="about-section">
                <h2>Internships</h2>
                <p><span className="highlight">AWS Cloud Virtual Internship</span> - Remote</p>
                <ul>
                    <li>Gained hands-on experience with cloud infrastructure and deployment.</li>
                    <li>Implemented cloud-based solutions and security models.</li>
                </ul>
            </div>

            {/* Achievements */}
            <div className="about-section">
                <h2>Achievements</h2>
                <p><span className="highlight">AI Autonomous Hackathon</span> - Feb 2025</p>
                <p>Ranked 5th among participating teams by successfully improving and completing 5 out of 11 projects.</p>

                <p><span className="highlight">Codeathon Finalist</span> - KL University</p>
                <p>Secured Rank 31 in iamneo Codeathon, demonstrating strong problem-solving and algorithmic skills.</p>
            </div>

            {/* Certifications */}
            <div className="about-section">
                <h2>Certifications</h2>
                <p><span className="highlight">Red Hat EX183</span> </p>
                <p><span className="highlight">AWS Certified Cloud Practitioner</span> </p>
                <p><span className="highlight">Blockchain by Fintech</span> </p>
            </div>

            {/* Contact Button */}
            <a href="your-linkedin-url" className="about-button">Connect on LinkedIn</a>
        </div>
    );
};

export default About;
