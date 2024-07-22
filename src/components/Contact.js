import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";  // Adjust the path as necessary
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing icons


const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_o27boeg",
        "template_lipff7r",
        form.current,
        "PdwUlGHVuo-u2XTpM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="img2">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your name" required />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Your email" required />
        <i>phanindrakondepu@gmail.com</i>
        <label>Message</label>
        <textarea name="message" placeholder="Send description with your email" required />
        <input type="submit" value="Send" className="button2" />
      </form>
      {successMessage && <p>{successMessage}</p>}
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
  );
};

export default Contact;
