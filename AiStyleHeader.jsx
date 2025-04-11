import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AiStyleHeader.css';

const AiStyleHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="ai-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-circle">
            <span>EG</span>
          </div>
          <h1>EduGrader</h1>
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/" className="nav-link active">HOME</Link>
          <Link to="/upload" className="nav-link">UPLOAD ANSWER SHEET</Link>
          <Link to="/evaluation" className="nav-link">EVALUATE ANSWERS</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </nav>

        <div className="header-right">
          <Link to="/login" className="login-btn">Login</Link>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AiStyleHeader;