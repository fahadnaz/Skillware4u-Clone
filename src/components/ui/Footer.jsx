// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../../assets/image/logo.png';
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h4>About Company</h4>
          <p>
            Skillware4u is a global software house specializing in custom solutions
            for real business challenges. We offer expertise in software development,
            digital transformation, and ongoing support, ensuring projects are
            delivered on time, within budget, and with a focus on customer satisfaction.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li>– E-Learning Solutions</li>
            <li>– Website Development</li>
            <li>– Mobile App Development</li>
            <li>– CMS Solutions</li>
            <li>– DevOps & Cloud Solutions</li>
            <li>– AI Solutions</li>
            <li>– Cybersecurity</li>
            <li>– Graphic Designing & Social Media Management</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Unit 7, Arlington Business Park Road<br />London NW92 1WY</p>
          <p><FaPhoneAlt /> +92 315-462 8915</p>
          <p><FaEnvelope /> info@skillware4u.com</p>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaWhatsapp />
        </div>
        <div className="copyright">
          Copyright © 2025 | <span>Skillware4U</span> | All rights reserved.
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Skillware4u Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
