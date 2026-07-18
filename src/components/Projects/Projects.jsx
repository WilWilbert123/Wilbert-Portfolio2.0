// src/components/Projects/Projects.jsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BorderGlow from "../BorderGlow/BorderGlow"; 
import "./Projects.css";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const sliderRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  
  const autoScrollSpeed = 0.6; 
  const interactionTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Projects strictly organized and updated to reflect your layout requirements
  const allProjects = [
    { 
      title: "ECHO STAMP WEBSITE", 
      type: "Personal Project", 
      subtext: "Built with React Js", 
      description: "A high-performance, fully responsive web portfolio platform built with modern React patterns and cloud integration.",
      icon: "fas fa-qrcode", 
      tech: ["React", "Vite", "CSS", "TypeScript", "Vercel"], 
      color: "#6366f1"
    },
    { 
      title: "ECHO STAMP APP", 
      type: "Personal Project", 
      subtext: "Built with React Native", 
      description: "A high-performance mobile commerce platform featuring a synchronized real-time cart system and secure JWT identity management.",
      icon: "fas fa-qrcode", 
      tech: ["React Native", "Node.js", "Express.js", "MongoDB Atlas", "JWT Auth", "Render", "Firebase", "Resend"], 
      color: "#8b5cf6"
    },
    { 
      title: "EVERYTHING HALAL", 
      type: "Project", 
      subtext: "Built with React Native", 
      description: "A comprehensive multi-service mobile ecosystem designed as a one-stop solution for the modern Muslim consumer.",
      icon: "fas fa-qrcode", 
      tech: ["React Native", "Node.js", "Express.js", "MongoDB Atlas","REST APIs Integration","JWT Auth","Firebase","Google Maps API"], 
      color: "#10b981"
    },
    { 
      title: "MAP MEMORIES", 
      type: "Freelancer", 
      subtext: "Built with React Native", 
      description: "A cross-platform travel application for documenting memories with precise location data. Features deep integration with Google Maps.",
      icon: "fas fa-mobile-alt", 
      tech: ["React Native", "TypeScript", "Node.js", "MongoDB","Google Maps API","JWT Auth","Firebase"], 
      color: "#3b82f6"
    },
    { 
      title: "GAL APPAREL", 
      type: "Freelancer", 
      subtext: "Built with React Native", 
      description: "A modern boutique experience featuring product categorization, secure JWT authentication, and a real-time synchronized cart.",
      icon: "fas fa-mobile-alt", 
      tech: ["React Native", "Node.js", "Express.js", "JWT Auth","MongoDB Atlas","Firebase","REST APIs Integration"], 
      color: "#ec4899"
    },
    { 
      title: "LIBRARY MONITORING SYSTEM", 
      type: "Enterprise Software", 
      subtext: "Built with Visual Basic .Net", 
      description: "A child play area monitoring system managing check-ins, time-tracking, and activity analysis.",
      icon: "fas fa-desktop", 
      tech: ["VB.NET", "MySql Workbench", "Crystal Reports"], 
      color: "#a855f7"
    },
    { 
      title: "RETAIL GIANT INVENTORY SYSTEM + POS", 
      type: "Enterprise Software", 
      subtext: "Built with Visual Basic .Net", 
      description: "A complete retail management solution featuring POS, inventory tracking, supplier management, and automated reporting.",
      icon: "fas fa-desktop", 
      tech: ["VB.NET", "MS SQL Server", "Crystal Reports","Stored Procedures","Views"], 
      color: "#f59e0b"
    },
    { 
      title: "CANTEEN BILLING SYSTEM", 
      type: "Enterprise Software", 
      subtext: "Built with Visual Basic .Net", 
      description: "A streamlined cashier panel and billing system with daily sales monitoring and automated receipt printing.",
      icon: "fas fa-desktop", 
      tech: ["VB.NET", "MS SQL Server", "Stored Procedures","Crystal Reports","Views"], 
      color: "#14b8a6"
    },
    { 
      title: "PLAY MONITORING SYSTEM + POS", 
      type: "Enterprise Software", 
      subtext: "Built with Visual Basic .Net", 
      description: "A child play area monitoring system managing check-ins, time-tracking, and activity analysis.",
      icon: "fas fa-desktop", 
      tech: ["VB.NET", "MS SQL Server", "Crystal Reports","Stored Procedures","Views"], 
      color: "#eab308"
    },
    { 
      title: "PLAY MONITORING KIOSK", 
      type: "Enterprise Software", 
      subtext: "Built with Visual Basic .Net", 
      description: "A self-service kiosk terminal allowing fast customer registration, digital waiver signing, and automated check-ins.",
      icon: "fas fa-columns", 
      tech: ["VB.NET", "MS SQL Server", "REST API", "QR Code Generation"], 
      color: "#ca8a04"
    },
    { 
      title: "FIXED ASSET MANAGEMENT SYSTEM", 
      type: "Enterprise Software", 
      subtext: "Built with Visual Basic .Net", 
      description: "Enterprise-grade asset tracking system designed for monitoring depreciation, repair logs, and asset verification.",
      icon: "fas fa-desktop", 
      tech: ["VB.NET", "MS SQL Server", "Crystal Reports", "Stored Procedures", "Views", "SMTP Email Nodemailer"], 
      color: "#ef4444"
    },
    { 
      title: "BISBIO TIME MANAGEMENT SYSTEM", 
      type: "Enterprise Software", 
      subtext: "Built with Visual Basic .Net", 
      description: "Internal corporate time-tracking tool built to manage automated shift logging and developer performance timelines metrics.",
      icon: "fas fa-desktop", 
      tech: ["VB.NET", "MS SQL Server", "Stored Procedures", "Views", "Crystal Reports"], 
      color: "#6b7280"
    },
    { 
      title: "E-BLOTTER SYSTEM", 
      type: "Capstone Project", 
      subtext: "Built with Visual Basic .Net", 
      description: "A digital transformation project for local government, replacing manual logging with a secure resident record system.",
      icon: "fas fa-desktop", 
      tech: ["VB.NET", "MySQL Workbench", "Crystal Reports"], 
      color: "#06b6d4"
    },
    { 
      title: "PERSONAL PORTFOLIO WEBSITE", 
      type: "Personal Project", 
      subtext: "Built with React + Vite", 
      description: "High performance 3D responsive presentation web landing space featuring premium custom glassmorphic layout elements.",
      icon: "fas fa-globe-americas", 
      tech: ["React", "Vite", "CSS", "TypeScript",], 
      color: "#0284c7"
    }
  ];

  // Continuous seamless auto-scrolling engine
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollLoop = () => {
      if (!isUserInteracting && !isMouseDown) {
        slider.scrollLeft += autoScrollSpeed;
        
        // Midpoint threshold calculation (End of Set A / Start of Set B)
        const halfWidth = slider.scrollWidth / 2;
        
        // Instant non-blinking snap reset back to the start position
        if (slider.scrollLeft >= halfWidth) {
          slider.scrollLeft -= halfWidth;
        }
      }
      animationFrameRef.current = requestAnimationFrame(scrollLoop);
    };

    if (inView) {
      animationFrameRef.current = requestAnimationFrame(scrollLoop);
    }

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isUserInteracting, isMouseDown, inView]);

  // Infinite position normalization checks for manual track dragging overrides
  const handleManualScrollBoundsCheck = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const halfWidth = slider.scrollWidth / 2;
    if (slider.scrollLeft >= halfWidth) {
      slider.scrollLeft -= halfWidth;
    } else if (slider.scrollLeft <= 0) {
      slider.scrollLeft += halfWidth;
    }
  };

  const handleInteractionPause = () => {
    setIsUserInteracting(true);
    clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 1000);
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    handleInteractionPause();
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    handleInteractionPause();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeftState - walk;
    handleManualScrollBoundsCheck();
  };

  const handleTouchStart = (e) => {
    handleInteractionPause();
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    handleInteractionPause();
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
    handleManualScrollBoundsCheck();
  };

  // Modular helper function for handling unified infinite track rendering sets
  const renderCardList = (projectsSource, arrayInstanceId) => {
    return projectsSource.map((project, index) => (
      <motion.div
        key={`${arrayInstanceId}-${index}`}
        className="project-card-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: (index % projectsSource.length) * 0.02, duration: 0.4 }}
      >
        <BorderGlow
          edgeSensitivity={30}
          backgroundColor="rgba(18, 18, 30, 0.45)"
          borderRadius={24}
          glowRadius={60}
          glowIntensity={1.2}
          coneSpread={45}
          animated={false}
          colors={[project.color, '#ffffff', '#120F17']}
          fillOpacity={0.06}
        >
          <div className="project-card-premium-content">
            <div className="card-glass-glow" style={{ backgroundColor: `${project.color}0a` }} />
            
            <div className="card-top-row">
              <div
                className="project-icon-premium"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                  border: `1px solid ${project.color}30`,
                  color: project.color
                }}
              >
                <i className={project.icon}></i>
              </div>
              <span className="project-category-premium" style={{ color: project.color, backgroundColor: `${project.color}12` }}>
                {project.type}
              </span>
            </div>

            <div className="project-identity-block">
              <h3 className="project-title-premium">{project.title}</h3>
              <span className="project-subtext-premium">{project.subtext}</span>
            </div>

            <p className="project-description-premium">{project.description}</p>

            <div className="project-tech-stack-premium">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag-premium">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links-premium">
              <span className="project-link-premium" style={{ '--accent-color': project.color }}>
                View System details <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem', marginLeft: '4px' }}></i>
              </span>
            </div>
          </div>
        </BorderGlow>
      </motion.div>
    ));
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
          <span className="section-badge">My Portfolio</span>
          <h2 className="section-title">PROJECTS</h2>
          <p className="section-subtitle">
            Hover or hold to pause auto-scrolling. Feel free to manually swipe through my production codebases.
          </p>
        </motion.div>

        <div 
          className="slider-viewport" 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleInteractionPause}
          onMouseEnter={handleInteractionPause}
        >
          <div className="slider-track">
            {/* Set A */}
            {renderCardList(allProjects, "set-a")}
            {/* Set B (Cloned set for infinite non-blink alignment tracking loops) */}
            {renderCardList(allProjects, "set-b")}
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default Projects;