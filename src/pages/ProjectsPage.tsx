import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Credit Card Forecasting ML Model",
      description: "Built machine learning models for credit card statement-level metrics forecasting at Capital One. Improved model R² by 20% and decreased monthly relative mean error by 10%.",
      technologies: ["Python", "scikit-learn", "Snowflake", "SQL", "Jupyter Notebooks"],
      githubUrl: "#",
      liveUrl: "#",
      category: "datascience"
    },
    {
      id: 2,
      title: "YouTube/Reddit Comment Sentiment Analysis",
      description: "Engineered MLOps sentiment pipeline using DVC, NLTK, and LightGBM (78% accuracy), with MLflow tracking and automated model promotion to staging. Deployed Flask API and Chrome extension for real-time analysis with interactive visualizations.",
      technologies: ["Python", "DVC", "NLTK", "LightGBM", "MLflow", "Flask", "Chrome Extension", "Docker", "AWS", "CI/CD"],
      githubUrl: "https://github.com/rafaelperales05/Comment-Sentiment-Analysis",
      liveUrl: "#",
      category: "datascience"
    },
    {
      id: 3,
      title: "Retro Bowl Remake",
      description: "Recreation of the popular football game on MSMP0+ microcontroller hardware using embedded C programming. Features PCB design, joystick controls, LED displays, and sound generation. (wasn't using git at the time :())",
      technologies: ["C", "KiCAD", "Embedded Systems", "Hardware Design", "State Machines"],
      githubUrl: "#",
      liveUrl: "https://youtu.be/C3qR12QKr7w",
      category: "hardware"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript featuring dark theme, smooth animations, and multi-page navigation. Showcases personal projects and professional experience.",
      technologies: ["React", "TypeScript", "Framer Motion", "React Router", "CSS3"],
      githubUrl: "https://github.com/rafaelperales05/Portfolio",
      liveUrl: "#",
      category: "frontend"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'datascience', label: 'Data Science' },
    { id: 'hardware', label: 'Hardware' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
        className="projects-section" 
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
            className="resume-section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              textAlign: 'center', 
              fontSize: '3.5rem', 
              marginBottom: '1rem',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            🚀 My Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              textAlign: 'center', 
              fontSize: '1.2rem', 
              marginBottom: '3rem', 
              color: 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2rem'
            }}
          >
            A showcase of my recent work and personal projects
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="resume-card"
                variants={fadeInUp}
                layout
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-content">
                  <motion.h3
                    className="resume-card-title"
                    whileHover={{ color: "var(--accent-primary)" }}
                    transition={{ duration: 0.2 }}
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="resume-card-description" style={{ color: 'var(--text-primary)' }}>{project.description}</p>
                  <div className="project-links" style={{ display: 'flex', gap: '1rem' }}>
                    {project.githubUrl !== "#" && (
                      <motion.a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ flex: 1, textAlign: 'center' }}
                      >
                        GitHub
                      </motion.a>
                    )}
                    {project.liveUrl !== "#" && (
                      <motion.a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ flex: 1, textAlign: 'center' }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ProjectsPage;