import React from 'react';
import { motion } from 'framer-motion';
import '../components/Portfolio.css';

const AboutPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="about-section"
        style={{ minHeight: '100vh', paddingTop: '120px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}
          >
            About Me
          </motion.h1>
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I'm a passionate full-stack developer with 3+ years of experience creating 
                web applications that solve real-world problems. I love working with modern 
                technologies and am always eager to learn new tools and frameworks.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source projects, 
                writing technical blog posts, or exploring the latest trends in web development.
              </p>
              <p>
                My journey in tech started with curiosity about how websites work, and it has 
                evolved into a deep passion for creating intuitive, performant, and accessible 
                web experiences. I believe in writing clean, maintainable code and following 
                best practices to deliver high-quality solutions.
              </p>
            </motion.div>
            <motion.div 
              className="skills"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Technical Skills</h3>
              <motion.div 
                className="skill-tags"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {["JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "REST APIs", "GraphQL"].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(74, 144, 226, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ marginTop: '2rem' }}
              >
                <h3>What I Do</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
                    <strong>Frontend Development:</strong> Creating responsive, interactive user interfaces with React, Vue, and modern CSS
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
                    <strong>Backend Development:</strong> Building robust APIs and server-side applications with Node.js, Python, and databases
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
                    <strong>Full-Stack Solutions:</strong> End-to-end application development from concept to deployment
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;