import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial measure

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3px] bg-white/[0.03] z-[999] pointer-events-none overflow-hidden"
      id="scroll-progress-container"
    >
      <div 
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 shadow-[0_0_10px_rgba(52,211,153,0.7)] transition-all duration-100 ease-out origin-left"
        style={{ 
          transform: `scaleX(${scrollProgress})`,
          width: '100%'
        }}
      />
    </div>
  );
}
