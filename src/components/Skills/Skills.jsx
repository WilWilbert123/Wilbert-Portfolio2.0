import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    frontend: {
      name: 'Frontend',
      icon: 'fas fa-code',
      skills: [
        { name: 'React.js', icon: 'fab fa-react', level: 90, color: '#61DAFB' },
        { name: 'JavaScript', icon: 'fab fa-js', level: 92, color: '#F7DF1E' },
        { name: 'TypeScript', icon: 'fas fa-file-code', level: 85, color: '#3178C6' },
        { name: 'React Native', icon: 'fab fa-react', level: 90, color: '#61DAFB' },
        { name: 'Redux', icon: 'fas fa-store', level: 88, color: '#764ABC' },
        { name: 'Redux-Saga/Thunk', icon: 'fas fa-code-branch', level: 85, color: '#86D46D' },
        { name: 'Redux Toolkit', icon: 'fas fa-toolbox', level: 88, color: '#764ABC' },
        { name: 'HTML & CSS', icon: 'fab fa-html5', level: 90, color: '#E34F26' },
        { name: 'Vite', icon: 'fas fa-bolt', level: 85, color: '#646CFF' }
      ]
    },
    backend: {
      name: 'Backend & Database',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', level: 88, color: '#339933' },
        { name: 'Nest.js', icon: 'fab fa-node-js', level: 80, color: '#E0234E' },
        { name: 'Next.js', icon: 'fas fa-code', level: 85, color: '#ffffff' },
        { name: 'REST APIs', icon: 'fas fa-plug', level: 92, color: '#00ADD8' },
        { name: 'MongoDB', icon: 'fas fa-database', level: 85, color: '#47A248' },
        { name: 'Firebase', icon: 'fas fa-fire', level: 88, color: '#FFCA28' },
        { name: 'Supabase', icon: 'fas fa-database', level: 82, color: '#3ECF8E' },
        { name: 'VB.NET', icon: 'fas fa-code', level: 85, color: '#5C2D91' },
        { name: 'MSSQL', icon: 'fas fa-database', level: 85, color: '#CC2927' },
        { name: 'MySQL', icon: 'fas fa-database', level: 80, color: '#4479A1' },
        { name: 'Crystal Reports', icon: 'fas fa-chart-bar', level: 80, color: '#B2B2B2' }
      ]
    }
  };

  const allSkills = Object.values(skillCategories).flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, category: cat.name }))
  );

  const getDisplayedSkills = () => {
    if (activeCategory === 'all') return allSkills;
    return skillCategories[activeCategory]?.skills || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">About & Skills</span>
          <h2 className="section-title">Who Am I?</h2>
          <p className="section-subtitle">
            I am an experienced React Native developer with a proven track record
            of delivering high-quality, scalable, and user-friendly mobile applications.
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="about-content">
            <p>
              I have a strong foundation in JavaScript and a deep understanding of the
              React Native framework, as well as experience with a variety of tools
              and technologies. I am highly adaptable, able to quickly learn and apply
              new technologies, and I am committed to staying up-to-date with the
              latest developments in the field.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </motion.div>

        {/* Skills Section Header */}
        <motion.div
          className="skills-header-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="skills-subtitle">Technical Expertise</h3>
        </motion.div>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <i className="fas fa-th-large"></i>
            All Skills
          </button>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`filter-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <i className={category.icon}></i>
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {getDisplayedSkills().map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-icon">
                <i className={skill.icon} style={{ color: skill.color }}></i>
              </div>
              <div className="skill-info">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level-bar">
                  <div 
                    className="skill-level-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      background: '#ffffff'
                    }}
                  />
                </div>
                <div className="skill-percentage">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;