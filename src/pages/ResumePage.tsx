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
      title: "Early Business Analyst Intern",
      company: "Capital One",
      location: "Mcclean, Virginia",
      period: "June 2025 - August 2025",
      description: "Built machine learning models for credit card forecasting and enhanced decision-making processes through data analysis and model optimization.",
      achievements: [
        "Built an early-stage machine learning model in Python with scikit-learn to reforecast 24th credit card statement-level metrics using the first 6 months of customer data",
        "Increased previous model R² by 20% and decreased monthly relative mean error by 10%",
        "Extracted, cleaned, and joined large-scale datasets from Snowflake using SQL for feature engineering, model training, and validation",
        "Performed exploratory data analysis and developed visualizations in Jupyter Notebooks and Google Sheets to uncover behavioral trends and creditworthiness indicators"
      ]
    },
    {
      title: "Consultant II",
      company: "Enterprise Technology at UT Austin",
      location: "Austin, Texas",
      period: "May 2024 - Present",
      description: "Provided comprehensive IT support services and technical troubleshooting for university systems and users.",
      achievements: [
        "Provided first-level contact, incident handling, and IT services support",
        "Logged incidents, requests, and resolutions accurately and promptly in the incident management system",
        "Resolved a daily average of 20+ user-reported problems using advanced troubleshooting skills and available tools while following established procedures and policies"
      ]
    }
  ];

  const leadership = [
    {
      title: "Electrical and Computer Engineering Amplify Mentor",
      organization: "University of Texas at Austin",
      period: "August 2025 - Present",
      description: "Mentored a pod of second-year ECE students, helping mentees strengthen study habits, build professional skills, and secure internship opportunities.",
      achievements: [
        "Mentored a pod of second-year ECE students, helping mentees strengthen study habits, build professional skills, and secure internship opportunities",
        "Facilitated networking with peers, faculty, and alumni, fostering lasting academic support systems and career connections"
      ]
    },
    {
      title: "Electrical Lead",
      organization: "NASA L'SPACE Research Team",
      period: "Jan 2025 - Present",
      description: "Led electrical systems design and development for innovative solar sail technology research project.",
      achievements: [
        "Conducted a literature review to form initial proof of concepts for improving current solar sail technology",
        "Collaborated with the mechanical team to design and develop the electrical power systems as well as the command and data handling systems",
        "Collaborated with 6 other leads to create weekly meeting and event agendas"
      ]
    },
    {
      title: "Member",
      organization: "Society of Hispanic Professional Engineers (SHPE)",
      period: "August 2024 - Present",
      description: "Active participant in professional development and engineering career advancement initiatives.",
      achievements: [
        "Participate in technical workshops and engineering career development programs",
        "Engage with industry professionals and alumni network to gain insights into engineering careers",
        "Contribute to community outreach programs promoting STEM education in underrepresented communities"
      ]
    }
  ];

  const projects = [
    {
      title: "YouTube/Reddit Comment Sentiment Analysis Project",
      period: "June 2025 - August 2025",
      description: "Engineered MLOps sentiment pipeline using DVC, NLTK, and LightGBM (78% accuracy), with MLflow tracking and automated model promotion to staging.",
      achievements: [
        "Engineered MLOps sentiment pipeline using DVC, NLTK, and LightGBM (78% accuracy), with MLflow tracking and automated model promotion to staging",
        "Deployed Flask API and Chrome extension for real-time YouTube comment analysis with interactive visualizations (sentiment charts, word clouds, trending topics)",
        "Implemented CI/CD with GitHub Actions and AWS, automating Docker containerization and EC2 deployment for continuous delivery"
      ]
    },
    {
      title: "\"Retro Bowl\" Remake Project",
      period: "January 2024 - May 2024",
      description: "Recreated a popular football game on microcontroller hardware using embedded C programming.",
      achievements: [
        "Recreated aspects of \"Retro-bowl\", a popular Football game, on an MSMP0+ microcontroller using C",
        "Used KiCAD to create a PCB and then interfaced an ADC joystick, buttons, LED lights, and an ST7735R LCD screen",
        "Used a state machine, timers, interrupts, and a priority cycle to recreate basic features of a football game, such as running and passing a football, making tackles, and making touchdowns",
        "Used a 5-bit DAC to create sound such as players being tackled and the quarterback yelling \"HUT\""
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Electrical and Computer Engineering, Data Science",
      school: "The University of Texas at Austin",
      period: "Expected May 2027",
      details: "Overall GPA: 3.60"
    }
  ];

  const skills = {
    "Programming Languages": ["C", "C++", "Python", "SQL"],
    "Tools & Technologies": ["Jupyter Notebooks", "Snowflake", "Git", "Github", "KiCAD", "LTSPICE", "scikit-learn"],
    "Software": ["Google Suite (Sheets, Slides)", "Microsoft Suite (Excel, PowerPoint)"]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="resume-section"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h1 style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1rem',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Rafael Perales
            </h1>
            <div style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2rem'
            }}>
              <span>📧 rafaperales1229@gmail.com</span>
              <span>📱 (956) 203-4369</span>
              <span>🔗 www.linkedin.com/in/rafaelperales2027</span>
            </div>
            <motion.a 
              href="https://docs.google.com/document/d/1xbEcM3RewD0nwPSV-XJOu06UBAGxmEKQS2x7u8Kd4b0/edit?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--accent-primary)' }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'inline-block', 
                padding: '1rem 2rem', 
                fontSize: '1.1rem',
                background: 'var(--gradient-primary)',
                color: 'var(--bg-primary)',
                border: 'none',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              📄 View Google Doc Resume
            </motion.a>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem', 
              color: 'var(--accent-primary)',
              textAlign: 'center'
            }}>
              🎓 Education
            </h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  padding: '2rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  marginBottom: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)'
                }}
              >
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>{edu.degree}</h3>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{edu.school}</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontStyle: 'italic' }}>{edu.period}</p>
                <p style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>{edu.details}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem', 
              color: 'var(--accent-primary)',
              textAlign: 'center'
            }}>
              💼 Experience
            </h2>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                left: '20px', 
                top: '0', 
                bottom: '0', 
                width: '2px', 
                background: 'var(--gradient-primary)' 
              }} />
              
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  style={{
                    position: 'relative',
                    marginLeft: '60px',
                    marginBottom: '3rem',
                    padding: '2rem',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    left: '-46px',
                    top: '2rem',
                    width: '12px',
                    height: '12px',
                    background: 'var(--accent-primary)',
                    borderRadius: '50%',
                    border: '3px solid var(--bg-primary)',
                    boxShadow: '0 0 0 3px var(--accent-primary)'
                  }} />
                  
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>{job.title}</h3>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{job.company}</h4>
                  {job.location && <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>📍 {job.location}</p>}
                  <p style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>{job.period}</p>
                  <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{job.description}</p>
                  
                  <div>
                    <strong style={{ color: 'var(--accent-primary)' }}>Key Achievements:</strong>
                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership & Activities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem', 
              color: 'var(--accent-primary)',
              textAlign: 'center'
            }}>
              🌟 Leadership & Activities
            </h2>
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  padding: '2rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  marginBottom: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)'
                }}
              >
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>{item.title}</h3>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{item.organization}</h4>
                <p style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>{item.period}</p>
                <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{item.description}</p>
                
                <div>
                  <strong style={{ color: 'var(--accent-primary)' }}>Key Contributions:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem', 
              color: 'var(--accent-primary)',
              textAlign: 'center'
            }}>
              🚀 Projects
            </h2>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  padding: '2rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  marginBottom: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)'
                }}
              >
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>{project.period}</p>
                <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{project.description}</p>
                
                <div>
                  <strong style={{ color: 'var(--accent-primary)' }}>Technical Implementation:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem', 
              color: 'var(--accent-primary)',
              textAlign: 'center'
            }}>
              🛠️ Technical Skills
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem' 
            }}>
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    padding: '2rem',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)'
                  }}
                >
                  <h3 style={{ 
                    color: 'var(--accent-primary)', 
                    marginBottom: '1rem', 
                    fontSize: '1.3rem',
                    textAlign: 'center'
                  }}>
                    {category}
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem',
                    justifyContent: 'center'
                  }}>
                    {skillList.map((skill, idx) => (
                      <span
                        key={idx}
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
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ marginBottom: '4rem' }}
          >
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  padding: '2rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  🎯 Interests
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Basketball • Trumpet Playing • Data Science & Advancing Technology • Music • FinTech
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  padding: '2rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  📋 Additional
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <strong>Organizations:</strong> Society of Hispanic Professional Engineers (SHPE), SEO Career Scholar<br />
                  <strong>Work Eligibility:</strong> Eligible to work in the U.S. with no restrictions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ResumePage;