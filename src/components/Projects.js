import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const projects = [
  {
    title: 'Library Management System',
    description:
      'A full-stack MERN library management system with user authentication, book tracking, and responsive UI.',
    image: '/assets/library.jpg',
    url: 'https://your-library-demo.com',
    repo: 'https://github.com/yourgithub/library-management',
  },
  {
    title: 'Hotel Booking Website',
    description:
      'A sleek hotel booking website built with React and Node.js, featuring dynamic room availability and payment integration.',
    image: '/assets/hotel.png',
    url: 'https://your-hotel-demo.com',
    repo: 'https://github.com/yourgithub/hotel-booking',
  },
  
];

export default function Projects() {
  useScrollAnimation('.project-card');

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title scroll-hidden">Projects</h2>
      <div className="projects-container">
        {projects.map(({ title, description, image, url, repo }, i) => (
          <div className="project-card scroll-hidden" key={i}>
            <img
              src={image}
              alt={`${title} screenshot`}
              className="project-image"
              loading="lazy"
            />
            <div className="project-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-links">
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
                  Live Demo
                </a>
                <a href={repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
