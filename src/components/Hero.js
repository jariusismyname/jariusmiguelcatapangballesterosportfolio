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
          text={['Vue Developer', 'React Specialist',"Svelte Enthusiast", 'Front End Engineer']}
          speed={80}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={1000}
          cursor="_"
          className="typing-text"
        />
       <div className="hero-description">
  <p>
    I am a fresh graduate with a solid foundation in software development and a strong interest in creating reliable and user-focused digital solutions. 
    My journey began with building small projects using HTML, CSS, and JavaScript, which gave me hands-on experience with the fundamentals of programming 
    and sparked my passion for applying technology to solve real problems.
  </p>
  <p>
    As I grew, I explored modern frameworks such as React, Vue, and Angular, gained familiarity with Git for version control, and learned the importance 
    of responsive design, accessibility, testing, and debugging. These experiences not only improved my technical skills but also taught me how to work 
    effectively in collaborative environments, ensuring that projects are both functional and user-friendly.
  </p>
  <p>
    I am eager to continue growing as a professional in the tech industry, whether in software development, quality assurance, or related roles. 
    With adaptability, curiosity, and a strong work ethic, I aim to contribute to meaningful projects while continuously learning and improving my skills 
    to deliver high-quality results.
  </p>
</div>

        <a
          href="/assets/CV.pdf"
          download
          className="btn btn-download-cv"
          aria-label="Download CV"
        >
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
