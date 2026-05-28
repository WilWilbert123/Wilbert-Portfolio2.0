import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative'
    }}>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}
      >
        <motion.div 
          className="badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(8px)',
            padding: '0.5rem 1.2rem',
            borderRadius: '40px',
            fontSize: '0.85rem',
            fontWeight: '500',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            marginBottom: '1.8rem'
          }}
        >
          <i className="fas fa-code" style={{ marginRight: '6px' }}></i> Full Stack Developer
        </motion.div>
        
        <motion.h1 
          className="glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.2rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #B0B0FF 50%, #6C6CFF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1.2rem'
          }}
        >
          John Wilbertn Gamis
        </motion.h1>
        
        <motion.div 
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '1.2rem',
            fontWeight: '400',
            color: '#cbcbff',
            marginBottom: '1.5rem'
          }}
        >
          Building digital experiences that matter
        </motion.div>
        
        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#b9b9e6',
            maxWidth: '700px',
            margin: '0 auto 2rem auto'
          }}
        >
          I craft high-performance web applications with modern technologies,
          blending elegant frontends with robust backends. Let's turn ideas into reality.
        </motion.p>
        
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '1.2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <a href="#projects" className="btn btn-primary" style={{
            padding: '0.9rem 2rem',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            background: 'linear-gradient(95deg, #6c6cff, #9c4dff)',
            color: 'white',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 20px rgba(108, 108, 255, 0.3)'
          }}>
            <i className="fas fa-arrow-down"></i> View Work
          </a>
          <a href="#contact" className="btn btn-outline" style={{
            padding: '0.9rem 2rem',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            background: 'transparent',
            border: '1.5px solid rgba(108, 108, 255, 0.6)',
            color: '#e0e0ff',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <i className="fas fa-comment"></i> Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;