import React from 'react';
import './Certificates.css'; // Import the CSS file

import profile from './internship.png'; // Ensure you have this image in the right path
import resumeFile from './cloud virtual internship.pdf'; 

const certificates = [
  {
    image: profile, // Use the imported image variable
    title: 'AWS Certified Cloud Practitioner',
    description: 'Certified AWS Cloud Practitioner. This certification validates the ability to identify and define AWS cloud services and their common use cases. It covers the basics of cloud infrastructure, key services on the AWS platform, security, and architectural best practices. Ideal for those looking to demonstrate an overall understanding of the AWS Cloud.',
    file: resumeFile // Use the imported file variable
  },
  // Add more certificates as needed
];

const Certificate = () => {
  return (
    <div className="certificates-container">
      <h1 className="certificates-heading">Internships</h1>
      {certificates.map((cert, index) => (
        <div key={index} className="certificate-card">
          <img src={cert.image} alt={cert.title} className="certificate-image" />
          <div className="certificate-info">
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-description">{cert.description}</p>
            <a href={cert.file} className="download-button" download>
              Download Certificate
            </a>
          </div>
        </div>
      ))}
      <div className="upload-section">
        <input type="file" className="file-input" />
        <button className="upload-button">Upload Certificate</button>
      </div>
    </div>
  );
};

export default Certificate;
