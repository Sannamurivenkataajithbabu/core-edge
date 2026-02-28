import { Link } from "react-router-dom";
/*import "./Header.css";*/
import "./../styles/Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header-inner">
        {/* LOGO + BRAND */}
        <div className="brand">
          <img
            src="/assets/logo.png"
            alt="Core Edge Logo"
            className="logo"
          />
        </div>

        {/* NAVBAR */}
        <nav className="navbar">
          <Link to="/">Home</Link>

          <div className="dropdown">
            <span className="dropbtn">Courses ▾</span>
            <div className="dropdown-content">
              <Link to="/frontend-fullstack">
                Frontend Full Stack Development
              </Link>
              <Link to="/cyber-security">Cyber Security</Link>
              <Link to="/business-analyst">Business Analyst</Link>
              <Link to="/manual-automation-testing">
                Manual & Automation Testing
              </Link>
              <Link to="/scrum-master">Scrum Master</Link>
            </div>
          </div>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/internship">Internship</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
