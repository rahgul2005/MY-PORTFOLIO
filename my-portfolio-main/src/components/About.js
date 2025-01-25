import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am an aspiring Full Stack Developer currently pursuing B.Tech in AI & DS at Sri Eshwar College of Engineering, Coimbatore. 
            With a strong foundation in MERN stack technologies and a passion for creating dynamic, responsive web applications, 
            I am eager to contribute to innovative projects in a fast-paced tech environment.
          </p>
          <div className="contact-info">
            <p><strong>Address:</strong> 91, Thasanayakanpalyam,  Vellode, Erode, Tamil Nadu, PIN: 640112</p>
            <p><strong>Email:</strong> rahgulsa@gmail.com</p>
            <p><strong>Phone:</strong> +91 8122940364 </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
