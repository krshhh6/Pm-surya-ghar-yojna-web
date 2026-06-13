import React, { useState, useEffect } from 'react';
import { CloudRain, Wind, ShieldCheck, Sun, HelpCircle, ThermometerSnowflake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WeatherCard() {
  const [weatherMode, setWeatherMode] = useState<'Standard' | 'Hurricane' | 'Blizzard' | 'Hailstorm'>('Standard');
  const [panelIntegrity, setPanelIntegrity] = useState<number>(100);
  const [moistureIngress, setMoistureIngress] = useState<number>(0);
  const [windResistance, setWindResistance] = useState<number>(12); // mph
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Simulation parameters based on weather state
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (weatherMode === 'Standard') {
      setMoistureIngress(0);
      setWindResistance(12);
      interval = setInterval(() => {
        setPanelIntegrity((prev) => (prev < 100 ? prev + 1 : 100));
      }, 2000);
    } else if (weatherMode === 'Hurricane') {
      setMoistureIngress(0.002); // close to nothing, IPX8 holds!
      setWindResistance(154); // Class 5 Wind
      interval = setInterval(() => {
        setPanelIntegrity((p) => Math.max(98.5, p - 0.1));
      }, 1000);
    } else if (weatherMode === 'Blizzard') {
      setMoistureIngress(0);
      setWindResistance(62);
      interval = setInterval(() => {
        setPanelIntegrity((p) => Math.max(99.2, p - 0.05));
      }, 1000);
    } else if (weatherMode === 'Hailstorm') {
      setMoistureIngress(0);
      setWindResistance(45);
      interval = setInterval(() => {
        setPanelIntegrity((p) => Math.max(97.1, p - 0.2)); // Small cosmetic abrasion, structural cell perfectly safe
      }, 800);
    }

    return () => clearInterval(interval);
  }, [weatherMode]);

  return (
    <div 
      id="weather-resistant-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-80 bg-white text-black rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-3xl rounded-br-3xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-black/5 transition-all duration-500 hover:scale-[1.01] cursor-pointer"
    >
      {/* Absolute extreme weather animator graphic overlays inside card */}
      <AnimatePresence>
        {weatherMode === 'Hurricane' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.25 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-400 pointer-events-none"
          >
            {/* Animated raindrops lines */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_20%,rgba(0,0,0,0.15)_25%,rgba(0,0,0,0.15)_30%,transparent_35%)] bg-[size:120px_120px] animate-pulse" />
          </motion.div>
        )}
        {weatherMode === 'Blizzard' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.15 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-sky-200 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Floating 360 weather select overlay on hover */}
      <div className="absolute top-3.5 right-6 z-20 flex gap-1 bg-black/5 hover:bg-black/10 px-2 py-1 rounded-full transition-all">
        {['Standard', 'Hurricane', 'Hail'].slice(0,3).map((mode) => {
          const mapMode = mode === 'Hail' ? 'Hailstorm' : mode === 'Standard' ? 'Standard' : 'Hurricane';
          const isSel = weatherMode === mapMode;
          return (
            <button
              key={mode}
              onClick={(e) => {
                e.stopPropagation();
                setWeatherMode(mapMode as any);
              }}
              className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase cursor-pointer transition-colors duration-300
                ${isSel 
                  ? 'bg-black text-white' 
                  : 'text-black/60 hover:text-black hover:bg-black/5'
                }`}
            >
              {mode}
            </button>
          )
        })}
      </div>

      {/* Logo Labeled */}
      <div className="relative text-left z-10">
        <p className="font-display font-black text-xl tracking-tight text-black leading-none">Weather</p>
        <p className="font-display font-medium text-lg tracking-tight text-black/60">resistant</p>
        
        {/* IPX8 rating badge */}
        <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-black text-white font-mono text-[9px] font-black uppercase rounded-sm border border-black/10 tracking-widest">
          IPX8 WATERPROOF
        </span>
      </div>

      {/* Center 3D Fluid Raindrops Artwork illustration */}
      <div className="relative flex-1 flex items-center justify-center p-3 z-10 select-none">
        <div className="relative w-40 h-28 flex items-center justify-center">
          {/* Main sleek rounded block represent solar tile */}
          <div className="absolute w-28 h-20 bg-slate-50 rounded-2xl border border-black/5 shadow-md transform rotate-12 flex items-center justify-center overflow-hidden">
            {/* Gloss reflection line */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/85 to-transparent pointer-events-none" />
            <span className="text-[7px] font-mono text-black/30 font-bold uppercase tracking-widest">Silicon Guard</span>
          </div>

          {/* Falling 3D water droplets vector blobs */}
          <motion.div 
            animate={{ 
              y: weatherMode === 'Hurricane' ? [0, 40, 0] : [0, 12, 0],
              x: weatherMode === 'Hurricane' ? [0, -10, 0] : [0, 0, 0]
            }} 
            transition={{ repeat: Infinity, duration: weatherMode === 'Hurricane' ? 0.6 : 2.5, ease: "easeInOut" }}
            className="absolute top-2 right-12 w-8 h-8 bg-gradient-to-tr from-sky-400/30 to-sky-100/10 rounded-full blur-xs flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-white/75 rounded-tl-[80px] rounded-br-[80px] rounded-bl-[80px] rounded-tr-[5px] transform rotate-45 border border-sky-300/30 shadow-sm" />
          </motion.div>

          {/* Symmetrical water drop on left side */}
          <motion.div 
            animate={{ 
              y: weatherMode === 'Hurricane' ? [0, 32, 0] : [0, 8, 0],
              scale: [0.9, 1.1, 0.9]
            }} 
            transition={{ repeat: Infinity, duration: weatherMode === 'Hurricane' ? 0.8 : 3.0, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-10 left-10 w-6 h-6 bg-gradient-to-tr from-sky-400/20 to-transparent rounded-full blur-xs flex items-center justify-center"
          >
            <div className="w-2.5 h-2.5 bg-white/80 rounded-tl-[80px] rounded-br-[80px] rounded-bl-[80px] rounded-tr-[5px] transform rotate-45 border border-sky-300/20 shadow-sm" />
          </motion.div>
        </div>
      </div>

      {/* Dynamic bottom metrics reporting status */}
      <div className="relative border-t border-black/5 pt-3.5 z-10">
        <div className="flex justify-between items-center text-xs">
          <div>
            <p className="text-[9px] font-mono uppercase tracking-wider text-black/40">Wind Endurance</p>
            <p className="font-sans font-extrabold text-black mt-0.5 flex items-center gap-1">
              <Wind className="w-3.5 h-3.5 text-black/60 shrink-0" /> {windResistance} <span className="font-medium text-black/60 text-[10px]">mph</span>
            </p>
          </div>

          <div className="text-right">
            <p className="text-[9px] font-mono uppercase tracking-wider text-black/40">Shell Integrity</p>
            <p className="font-sans font-extrabold text-black mt-0.5 flex items-center justify-end gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {panelIntegrity.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Informative alert subtext during extreme mode */}
        {weatherMode !== 'Standard' && (
          <div className="mt-2 bg-black/5 px-2.5 py-1 rounded-lg text-[9px] text-black/70 flex items-center justify-between font-mono animate-pulse">
            <span>MODE: {weatherMode.toUpperCase()}</span>
            <span>INGRESS: {moistureIngress === 0 ? '0.00%' : '0.01%'} (HOLDING)</span>
          </div>
        )}
      </div>
    </div>
  );
}
