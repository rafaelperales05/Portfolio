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
      icon: "📊",
      title: "Data Science & Analytics",
      description: "Building machine learning models and performing data analysis using Python, scikit-learn, and Snowflake. Focus on extracting insights from large datasets."
    },
    {
      icon: "⚡",
      title: "Embedded Systems", 
      description: "Developing hardware-software solutions using C/C++ for microcontrollers, including PCB design with KiCAD and system integration."
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Working with AWS services, Docker containerization, and modern development workflows. Experience with enterprise-scale data platforms."
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
        style={{ 
          minHeight: '100vh', 
          paddingTop: '7.5rem', 
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)'
        }}
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
              style={{ color: 'var(--text-primary)' }}
            >
              <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                I'm an electrical and computer engineering student at UT Austin with a focus on data science. 
                My journey to where I am today hasn't been conventional, but every step has shaped who I've become as both a person and an engineer.
              </p>
              <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Before discovering my passion for technology, I spent years working in restaurants and bars. 
                Those experiences taught me resilience, adaptability, and the value of hard work under pressure. 
                While it might seem unrelated to engineering, that foundation of grit and determination has been invaluable in my technical career.
              </p>
              <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                My coding journey began with very limited knowledge, but I've grown dramatically since those early days. 
                One of my first projects was a <a href="https://youtu.be/C3qR12QKr7w" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>Retro Bowl remake</a> 
                – looking back, it was pretty rough, but it represents how far I've come professionally. 
                The real turning point came during my Capital One internship, where I realized how powerful technology can be in solving real-world problems.
              </p>
            </motion.div>
            
            <motion.div 
              className="skills resume-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="resume-card-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Technical Skills</h3>
              <motion.div 
                className="skill-tags"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem',
                  justifyContent: 'center'
                }}
              >
                {["C", "C++", "SQL", "Python",  "Machine Learning", "Snowflake", "Docker", "Git", "AWS", "GenAI", "Excel", "Powerpoint"].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(0, 212, 255, 0.1)',
                      border: '1px solid var(--accent-primary)',
                      borderRadius: '20px',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
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
            <h3 className="resume-section-title">What I Do</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="resume-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{ textAlign: 'center' }}
                >
                  <span className="service-icon" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{service.icon}</span>
                  <h4 className="resume-card-title">{service.title}</h4>
                  <p className="resume-card-description">{service.description}</p>
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
             Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own. - Matthew 6:34
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;