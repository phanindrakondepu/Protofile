import React from 'react';
import './Certificates.css'; // Import the CSS file

import awsImage from './cloud.png'; // Ensure you have this image in the correct path
import awsCertificateFile from './AWS Certified Cloud Practitioner certificate.pdf';

import azureImage from './redhat.png'; // Ensure you have this image in the correct path
import azureCertificateFile from './Red_Hat_Certified_Enterprise_Application_Developer_Badge20241005-8-778gzs.pdf';


import azureImage1 from './salesforce.png'; // Ensure you have this image in the correct path
import azureCertificateFile1 from './cloud virtual internship.pdf';

const certificates = [
  {
    image: awsImage, // AWS Certificate image
    title: 'AWS Certified Cloud Practitioner',
    description: 'Certified AWS Cloud Practitioner. This certification validates the ability to identify and define AWS cloud services and their common use cases. It covers the basics of cloud infrastructure, key services on the AWS platform, security, and architectural best practices. Ideal for those looking to demonstrate an overall understanding of the AWS Cloud.',
    file: awsCertificateFile, // AWS certificate file
  },
  {
    image: azureImage, // Azure Certificate image
    title: 'Redhat',
    description: 'Red Hat Certified Specialist in Containers and Kubernetes.This certification validates expertise in managing and orchestrating containerized applications using Podman, Buildah, and Kubernetes. It covers essential skills such as creating and deploying container images, managing Kubernetes resources, implementing persistent storage, and enforcing container security. Ideal for IT professionals looking to demonstrate proficiency in containerization and Kubernetes orchestration in enterprise environments.',
    file: azureCertificateFile, // Azure certificate file
  },
  {
    image: azureImage1, // Azure Certificate image
    title: 'salesforce',
    description: 'This certification validates the ability to manage and configure Salesforce applications, focusing on key functionalities such as user management, automation processes, security settings, and reporting. It covers essential skills for customizing the Salesforce platform to meet business needs, including managing data, automation, and dashboards. Ideal for individuals seeking to demonstrate proficiency in administering Salesforce environments and optimizing workflows within the platform.',
    file: azureCertificateFile1, // Azure certificate file
  },
];

const Certificate = () => {
  return (
    <div className="certificates-container">
      <h1 className="certificates-heading">Certificates</h1>
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
    </div>
  );
};

export default Certificate;
