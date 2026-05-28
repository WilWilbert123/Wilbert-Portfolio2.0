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
        { name: 'React', icon: 'fab fa-react', level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: 'fas fa-code', level: 85, color: '#ffffff' },
        { name: 'TypeScript', icon: 'fas fa-file-code', level: 85, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', level: 88, color: '#06B6D4' },
        { name: 'Redux', icon: 'fas fa-store', level: 85, color: '#764ABC' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', level: 75, color: '#4FC08D' }
      ]
    },
    backend: {
      name: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', level: 88, color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', level: 85, color: '#3776AB' },
        { name: 'Express.js', icon: 'fas fa-bolt', level: 87, color: '#000000' },
        { name: 'Django', icon: 'fab fa-python', level: 80, color: '#092E20' },
        { name: 'Java', icon: 'fab fa-java', level: 75, color: '#007396' },
        { name: 'GraphQL', icon: 'fas fa-chart-line', level: 80, color: '#E10098' }
      ]
    },
    database: {
      name: 'Database',
      icon: 'fas fa-database',
      skills: [
        { name: 'MongoDB', icon: 'fas fa-database', level: 85, color: '#47A248' },
        { name: 'PostgreSQL', icon: 'fas fa-database', level: 82, color: '#4169E1' },
        { name: 'MySQL', icon: 'fas fa-database', level: 80, color: '#4479A1' },
        { name: 'Redis', icon: 'fas fa-bolt', level: 75, color: '#DC382D' },
        { name: 'Firebase', icon: 'fas fa-fire', level: 85, color: '#FFCA28' }
      ]
    },
    devops: {
      name: 'DevOps & Tools',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'Docker', icon: 'fab fa-docker', level: 80, color: '#2496ED' },
        { name: 'Git', icon: 'fab fa-git-alt', level: 88, color: '#F05032' },
        { name: 'AWS', icon: 'fab fa-aws', level: 75, color: '#FF9900' },
        { name: 'Jenkins', icon: 'fas fa-robot', level: 70, color: '#D33833' },
        { name: 'Kubernetes', icon: 'fas fa-cubes', level: 70, color: '#326CE5' },
        { name: 'CI/CD', icon: 'fas fa-sync-alt', level: 78, color: '#00ADD8' }
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
          <span className="section-badge">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
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
              <div className="skill-icon" style={{ color: skill.color }}>
                <i className={skill.icon}></i>
              </div>
              <div className="skill-info">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level-bar">
                  <div 
                    className="skill-level-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                    }}
                  />
                </div>
                <div className="skill-percentage">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(108, 108, 255, 0.1), rgba(156, 77, 255, 0.1));
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #8a8aff;
          margin-bottom: 20px;
          border: 1px solid rgba(108, 108, 255, 0.3);
          letter-spacing: 1px;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #a0a0ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #b9b9e6;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
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
          border: 1px solid rgba(108, 108, 255, 0.2);
          border-radius: 50px;
          color: #b9b9e6;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn i {
          font-size: 1rem;
        }

        .filter-btn:hover {
          border-color: rgba(108, 108, 255, 0.5);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #6c6cff, #9c4dff);
          border-color: transparent;
          color: white;
          box-shadow: 0 5px 15px rgba(108, 108, 255, 0.3);
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
          border: 1px solid rgba(108, 108, 255, 0.15);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-card:hover {
          border-color: rgba(108, 108, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          background: rgba(108, 108, 255, 0.1);
          border-radius: 12px;
          padding: 10px;
        }

        .skill-info {
          flex: 1;
        }

        .skill-name {
          font-weight: 600;
          margin-bottom: 10px;
          color: #fff;
        }

        .skill-level-bar {
          height: 6px;
          background: rgba(108, 108, 255, 0.2);
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
          font-size: 0.7rem;
          color: #8a8aff;
          text-align: right;
        }

        .skills-footer {
          margin-top: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .stat-card {
          text-align: center;
          padding: 30px;
          background: rgba(15, 15, 28, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(108, 108, 255, 0.15);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(108, 108, 255, 0.3);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6c6cff, #9c4dff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #b9b9e6;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 60px 0;
          }

          .skills-grid {
            grid-template-columns: 1fr;
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
        }
      `}</style>
    </section>
  );
};

export default Skills;