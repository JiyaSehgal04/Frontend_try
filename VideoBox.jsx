// src/components/VideoBox.jsx
import React, { useRef, useEffect, useState } from 'react';
import './VideoBox.css';

const VideoBox = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video play error:', err));
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVisible]);
  
  return (
    <div className="video-box">
      <div className="video-container">
        <video 
          ref={videoRef} 
          loop 
          muted 
          playsInline
        >
          <source src="/Effects.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-info">
        <h3>AI-Powered Analysis</h3>
        <p>Watch how our system processes and analyzes your answers in real-time.</p>
      </div>
    </div>
  );
};

export default VideoBox;