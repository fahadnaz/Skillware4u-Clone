import React from 'react';
import './AboutSection.css';
import {
  FaGraduationCap, FaMobileAlt, FaLaptopCode,
  FaCloud, FaProjectDiagram, FaRobot, FaPaintBrush, FaShieldAlt, FaArrowRight
} from 'react-icons/fa';

import el from '../assets/image/e-learning.webp';
import mobile from '../assets/image/mobile-app.webp';
import web from '../assets/image/website-dev.webp';
import devops from '../assets/image/devops.webp';
import cms from '../assets/image/cms.webp';
import ai from '../assets/image/ai.webp';
import graphic from '../assets/image/graphic.webp';
import cyber from '../assets/image/cybersecurity.webp';

const services = [
  { icon: <FaGraduationCap />, image: el, title: 'E-Learning Solutions', description: 'LMS, Moodle, Talent LMS, Google LMS etc.' },
  { icon: <FaMobileAlt />, image: mobile, title: 'Mobile App Development', description: 'Hybrid/native mobile apps for Android/iOS.' },
  { icon: <FaLaptopCode />, image: web, title: 'Website Development', description: 'React, Next.js, Django, WordPress, Laravel.' },
  { icon: <FaCloud />, image: devops, title: 'DevOps & Cloud Solutions', description: 'CI/CD, AWS, Azure, Docker, Kubernetes.' },
  { icon: <FaProjectDiagram />, image: cms, title: 'CMS Solutions', description: 'Custom LMS, Moodle, Open edX, WordPress etc.' },
  { icon: <FaRobot />, image: ai, title: 'AI Solutions', description: 'NLP, AI assistants, automation & chatbots.' },
  { icon: <FaPaintBrush />, image: graphic, title: 'Graphic & Social Media', description: 'UI/UX, branding, social post design.' },
  { icon: <FaShieldAlt />, image: cyber, title: 'Cybersecurity', description: 'Server security, audit, firewall, monitoring.' },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2 className="about-subtitle">Our Services</h2>
      <h1 className="about-title">Amazing Solution For Business</h1>
      <p className="about-description">
        At Slikertech, our comprehensive IT solutions empower businesses to excel online.
      </p>

      <div className="about-grid">
        {services.map((service, index) => (
          <div key={index} className="about-card">
            <div className="card-header">
              <div className="card-icon">{service.icon}</div>
              <div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
            <img src={service.image} alt={service.title} className="card-image" />
            <div className="card-footer">
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
