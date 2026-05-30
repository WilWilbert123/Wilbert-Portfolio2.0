import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

      <style jsx>{`
        .skills-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.01), transparent);
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          letter-spacing: 1px;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #888888);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #adadad;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-section {
          max-width: 900px;
          margin: 0 auto 50px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .about-content p {
          color: #adadad;
          line-height: 1.8;
          font-size: 1rem;
          text-align: center;
 presidential;
        }

        .skills-header-sub {
          text-align: center;
          margin: 40px 0 30px;
        }

        .skills-subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          background: linear-gradient(135deg, #fff, #888888);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .stat-card {
          text-align: center;
          padding: 30px;
          background: rgba(15, 15, 28, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #777777);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #adadad;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: rgba(15, 15, 28, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          color: #adadad;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .filter-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: #ffffff;
          border-color: transparent;
          color: #05050A;
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .skill-card {
          background: rgba(15, 15, 28, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-card:hover {
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.02);
          transform: translateY(-5px);
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .skill-info {
          flex: 1;
        }

        .skill-name {
          font-weight: 600;
          margin-bottom: 10px;
          color: #fff;
          font-size: 0.95rem;
        }

        .skill-level-bar {
          height: 5px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 5px;
        }

        .skill-level-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1s ease;
        }

        .skill-percentage {
          font-size: 0.75rem;
          color: #888888;
          text-align: right;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 60px 0;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 0.8rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-number {
            font-size: 1.8rem;
          }
          
          .skill-card {
            padding: 15px;
          }
          
          .skill-icon {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
          
          .skill-name {
            font-size: 0.9rem;
          }

          .about-section {
            padding: 20px;
            margin-bottom: 30px;
          }

          .about-content p {
            font-size: 0.9rem;
          }

          .skills-subtitle {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 480px) {
          .category-filters {
            gap: 10px;
          }
          
          .filter-btn {
            padding: 6px 12px;
            font-size: 0.7rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;