// src/section/ContactSection.jsx
import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-subtitle">LET'S TALK !</p>
          <h2 className="contact-title">Looking For Support?</h2>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name..." required />
            <input type="email" placeholder="Your Email..." required />
            <input type="text" placeholder="Your Subject..." required />
            <textarea placeholder="Your Message (Optional)..."></textarea>
            <button type="submit">SUBMIT MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
