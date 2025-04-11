import React from 'react';
import { Link } from 'react-router-dom';
import './AiStyleHomePage.css';
import HexagonBackground from '../components/HexagonBackground';
import AiStyleHeader from '../components/AiStyleHeader';

const AiStyleHomePage = () => {
  return (
    <div className="ai-home-page">
      <HexagonBackground />
      <AiStyleHeader />
      
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Automated
            <div className="hero-title-line">Answer Sheet</div>
            <div className="hero-title-line">Evaluation System</div>
          </h1>
          <p className="hero-description">
            Get instant, AI-powered feedback on your academic answers. Upload your
            answer scripts and receive detailed evaluation, scores, and improvement
            suggestions within minutes.
          </p>
          <div className="hero-buttons">
            <Link to="/upload" className="primary-btn">
              Upload Answer Sheet
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link to="/evaluation" className="secondary-btn">
              Evaluate Answers
            </Link>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="/Brain.png" alt="AI Brain" className="brain-image" />
          <div className="circuit-paths">
            <div className="circuit path-1"></div>
            <div className="circuit path-2"></div>
            <div className="circuit path-3"></div>
            <div className="circuit path-4"></div>
            <div className="circuit path-5"></div>
          </div>
          <div className="glowing-nodes">
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="node node-4"></div>
            <div className="node node-5"></div>
            <div className="node node-6"></div>
            <div className="node node-7"></div>
          </div>
        </div>
      </div>
      
      <div className="social-links">
        <a href="#" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
        <a href="#" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="#" aria-label="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </a>
      </div>
      
      <div className="slide-indicators">
        <div className="indicator active"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

export default AiStyleHomePage;