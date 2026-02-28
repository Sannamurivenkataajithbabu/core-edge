import React, { useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    
    <div className="home-page">

      {/* HERO }
       <section className="hero">
        <h1>Build Your IT Career with CORE EDGE</h1>
        <p>
          CORE EDGE is a premier software training institute delivering
          industry-focused IT courses with hands-on learning, live projects,
          and career-oriented guidance to make you job-ready.
        </p>
      </section>*/}

      
      <section className="banner-hero">
        <div className="banner-hero-content">
          <h2>Why Choose CORE EDGE Academy?</h2>

          <p>
            We focus on practical learning and real-world exposure.
          </p>

          <h4>
            Take the first step toward your future and begin your IT journey with CORE EDGE Academy today
          </h4>

          <Link to="/contact">
            <button className="hero-btn">Start Learning</button>
          </Link>
        </div>
      </section>


      {/* WHY CORE EDGE */}
      <section className="section">

        <h2 className="section-heading">Build Your Career With Industry Experts</h2>
        <p className="section-sub1">
          We provide real-time training, hands-on experience, and complete placement support.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>Industry Expert Trainers</h3>
            <p>
              Learn from professionals who have 8–15+ years of real-time
              industry experience.
            </p>
          </div>

          <div className="card">
            <h3>Hands-On Practical Training</h3>
            <p>
              Live projects, real-world case studies, and practical
              assignments for every course.
            </p>
          </div>

          <div className="card">
            <h3>Job-Oriented Curriculum</h3>
            <p>
              Course content designed according to current industry needs and
              hiring trends.
            </p>
          </div>

          <div className="card">
            <h3>Placement Assistance</h3>
            <p>
              Resume building, mock interviews, HR sessions, and job referrals.
            </p>
          </div>
        </div>
      </section>

      <div className="home-card">

        {/* LEFT CONTENT */}
        <div className="home-left">

          <h1>
            <span className="brand">CORE EDGE Academy</span> is Best
            Software Training Institute in Hyderabad
          </h1>

          <p>
          At CORE EDGE Academy, we provide top-notch software training
          designed to equip you with the skills needed in today’s competitive
          job market. Our comprehensive courses offer personalized guidance
          from industry experts.
          </p>

          <p>
          Join us for an immersive learning experience where you gain hands-on 
          expertise in the latest technologies. Choose CORE EDGE Academy for 
          excellence in training, industry recognition, and a successful career.
          </p>

          {/* STATS */}
          <div className="home-stats">

            <div className="stat">
              <h3>Years of Excellence</h3>
              <span>5</span>
            </div>

            <div className="stat">
              <h3>Students Enrolled</h3>
              <span>500+</span>
            </div>

            <div className="stat">
             <h3>Successful Placements</h3>
             <span>450+</span>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="home-right">
          <img src="/images/img1.jpg" alt="Students" />
        </div>
      </div>


      {/* OUR SERVICES */}
      <section className="section">
        <h2>Our Services</h2>
        <p className="section-sub1">
          End-to-end training and career support services.
        </p>

        <div className="card-grid">
          <div className="card">
            <img src="/images/online-training.png" alt="Online Training" />
            <h3>Online Training</h3>
            <p>
              Instructor-led live online classes with real-time interaction 
              and recordings.
            </p>
          </div>

          <div className="card">
            <img src="/images/classroom-training.png" alt="Classroom Training" />
            <h3>Classroom Training</h3>
            <p>
              Well-equipped classrooms with hands-on lab sessions and expert
              mentoring.
            </p>
          </div>

          <div className="card">
            <img src="/images/clock.png" alt="clock" />
            <h3>Project Support</h3>
            <p>
              Real-time project guidance and shadow support for working
              professionals.
            </p>
          </div>

          <div className="card">
            <img src="/images/time.png" alt="Flexible Timings" />
            <h3>Flexible Timings</h3>
            <p>
              Weekday and weekend batches designed for students and working
              professionals.
            </p>
          </div>
           
          <div className="card">
            <img src="/images/highly-qualified-trainers.png" alt="Highly Qualified Trainers" />
            <h3>Highly Qualified Trainers</h3>
            <p>
              Trainers with strong technical expertise and real industry
              exposure.
            </p>
          </div>

          <div className="card">
            <img src="/images/highly-qualified-trainers.png" alt="Corporate Training" />
            <h3>Corporate Training</h3>
            <p>
              Customized training programs for corporate teams and enterprises for real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}

      {/* TECHNOLOGIES */}
      <section className="section">
        <h2>Choose CORE EDGE Technologies for Career Growth</h2>
        <p className="section-sub1">
          Best Courses – We offer the most in-demand technologies.
        </p>

        <div className="slider-wrapper">

           <marquee behavior="scroll" direction="left" scrollamount="6">

              <div className="tech-slider">

                {/* FIRST SET */}
              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />
                <h4>Frontend Developer</h4>
                <p>HTML, CSS, JavaScript, React & responsive design.</p>
              </div>

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" />
                <h4>Business Analyst</h4>
                <p>Documentation, stakeholder management, data analysis & Agile.</p>
              </div>

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" />
                <h4>Testing</h4>
                <p>Manual testing, Selenium automation & frameworks.</p>
              </div>

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" />
                <h4>Cyber Security</h4>
                <p>Identify and mitigate security threats.</p>
              </div>

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                <h4>Scrum Master</h4>
                <p>Agile framework & leadership skills.</p>
              </div>

              {/* SECOND SET (Duplicate) */}

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />
                <h4>Frontend Developer</h4>
                <p>HTML, CSS, JavaScript, React & responsive design.</p>
              </div>

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" />
                <h4>Business Analyst</h4>
                <p>Documentation, stakeholder management, data analysis & Agile.</p>
              </div>

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" />
                <h4>Testing</h4>
                <p>Manual testing, Selenium automation & frameworks.</p>
              </div>

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" />
                <h4>Cyber Security</h4>
                <p>Identify and mitigate security threats.</p>
              </div>

              <div className="tech-card">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                <h4>Scrum Master</h4>
               <p>Agile framework & leadership skills.</p>
              </div>

            </div>
          </marquee>

        </div>
      </section>
      {/* OUR TOP RECRUITERS */}
      <section className="section">
        <div className="recruiters-section">
          <h2>Our Top Recruiters</h2>

          <div className="recruiters-slider">
            <div className="recruiters-track">

              <img src="/images/infosys.png" alt="Infosys" />
              <img src="/images/tata-consultancy.png" alt="Tata Consultancy" />
              <img src="/images/hcl.png" alt="HCL" />
              <img src="/images/ibm.png" alt="IBM" />
              <img src="/images/tech-mahindra.png" alt="Tech Mahindra" />
              <img src="/images/cognizant.png" alt="Cognizant" />
              <img src="/images/capgemini-logo.png" alt="Capgemini" />
              <img src="/images/oracle-logo.png" alt="Oracle" />

              {/* Duplicate for smooth loop */}
              <img src="/images/infosys.png" alt="Infosys" />
              <img src="/images/tata-consultancy.png" alt="Tata Consultancy" />
              <img src="/images/hcl.png" alt="HCL" />
              <img src="/images/ibm.png" alt="IBM" />
              <img src="/images/tech-mahindra.png" alt="Tech Mahindra" />
              <img src="/images/cognizant.png" alt="Cognizant" />
              <img src="/images/capgemini-logo.png" alt="Capgemini" />
              <img src="/images/oracle-logo.png" alt="Oracle" />

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your IT Journey Today</h2>
        <p>
          <b>At CORE EDGE Academy, we believe everyone has the potential to build a successful career in IT with the right guidance </b> 
          <b>and practical training. Whether you’re a student, a fresher, or a working professional looking </b>
          <b>to upgrade your skills, CORE EDGE Academy is the right place to start.</b>
        </p>

        <div className="ffs-button-area">
          <Link to="/contact">
            <button className="ffs-button">Enroll Now</button>
          </Link>
          
        </div>

      </section>
    </div>
  );
};

export default Home;
