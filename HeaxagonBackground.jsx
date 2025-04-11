import React, { useEffect, useRef } from 'react';
import './HexagonBackground.css';

const HexagonBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawHexagonGrid();
    };
    
    // Draw hexagon grid
    function drawHexagonGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a1a3b');
      gradient.addColorStop(1, '#0f2a5c');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some small dots for stars
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5;
        const opacity = Math.random() * 0.5 + 0.1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 255, 255, ${opacity})`;
        ctx.fill();
      }
      
      // Draw hexagon grid
      const hexSize = 30;
      const hexWidth = hexSize * 2;
      const hexHeight = Math.sqrt(3) * hexSize;
      const cols = Math.ceil(canvas.width / (hexWidth * 0.75)) + 1;
      const rows = Math.ceil(canvas.height / hexHeight) + 1;
      
      for (let r = 0; r < rows; r++) {
        const offset = (r % 2) * (hexWidth / 2);
        
        for (let c = 0; c < cols; c++) {
          const x = c * (hexWidth * 0.75) - offset;
          const y = r * hexHeight;
          
          // Only draw some hexagons randomly
          if (Math.random() < 0.3) {
            drawHexagon(x, y, hexSize, 0.05);
          }
        }
      }
    }
    
    function drawHexagon(x, y, size, opacity) {
      const sides = 6;
      const angle = (Math.PI * 2) / sides;
      
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const sideAngle = i * angle;
        const pointX = x + size * Math.cos(sideAngle);
        const pointY = y + size * Math.sin(sideAngle);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
      
      ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    
    // Initialize
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="hexagon-background"></canvas>;
};

export default HexagonBackground;