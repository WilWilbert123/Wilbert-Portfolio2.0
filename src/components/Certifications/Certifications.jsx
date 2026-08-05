import React, { useState } from 'react';
import './Certifications.css';
import ibmCert from '../../assets/Certificates/IBM-YLOXSG22AFYC.jpeg';
import ciscoCert from '../../assets/Certificates/Cybersecurity with cisco.png';
import googleCert from '../../assets/Certificates/GoogleAI.png';
import tesdaInstallingCert from '../../assets/Certificates/Installing and Configuring.png';
import tesdaServicingCert from '../../assets/Certificates/Introduction to Computer Systems Servicing NC II.png';
import microsoftCert from '../../assets/Certificates/Microsoft Cybersecurity.png';
import awsCert from '../../assets/Certificates/AWS.png';
import snowflakeCert from '../../assets/Certificates/SnowflakeDiscoverAi.png';
import smartAndroidCert from '../../assets/Certificates/SMART Android Mobile Apps  .png';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const courses = [
    {
      title: "IBM Full-Stack JavaScript Developer",
      provider: "Coursera / IBM",
      date: "August 2026",
      icon: "fas fa-code",
      color: "#0f62fe",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/YLOXSG22AFYC",
      image: ibmCert
    },
    {
      title: "Cybersecurity Fundamental with Cisco Tools",
      provider: "Coursera / Board Infinity",
      date: "August 2026",
      icon: "fas fa-shield-alt",
      color: "#1ba0d7",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/T0WFQT95HWPK",
      image: ciscoCert
    },
    {
      title: "Google AI",
      provider: "Coursera / Google",
      date: "August 2026",
      icon: "fas fa-robot",
      color: "#4285F4",
      link: "https://www.coursera.org/account/accomplishments/specialization/QKDOSG7NHJYH",
      image: googleCert
    },
    {
      title: "Installing and Configuring Computer Systems",
      provider: "TESDA",
      date: "August 2026",
      icon: "fas fa-cogs",
      color: "#0047AB",
      image: tesdaInstallingCert
    },
    {
      title: "Introduction to Computer Systems Servicing NC II",
      provider: "TESDA",
      date: "August 2026",
      icon: "fas fa-desktop",
      color: "#0047AB",
      image: tesdaServicingCert
    },
    {
      title: "Microsoft Cybersecurity Course: Security, Compliance, and Identity Fundamentals",
      provider: "TESDA",
      date: "August 2026",
      icon: "fas fa-user-shield",
      color: "#00a4ef",
      image: microsoftCert
    },
    {
      title: "AWS Certified AI Practitioner",
      provider: "AWS",
      date: "August 2026",
      icon: "fab fa-aws",
      color: "#FF9900",
      link: "https://skillbuilder.aws/learn/4URFGY63KV/official-practice-question-set-aws-certified-ai-practitioner--aifc01--english/FVG43Y1PAX",
      image: awsCert
    },
    {
      title: "SnowFlake Discover AI",
      provider: "Snowflake",
      date: "July 2026",
      icon: "fas fa-snowflake",
      color: "#29B5E8",
      link: "https://info.snowflake.com/rs/252-RFO-227/images/00QVI00000lCUfE2AW-SNOWFLAKE_DISCOVER_AI-06-10072026.pdf?mkt_tok=MjUyLVJGTy0yMjcAAAGi_YpQtNsuXLZ6q_rpC35VnEbTTNETVUOFsRe6UynxTxt1ipQTW1sdyCHrGlWFxr8OgpE9Ysa9LtWaKWd50OOExs_qKGBKY3dpob64h4US9svPlznyKsc",
      image: snowflakeCert
    },
    {
      title: "SMART Android Mobile Apps Development for Beginners",
      provider: "TESDA",
      date: "February 2024",
      icon: "fab fa-android",
      color: "#3DDC84",
      image: smartAndroidCert
    }
  ];

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">
        <div className="certifications-header">
          <h2 className="section-title">Certifications & Courses</h2>
          <p className="section-subtitle">Continuous learning and professional development</p>
        </div>

        <div className="certifications-grid">
          {visibleCourses.map((course, idx) => {
            const hasLink = course.link || course.image;
            const targetUrl = course.link || course.image;
            const linkIcon = course.link ? "fas fa-external-link-alt" : "fas fa-image";

            const hasImage = !!course.image;

            const CardContent = (
              <>
                {hasImage ? (
                  <div className="cert-image-frame">
                    <img src={course.image} alt={`${course.title} Certificate`} className="cert-image" />
                  </div>
                ) : (
                  <div className="cert-icon-container">
                    <i className={course.icon}></i>
                  </div>
                )}
                <div className="cert-content">
                  <h3 className="cert-title">{course.title}</h3>
                  <p className="cert-provider">{course.provider}</p>
                  <div className="cert-date">
                    <i className="far fa-calendar-alt"></i> {course.date}
                  </div>
                </div>
                {hasLink && (
                  <div className="cert-link-icon">
                    <i className={linkIcon}></i>
                  </div>
                )}
              </>
            );

            return hasLink ? (
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className={`certification-card linked-card ${hasImage ? 'has-image' : ''}`}
                style={{ '--course-color': course.color }}
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={idx}
                className={`certification-card ${hasImage ? 'has-image' : ''}`}
                style={{ '--course-color': course.color }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {courses.length > 3 && (
          <div className="view-all-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              onClick={() => setShowAll(!showAll)} 
              className="btn btn-outline"
              style={{ cursor: 'pointer' }}
            >
              {showAll ? 'View Less' : 'View All Certifications'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
