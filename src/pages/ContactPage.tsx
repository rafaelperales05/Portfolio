import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', paddingTop: '80px' }}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;