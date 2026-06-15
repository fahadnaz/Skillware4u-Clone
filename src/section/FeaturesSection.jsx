// src/section/FeaturesSection.jsx
import React from 'react';
import './FeaturesSection.css';
import img1 from '../assets/image/feature1.webp';
import img2 from '../assets/image/feature2.webp';
import img3 from '../assets/image/feature3.webp';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* LEFT IMAGES */}
        <div className="features-images">
          <img src={img1} alt="Feature 1" />
          <img src={img2} alt="Feature 2" />
          <img src={img3} alt="Feature 3" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="features-content">
          <p className="section-subtitle">ABOUT US</p>
          <h2>Elevate Your IT Business To The Next Levels Now</h2>
          <p className="features-description">
            Skillware4u is a global software house dedicated to delivering customized solutions
            that solve real business challenges. Our team’s expertise spans software development,
            digital transformation, and ongoing support—ensuring every project meets your
            objectives on time and within budget.
            We pride ourselves on clear communication, on-time delivery, and a relentless
            focus on customer satisfaction.
          </p>

          <ul className="features-list">
            <li>– Emergency Solutions Anytime</li>
            <li>– Cost-efficient solution</li>
            <li>– Reliable & Experienced Team</li>
          </ul>

          <div className="features-bottom">
            <div className="founder-card">
              <strong>Hasnat Ahmad</strong>
              <p>Chairman & Founder</p>
            </div>

            <div className="contact-support">
              <p>📞 Call Support 24X7</p>
              <strong>+92 315-462 8915</strong>
            </div>

            <div className="started-year">
              <strong>2021</strong>
              <span>Started Journey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
