import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-circle">
            <span>EG</span>
          </div>
          <h1>EduGrader</h1>
        </Link>

        <div className="nav-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/upload" className="nav-link">Upload Answer Sheet</Link>
            </li>
            <li>
              <Link to="/evaluation" className="nav-link">Evaluate Answers</Link>
            </li>
          </ul>
          <div className="nav-cta">
            <Link to="/login" className="login-btn">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;