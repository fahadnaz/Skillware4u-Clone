// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../section/HeroSection';
import FeaturesSection from '../section/FeaturesSection';
import AboutSection from '../section/AboutSection';
import SimpleSteps from '../section/SimpleSteps';
import ProjectsSection from '../section/ProjectsSection';
import ContactSection from '../section/ContactSection';
import TestimonialSection from '../section/TestimonialSection';

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <SimpleSteps />
    <ProjectsSection />
    <TestimonialSection />
    <ContactSection />
  </>
);

export default HomePage;
