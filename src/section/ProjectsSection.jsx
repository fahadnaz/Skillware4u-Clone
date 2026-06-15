import React from "react";
import "./ProjectsSection.css";
import project1 from "../assets/image/project1.webp";
import project2 from "../assets/image/project2.webp";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <p className="subtitle">LATEST WORKS</p>
        <h2 className="title">Checkout Our Latest Projects</h2>
        <p className="description">
          See how we’ve empowered clients across industries with innovative,
          end-to-end IT solutions—real results, tangible impact, and projects
          that define Skillware4u’s expertise.
        </p>

        <div className="category-buttons">
          <button className="active">E-LEARNING</button>
          <button>WORDPRESS</button>
          <button>OTHER TECHNOLOGY</button>
        </div>
      </div>

      <div className="projects-gallery">
        <img src={project1} alt="Project 1" />
        <img src={project2} alt="Project 2" />
      </div>
    </section>
  );
};

export default ProjectsSection;
