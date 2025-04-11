import React, { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const particleCount = 100;
    let animationFrameId;
    let mouse = { x: null, y: null, radius: 150 };
    
    // Handle canvas resize
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }
    
    // Initialize particles
    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const opacity = Math.random() * 0.5 + 0.3;
        particles.push({ 
          x, 
          y, 
          size, 
          baseX: x, 
          baseY: y,
          density: (Math.random() * 30) + 5,
          color: getRandomColor(opacity)
        });
      }
    }

    // Generate a random color in the purple/pink spectrum
    function getRandomColor(opacity) {
      const hue = Math.random() * 60 + 240; // 240-300 range for purples and pinks
      return `hsla(${hue}, 80%, 65%, ${opacity})`;
    }
    
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fill with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0c0720'); // Deep purple
      gradient.addColorStop(1, '#1a0b33'); // Darker purple
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // If mouse is active, calculate distance and create movement
        if (mouse.x !== null) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          
          // Max distance, past that the particle will no longer move
          const maxDistance = mouse.radius;
          
          // Create a force multiplier based on distance
          let force = (maxDistance - distance) / maxDistance;
          if (force < 0) force = 0;
          
          // Move particle
          let directionX = forceDirectionX * force * p.density;
          let directionY = forceDirectionY * force * p.density;
          
          p.x -= directionX;
          p.y -= directionY;
        }
        
        // Slowly return to original position
        let dx = p.baseX - p.x;
        let dy = p.baseY - p.y;
        p.x += dx * 0.05;
        p.y += dy * 0.05;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(149, 76, 233, ${0.15 - distance / 1200})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // Add some glowing orbs like in the reference image
      drawGlowingOrbs(ctx);
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    function drawGlowingOrbs(ctx) {
      // Create 5-10 larger glowing orbs
      const time = Date.now() * 0.001;
      const orbs = 7;
      
      for (let i = 0; i < orbs; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.sin(time * 0.2 + i * 0.5));
        const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.3 + i * 0.8));
        const size = 20 + 15 * Math.sin(time + i);
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, 'rgba(255, 130, 255, 0.8)');
        gradient.addColorStop(0.3, 'rgba(180, 70, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(120, 0, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
    
    // Mouse move handler
    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    
    // Mouse leave handler
    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }
    
    // Initialize
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    handleResize();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="interactive-background"></canvas>;
};

export default InteractiveBackground;