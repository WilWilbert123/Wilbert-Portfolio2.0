import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const skillCategories = {
    mobile: {
      name: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      accentColor: 'rgba(97, 218, 251, 0.15)',
      skills: [
        { name: 'React Native', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Swift', icon: 'fab fa-swift', color: '#F05138' },
        { name: 'Expo', icon: 'fas fa-bolt', color: '#ffffff' },
        { name: 'Redux Toolkit', icon: 'fas fa-toolbox', color: '#764ABC' },
        { name: 'Lottie Animation', icon: 'fas fa-film', color: '#00F2FE' },
        { name: 'Google Maps API', icon: 'fas fa-map-marked-alt', color: '#4285F4' },
        { name: 'Firebase FCM', icon: 'fas fa-fire', color: '#FFCA28' }
      ]
    },
    webAi: {
      name: 'Web & AI Stack',
      icon: 'fas fa-laptop-code',
      accentColor: 'rgba(51, 153, 51, 0.12)',
      skills: [
        { name: 'Next.js', icon: 'fas fa-code', color: '#ffffff' },
        { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'TypeScript', icon: 'fas fa-file-code', color: '#3178C6' },
        { name: 'Gemini Vision AI API', icon: 'fas fa-robot', color: '#8E75FF' },
        { name: 'Vite', icon: 'fas fa-bolt', color: '#646CFF' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38BDF8' },
        { name: 'HTML/CSS', icon: 'fab fa-html5', color: '#E34F26' }
      ]
    },
    backendDb: {
      name: 'Backend & Databases',
      icon: 'fas fa-server',
      accentColor: 'rgba(204, 41, 39, 0.1)',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Express', icon: 'fas fa-server', color: '#eeeeee' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'Nginx (Proxy/Routing)', icon: 'fas fa-network-wired', color: '#009639' },
        { name: 'MongoDB Atlas', icon: 'fas fa-database', color: '#47A248' },
        { name: 'MS SQL', icon: 'fas fa-database', color: '#CC2927' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'Stored Procedure', icon: 'fas fa-cogs', color: '#FFB800' },
        { name: 'Database Views', icon: 'fas fa-table', color: '#007ACC' },
        { name: 'Schema Design', icon: 'fas fa-project-diagram', color: '#A06B9C' },
        { name: 'Supabase', icon: 'fas fa-database', color: '#3ECF8E' },
        { name: 'Cloudinary', icon: 'fas fa-cloud', color: '#3448C5' },
        { name: 'Resend SMTP', icon: 'fas fa-envelope', color: '#EAEAEA' },
        { name: 'REST APIs', icon: 'fas fa-plug', color: '#00ADD8' },
        { name: 'NoSQL', icon: 'fas fa-database', color: '#68A063' }
      ]
    },
    desktopEnterprise: {
      name: 'Desktop & Enterprise',
      icon: 'fas fa-desktop',
      accentColor: 'rgba(242, 78, 30, 0.1)',
      skills: [
        { name: 'VB.NET', icon: 'fas fa-code', color: '#5C2D91' },
        { name: 'Crystal Report', icon: 'fas fa-chart-bar', color: '#B2B2B2' },
        { name: 'C#', icon: 'fas fa-code', color: '#239120' }
      ]
    },
    toolsPlatforms: {
      name: 'Tools & Platforms',
      icon: 'fas fa-tools',
      accentColor: 'rgba(255, 204, 0, 0.1)',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'Github', icon: 'fab fa-github', color: '#ffffff' },
        { name: 'Vercel', icon: 'fas fa-triangle', color: '#ffffff' },
        { name: 'Netlify', icon: 'fas fa-cloud', color: '#00C8C8' },
        { name: 'Google Play Console', icon: 'fab fa-google-play', color: '#414141' },
        { name: 'Postman', icon: 'fas fa-space-shuttle', color: '#FF6C37' },
        { name: 'Visual Studio', icon: 'fas fa-code', color: '#5C2D91' },
        { name: 'VS Code', icon: 'fas fa-file-code', color: '#007ACC' },
        { name: 'Antigravity', icon: 'fas fa-rocket', color: '#FF4081' }
      ]
    },
    languages: {
      name: 'Languages',
      icon: 'fas fa-language',
      accentColor: 'rgba(128, 128, 128, 0.1)',
      skills: [
        { name: 'English (Fluent)', icon: 'fas fa-comment-dots', color: '#4DB8FF' },
        { name: 'Filipino (Native)', icon: 'fas fa-comment-dots', color: '#FFD700' }
      ]
    }
  };

  const categoryEntries = Object.entries(skillCategories);
  const visibleCategories = showAll ? categoryEntries : categoryEntries.slice(0, 2);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Technical Skills</h2>
          
        </div>

        <div className="skills-layout-grid">
          {visibleCategories.map(([key, category]) => (
            <div 
              key={key} 
              className={`category-card card-${key}`}
              style={{ '--accent-glow': category.accentColor }}
            >
              <h3 className="category-title">
                <i className={`${category.icon} category-title-icon`}></i>
                {category.name}
              </h3>
              <div className="skills-flex-wrapper">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="interactive-skill-badge"
                    style={{ '--skill-brand-color': skill.color }}
                  >
                    <span className="skill-icon-box">
                      <i className={skill.icon}></i>
                    </span>
                    <span className="skill-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {categoryEntries.length > 2 && (
          <div className="view-all-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              onClick={() => setShowAll(!showAll)} 
              className="btn btn-outline"
              style={{ cursor: 'pointer' }}
            >
              {showAll ? 'View Less' : 'View All Skills'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;