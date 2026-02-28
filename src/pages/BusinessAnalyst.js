import React from "react";
import "./BusinessAnalyst.css";
import { Link } from "react-router-dom";

function BusinessAnalyst() {
  const services = [
    "Requirement Analysis & Documentation",
    "Process Modeling & Improvement",
    "Data Analysis & Visualization",
    "Agile & Scrum Methodology",
    "Stakeholder Management",
    "Business Process Optimization",
  ];

  const careerGrowth = [
    "Junior Business Analyst",
    "Business Analyst",
    "Senior Business Analyst",
    "Product Analyst",
    "Functional Consultant",
    "Data Analyst",
    "Project Manager",
  ];

  return (
    <div className="ba-page">


      {/* Banner Image */}
      <section className="ba-hero">
        <div className="ba-hero-content">
          <h1>Business Analyst Training Program</h1>

          <p>
            Transform your career by mastering business analysis, data, and process optimization.
          </p>

          <div className="ba-hero-buttons">
            <Link to="/contact">
              <button className="primary-btn">Enroll Now</button>
            </Link>

            <Link to="/internship">
              <button className="secondary-btn">View Internship</button>
            </Link>
          </div>
        </div>
      </section>


      <div className="ba-content">
        {/* About the Course */}
        <section className="ba-about">
          <h2>About the Course</h2>
          <p>
            Our Business Analyst Training Program is designed to turn you into a skilled professional who can bridge the gap between business and technology. You’ll learn how to analyze business needs, optimize processes, and deliver actionable insights using real-world projects and case studies. By the end of this program, you’ll be confident in creating business solutions that drive measurable results.
          </p>
        </section>

        {/* What You Will Learn */}
        <section className="ba-learn">
          <h2>What You Will Learn</h2>
          <ul>
            <li>Master business analysis fundamentals: requirement gathering, stakeholder communication, and process documentation</li>
            <li>Create BRD, FRD, and Use Cases aligned with business objectives</li>
            <li>Model processes using Flowcharts, UML, and BPMN</li>
            <li>Analyze data using Excel, SQL, and BI tools</li>
            <li>Implement Agile & Scrum methodologies in real business scenarios</li>
            <li>Develop problem-solving and critical thinking skills</li>
          </ul>
        </section>

        {/* Tools Covered */}
        <section className="ba-tools">
          <h2>Tools Covered</h2>
          <ul>
            <li>MS Excel – Advanced data analysis and reporting</li>
            <li>SQL – Extract, manipulate, and analyze data efficiently</li>
            <li>Power BI / Tableau – Visualize data and create interactive dashboards</li>
            <li>JIRA & Confluence – Manage projects and document business requirements</li>
            <li>Lucidchart / Draw.io – Process modeling and workflow visualization</li>
          </ul>
        </section>

        {/* Why Choose Business Analyst */}
        <section className="ba-why">
          <h2>Why Choose Business Analyst?</h2>
          <ul>
            <li><strong>High Demand Career:</strong> Opportunities across IT, finance, healthcare, and consulting</li>
            <li><strong>Lucrative Salary:</strong> Competitive starting pay with rapid growth potential</li>
            <li><strong>Versatile Skillset:</strong> Applicable in project management, data analytics, and product management</li>
            <li><strong>Practical Learning:</strong> Hands-on projects, case studies, and real-world simulations</li>
            <li><strong>Career Growth:</strong> Clear path from Junior BA to Senior Analyst or Project Manager</li>
            <li><strong>Industry-Recognized Certification:</strong> Boost credibility and employability</li>
          </ul>
        </section>

        {/* Services */}
        <section className="ba-services">
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
        <section className="ba-career">
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
          <button className="ffs-button">Enroll Now</button></Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessAnalyst;
