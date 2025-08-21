import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsSection: React.FC = () => {
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
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript featuring dark theme, smooth animations, and single-page navigation. Showcases personal projects and professional experience.",
      technologies: ["React", "TypeScript", "Framer Motion", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/rafaelperales05/Portfolio",
      liveUrl: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Retro Bowl Remake",
      description: "Recreation of the popular football game on MSMP0+ microcontroller hardware using embedded C programming. Features PCB design, joystick controls, LED displays, and sound generation. (wasn't using git at the time :()",
      technologies: ["C", "KiCAD", "Embedded Systems", "Hardware Design", "State Machines"],
      githubUrl: "#",
      liveUrl: "https://youtu.be/C3qR12QKr7w",
      category: "hardware"
    },
    {
      id: 4,
      title: "YouTube/Reddit Comment Sentiment Analysis",
      description: "Engineered MLOps sentiment pipeline using DVC, NLTK, and LightGBM (78% accuracy), with MLflow tracking and automated model promotion to staging. Deployed Flask API and Chrome extension for real-time analysis with interactive visualizations.",
      technologies: ["Python", "DVC", "NLTK", "LightGBM", "MLflow", "Flask", "Chrome Extension", "Docker", "AWS", "CI/CD"],
      githubUrl: "https://github.com/rafaelperales05/Comment-Sentiment-Analysis",
      liveUrl: "#",
      category: "datascience"
    },
    {
      id: 5,
      title: "Solar Sail Technology Research",
      description: "Leading electrical systems design for NASA L'SPACE research team, focusing on innovative solar sail technology improvements and electrical power systems development.",
      technologies: ["Research", "Electrical Engineering", "Team Leadership", "System Design"],
      githubUrl: "#",
      liveUrl: "#",
      category: "research"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'datascience', label: 'Data Science' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'research', label: 'Research' }
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
    <motion.section 
      id="projects"
      className="projects-section" 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '7.5rem', 
        background: 'linear-gradient(180deg, rgba(0, 30, 60, 0.05) 0%, var(--bg-primary) 50%, rgba(0, 30, 60, 0.05) 100%)',
        color: 'var(--text-primary)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.h2
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
          A showcase of my recent work and personal projects
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                background: selectedCategory === category.id 
                  ? 'var(--gradient-primary)' 
                  : 'transparent',
                border: '2px solid var(--accent-primary)',
                borderRadius: '25px',
                color: selectedCategory === category.id 
                  ? 'var(--bg-primary)' 
                  : 'var(--text-primary)',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
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
              style={{
                padding: '2rem',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="project-content" style={{ flex: 1 }}>
                <motion.h3
                  className="resume-card-title"
                  whileHover={{ color: "var(--accent-primary)" }}
                  transition={{ duration: 0.2 }}
                  style={{ 
                    color: 'var(--text-primary)', 
                    fontSize: '1.5rem', 
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}
                >
                  {project.title}
                </motion.h3>
                <p 
                  className="resume-card-description" 
                  style={{ 
                    color: 'var(--text-primary)', 
                    lineHeight: '1.6', 
                    marginBottom: '1.5rem' 
                  }}
                >
                  {project.description}
                </p>
                
                {/* Technologies used - skills integrated with project */}
                <motion.div 
                  className="project-technologies"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {project.technologies.map(tech => (
                    <motion.span 
                      key={tech} 
                      className="tech-tag"
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
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <div className="project-links" style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  {project.githubUrl !== "#" && (
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ 
                        flex: 1, 
                        textAlign: 'center',
                        padding: '0.75rem 1.5rem',
                        background: 'transparent',
                        border: '2px solid var(--accent-primary)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
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
                      style={{ 
                        flex: 1, 
                        textAlign: 'center',
                        padding: '0.75rem 1.5rem',
                        background: 'var(--gradient-primary)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'var(--bg-primary)',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
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
  );
};

export default ProjectsSection;