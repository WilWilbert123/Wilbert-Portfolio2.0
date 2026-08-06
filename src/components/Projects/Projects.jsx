import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BorderGlow from "../BorderGlow/BorderGlow";
import ProjectModal from "./ProjectModal";
import retail1 from "../../assets/Retailgiant/retail1.png";
import retail2 from "../../assets/Retailgiant/retail2.png";
import retail3 from "../../assets/Retailgiant/retail3.png";
import retail4 from "../../assets/Retailgiant/retail4.png";
import play1 from "../../assets/Playmonitoring/play1.png";
import play2 from "../../assets/Playmonitoring/play2.png";
import play3 from "../../assets/Playmonitoring/play3.png";
import play4 from "../../assets/Playmonitoring/play4.png";
import canteen1 from "../../assets/CanteenBilling/canteen1.png";
import canteen2 from "../../assets/CanteenBilling/canteen2.png";
import canteen3 from "../../assets/CanteenBilling/canteen3.png";
import canteen4 from "../../assets/CanteenBilling/canteen4.png";
import canteen5 from "../../assets/CanteenBilling/canteen5.png";
import canteen6 from "../../assets/CanteenBilling/canteen6.png";
import bisbio1 from "../../assets/BISBIO/bisbio1.png";
import bisbio2 from "../../assets/BISBIO/bisbio2.png";
import bisbio3 from "../../assets/BISBIO/bisbio3.png";
import bisbio4 from "../../assets/BISBIO/bisbio4.png";
import bisbio5 from "../../assets/BISBIO/bisbio5.png";
import asset1 from "../../assets/FIxedAsset/asset1.png";
import asset2 from "../../assets/FIxedAsset/asset2.png";
import kiosk1 from "../../assets/playkiok/kiosk1.png";
import eblotter1 from "../../assets/Eblotter/eblotter1.jpg";
import eblotter2 from "../../assets/Eblotter/eblotter2.jpg";
import eblotter3 from "../../assets/Eblotter/eblotter3.webp";
import eblotter4 from "../../assets/Eblotter/eblotter4.webp";
import eblotter5 from "../../assets/Eblotter/eblotter5.webp";
import eblotter6 from "../../assets/Eblotter/eblotter6.webp";
import halal1 from "../../assets/EverythingHalal/halal1.png";
import halal2 from "../../assets/EverythingHalal/halal2.png";
import halal3 from "../../assets/EverythingHalal/halal3.png";
import halal4 from "../../assets/EverythingHalal/halal4.png";
import halal5 from "../../assets/EverythingHalal/halal5.png";
import halal6 from "../../assets/EverythingHalal/halal6.png";
import halal7 from "../../assets/EverythingHalal/halal7.png";
import halal8 from "../../assets/EverythingHalal/halal8.png";
import libraryImg from "../../assets/Library/images.jpeg";
import "./Projects.css";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const autoScrollSpeed = 0.6;
  const interactionTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Check for mobile on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Projects strictly organized and updated to reflect your layout requirements
  const allProjects = [
    {
      title: "EVERYTHING HALAL",
      type: "Project",
      subtext: "Built with React Native",
      description:
        "A comprehensive multi-service mobile ecosystem designed as a one-stop solution for the modern Muslim consumer.",
      icon: "fas fa-qrcode",
      tech: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "REST APIs Integration",
        "JWT Auth",
        "Firebase",
        "Google Maps API",
      ],
      color: "#10b981",
      coverImage: halal1,
      gallery: [halal1, halal2, halal3, halal4, halal5, halal6, halal7, halal8],
      link: "https://apkpure.com/everything-halal/com.everythinghalalapp"
    },

    {
      title: "LIBRARY MONITORING SYSTEM",
      type: "Enterprise Software",
      subtext: "Built with Visual Basic .NET",
      description:
        "A comprehensive library management system designed to monitor book inventory, track borrowed and returned books, and generate detailed reporting.",
      icon: "fas fa-desktop",
      tech: ["VB.NET", "MySQL Workbench", "Crystal Reports"],
      color: "#a855f7",
      coverImage: libraryImg,
      gallery: [libraryImg],
    },
    {
      title: "RETAIL GIANT INVENTORY SYSTEM + POS",
      type: "Enterprise Software",
      subtext: "Built with Visual Basic .Net",
      description:
        "A complete retail management solution featuring POS, inventory tracking, supplier management, and automated reporting.",
      icon: "fas fa-desktop",
      tech: [
        "VB.NET",
        "MS SQL Server",
        "Crystal Reports",
        "Stored Procedures",
        "Views",
      ],
      color: "#f59e0b",
      coverImage: retail1,
      gallery: [retail1, retail2, retail3, retail4],
    },
    {
      title: "CANTEEN BILLING SYSTEM",
      type: "Desktop App",
      subtext: "Built with Visual Basic .Net",
      description:
        "A fast and efficient point-of-sale system designed specifically for school and corporate canteens.",
      icon: "fas fa-cash-register",
      tech: [
        "VB.NET",
        "MS SQL Server",
        "Crystal Reports",
        "Stored Procedures",
        "Views",
      ],
      color: "#10b981",
      coverImage: canteen4,
      gallery: [canteen4, canteen1, canteen2, canteen3, canteen5, canteen6],
    },
    {
      title: "PLAY MONITORING SYSTEM + POS",
      type: "Enterprise Software",
      subtext: "Built with Visual Basic .Net",
      description:
        "A child play area monitoring system managing check-ins, time-tracking, and activity analysis.",
      icon: "fas fa-desktop",
      tech: [
        "VB.NET",
        "MS SQL Server",
        "Crystal Reports",
        "Stored Procedures",
        "Views",
      ],
      color: "#eab308",
      coverImage: play2,
      gallery: [play2, play1, play3, play4],
    },
    {
      title: "PLAY MONITORING KIOSK",
      type: "Enterprise Software",
      subtext: "Built with Visual Basic .Net",
      description:
        "A self-service kiosk terminal allowing fast customer registration, digital waiver signing, and automated check-ins.",
      icon: "fas fa-columns",
      tech: ["VB.NET", "MS SQL Server", "REST API", "QR Code Generation"],
      color: "#ca8a04",
      coverImage: kiosk1,
      gallery: [kiosk1],
    },
    {
      title: "FIXED ASSET MANAGEMENT SYSTEM",
      type: "Enterprise Software",
      subtext: "Built with Visual Basic .Net",
      description:
        "Enterprise-grade asset tracking system designed for monitoring depreciation, repair logs, and asset verification.",
      icon: "fas fa-desktop",
      tech: [
        "VB.NET",
        "MS SQL Server",
        "Crystal Reports",
        "Stored Procedures",
        "Views",
        "SMTP Email Nodemailer",
      ],
      color: "#ef4444",
      coverImage: asset2,
      gallery: [asset2, asset1],
    },
    {
      title: "BISBIO TIME MANAGEMENT SYSTEM",
      type: "Enterprise Software",
      subtext: "Built with Visual Basic .Net",
      description:
        "Internal corporate time-tracking tool built to manage automated shift logging and developer performance timelines metrics.",
      icon: "fas fa-desktop",
      tech: [
        "VB.NET",
        "MS SQL Server",
        "Stored Procedures",
        "Views",
        "Crystal Reports",
      ],
      color: "#6b7280",
      coverImage: bisbio1,
      gallery: [bisbio1, bisbio2, bisbio3, bisbio4, bisbio5],
    },
    {
      title: "E-BLOTTER SYSTEM",
      type: "Capstone Project",
      subtext: "Built with Visual Basic .Net",
      description:
        "A digital transformation project for local government, replacing manual logging with a secure resident record system.",
      icon: "fas fa-desktop",
      tech: ["VB.NET", "MySQL Workbench", "XAMPP", "Crystal Reports"],
      color: "#06b6d4",
      coverImage: eblotter2,
      gallery: [eblotter2, eblotter1, eblotter3, eblotter4, eblotter5, eblotter6],
    },
  ];

  // Continuous seamless auto-scrolling engine (only on desktop)
  useEffect(() => {
    if (isMobile) return; // Disable auto-scroll on mobile

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
  }, [isUserInteracting, isMouseDown, inView, isMobile]);

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

  // Only add mouse/touch handlers on desktop
  const getSliderProps = () => {
    if (isMobile) {
      return {
        className: "slider-viewport",
        ref: sliderRef,
      };
    }

    return {
      className: "slider-viewport",
      ref: sliderRef,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseLeaveOrUp,
      onMouseLeave: handleMouseLeaveOrUp,
      onMouseMove: handleMouseMove,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleInteractionPause,
      onMouseEnter: handleInteractionPause,
    };
  };

  // Modular helper function for handling unified infinite track rendering sets
  const renderCardList = (projectsSource, arrayInstanceId) => {
    return projectsSource.map((project, index) => (
      <motion.div
        key={`${arrayInstanceId}-${index}`}
        className="project-card-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          delay: (index % projectsSource.length) * 0.02,
          duration: 0.4,
        }}
      >
        <BorderGlow
          edgeSensitivity={30}
          backgroundColor="rgba(18, 18, 30, 0.45)"
          borderRadius={24}
          glowRadius={60}
          glowIntensity={1.2}
          coneSpread={45}
          animated={false}
          colors={[project.color, "#ffffff", "#120F17"]}
          fillOpacity={0.06}
        >
          <div
            className="project-card-premium-content"
            onClick={() => setSelectedProject(project)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="card-glass-glow"
              style={{ backgroundColor: `${project.color}0a` }}
            />

            {!project.coverImage && (
              <div className="card-top-row">
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
                <span
                  className="project-category-premium"
                  style={{
                    color: project.color,
                    backgroundColor: `${project.color}12`,
                  }}
                >
                  {project.type}
                </span>
              </div>
            )}

            {project.coverImage && (
              <div className="project-card-cover-wrapper" style={{ borderColor: `${project.color}20` }}>
                <img src={project.coverImage} alt={project.title} className="project-card-cover-img" />
              </div>
            )}

            <div className="project-identity-block">
              <h3 className="project-title-premium">{project.title}</h3>
              <span className="project-subtext-premium">{project.subtext}</span>
            </div>

            {!project.coverImage && (
              <p className="project-description-premium">{project.description}</p>
            )}

            <div className="project-tech-stack-premium">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag-premium">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links-premium">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-premium"
                  style={{ "--accent-color": project.color, textDecoration: "none", display: "inline-block" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View System details{" "}
                  <i
                    className="fas fa-arrow-right"
                    style={{ fontSize: "0.75rem", marginLeft: "4px" }}
                  ></i>
                </a>
              ) : (
                <button
                  className="project-link-premium"
                  style={{ "--accent-color": project.color, background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit' }}
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                >
                  View System details{" "}
                  <i
                    className="fas fa-arrow-right"
                    style={{ fontSize: "0.75rem", marginLeft: "4px" }}
                  ></i>
                </button>
              )}
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
          <h2 className="section-title">PROJECTS</h2>
        </motion.div>

        <div {...getSliderProps()}>
          <div className={`slider-track ${isMobile ? "mobile-grid" : ""}`}>
            {/* Set A */}
            {renderCardList(allProjects, "set-a")}
            {/* Set B (Cloned set for infinite non-blink alignment tracking loops) - Only on desktop */}
            {!isMobile && renderCardList(allProjects, "set-b")}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;