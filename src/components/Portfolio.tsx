import React from 'react';
import Navigation from './Navigation';
import Contact from './Contact';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce.netlify.app"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager.netlify.app"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      technologies: ["JavaScript", "Weather API", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather.netlify.app"
    }
  ];

  return (
    <div className="portfolio">
      <Navigation />
      
      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>John Doe</h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-description">
              I create modern, responsive web applications that deliver exceptional user experiences.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="/resume.pdf" download className="btn-secondary">Download Resume</a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with 3+ years of experience creating 
                web applications that solve real-world problems. I love working with modern 
                technologies and am always eager to learn new tools and frameworks.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source projects, 
                writing technical blog posts, or exploring the latest trends in web development.
              </p>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skill-tags">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section" data-testid="projects-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card" data-testid={`project-card-${project.id}`}>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <div className="container">
          <h2>Resume</h2>
          <p>Download my resume to learn more about my experience and qualifications.</p>
          <a href="/resume.pdf" download className="btn-primary">
            Download Resume
          </a>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Portfolio;