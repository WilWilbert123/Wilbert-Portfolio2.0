import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: 'Nebula Analytics',
      description: 'Real-time dashboard with predictive analytics and AI insights for enterprise data. Features live data streaming, customizable widgets, and machine learning predictions.',
      tech: ['React', 'D3.js', 'FastAPI', 'TensorFlow', 'WebSocket'],
      icon: 'fas fa-chart-line',
      color: '#61DAFB',
      demoLink: '#',
      codeLink: '#',
      image: null
    },
    {
      id: 2,
      title: 'MarketFlow',
      description: 'Full-featured e-commerce platform with cart management, secure payments, admin dashboard, and real-time inventory tracking using MERN stack.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'Redux'],
      icon: 'fas fa-store',
      color: '#339933',
      demoLink: '#',
      codeLink: '#',
      image: null
    },
    {
      id: 3,
      title: 'Web3Passport',
      description: 'Decentralized identity verification system using blockchain technology. Users can verify credentials securely without exposing personal data.',
      tech: ['Solidity', 'Web3.js', 'Ethers.js', 'IPFS', 'Hardhat'],
      icon: 'fas fa-cubes',
      color: '#F7DF1E',
      demoLink: '#',
      codeLink: '#',
      image: null
    },
    {
      id: 4,
      title: 'TaskFlow Pro',
      description: 'Advanced project management tool with real-time collaboration, task assignment, progress tracking, and automated reporting system.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
      icon: 'fas fa-tasks',
      color: '#8a8aff',
      demoLink: '#',
      codeLink: '#',
      image: null
    },
    {
      id: 5,
      title: 'HealthTrack AI',
      description: 'Healthcare analytics platform that uses AI to predict patient outcomes and provide personalized treatment recommendations.',
      tech: ['Python', 'Django', 'React Native', 'Scikit-learn', 'Docker'],
      icon: 'fas fa-heartbeat',
      color: '#ff6b6b',
      demoLink: '#',
      codeLink: '#',
      image: null
    },
    {
      id: 6,
      title: 'SocialSphere',
      description: 'Social media analytics dashboard that tracks engagement metrics, sentiment analysis, and competitor performance across platforms.',
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      icon: 'fas fa-share-alt',
      color: '#4ecdc4',
      demoLink: '#',
      codeLink: '#',
      image: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-icon-wrapper" style={{ background: `${project.color}20` }}>
                <i className={project.icon} style={{ color: project.color }}></i>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.demoLink} 
                  className="project-link demo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
                <a 
                  href={project.codeLink} 
                  className="project-link code-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="#" className="btn-view-more">
            View All Projects
            <i className="fas fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 60px;
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .project-card {
          background: rgba(15, 15, 28, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 30px;
          transition: all 0.3s ease;
          border: 1px solid rgba(108, 108, 255, 0.15);
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6c6cff, #9c4dff);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-card:hover {
          border-color: rgba(108, 108, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          font-size: 28px;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #fff;
        }

        .project-description {
          color: #b9b9e6;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }

        .tech-tag {
          background: rgba(108, 108, 255, 0.15);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #cdcdff;
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background: rgba(108, 108, 255, 0.3);
          transform: translateY(-2px);
        }

        .project-links {
          display: flex;
          gap: 20px;
          margin-top: auto;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .demo-link {
          background: linear-gradient(95deg, #6c6cff, #9c4dff);
          color: white;
        }

        .demo-link:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(108, 108, 255, 0.3);
        }

        .code-link {
          background: rgba(108, 108, 255, 0.1);
          color: #a0a0ff;
          border: 1px solid rgba(108, 108, 255, 0.3);
        }

        .code-link:hover {
          background: rgba(108, 108, 255, 0.2);
          transform: translateX(5px);
        }

        .projects-footer {
          text-align: center;
          margin-top: 40px;
        }

        .btn-view-more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 30px;
          background: transparent;
          border: 2px solid rgba(108, 108, 255, 0.4);
          border-radius: 50px;
          color: #a0a0ff;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-view-more:hover {
          border-color: #6c6cff;
          background: rgba(108, 108, 255, 0.1);
          transform: translateY(-3px);
          gap: 15px;
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 60px 0;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-card {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;