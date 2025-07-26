import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';

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

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Vue, and modern CSS. Focus on performance, accessibility, and user experience."
    },
    {
      icon: "⚙️",
      title: "Backend Development", 
      description: "Building robust APIs and server-side applications with Node.js, Python, and databases. Emphasis on scalability and security."
    },
    {
      icon: "🚀",
      title: "Full-Stack Solutions",
      description: "End-to-end application development from concept to deployment. Integrating frontend and backend seamlessly."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* What I Do Section */}
          <motion.div 
            className="what-i-do"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>What I Do</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="service-icon">{service.icon}</span>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div 
            className="quote-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="quote-text">
              Code is like humor. When you have to explain it, it's bad.
            </p>
            <p className="quote-author">- Cory House</p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;