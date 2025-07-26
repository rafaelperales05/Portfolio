import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActivePage = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
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
          <Link to="/">RP</Link>
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
          {navigationItems.map((item) => (
            <motion.li 
              key={item.path}
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
                <Link 
                  to={item.path} 
                  onClick={closeMenu}
                  className={isActivePage(item.path) ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;