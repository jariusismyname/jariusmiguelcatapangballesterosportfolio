import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  useScrollAnimation('.about-section');

  return (
    <section id="about" className="about-section scroll-hidden">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          I am a passionate web developer with expertise in building modern, scalable, and user-friendly applications using React, Node.js, and the MERN stack. I have hands-on experience working on complex projects such as library management and hotel booking systems. I am a quick learner, detail-oriented, and eager to contribute to your team with my problem-solving skills and creativity.
        </p>
      </div>
    </section>
  );
}
