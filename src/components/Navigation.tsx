import React, { useState } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Portfolio</a>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li>
            <a href="#home" onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection('about')}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection('projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => scrollToSection('resume')}>
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;