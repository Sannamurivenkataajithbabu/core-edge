import React from "react";
import "./CyberSecurity.css";
import { Link } from "react-router-dom";

function CyberSecurity() {
  const services = [
    "Network Security & Monitoring",
    "Ethical Hacking & Penetration Testing",
    "Web Application Security",
    "Malware & Threat Analysis",
    "Cloud Security & Risk Management",
    "Security Tools & Best Practices",
  ];

  const careerGrowth = [
    "Cyber Security Analyst",
    "SOC Analyst",
    "Ethical Hacker",
    "Security Engineer",
    "Penetration Tester",
    "Information Security Manager",
    "Chief Information Security Officer (CISO)",
  ];

  return (
    <div className="cyber-page">
      {/* Hero Section */}
      <section className="cyber-hero">
  <div className="cyber-hero-content">
    <h1>Cyber Security Training Program</h1>

    <p>
      Protect systems, networks, and data from cyber threats with hands-on training.
    </p>

    <div className="cyber-hero-buttons">
      <Link to="/contact">
        <button className="primary-btn">Enroll Now</button>
      </Link>

      <Link to="/internship">
        <button className="secondary-btn">View Internship</button>
      </Link>
    </div>
  </div>
</section>


      <div className="cyber-content">
        {/* About the Course */}
        <section className="cyber-about">
          <h2>About the Course</h2>
          <p>
            Our Cyber Security program is designed for students and professionals who want to build a strong career in information security and ethical hacking. Learn practical skills through hands-on projects, real-world simulations, and industry tools to safeguard digital assets.
          </p>
        </section>

        {/* What You Will Learn */}
        <section className="cyber-learn">
          <h2>What You Will Learn</h2>
          <ul>
            <li>Cyber Security fundamentals and threat landscape</li>
            <li>Networking & system security best practices</li>
            <li>Ethical hacking & penetration testing methodologies</li>
            <li>Web application security and vulnerability assessment</li>
            <li>Malware, ransomware & threat analysis</li>
            <li>Security tools & industry best practices</li>
          </ul>
        </section>

        {/* Why Choose Cyber Security */}
        <section className="cyber-why">
          <h2>Why Choose Cyber Security?</h2>
          <ul>
            <li><strong>High Demand Career:</strong> Cybersecurity professionals are essential across IT, finance, healthcare, and government sectors.</li>
            <li><strong>Lucrative Salary:</strong> Competitive packages with rapid career growth.</li>
            <li><strong>Hands-on Learning:</strong> Real-world labs, simulations, and projects.</li>
            <li><strong>Industry-Recognized Certification:</strong> Boost employability and credibility.</li>
            <li><strong>Versatile Skills:</strong> Applicable in network security, ethical hacking, and cloud security.</li>
          </ul>
        </section>

        {/* Services */}
        <section className="cyber-services">
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
        <section className="cyber-career">
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

export default CyberSecurity;
