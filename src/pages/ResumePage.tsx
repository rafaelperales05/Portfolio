import React from 'react';
import { motion } from 'framer-motion';
import '../components/Portfolio.css';

const ResumePage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented automated testing reducing bugs by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
      achievements: [
        "Built 10+ responsive web applications",
        "Improved SEO rankings by 200%",
        "Integrated payment systems and APIs"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2021",
      description: "Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.",
      achievements: [
        "Delivered 20+ client projects on time",
        "Reduced page load times by 50%",
        "Implemented accessibility best practices"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2016 - 2020",
      details: "Graduated Cum Laude with focus on Software Engineering and Web Development"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="resume-section"
        style={{ minHeight: '100vh', paddingTop: '120px', background: 'white' }}
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
            Resume
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
              Download my complete resume or explore my experience below
            </p>
            <motion.a 
              href="/resume.pdf" 
              download 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-block', padding: '1rem 2rem', fontSize: '1.1rem' }}
            >
              Download PDF Resume
            </motion.a>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2d3748' }}>Experience</h2>
            <div style={{ position: 'relative' }}>
              {/* Timeline line */}
              <div style={{ 
                position: 'absolute', 
                left: '20px', 
                top: '0', 
                bottom: '0', 
                width: '2px', 
                background: '#4a90e2' 
              }} />
              
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.6 + index * 0.2 }}
                  style={{
                    position: 'relative',
                    marginLeft: '60px',
                    marginBottom: '3rem',
                    padding: '2rem',
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-46px',
                    top: '2rem',
                    width: '12px',
                    height: '12px',
                    background: '#4a90e2',
                    borderRadius: '50%',
                    border: '3px solid white',
                    boxShadow: '0 0 0 3px #4a90e2'
                  }} />
                  
                  <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{job.title}</h3>
                  <h4 style={{ color: '#4a90e2', marginBottom: '0.5rem' }}>{job.company}</h4>
                  <p style={{ color: '#666', marginBottom: '1rem', fontStyle: 'italic' }}>{job.period}</p>
                  <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{job.description}</p>
                  
                  <div>
                    <strong style={{ color: '#2d3748' }}>Key Achievements:</strong>
                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} style={{ marginBottom: '0.25rem', color: '#4a5568' }}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2d3748' }}>Education</h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '2rem',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  marginBottom: '2rem'
                }}
              >
                <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                <h4 style={{ color: '#4a90e2', marginBottom: '0.5rem' }}>{edu.school}</h4>
                <p style={{ color: '#666', marginBottom: '1rem', fontStyle: 'italic' }}>{edu.period}</p>
                <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{edu.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ResumePage;