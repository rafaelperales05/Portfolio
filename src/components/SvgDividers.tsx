import React from 'react';
import { motion } from 'framer-motion';

export const WaveDivider: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`svg-divider ${className || ''}`}>
    <motion.svg
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <motion.path
        d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,213.3C672,192,768,160,864,149.3C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </motion.svg>
  </div>
);

export const BlobDivider: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`svg-divider ${className || ''}`}>
    <motion.svg
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.path
        d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.svg>
  </div>
);

export const GeometricDivider: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`svg-divider ${className || ''}`}>
    <motion.svg
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.polygon
        points="0,160 720,0 1440,160 1440,320 0,320"
        fill="currentColor"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      />
    </motion.svg>
  </div>
);

export const ScrollIndicator: React.FC = () => (
  <motion.div 
    className="scroll-indicator"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.6 }}
  >
    <motion.div
      className="scroll-arrow"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M7 10L12 15L17 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        />
      </svg>
    </motion.div>
  </motion.div>
);