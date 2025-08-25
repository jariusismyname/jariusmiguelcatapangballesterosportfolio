import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty('--bg', '#121212');
      document.documentElement.style.setProperty('--bg-alt', '#1e1e1e');
      document.documentElement.style.setProperty('--card-bg', '#292929');
      document.documentElement.style.setProperty('--text', '#e0e0e0');
      document.documentElement.style.setProperty('--highlight', '#ff6f61');
      document.documentElement.style.setProperty('--btn-bg-hover', '#ff4b3e');
      document.documentElement.style.setProperty('--shadow', 'rgba(0,0,0,0.8)');
    } else {
      document.documentElement.style.setProperty('--bg', '#f5f5f5');
      document.documentElement.style.setProperty('--bg-alt', '#ffffff');
      document.documentElement.style.setProperty('--card-bg', '#e0e0e0');
      document.documentElement.style.setProperty('--text', '#1a1a1a');
      document.documentElement.style.setProperty('--highlight', '#0077cc');
      document.documentElement.style.setProperty('--btn-bg-hover', '#005fa3');
      document.documentElement.style.setProperty('--shadow', 'rgba(0,0,0,0.2)');
    }
  }, [darkMode]);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close menu after click
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav-container">
        <a href="#hero" className="logo" onClick={handleNavClick}>
          Jarius Miguel Ballesteros The Developer
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#extras" onClick={handleNavClick}>Extras</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            className="dark-mode-toggle"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(prev => !prev)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
