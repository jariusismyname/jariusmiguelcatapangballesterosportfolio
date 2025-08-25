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
  I am a fresh graduate with a solid foundation in software development and web technologies, experienced in HTML, CSS, JavaScript, React, and familiar with frameworks such as Vue and Angular, as well as Git for version control. I understand the importance of responsive design, accessibility, testing, and debugging, which makes me adaptable to roles in both development and quality assurance. My projects include the <strong>Portfolio for Artist</strong>, a creative platform showcasing artworks and designs through a responsive and interactive UI, and the <strong>Portfolio for Data Analyst</strong>, a professional site that highlights data analysis skills with interactive dashboards and clear visualizations. These projects reflect my ability to combine technical skills with practical applications, and I am eager to apply this mindset to contribute to impactful projects while continuing to grow as a professional in the tech industry.
</p>

      </div>
    </section>
  );
}
