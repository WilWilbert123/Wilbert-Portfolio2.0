import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - Replace with actual API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! I\'ll get back to you soon.'
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'john.wilbertn@example.com',
      link: 'mailto:john.wilbertn@example.com',
      color: '#61DAFB'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/johnwilbertn',
      link: 'https://github.com/johnwilbertn',
      color: '#ffffff'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/johnwilbertn',
      link: 'https://linkedin.com/in/johnwilbertn',
      color: '#0077B5'
    },
    {
      icon: 'fab fa-twitter',
      title: 'Twitter',
      value: '@johnwilbertn',
      link: 'https://twitter.com/johnwilbertn',
      color: '#1DA1F2'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#4ecdc4'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'San Francisco, CA',
      link: null,
      color: '#ff6b6b'
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
        duration: 0.6
      }
    }
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it. Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="info-text">
              <h3>Let's talk about your project</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon" style={{ background: `${info.color}20`, color: info.color }}>
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dev"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fas fa-tag"></i>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project discussion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>

              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  <i className={`fas ${formStatus.success ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-header {
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-text h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: #fff;
        }

        .info-text p {
          color: #b9b9e6;
          line-height: 1.6;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: rgba(15, 15, 28, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          border: 1px solid rgba(108, 108, 255, 0.15);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-3px);
          border-color: rgba(108, 108, 255, 0.3);
        }

        .info-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-size: 20px;
        }

        .info-details h4 {
          font-size: 0.8rem;
          color: #8a8aff;
          margin-bottom: 5px;
        }

        .info-details a,
        .info-details span {
          font-size: 0.85rem;
          color: #b9b9e6;
          text-decoration: none;
          transition: color 0.2s;
        }

        .info-details a:hover {
          color: #6c6cff;
        }

        .social-links h4 {
          margin-bottom: 15px;
          color: #fff;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(15, 15, 28, 0.6);
          border-radius: 50%;
          color: #b9b9e6;
          font-size: 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(108, 108, 255, 0.2);
        }

        .social-icon:hover {
          background: #6c6cff;
          color: white;
          transform: translateY(-3px);
        }

        .contact-form-wrapper {
          background: rgba(15, 15, 28, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 40px;
          border: 1px solid rgba(108, 108, 255, 0.2);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .form-group label i {
          color: #6c6cff;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(108, 108, 255, 0.2);
          border-radius: 10px;
          color: #fff;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6c6cff;
          background: rgba(108, 108, 255, 0.05);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .submit-btn {
          padding: 14px 28px;
          background: linear-gradient(95deg, #6c6cff, #9c4dff);
          border: none;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(108, 108, 255, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-message {
          padding: 12px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
        }

        .form-message.success {
          background: rgba(76, 175, 80, 0.1);
          border: 1px solid rgba(76, 175, 80, 0.3);
          color: #4caf50;
        }

        .form-message.error {
          background: rgba(244, 67, 54, 0.1);
          border: 1px solid rgba(244, 67, 54, 0.3);
          color: #f44336;
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 0;
          }

          .contact-form-wrapper {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;