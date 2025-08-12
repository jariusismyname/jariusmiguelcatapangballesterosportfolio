import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const skills = [
  {
    icon: <FaReact />,
    name: 'React',
    description: 'Building dynamic and responsive UI components with React.js.',
  },
  {
    icon: <FaNodeJs />,
    name: 'Node.js',
    description: 'Developing scalable backend APIs using Node.js and Express.',
  },
  {
    icon: <FaDatabase />,
    name: 'MongoDB',
    description: 'Designing efficient NoSQL databases with MongoDB.',
  },
  {
    icon: <FaGitAlt />,
    name: 'Git',
    description: 'Version control and collaboration using Git and GitHub.',
  },
  {
    icon: <FaHtml5 />,
    name: 'HTML5',
    description: 'Semantic and accessible markup with HTML5.',
  },
  {
    icon: <FaCss3Alt />,
    name: 'CSS3',
    description: 'Crafting modern and responsive layouts using CSS3.',
  },
];

export default function Skills() {
  useScrollAnimation('.skill-card');

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title scroll-hidden">Skills</h2>
      <div className="skills-container">
        {skills.map(({ icon, name, description }, i) => (
          <div className="skill-card scroll-hidden" key={i}>
            <div className="skill-icon">{icon}</div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
