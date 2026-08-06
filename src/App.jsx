// src/App.jsx
import { motion } from "framer-motion";
import LightRays from "./components/LightRays/LightRays";
import Lanyard from "./components/Lanyard/Lanyard";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import TextType from "./components/TextType/TextType";
import CardSwap, { Card } from "./components/CardSwap/CardSwap";
import GitHubContributions from "./components/GitHubContributions/GitHubContributions";
import Beams from "./components/Beams/Beams";
// Import your text decrypt component
import DecryptedText from "./components/DecryptedText/DecryptedText";
import studentHelpImg from "./assets/studenthelp.png";
// IMPORT YOUR LOCAL IMAGES HERE
import echoImg from "./assets/echoweb.png";
import echoImg2 from "./assets/echoapp.png";
import generalImages from "./assets/portfolio.png";
import aimoodImg from './assets/AimoodCraft.png';
import "./App.css";

function App() {
  const techLogos = [
    {
      node: (
        <i
          className="fab fa-react"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "React",
      href: "https://react.dev",
    },
    {
      node: (
        <i
          className="fab fa-node-js"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: (
        <i
          className="fab fa-js"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "JavaScript",
      href: "https://javascript.com",
    },
    {
      node: (
        <i
          className="fab fa-python"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "Python",
      href: "https://python.org",
    },
    {
      node: (
        <i
          className="fab fa-java"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "Java",
      href: "https://java.com",
    },
    {
      node: (
        <i
          className="fas fa-database"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "MongoDB",
      href: "https://mongodb.com",
    },
    {
      node: (
        <i
          className="fas fa-database"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "PostgreSQL",
      href: "https://postgresql.org",
    },
    {
      node: (
        <i
          className="fab fa-docker"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "Docker",
      href: "https://docker.com",
    },
    {
      node: (
        <i
          className="fab fa-git-alt"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "Git",
      href: "https://git-scm.com",
    },
    {
      node: (
        <i
          className="fab fa-aws"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "AWS",
      href: "https://aws.amazon.com",
    },
    {
      node: (
        <i
          className="fas fa-fire"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "Firebase",
      href: "https://firebase.google.com",
    },
    {
      node: (
        <i
          className="fas fa-chart-line"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "GraphQL",
      href: "https://graphql.org",
    },
    {
      node: (
        <i
          className="fab fa-vuejs"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "Vue.js",
      href: "https://vuejs.org",
    },
    {
      node: (
        <i
          className="fab fa-angular"
          style={{ fontSize: "2rem", color: "#ffffff" }}
        ></i>
      ),
      title: "Angular",
      href: "https://angular.io",
    },
  ];

  // Navigation items
  const navItems = [
    { label: "Home", href: "#home", icon: "fas fa-home" },
    { label: "Skills", href: "#skills", icon: "fas fa-code" },
    { label: "Certificates", href: "#certifications", icon: "fas fa-certificate" },
    { label: "Projects", href: "#projects", icon: "fas fa-project-diagram" },
    { label: "Contact", href: "#contact", icon: "fas fa-envelope" },
  ];

  return (
    <div className="app">
      {/* Gooey Navigation */}
      <GooeyNav items={navItems} initialActiveIndex={0} />

      <SplashCursor
        COLOR="#ffffff"
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
        TRANSPARENT={true}
        RAINBOW_MODE={false}
      />

      {/* LightRays Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.5}
        lightSpread={1.2}
        rayLength={2}
        pulsating={true}
        fadeDistance={1.2}
        saturation={0.8}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.1}
        distortion={0.08}
      />
      {/* BACKGROUND LAYER 2: 3D Ambient Volumetric Beams */}
      <Beams
        beamWidth={3}
        beamHeight={30}
        beamNumber={20}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <motion.div
            className="hero-content-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="glow-text">John Wilbert Gamis</h1>
            <div className="hero-title1">Software Engineer</div>

            {/* TextType for hero title */}
            <div className="hero-title">
              <TextType
                text={[
                  "Building digital experiences that matter",
                  "Creating innovative mobile solutions",
                  "Transforming ideas into reality",
                  "Crafting pixel-perfect interfaces",
                ]}
                as="div"
                typingSpeed={50}
                initialDelay={500}
                pauseDuration={3000}
                deletingSpeed={30}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorBlinkDuration={0.7}
              />
            </div>

            <p className="hero-desc">
              <TextType
                text={[
                  "I'm a passionate Mobile Application Developer specializing in building modern, scalable, and user-friendly applications, turning ideas into high-quality digital experiences.",
                  "I craft elegant solutions for complex problems, focusing on performance and user experience in every line of code.",
                  "With expertise in React Native and modern web technologies, I build applications that users love to interact with.",
                ]}
                as="span"
                typingSpeed={20}
                initialDelay={1000}
                pauseDuration={5000}
                deletingSpeed={15}
                loop={true}
                showCursor={true}
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                startOnVisible={true}
              />
            </p>

            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-arrow-down"></i> View Work
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-comment"></i> Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lanyard-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lanyard-interactive">
              <Lanyard position={[0, 0, 22]} gravity={[0, -40, 0]} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* LogoLoop Section */}
      <section className="logoloop-section">
        <div className="logoloop-wrapper">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={55}
            gap={70}
            hoverSpeed={15}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#05050A"
            ariaLabel="Technologies I work with"
          />
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="featured-cards-section">
        <div className="featured-cards-container">
          {/* Left Side: Content/Text */}
          <div className="featured-cards-left">
            <h2 className="section-title">Featured Projects</h2>

            {/* DecryptedText component applied perfectly to the paragraph */}
            <DecryptedText
              text="A curated showcase of cross-platform mobile ecosystems, responsive web solutions, and full-stack architectures. Each project is built with an absolute focus on buttery-smooth UI/UX transitions, fluid glassmorphic aesthetics, and highly scalable API integrations designed to deliver a seamless experience across all devices."
              animateOn="view"
              revealDirection="start"
              sequential={true}
              speed={15}
              className="section-subtitle"
            />
          </div>

          {/* Right Side: CardSwap Component with Image Visual Panels */}
          <div className="featured-cards-right">
            <CardSwap
              width={690}
              height={450}
              delay={4000}
              pauseOnHover={true}
              easing="elastic"
            >
              {/* Card 1: Echo Stamp Website */}
              <Card customClass="portfolio-swap-card design-echo-stamp">
                <a
                  href="https://echo-stamp-journey-666.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-clickable-wrapper"
                >
                  <div className="card-header-bar">
                    <i className="fas fa-globe header-icon"></i>
                    <span className="header-title">ECHO STAMP WEBSITE</span>
                  </div>
                  <div className="card-visual-header">
                    <div className="card-bg-gradient" />
                    <img
                      src={echoImg}
                      alt="Echo Stamp Preview"
                      className="card-project-img"
                    />
                  </div>
                </a>
              </Card>

              {/* Card 2: Echo Stamp App (Google Play Link) */}
              <Card customClass="portfolio-swap-card design-candy-match">
                <a
                  href="https://play.google.com/store/apps/details?id=com.wilbert03.EchoStamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-clickable-wrapper"
                >
                  <div className="card-header-bar">
                    <i className="fas fa-mobile-alt header-icon"></i>
                    <span className="header-title">ECHO STAMP APP</span>
                  </div>
                  <div className="card-visual-header">
                    <div className="card-bg-gradient" />
                    <img
                      src={echoImg2}
                      alt="Echo App Preview"
                      className="card-project-img"
                    />
                  </div>
                </a>
              </Card>

              {/* Card 3: AI MoodCraft */}
              <Card customClass="portfolio-swap-card design-aimood-craft">
                <a
                  href="https://ai-mood-craft.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-clickable-wrapper"
                >
                  <div className="card-header-bar">
                    <i className="fas fa-magic header-icon"></i>
                    <span className="header-title">AI MOODCRAFT</span>
                  </div>
                  <div className="card-visual-header">
                    <div className="card-bg-gradient" />
                    <img
                      src={aimoodImg}
                      alt="AI MoodCraft Preview"
                      className="card-project-img"
                    />
                  </div>
                </a>
              </Card>

              {/* Card 4: Portfolio */}
              <Card customClass="portfolio-swap-card design-sams">
                <a
                  href="#home" /* Navigates back to your top hero section or a specific URL */
                  className="card-clickable-wrapper"
                >
                  <div className="card-header-bar">
                    <i className="fas fa-code header-icon"></i>
                    <span className="header-title">PORTFOLIO</span>
                  </div>
                  <div className="card-visual-header">
                    <div className="card-bg-gradient" />
                    <img
                      src={generalImages}
                      alt="My Portfolio Preview"
                      className="card-project-img"
                    />
                  </div>
                </a>
              </Card>
              {/* Card 5: Student Help */}
              <Card customClass="portfolio-swap-card design-student-help">
                <a
                  href="https://student-help-ecru.vercel.app/" // Replace with actual URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-clickable-wrapper"
                >
                  <div className="card-header-bar">
                    <i className="fas fa-graduation-cap header-icon"></i>
                    <span className="header-title">STUDENT HELP</span>
                  </div>
                  <div className="card-visual-header">
                    <div className="card-bg-gradient" />
                    <img
                      src={studentHelpImg} // Use specific image for student help
                      alt="Student Help App Preview"
                      className="card-project-img"
                    />
                  </div>
                </a>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Certifications Section */}
      <Certifications />

      {/* GitHub Contributions Section */}
      <section className="github-contributions-section">
        <div className="github-contributions-wrapper">

          {/* AUTHENTIC GITHUB SECTION TITLE HEADER */}
          <div className="github-section-header">
            <h2 className="github-main-title">GitHub Activity</h2>
          </div>


          <GitHubContributions username="WilWilbert123" />

        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <div className="footer">
        © 2026 John Wilbert Gamis — Software Engineer
      </div>
    </div>
  );
}

export default App;