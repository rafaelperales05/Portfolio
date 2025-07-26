import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../components/Portfolio.css';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce.netlify.app",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager.netlify.app",
      category: "frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive charts, and weather alerts using multiple APIs.",
      technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather.netlify.app",
      category: "frontend"
    },
    {
      id: 4,
      title: "REST API Server",
      description: "A robust RESTful API server with authentication, rate limiting, and comprehensive documentation built with Express.js.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
      githubUrl: "https://github.com/yourusername/api-server",
      liveUrl: "https://your-api.herokuapp.com/docs",
      category: "backend"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
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
        style={{ minHeight: '100vh', paddingTop: '120px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}
          >
            My Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', color: '#666' }}
          >
            A showcase of my recent work and personal projects
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '25px',
                  background: selectedCategory === category.id ? '#4a90e2' : '#f0f0f0',
                  color: selectedCategory === category.id ? 'white' : '#333',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
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
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                variants={fadeInUp}
                layout
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-content">
                  <motion.h3
                    whileHover={{ color: "#4a90e2" }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p>{project.description}</p>
                  <motion.div 
                    className="project-technologies"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {project.technologies.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="tech-tag"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="project-links">
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
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