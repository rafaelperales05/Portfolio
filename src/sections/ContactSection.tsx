import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
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
    <motion.section 
      id="contact"
      className="contact-section"
      style={{ 
        minHeight: '100vh', 
        paddingTop: '7.5rem', 
        background: 'linear-gradient(180deg, rgba(0, 30, 60, 0.05) 0%, var(--bg-primary) 50%, rgba(0, 30, 60, 0.05) 100%)',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ 
            fontSize: '3.5rem', 
            marginBottom: '2rem',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center'
          }}
        >
          📬 Get In Touch
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            I'm always interested in new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div 
          className="social-links"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/rafaelperales2027" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              display: 'inline-block', 
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            🔗 LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/rafaelperales05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              display: 'inline-block', 
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            🐙 GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;