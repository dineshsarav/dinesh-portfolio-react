import React, { useEffect, useRef } from 'react';

export default function CyberGridWaves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouse = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let animationFrameId;
    let step = 0;

    // Background starfield particles
    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.6 + 0.2
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      step += 0.015;

      // 1. Draw animated twinkling starfield
      stars.forEach(star => {
        star.y += star.speed;
        if (star.y > height) star.y = 0;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${star.opacity * (0.6 + 0.4 * Math.sin(step + star.x))})`;
        ctx.fill();
      });

      // 2. Multi-layered 3D perspective cyber grid waves
      const gridSpacing = 42;
      ctx.lineWidth = 0.85;

      for (let y = height * 0.15; y < height; y += gridSpacing) {
        ctx.beginPath();
        // Dynamic HSL gradient stroke matching Cyber Violet theme
        const hue = (240 + y * 0.05 + step * 10) % 360;
        ctx.strokeStyle = `hsla(${hue}, 80%, 70%, 0.09)`;

        for (let x = 0; x <= width; x += 20) {
          const waveY = y + Math.sin(x * 0.005 + step + y * 0.012) * 14;

          const dx = x - mouse.x;
          const dy = waveY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let finalY = waveY;
          if (dist < 200) {
            finalY += Math.sin(dist * 0.035) * (200 - dist) * 0.15;
          }

          if (x === 0) ctx.moveTo(x, finalY);
          else ctx.lineTo(x, finalY);
        }
        ctx.stroke();
      }

      // 3. Floating constellation nodes with interactive mouse connections
      const nodeCount = 40;
      for (let i = 0; i < nodeCount; i++) {
        const nx = (Math.sin(step * 0.4 + i * 1.7) * 0.5 + 0.5) * width;
        const ny = (Math.cos(step * 0.3 + i * 2.3) * 0.5 + 0.5) * height;

        ctx.beginPath();
        ctx.arc(nx, ny, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(129, 140, 248, 0.65)' : 'rgba(6, 182, 212, 0.55)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = i % 2 === 0 ? '#818cf8' : '#06b6d4';
        ctx.fill();
        ctx.shadowBlur = 0;

        const mdist = Math.sqrt((nx - mouse.x) ** 2 + (ny - mouse.y) ** 2);
        if (mdist < 180) {
          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - mdist / 180) * 0.45})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="reactbits-grid-canvas" />;
}
