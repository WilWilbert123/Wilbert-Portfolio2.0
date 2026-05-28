import { motion } from 'framer-motion';
import LightRays from './components/LightRays/LightRays';
import Lanyard from './components/Lanyard/Lanyard';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import LogoLoop from './components/LogoLoop/LogoLoop';
import SplashCursor from './components/SplashCursor/SplashCursor';
import './App.css';

function App() {
  const techLogos = [
    { node: <i className="fab fa-react" style={{ fontSize: '2rem', color: '#61DAFB' }}></i>, title: "React", href: "https://react.dev" },
    { node: <i className="fab fa-node-js" style={{ fontSize: '2rem', color: '#339933' }}></i>, title: "Node.js", href: "https://nodejs.org" },
    { node: <i className="fab fa-js" style={{ fontSize: '2rem', color: '#F7DF1E' }}></i>, title: "JavaScript", href: "https://javascript.com" },
    { node: <i className="fab fa-python" style={{ fontSize: '2rem', color: '#3776AB' }}></i>, title: "Python", href: "https://python.org" },
    { node: <i className="fab fa-java" style={{ fontSize: '2rem', color: '#007396' }}></i>, title: "Java", href: "https://java.com" },
    { node: <i className="fas fa-database" style={{ fontSize: '2rem', color: '#47A248' }}></i>, title: "MongoDB", href: "https://mongodb.com" },
    { node: <i className="fas fa-database" style={{ fontSize: '2rem', color: '#4169E1' }}></i>, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <i className="fab fa-docker" style={{ fontSize: '2rem', color: '#2496ED' }}></i>, title: "Docker", href: "https://docker.com" },
    { node: <i className="fab fa-git-alt" style={{ fontSize: '2rem', color: '#F05032' }}></i>, title: "Git", href: "https://git-scm.com" },
    { node: <i className="fab fa-aws" style={{ fontSize: '2rem', color: '#FF9900' }}></i>, title: "AWS", href: "https://aws.amazon.com" },
    { node: <i className="fas fa-fire" style={{ fontSize: '2rem', color: '#FFCA28' }}></i>, title: "Firebase", href: "https://firebase.google.com" },
    { node: <i className="fas fa-chart-line" style={{ fontSize: '2rem', color: '#E10098' }}></i>, title: "GraphQL", href: "https://graphql.org" },
    { node: <i className="fab fa-vuejs" style={{ fontSize: '2rem', color: '#4FC08D' }}></i>, title: "Vue.js", href: "https://vuejs.org" },
    { node: <i className="fab fa-angular" style={{ fontSize: '2rem', color: '#DD0031' }}></i>, title: "Angular", href: "https://angular.io" }
  ];

  return (
    <div className="app">
      {/* SplashCursor Effect - Beautiful particle trail */}
      <SplashCursor
        COLOR="#6c6cff"
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
        TRANSPARENT={true}
        RAINBOW_MODE={false}
      />

      {/* LightRays Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#6c6cff"
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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div 
            className="hero-content-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">
              <i className="fas fa-code" style={{ marginRight: '6px' }}></i> Full Stack Developer
            </div>
            <h1 className="glow-text">John Wilbertn Gamis</h1>
            <div className="hero-title">Building digital experiences that matter</div>
            <p className="hero-desc">
              I craft high-performance web applications with modern technologies,
              blending elegant frontends with robust backends. Let's turn ideas into reality.
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

      <Projects />
      <Contact />

      <div className="footer">
        © 2025 John Wilbertn Gamis — Full Stack Developer
      </div>
    </div>
  );
}

export default App;