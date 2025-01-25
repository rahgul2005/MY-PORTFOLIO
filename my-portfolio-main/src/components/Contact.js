import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-detail">
              <h3>Email</h3>
              <a href="mailto:malarharish007@gmail.com">rahgulsa@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div className="contact-detail">
              <h3>Phone</h3>
              <a href="tel:+919345300628">+91 8122940364</a>
            </div>
          </div>
          
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-detail">
              <h3>Address</h3>
              <p>91, Thasanayakanpalyam,  Vellode, Erode, Tamil Nadu, PIN: 640112</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/harishs-fullstackdeveloper/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Harish-Saravana-Kumar" 
               target="_blank" 
               rel="noopener noreferrer"
               className="social-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
