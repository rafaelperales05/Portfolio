import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <motion.section 
      id="contact"
      className="contact-section"
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
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            fontSize: '3.5rem', 
            marginBottom: '3rem',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center'
          }}
        >
          📞 Contact
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            marginBottom: '3rem', 
            color: 'var(--text-primary)'
          }}
        >
          Contact content will be migrated from Contact component in next steps
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ContactSection;