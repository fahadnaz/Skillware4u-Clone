import React from "react";
import './SimpleSteps.css';
import { FaSearch, FaCode, FaShieldAlt, FaTrophy } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "DISCOVER & DEFINE",
    desc: "Align on goals, users, scope and technical requirements.",
    step: "STEP-01",
  },
  {
    icon: <FaCode />,
    title: "DESIGN & DEVELOP",
    desc: "Craft intuitive interfaces and build robust, scalable code.",
    step: "STEP-02",
  },
  {
    icon: <FaShieldAlt />,
    title: "TEST & SECURE",
    desc: "Perform QA, optimize performance, and harden security.",
    step: "STEP-03",
  },
  {
    icon: <FaTrophy />,
    title: "DEPLOY & SUPPORT",
    desc: "Launch seamlessly with DevOps best practices and maintenance.",
    step: "STEP-04",
  },
];

const StepsSection = () => {
  return (
    <section className="steps-section">
      <h2 className="section-title">Our Simple Easy Steps</h2>
      <p className="section-subtitle">Your vision, our roadmap</p>
      <div className="steps-wrapper">
        {steps.map((item, idx) => (
          <div
            className={`step-card wave-${idx + 1}`}
            key={idx}
          >
            <div className="arrow-head">{item.step}</div>
            <div className="icon-circle">{item.icon}</div>
            <h3 className="step-title">{item.title}</h3>
            <p className="step-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
