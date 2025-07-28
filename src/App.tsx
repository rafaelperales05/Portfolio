import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </motion.main>
    </div>
  );
}

export default App;
