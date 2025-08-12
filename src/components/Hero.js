import React from 'react';
import TypingAnimation from './TypingAnimation';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content scroll-hidden">
        <h1>Hello, I'm Jarius Miguel C. Ballesteros</h1>
        <TypingAnimation
          text={['Web Developer', 'React Specialist', 'MERN Stack Engineer']}
          speed={80}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={1000}
          cursor="_"
          className="typing-text"
        />
        <a href="/assets/CV.pdf" download className="btn btn-download-cv" aria-label="Download CV">
          Download CV
        </a>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/profile.png`}
        alt="Jarius Miguel Profile"
        className="hero-profile-pic scroll-hidden"
      />
    </section>
  );
}
