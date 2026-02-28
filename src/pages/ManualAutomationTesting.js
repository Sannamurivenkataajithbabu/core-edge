import React from "react";
import "./ManualAutomationTesting.css";
import { Link } from "react-router-dom";

function ManualAutomationTesting() {

  const services = [
    "Manual Test Case Design & Execution",
    "Exploratory & UI Testing",
    "Regression Testing",
    "Automation Scripts with Selenium/QTP/Cypress",
    "CI/CD Integration & Testing",
    "Performance & Load Testing"
  ];

  const careerGrowth = [
    "Manual Tester",
    "Automation Tester",
    "QA Engineer",
    "Senior QA Engineer",
    "Test Lead",
    "QA Manager",
    "Automation Architect"
  ];

  return (
    <div className="testing-page">
      {/* Hero Section */}
      {/* Banner Image */}
      <section className="testing-hero">
        <div className="testing-hero-content">
          <h1>Manual & Automation Testing Training</h1>

          <p>
            Master both manual and automation testing to build a successful QA career.
          </p>

          <div className="testing-hero-buttons">
            <Link to="/contact">
              <button className="primary-btn">Enroll Now</button>
            </Link>

            <Link to="/internship">
              <button className="secondary-btn">View Internship</button>
            </Link>
          </div>
        </div>
      </section>



      <div className="testing-content">
        {/* Introduction */}
        <section className="testing-intro">
          <h2>Introduction</h2>
          <p>
            Software testing ensures applications meet quality standards and work as expected. 
            This course covers both <strong>Manual Testing</strong> and <strong>Automation Testing</strong> 
            for a comprehensive QA skillset.
          </p>
        </section>

        {/* Manual Testing */}
        <section className="manual-testing">
          <h2>Manual Testing</h2>
          <p>
            Manual testing involves manually executing test cases without automation tools. 
            It helps ensure software quality, usability, and functionality.
          </p>
          <ul>
            <li>Test case design and execution</li>
            <li>Exploratory testing</li>
            <li>User interface testing</li>
            <li>Regression testing</li>
          </ul>
        </section>

        {/* Automation Testing */}
        <section className="automation-testing">
          <h2>Automation Testing</h2>
          <p>
            Automation testing uses scripts and tools to automate repetitive tasks, increasing efficiency and test coverage.
          </p>
          <ul>
            <li>Tools like Selenium, QTP, or Cypress</li>
            <li>Reduces repetitive tasks and errors</li>
            <li>Faster execution for large projects</li>
            <li>Supports continuous integration and deployment</li>
          </ul>
        </section>

        {/* Services */}
        <section className="testing-services">
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
        <section className="testing-career">
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

export default ManualAutomationTesting;
