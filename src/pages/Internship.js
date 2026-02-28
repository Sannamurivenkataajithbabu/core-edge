import React, { useRef } from "react";
import "./Internship.css";

export default function Internship() {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const internships = [
    {
      title: "FRONTEND DEVELOPER",
      desc: "Learn modern frontend technologies like HTML, CSS, JavaScript, and React.",
      img: "/images/frontend developer.png"
    },
    {
      title: "UI Developer with React",
      desc: "Build user-friendly web applications using the popular React.js framework.",
      img: "/images/react.png"
    },
    {
      title: "Business Analyst",
      desc: "Analyze business needs, create strategies, and work with stakeholders.",
      img: "/images/business.png"
    },
    {
      title: "Software Testing",
      desc: "Learn manual and automation testing methods to ensure quality software.",
      img: "/images/testing.png"
    },
    {
      title: "Scrum Master",
      desc: "Lead agile teams and drive efficiency by mastering the Scrum framework.",
      img: "/images/scrum.png"
    },
    {
      title: "CYBER SECURITY ANALYST",
      desc: "Learn to identify and mitigate security threats in modern IT environments.",
      img: "/images/cyber.png"
    },
  ];

  return (
    <div className="internship-page">

      <div className="internship-hero"></div>

      <h1 className="page-title">Explore Our Internship Programs</h1>

      <div className="internship-heading">
        <h1>Hands-on Internships in Industry-Leading Technologies</h1>
        <p>
          Gain real-world experience through practical training, live projects,
          and expert mentorship at CORE EDGE Academy.
        </p>
      </div>

      {/* ===== SCROLL SECTION ===== */}
      <div className="scroll-wrapper">

        <button className="scroll-btn left" onClick={scrollLeft}>
          &lt;
        </button>

        <div className="internship-container" ref={scrollRef}>
          {internships.map((item, index) => (
            <div key={index} className="about-feature-box">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          &gt;
        </button>

      </div>

      {/* Certifications Section */}
      <div className="certification-section">
        <h2>Certifications Provided</h2>
        <p>
          Upon successful completion of your internship, you will receive a
          certification to showcase your newly acquired skills.
        </p>
      </div>

    </div>
  );
}