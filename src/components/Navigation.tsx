import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { anchor: '#hero', label: 'Home' },
    { anchor: '#projects', label: 'Projects' },
    { anchor: '#resume', label: 'Resume' },
    { anchor: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <button onClick={() => scrollToSection('#hero')} style={{ background: 'none', border: 'none', color: 'inherit', fontSize: 'inherit', cursor: 'pointer', fontWeight: '600' }}>Rafael Perales</button>
        </motion.div>
        
        <motion.button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </motion.button>

        <motion.ul 
          className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            },
            closed: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
              }
            }
          }}
        >
          {navigationItems.map((item, index) => (
            <motion.li 
              key={index}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 1, y: 0 }
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  color: "#4a90e2"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button 
                  onClick={() => scrollToSection(item.anchor)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    fontSize: 'inherit', 
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  {item.label}
                </button>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;