import React from "react";
import "./FrontendFullStack.css";
import { Link } from "react-router-dom";

function FrontendFullStack() {
  const learningOutcomes = [
    "Build responsive websites",
    "Create React applications",
    "Connect APIs",
    "Deploy live projects",
    "Write production-ready code",
  ];

  const whyChoose = [
    {
      title: "High Demand Career",
      desc: "Opportunities across IT, startups, and tech enterprises",
    },
    {
      title: "Lucrative Salary",
      desc: "Competitive starting pay with fast growth potential",
    },
    {
      title: "Versatile Skillset",
      desc: "Applicable in frontend, full stack, UI/UX, and project work",
    },
    {
      title: "Practical Learning",
      desc: "Hands-on projects, real-time applications, and mentorship",
    },
    {
      title: "Career Growth",
      desc: "Clear path from Junior Developer to Full Stack Engineer",
    },
    {
      title: "Industry Certification",
      desc: "Boost credibility and employability",
    },
  ];

  const careerOpportunities = [
    "Frontend Developer",
    "React Developer",
    "UI Developer",
    "Full Stack Developer",
  ];

  return (
    <div className="ffs-page">

      {/* ===== HERO SECTION ===== */}
      <section className="ffs-hero">
        <div className="ffs-hero-content">
          <h1>Frontend Full Stack Development Course</h1>
          <p>
            Become a job-ready Frontend Developer by mastering HTML, CSS, JavaScript, React, APIs, and real-time projects.
          </p>

          <div className="ffs-hero-buttons">
            <Link to="/contact">
              <button className="primary-btn">Enroll Now</button>
            </Link>
            <Link to="/internship">
              <button className="secondary-btn">View Internship</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== COURSE HIGHLIGHTS ===== */}
      <section className="course-highlights">
        <div className="highlight-card">
          <h3>4+ Months</h3>
          <p>Intensive Training</p>
        </div>
        <div className="highlight-card">
          <h3>Live Projects</h3>
          <p>Hands-on Experience</p>
        </div>
        <div className="highlight-card">
          <h3>Placement Support</h3>
          <p>Career Assistance</p>
        </div>
        <div className="highlight-card">
          <h3>Certification</h3>
          <p>Industry Recognized</p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="ffs-content">

        {/* ABOUT COURSE */}
        <section className="ffs-about">
          <h2>About This Course</h2>
          <p>
            This course transforms beginners into professional Frontend Full Stack Developers.
            You will build responsive applications, integrate APIs, and deploy real-world projects.
          </p>
        </section>

        {/* WHAT YOU WILL LEARN */}
        <section className="ffs-learn">
          <h2>What You Will Learn</h2>
          <ul>
            {learningOutcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* WHY CHOOSE FRONTEND FULL STACK */}
        <section className="ffs-why">
          <h2>Why Choose Frontend Full Stack Development?</h2>
          <ul>
            {whyChoose.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.desc}
              </li>
            ))}
          </ul>
        </section>

        {/* CAREER OPPORTUNITIES */}
        <section className="ffs-career">
          <h2>Career Opportunities</h2>
          <div className="career-steps">
            {careerOpportunities.map((role, index) => (
              <div key={index} className="career-step">
                <span>{index + 1}</span>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="ffs-cta">
          <h1>Start Your Developer Journey Today</h1>
          <h5 className="cta-subtext">
            Join CORE EDGE and become a skilled Frontend Full Stack Developer with industry-focused training, real-time projects, and expert mentorship.
          </h5>
          <div className="cta-buttons">
            <Link to="/contact">
              <button className="primary-btn">Apply Now</button>
            </Link>
            <Link to="/internship">
              <button className="secondary-btn">View Internship</button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

export default FrontendFullStack;
