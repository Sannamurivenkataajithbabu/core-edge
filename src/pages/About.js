import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Building Future IT Professionals</h1>
          <p>
            CORE EDGE Academy delivers industry-driven training programs designed
            to transform beginners into confident software professionals.
          </p>

          <Link to="/contact">
            <button className="hero-btn">Start Learning</button>
          </Link>
        </div>
      </section>

      {/* ABOUT STORY */}
      <section className="about-story">
        <div className="story-grid">

          <div className="story-image">
            <img src="/images/About-banner.jpg" alt="Core Edge Institute Training" />
          </div>

          <div className="story-text">
            <h2>Our Story</h2>

            <p>
              At <strong>CORE EDGE Institute</strong>, we are committed to transforming
              students into industry-ready professionals. Founded with a clear vision
              to bridge the gap between academic knowledge and real-world skills,
              we focus on practical learning and hands-on project experience.
            </p>

             <p>
              Our training programs are designed in collaboration with industry
              experts to ensure students master modern technologies, development
              practices, and problem-solving skills required in today’s competitive market.
            </p>

            <p>
              With dedicated mentorship, real-time projects, and career guidance,
              CORE EDGE empowers students to confidently step into the professional
              world and build successful careers.
            </p>

          </div>

        </div>
      </section>


      {/* MISSION VISION VALUES */}
      <section className="mvv-section">
        <h2 className="section-heading">Our Core Foundation</h2>

        <div className="mvv-container">

          <div className="mvv-card">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="Mission"
              className="mvv-icon"
            />
            <h3>Mission</h3>
            <p>
              Deliver industry-relevant education through hands-on training and
              practical implementation.
            </p>
          </div>

          <div className="mvv-card">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" 
              alt="Vision"
              className="mvv-icon"
            />
            <h3>Vision</h3>
            <p>
              Become a globally trusted software training academy producing
              skilled and innovative IT professionals.
            </p>
          </div>

          <div className="mvv-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" 
            alt="Values"
            className="mvv-icon"
          />
          <h3>Values</h3>
          <ul>
            <li>Innovation & Learning</li>
            <li>Integrity & Transparency</li>
            <li>Student Success</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why container">
        <h2 className="section-heading">Why Choose CORE EDGE</h2>

        <div className="why-grid">

          <div className="why-box">
            <h4>Industry Expert Trainers</h4>
            <p>Learn directly from professionals with real-time project experience.</p>
          </div>

          <div className="why-box">
            <h4>Real-Time Projects</h4>
            <p>Work on live industry-based applications.</p>
          </div>

          <div className="why-box">
            <h4>Placement Support</h4>
            <p>Mock interviews, resume preparation and job assistance.</p>
          </div>

          <div className="why-box">
            <h4>Hands-On Training</h4>
            <p>Practice-driven learning methodology.</p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h3>500+</h3>
          <p>Students Trained</p>
        </div>

        <div className="stat">
          <h3>10+</h3>
          <p>Courses Offered</p>
        </div>

        <div className="stat">
          <h3>10+</h3>
          <p>Expert Trainers</p>
        </div>

        <div className="stat">
          <h3>95%</h3>
          <p>Placement Assistance</p>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="trainers container">
        <h2 className="section-heading">Meet Our Trainers</h2>

        <div className="trainer-wrapper">

          <button
            className="scroll-btn left"
            onClick={() => {
            document.querySelector(".trainer-grid").scrollBy({
            left: -300,
            behavior: "smooth"
            });
            }}
            >
            &lt;
          </button>

          <div className="trainer-grid">

            <div className="trainer-card">
              <h4>Senior Full Stack Trainer</h4>
              <p>10+ Years Industry Experience</p>
              <p><b>- Vishwa Sree & Srikanth</b></p>
            </div>

            <div className="trainer-card">
              <h4>Testing & QA Expert</h4>
              <p>Automation & Manual Testing Specialist</p>
              <p><b>- A.N.K Raju</b></p>
            </div>

            <div className="trainer-card">
              <h4>Scrum Master</h4>
              <p>15+ Years Experience in Agile & scrum</p>
              <p><b>- Naresh Kumar</b></p>
            </div>

            <div className="trainer-card">
              <h4>Business Analyst Trainer</h4>
              <p>Agile & Product Strategy Specialist</p>
              <p><b>- Sushanth</b></p>
            </div>

            <div className="trainer-card">
              <h4>Cyber Security Trainer</h4>
              <p>Network & Ethical Hacking Specialist</p>
              <p><b>- Vivekanandha</b></p>
            </div>

          </div>

          <button
            className="scroll-btn right"
            onClick={() => {
            document.querySelector(".trainer-grid").scrollBy({
            left: 300,
            behavior: "smooth"
            });
            }}
            >
            &gt;
          </button>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready To Build Your IT Career?</h2>
        <p>Join CORE EDGE and gain practical industry experience.</p>

        <Link to="/contact">
          <button>Enroll Now</button>
        </Link>
      </section>

    </div>
  );
}

export default About;