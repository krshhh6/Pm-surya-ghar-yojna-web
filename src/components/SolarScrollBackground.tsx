import React, { useEffect, useRef } from 'react';

export default function SolarScrollBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce autoplay conditions
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    
    // Explicitly trigger play to bypass strict browser interaction policies
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Auto-play was prevented by browser policy", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none bg-black" id="solar-video-bg-container">
      {/* Autoplaying and looping original solar panel video background */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dfvfphe5z/video/upload/v1781065312/0610_egvkyg.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        id="solar-bg-video"
      />
      
      {/* Light gradient overlay to preserve optimal contrast for text over active panels */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#070b0a]/90 pointer-events-none" />
    </div>
  );
}
