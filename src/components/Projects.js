import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const projects = [
  {
  title: 'Portfolio for Artist',
  description:
    'A creative personal portfolio designed to showcase artworks, digital designs, and other creative projects in a visually expressive and engaging way. The site features a clean and responsive layout that highlights artistic work while maintaining smooth navigation and performance. Built with modern web technologies, this project demonstrates not only UI design and frontend development skills but also the ability to translate a personal brand into a professional online presence. It reflects strong attention to detail, creativity in layout design, and the use of interactive elements to enhance user experience, making it an effective platform for presenting visual art to a wider audience.',
  image: '/assets/artist.jpg',
  url: 'https://graphicartz.vercel.app/',
  repo: 'https://github.com/jariusismyname/graphicartz.git',
},
{
  title: 'Portfolio for Data Analyst',
  description:
    'A professional portfolio tailored for a data analyst, designed to highlight analytical skills, technical expertise, and project experience in data visualization and reporting. The site showcases interactive charts, dashboards, and case studies, allowing potential employers and clients to see practical applications of data analysis in action. Built with a focus on clarity, responsiveness, and performance, this project demonstrates proficiency in web development as well as the ability to communicate insights effectively through design and interactivity. It serves as a comprehensive platform to present technical projects, analytical thinking, and problem-solving skills in a professional and employable manner.',
  image: '/assets/dataanalyst.jpg',
  url: 'https://dataanalystportfolio-delta.vercel.app/',
  repo: 'https://github.com/jariusismyname/dataanalystportfolio.git',
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
