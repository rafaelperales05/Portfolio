import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const heroVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header 
        className="hero"
        style={{ 
          minHeight: '100vh', 
          paddingTop: '7.5rem', 
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)'
        }}
        initial="initial"
        animate="animate"
        variants={heroVariants}
      >
        <div className="container">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ 
                fontSize: '4rem', 
                marginBottom: '1rem',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Rafael Perales
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ 
                fontSize: '1.5rem', 
                color: 'var(--accent-primary)', 
                marginBottom: '1rem',
                fontWeight: '600'
              }}
            >
              Electrical & Computer Engineering Student
            </motion.p>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{ 
                fontSize: '1.2rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '2rem',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}
            >
              Passionate about data science, machine learning, and building innovative solutions. 
              Currently pursuing my ECE degree at UT Austin while gaining real-world experience in technology and finance.
            </motion.p>
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/projects" 
                  className="btn btn-primary"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontWeight: '600'
                  }}
                >
                  🚀 View My Work
                </Link>
              </motion.div>
              <motion.a 
                href="https://docs.google.com/document/d/1xbEcM3RewD0nwPSV-XJOu06UBAGxmEKQS2x7u8Kd4b0/edit?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: '600'
                }}
              >
                📄 View Resume
              </motion.a>
            </motion.div>

          </div>
        </div>

      </motion.header>
    </motion.div>
  );
};

export default HomePage;