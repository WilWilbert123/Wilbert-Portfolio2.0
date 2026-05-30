// src/components/Projects/Projects.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = {
    mobile: [
      {
        title: "Halal Everything",
        description: "A comprehensive multi-service mobile ecosystem designed as a one-stop solution for the modern Muslim consumer, featuring advanced state management and secure authentication.",
        icon: "fas fa-mosque",
        tech: ["React Native", "Node.js", "Express.js", "MongoDB", "OTP Auth", "REST API", "TypeScript", "Expo Go", "Redux Toolkit"],
        color: "#10b981",
        category: "Mobile Application"
      },
      {
        title: "Map Memories",
        description: "A cross-platform travel application for documenting memories with precise location data. Features deep integration with Google Maps and real-time environment APIs.",
        icon: "fas fa-map-marked-alt",
        tech: ["React Native", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB", "Street View API", "Weather API", "Expo Go"],
        color: "#3b82f6",
        category: "Mobile Application"
      },
      {
        title: "Gal Apparel",
        description: "A modern boutique experience featuring product categorization, secure JWT authentication, and a real-time synchronized cart and checkout system.",
        icon: "fas fa-tshirt",
        tech: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST API", "TypeScript", "Expo Go"],
        color: "#ec4899",
        category: "Mobile Application"
      },
      {
        title: "Echo Stamp",
        description: "A high-performance mobile commerce platform featuring a synchronized real-time cart system, secure JWT identity management, and a scalable RESTful architecture.",
        icon: "fas fa-stamp",
        tech: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST API", "TypeScript", "Expo Go"],
        color: "#8b5cf6",
        category: "Mobile Application"
      }
    ],
    enterprise: [
      {
        title: "Retail Giant + Inventory System",
        description: "A complete retail management solution featuring POS, inventory tracking, supplier management, and automated sales reporting.",
        icon: "fas fa-store",
        tech: ["VB.NET", "Microsoft SQL Server", "Crystal Reports", "Stored Procedures"],
        color: "#f59e0b",
        category: "Enterprise Software"
      },
      {
        title: "Fixed Asset Management System",
        description: "Enterprise-grade asset tracking system designed for monitoring depreciation, repair logs, and asset verification.",
        icon: "fas fa-chart-line",
        tech: ["VB.NET", "Microsoft SQL Server", "Crystal Reports", "SMTP", "Stored Procedures"],
        color: "#ef4444",
        category: "Enterprise Software"
      },
      {
        title: "Canteen Billing System",
        description: "A streamlined cashier panel and billing system with daily sales monitoring and automated receipt printing.",
        icon: "fas fa-receipt",
        tech: ["VB.NET", "Microsoft SQL Server", "Crystal Reports", "Stored Procedures"],
        color: "#14b8a6",
        category: "Enterprise Software"
      }
    ],
    public: [
      {
        title: "E-Blotter System",
        description: "A digital transformation project for local government, replacing manual logging with a secure, searchable resident record system.",
        icon: "fas fa-balance-scale",
        tech: ["VB.NET", "MySQL Workbench", "Crystal Reports"],
        color: "#06b6d4",
        category: "Public Sector Software"
      },
      {
        title: "Play Monitoring System",
        description: "A child play area monitoring system managing check-ins, time-tracking, and activity analysis for indoor play centers.",
        icon: "fas fa-child",
        tech: ["VB.NET", "Microsoft SQL Server", "Crystal Reports", "Stored Procedures"],
        color: "#a855f7",
        category: "Specialized Software"
      }
    ],
    web: [
      {
        title: "Personal Portfolio Website",
        description: "A high-performance, fully responsive portfolio platform built with modern React patterns and cloud integration.",
        icon: "fas fa-laptop-code",
        tech: ["React", "Vite", "CSS", "JavaScript", "TypeScript", "Supabase", "Netlify"],
        color: "#6366f1",
        category: "Web Portfolio",
        liveLink: "https://your-portfolio-url.com",
        githubLink: "https://github.com/yourusername/portfolio"
      }
    ]
  };

  const allProjects = [...projects.mobile, ...projects.enterprise, ...projects.public, ...projects.web];

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
        duration: 0.5
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
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my work across mobile applications, enterprise software, and web development
          </p>
        </motion.div>

        <motion.div
          className="projects-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Mobile Apps</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Enterprise Systems</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Public Sector</span>
          </div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="project-icon" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}>
                <i className={project.icon}></i>
              </div>
              
              <div className="project-category" style={{ color: project.color }}>
                {project.category}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-stack">
                {project.tech.slice(0, 6).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 6 && (
                  <span className="tech-tag tech-more">
                    +{project.tech.length - 6} more
                  </span>
                )}
              </div>
              
              {(project.liveLink || project.githubLink) && (
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> Source Code
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;