import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import FrontendFullStack from "./pages/FrontendFullStack";
import ScrumMaster from "./pages/ScrumMaster";
import CyberSecurity from "./pages/CyberSecurity";
import BusinessAnalyst from "./pages/BusinessAnalyst";
import ManualAutomationTesting from "./pages/ManualAutomationTesting";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Internship from "./pages/Internship";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/frontend-fullstack" element={<FrontendFullStack />} />
        <Route path="/scrum-master" element={<ScrumMaster />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/business-analyst" element={<BusinessAnalyst />} />
        <Route path="/manual-automation-testing" element={<ManualAutomationTesting />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
