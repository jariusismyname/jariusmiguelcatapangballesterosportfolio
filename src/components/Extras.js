import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Extras.css';

export default function Extras() {
  useScrollAnimation('.extras-section');

  return (
    <section id="extras" className="extras-section scroll-hidden">
      <h2 className="section-title">Extras</h2>
      <div className="extras-container">
        <div className="extras-column">
          <h3>Certifications</h3>
          <ul>
            <li>TESDA NC II in Computer Systems Servicing</li>
            <li>React - The Complete Guide (Udemy)</li>
            <li>Node.js API Development (Coursera)</li>
          </ul>
        </div>
        <div className="extras-column">
          <h3>Interests</h3>
          <ul>
            <li>Building scalable web applications</li>
            <li>Learning new JavaScript frameworks</li>
            <li>Open-source contribution</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
