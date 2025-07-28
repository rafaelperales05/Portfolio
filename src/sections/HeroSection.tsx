import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const heroVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <motion.section 
      id="hero"
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
              backgroundClip: 'text',
              textAlign: 'center'
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
              marginBottom: '2rem',
              fontWeight: '600',
              textAlign: 'center'
            }}
          >
            Electrical & Computer Engineering Student
          </motion.p>
          
          {/* Two-column layout placeholder - will be filled in next step */}
          <motion.div 
            className="hero-two-column"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              marginTop: '3rem'
            }}
          >
            {/* Headshot column */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)' }}>Headshot placeholder - will add in next step</p>
            </div>
            
            {/* About content column */}
            <div>
              <p style={{ color: 'var(--text-secondary)' }}>About content placeholder - will add in next step</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;