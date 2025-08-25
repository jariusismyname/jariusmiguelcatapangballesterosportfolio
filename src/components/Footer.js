import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-column">
          <h3>About Me</h3>
         <p>
  I am Jarius Miguel C. Ballesteros, a fresh graduate with a strong interest in software development and web technologies. 
  My experience includes building responsive and user-friendly applications using HTML, CSS, JavaScript, and frameworks like React and Angular. 
  I have also developed projects such as an Artist Portfolio and a Data Analyst Portfolio, which highlight my skills in UI design, interactivity, and data presentation. 
  Alongside development, I value clean code, testing, and collaboration, making me adaptable to both development and quality assurance roles. 
  I am eager to continue learning, contribute to meaningful projects, and grow as a professional in the tech industry.
</p>

        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <div className="links"> <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#extras">Extras</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Connect</h3>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/jarius-miguel-ballesteros-4b7a43277/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/jariusismyname" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="mailto:jmjmjmj160@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Jarius Miguel C. Ballesteros. All rights reserved.
      </div>
    </footer>
  );
}
