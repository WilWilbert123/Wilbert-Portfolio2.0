import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = {
    frontend: {
      name: 'Frontend & Mobile',
      icon: 'fas fa-mobile-alt',
      accentColor: 'rgba(97, 218, 251, 0.15)', // React Blue glow
      skills: [
        { name: 'React Native', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'TypeScript', icon: 'fas fa-file-code', color: '#3178C6' },
        { name: 'Redux Toolkit', icon: 'fas fa-toolbox', color: '#764ABC' },
        { name: 'Redux (Saga / Thunk)', icon: 'fas fa-code-branch', color: '#86D46D' },
        { name: 'HTML & CSS', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'Vite', icon: 'fas fa-bolt', color: '#646CFF' }
      ]
    },
    backend: {
      name: 'Backend & Cloud',
      icon: 'fas fa-server',
      accentColor: 'rgba(51, 153, 51, 0.12)', // Node Green glow
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Nest.js', icon: 'fab fa-node-js', color: '#E0234E' },
        { name: 'Next.js', icon: 'fas fa-code', color: '#ffffff' },
        { name: 'REST APIs Integration', icon: 'fas fa-plug', color: '#00ADD8' },
        { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
        { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' },
        { name: 'Supabase', icon: 'fas fa-database', color: '#3ECF8E' }
      ]
    },
    legacy: {
      name: 'Enterprise & Databases',
      icon: 'fas fa-layer-group',
      accentColor: 'rgba(204, 41, 39, 0.1)', // Database Red glow
      skills: [
        { name: 'VB.NET', icon: 'fas fa-code', color: '#5C2D91' },
        { name: 'MSSQL', icon: 'fas fa-database', color: '#CC2927' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'Crystal Reports', icon: 'fas fa-chart-bar', color: '#B2B2B2' }
      ]
    },
    designTools: {
      name: 'Design & Deployment',
      icon: 'fas fa-tools',
      accentColor: 'rgba(242, 78, 30, 0.1)', // Figma Orange glow
      skills: [
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
        { name: 'Canva', icon: 'fas fa-palette', color: '#00C4CC' },
        { name: 'Vercel', icon: 'fas fa-triangle', color: '#ffffff' },
        { name: 'Netlify', icon: 'fas fa-cloud', color: '#00C8C8' },
        { name: 'Render', icon: 'fas fa-cube', color: '#46E3B7' }
      ]
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Technical Skills</h2>
          
        </div>

        <div className="skills-layout-grid">
          {Object.entries(skillCategories).map(([key, category]) => (
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
      </div>
    </section>
  );
};

export default Skills;