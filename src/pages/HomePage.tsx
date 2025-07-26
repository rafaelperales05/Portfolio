import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollIndicator } from '../components/SvgDividers';
import '../components/Portfolio.css';
import '../components/SvgDividers.css';

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
            >
              John Doe
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I create modern, responsive web applications that deliver exceptional user experiences.
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
                <Link to="/projects" className="btn-primary">
                  View My Work
                </Link>
              </motion.div>
              <motion.a 
                href="/resume.pdf" 
                download 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
        <ScrollIndicator />
      </motion.header>
    </motion.div>
  );
};

export default HomePage;