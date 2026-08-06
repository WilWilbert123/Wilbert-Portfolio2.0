import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="project-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="project-modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
        >
          <button className="project-modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          
          <div className="project-modal-grid">
            {/* Left Column: Details */}
            <div className="project-modal-left">
              <div className="project-modal-header">
                <div 
                  className="project-icon-premium"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                    border: `1px solid ${project.color}30`,
                    color: project.color,
                  }}
                >
                  <i className={project.icon}></i>
                </div>
                <div>
                  <h2 className="project-modal-title">{project.title}</h2>
                  <span className="project-modal-type" style={{ color: project.color, backgroundColor: `${project.color}12` }}>
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="project-modal-subtext">{project.subtext}</div>
              <p className="project-modal-description">{project.description}</p>
              
              <div className="project-modal-tech">
                <h3 className="project-modal-subtitle">Technologies</h3>
                <div className="project-tech-stack-premium">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag-premium">{tech}</span>
                  ))}
                </div>
              </div>
              
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-modal-link" style={{ backgroundColor: project.color }}>
                  View Live Project <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
            
            {/* Right Column: Gallery */}
            <div className="project-modal-right">
              {project.gallery && project.gallery.length > 0 ? (
                <div className="project-modal-gallery">
                  {project.gallery.map((img, index) => (
                    <div key={index} className="project-modal-img-wrapper">
                      <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="project-modal-img" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="project-modal-no-images">
                  <i className="fas fa-image"></i>
                  <p>No images available for this project.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
