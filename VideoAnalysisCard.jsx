import React, { useRef, useState } from 'react';
import './VideoAnalysisCard.css';

const VideoAnalysisCard = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play()
          .catch(err => console.log('Video play error:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <div className="video-analysis-card">
      <div className="video-container">
        <video 
          ref={videoRef} 
          loop 
          muted 
          onClick={handlePlay}
          className="analysis-video"
        >
          <source src="/Effects.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <div className="overlay-content">
            <h3>Real-time Analysis</h3>
            <p>Powered by AI</p>
            <button className="play-btn" onClick={handlePlay}>
              {isPlaying ? 'Pause' : 'Play'} Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAnalysisCard;