import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-col">
          <h3>CORE EDGE Academy</h3>
          <p>
            Do you want to learn programming languages? Many students are 
            nowadays looking forward to learning HTML, CSS, JAVASCRIPT & REACT, BUSINESS ANALYST 
            during and after their graduation. We are one of 
            the best software training institute.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>All Courses</li>
            <li>Placed Students</li>
            <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Trending Courses */}
        <div className="footer-col">
          <h3>Trending Courses</h3>
          <ul>
            <li>
              <Link to="/frontend-fullstack">Frontend Developer</Link>
            </li>

            <li>
              <Link to="/manual-automation-testing">Manual & Automation Testing</Link>
            </li>

            <li>
              <Link to="/scrum-master">Scrum Master</Link>
            </li>

            <li>
              <Link to="/business-analyst">Business Analyst</Link>
            </li>

            <li>
              <Link to="/cyber-security">Cyber Security</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📞 +91-9121461544</p>
          <p>📱 +91-9121461544</p>
          <p>✉ info@coreedgeacademy.com</p>
          <p>
            📍 Flat No: 104, C, Everest Block, ADITYA ENCLAVE, Kumar Basti, Ameerpet, Hyderabad, Telangana 500038
          </p>
        </div>

      </div> 

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 | All Rights Reserved by CORE EDGE Academy
      </div>
    </footer>
  );
}

export default Footer;