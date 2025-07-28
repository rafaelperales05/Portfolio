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
        background: `
          linear-gradient(
            180deg,
            var(--bg-primary) 0%,
            var(--bg-primary) 60%,
            rgba(0, 30, 60, 0.1) 100%
          ),
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.1) 0%,
            transparent 20%,
            transparent 80%,
            rgba(0, 0, 0, 0.05) 100%
          )
        `,
        color: 'var(--text-primary)',
        position: 'relative' as const
      }}
      initial="initial"
      animate="animate"
      variants={heroVariants}
    >
      <div className="container">
        <div className="hero-content">
          
          {/* Two-column layout with headshot and about content */}
          <motion.div 
            className="hero-two-column"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              marginTop: '4rem',
              maxWidth: '1200px',
              margin: '4rem auto 0'
            }}
          >
            {/* Headshot column */}
            <motion.div 
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.img
                src="/Images/IMG_3878.jpeg"
                alt="Rafael Perales"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid var(--accent-primary)',
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
                  margin: '0 auto 2rem'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' 
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Name and title under headshot */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                style={{ 
                  fontSize: '3rem', 
                  marginBottom: '0.5rem',
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
                transition={{ delay: 1.2, duration: 0.6 }}
                style={{ 
                  fontSize: '1.3rem', 
                  color: 'var(--accent-primary)', 
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}
              >
                Electrical and Computer Engineering Student at UT Austin Focuing on Data Science
              </motion.p>
              
              {/* Contact links under headshot */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                style={{ 
                  fontSize: '1rem', 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  alignItems: 'center'
                }}
              >
                <span>📧 rafaperales1229@gmail.com</span>
                <span>📱 (956) 203-4369</span>
              </motion.div>
            </motion.div>
            
            {/* About content column */}
            <motion.div 
              style={{ textAlign: 'left' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 style={{ 
                color: 'var(--accent-primary)', 
                fontSize: '2rem', 
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>
                About Me
              </h3>
              
              <div style={{ color: 'var(--text-primary)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  I'm an electrical and computer engineering student at UT Austin with a focus on data science. 
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  During high school and some of college, I spent years working in restaurants and bars. 
                  Those experiences taught me resilience, adaptability, and the value of hard work under pressure. 
                  While it might seem unrelated to engineering, that foundation of grit and determination has been invaluable in my technical career.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  My coding journey began with very limited knowledge, but I've grown dramatically since those early days. 
                  One of my first projects was my <a href="https://youtu.be/C3qR12QKr7w" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}> ECE 319K project - Retro Bowl remake</a> 
                  – looking back, it was pretty rough, but it represents how far I've come.
                  The real turning point came during my Capital One internship, where I realized how different models and ML techniques could be applied to real-world problems.
                </p>
              </div>

              {/* Action buttons */}
              <motion.div 
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}
              >
                <motion.button
                  onClick={() => {
                    const element = document.querySelector('#projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    color: 'var(--text-primary)',
                    fontWeight: '600'
                  }}
                >
                  🚀 View My Work
                </motion.button>
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;