import React from "react";
import "./ScrumMaster.css";
import { Link } from "react-router-dom";

function ScrumMaster() {
  const services = [
    "Agile & Scrum Implementation",
    "Project Planning & Execution",
    "Sprint Management",
    "Team Facilitation & Coaching",
    "Risk & Issue Management",
    "JIRA & Confluence Project Tools",
  ];

  const careerGrowth = [
    "Scrum Master",
    "Senior Scrum Master",
    "Agile Coach",
    "Project Manager",
    "Product Owner",
    "Program Manager",
  ];

  return (
    <div className="scrum-page">
      {/* Hero Section */}
      {/* Banner Image */}
      <section className="scrum-hero">
        <div className="scrum-hero-content">
          <h1>Scrum Master Certification & Training</h1>

          <p>
            Lead Agile teams with confidence and become a certified Scrum Master.
          </p>

          <div className="scrum-hero-buttons">
            <Link to="/contact">
              <button className="primary-btn">Enroll Now</button>
            </Link>

            <Link to="/internship">
              <button className="secondary-btn">View Internship</button>
            </Link>
          </div>
        </div>
      </section>


      <div className="scrum-content">
        {/* About Program */}
        <section className="scrum-about">
          <h2>About the Program</h2>
          <p>
            Our Scrum Master program equips professionals with in-depth knowledge of Agile principles and Scrum framework. Learn practical project management techniques and lead high-performing teams in real-world scenarios.
          </p>
        </section>

        {/* What You Will Learn */}
        <section className="scrum-learn">
          <h2>What You Will Learn</h2>
          <ul>
            <li>Agile & Scrum fundamentals</li>
            <li>Roles & responsibilities of a Scrum Master</li>
            <li>Sprint planning, daily stand-ups, and retrospectives</li>
            <li>Scrum artifacts & ceremonies</li>
            <li>Using JIRA & Agile project tools efficiently</li>
            <li>Facilitation and team coaching techniques</li>
          </ul>
        </section>

        {/* Tools Covered */}
        <section className="scrum-tools">
          <h2>Tools Covered</h2>
          <ul>
            <li>JIRA – Agile project tracking and reporting</li>
            <li>Confluence – Documentation and collaboration</li>
            <li>MS Excel – Data tracking and reporting</li>
            <li>Agile Boards – Kanban & Scrum boards</li>
          </ul>
        </section>

        {/* Why Choose Scrum Master */}
        <section className="scrum-why">
          <h2>Why Choose Scrum Master?</h2>
          <ul>
            <li><strong>High Demand Role:</strong> Scrum Masters are essential across IT, finance, healthcare, and consulting industries.</li>
            <li><strong>Career Growth:</strong> From Scrum Master to Agile Coach and Project Leader roles.</li>
            <li><strong>Lucrative Salary:</strong> Competitive packages and fast career progression.</li>
            <li><strong>Practical Learning:</strong> Hands-on projects, real-world case studies, and team simulations.</li>
            <li><strong>Industry-Recognized Certification:</strong> Boost employability and credibility.</li>
          </ul>
        </section>

        {/* Services */}
        <section className="scrum-services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Career Growth */}
        <section className="scrum-career">
          <h2>Career Growth</h2>
          <div className="career-steps">
            {careerGrowth.map((role, index) => (
              <div key={index} className="career-step">
                <span>{index + 1}</span>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="ffs-button-area">
          <Link to="/contact">
          <button className="ffs-button">Enroll Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ScrumMaster;
