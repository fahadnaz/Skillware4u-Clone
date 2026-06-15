// src/section/TestimonialSection.jsx
import React from 'react';
import './TestimonialSection.css';
import robertImg from '../assets/image/robert.webp';
import mileyImg from '../assets/image/miley.webp';
import { FaStar } from 'react-icons/fa';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h5>OUR TESTIMONIAL</h5>
        <h2>Client Feedback & Reviews</h2>
        <p>
          Real stories from real clients—discover how our solutions drove their success.
        </p>
      </div>

      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="testimonial-profile">
            <img src={robertImg} alt="Robert Wilson" />
            <div>
              <h4>Robert Wilson</h4>
              <p>CEO Technolinks</p>
            </div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
          <p className="testimonial-text">
            “Skillware4u’s commitment to best practices in security, testing, and documentation made our partnership smooth. The Laravel-based CRM they built is both powerful and easy to maintain.”
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-profile">
            <img src={mileyImg} alt="Miley Henry" />
            <div>
              <h4>Miley Henry</h4>
              <p>Co Founder HIVE</p>
            </div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
          <p className="testimonial-text">
            “From initial scoping to final rollout, Skillware4u’s professionalism stood out. Their Moodle training modules exceeded expectations, and their post-launch support has been outstanding.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
