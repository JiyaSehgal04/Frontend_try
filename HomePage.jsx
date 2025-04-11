import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import InteractiveBackground from '../components/InteractiveBackground';

const HomePage = () => {
  // References for animation elements
  const heroSectionRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Initialize intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (heroSectionRef.current) observer.observe(heroSectionRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    
    return () => {
      if (heroSectionRef.current) observer.unobserve(heroSectionRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <div className="home-page">
      <InteractiveBackground />
      
      <section className="hero-section" ref={heroSectionRef}>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Automated 
              <span className="text-gradient">Answer Sheet</span> 
              Evaluation System
            </h1>
            <p className="hero-description">
              Get instant, AI-powered feedback on your academic answers. Upload your answer scripts and receive detailed evaluation, scores, and improvement suggestions within minutes.
            </p>
            <div className="hero-buttons">
              <Link to="/upload" className="btn-primary">
                Upload Answer Sheet
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/evaluation" className="btn-secondary">
                Evaluate Answers
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img src="/Home.jpg" alt="EduGrader - Automated Answer Evaluation" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section" ref={featuresRef}>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </div>
              <h3>Upload Documents</h3>
              <p>Upload your answer sheet in PDF, DOC, or DOCX format using our simple interface.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <polyline points="23 20 23 14 17 14"></polyline>
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                </svg>
              </div>
              <h3>AI Processing</h3>
              <p>Our advanced AI analyzes your answers comparing them with ideal responses.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Detailed Results</h3>
              <p>Get comprehensive evaluation with scores, strengths, and areas for improvement.</p>
            </div>
          </div>
          
          <div className="video-analysis">
            <div className="video-container">
              <video loop muted playsInline autoPlay>
                <source src="/Effects.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay">
                <div className="overlay-content">
                  <h3>AI-Powered Analysis</h3>
                  <p>Advanced algorithms providing accurate evaluation</p>
                </div>
              </div>
            </div>
            <div className="analysis-metrics">
              <div className="metric">
                <h4>Accuracy</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '95%' }}></div>
                </div>
                <span>95%</span>
              </div>
              <div className="metric">
                <h4>Processing Speed</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '98%' }}></div>
                </div>
                <span>98%</span>
              </div>
              <div className="metric">
                <h4>Detailed Feedback</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '92%' }}></div>
                </div>
                <span>92%</span>
              </div>
              <div className="metric">
                <h4>User Satisfaction</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '97%' }}></div>
                </div>
                <span>97%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <h2>Ready to enhance your evaluation process?</h2>
          <p>Start using our AI-powered answer sheet evaluation system today.</p>
          <Link to="/upload" className="btn-primary cta-btn">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;