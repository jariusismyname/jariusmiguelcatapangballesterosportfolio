import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  useScrollAnimation('.contact-section');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Simple form validation & submission
  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Send email via Formspree or similar service (example here)
    // You need to replace with your own Formspree URL or backend API

    try {
      const response = await fetch('https://formspree.io/f/xqalnplr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Try again later.');
      }
    } catch (error) {
      setStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section scroll-hidden">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        {/* Left column - Form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          />

          <button type="submit" className="btn btn-submit">
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>

        {/* Right column - Contact info and social */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Email me directly at{' '}
            <a href="mailto:jmjmjmj160@gmail.com">jmjmjmj160</a>
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ballesteros-jarius-miguel-c-4b7a43277/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://https://github.com/jariusismyname" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a> */}
            <a href="mailto:jmjmjmj160@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
