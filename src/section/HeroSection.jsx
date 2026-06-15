// src/section/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import heroImg from '../assets/image/hero-banner.webp'; // updated webp image with transparent bg + blue bg applied in CSS
import avatar1 from '../assets/image/avatar1.png';
import avatar2 from '../assets/image/avatar2.png';
import avatar3 from '../assets/image/avatar3.png';
import avatar4 from '../assets/image/avatar4.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <p className="small-heading">Skillware4u</p>
          <h1>Empowered by innovation</h1>
          <p className="sub-heading">
            Elevate your e-learning with Skillware4u’s expert Moodle & LMS Setup,
            BigBlueButton integration, and end-to-end IT Solutions—from WordPress Development
            to AI, DevOps, and Cybersecurity.
          </p>

          <div className="hero-reviews">
            <div className="avatars">
              <img src={avatar1} alt="user" />
              <img src={avatar2} alt="user" />
              <img src={avatar3} alt="user" />
              <img src={avatar4} alt="user" />
            </div>
            <div className="reviews-text">
              ⭐⭐⭐⭐⭐ (1k+ Positive Reviews)
              <br />
              We are serving 2k+ customers world-wide
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Business Guy" className="hero-img" />
          <div className="hero-stats">
            <div><strong>85+</strong><span>Projects<br />Completed</span></div>
            <div><strong>97%</strong><span>Happy<br />Customers</span></div>
            <div><strong>17+</strong><span>Global<br />Countries</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
