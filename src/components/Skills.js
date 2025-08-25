import React from 'react';
import { FaReact,  FaVuejs, FaAngular, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';
import { SiSvelte } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }); // 👈 extend bottom margin

const skills = [
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
  {
    icon: <FaReact />,
    name: 'React',
    description: 'Building dynamic and responsive UI components with React.js.',
  },
  {
    icon: <SiNextdotjs />,
    name: 'Next.js',
    description: 'Server-side rendering and static site generation with Next.js.',
  },
  {
    icon: <FaVuejs />,
    name: 'Vue.js',
    description: 'Creating interactive web applications with Vue.js.',
  },
  {
    icon: <FaAngular />,
    name: 'Angular',
    description: 'Building robust single-page applications with Angular.',
  },
  {
    icon: <SiSvelte />,
    name: 'Svelte',
    description: 'Crafting high-performance web apps with Svelte.',
  },
  {
    icon: <SiTypescript />,
    name: 'TypeScript',
    description: 'Enhancing JavaScript with static typing using TypeScript.',
  },
  {
    icon: <FaGitAlt />,
    name: 'Git',
    description: 'Version control and collaboration using Git and GitHub.',
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
