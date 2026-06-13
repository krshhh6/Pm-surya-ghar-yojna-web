import React, { useState } from 'react';
import { Sun, AlertCircle, Radio, BatteryCharging, Power, Sliders, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SpecsHotspotsProps {
  onDiscoverModelsClick: () => void;
  onTakeOrderClick: () => void;
}

export default function SpecsHotspots({ onDiscoverModelsClick, onTakeOrderClick }: SpecsHotspotsProps) {
  const [sunPosition, setSunPosition] = useState<number>(14); // 24-hour cycle (noon-ish by default)
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  // Math equations correlating solar output to sun hours / position
  const calculateOutput = (): number => {
    if (sunPosition < 6 || sunPosition > 18) return 0; // Dark
    // Parabolic output peaking at 12:00
    const x = sunPosition - 12;
    const maxOutputKw = 50.4;
    const output = maxOutputKw * Math.cos((x * Math.PI) / 13);
    return Number(Math.max(0, output).toFixed(1));
  };

  const activeOutput = calculateOutput();

  // Sky backdrop styles matching the selected celestial hour
  const getSkyFilter = () => {
    if (sunPosition < 6 || sunPosition > 19) {
      return 'from-[#0B1213] via-[#101918] to-[#0A0D0C]'; // Midnight Deep Space
    } else if (sunPosition >= 6 && sunPosition < 9) {
      return 'from-[#2C3839] via-[#3A4532] to-[#121A1A]'; // Golden Dawn
    } else if (sunPosition >= 9 && sunPosition < 16) {
      return 'from-[#3A4E4F] via-[#2F3F3E] to-[#1A2421]'; // Crisp Solar Peak Blue-Teal
    } else {
      return 'from-[#2D2A37] via-[#4F3F3A] to-[#141A1A]'; // Dusty Sunset Amber
    }
  };

  // House window brightness mapping
  const getWindowBrightness = () => {
    if (sunPosition < 7 || sunPosition > 17) return 'opacity-100 shadow-[0_0_30px_rgba(242,201,76,0.6)] border-amber-300'; // Fully illuminated at night
    if (sunPosition >= 7 && sunPosition < 9) return 'opacity-65 border-amber-400';
    if (sunPosition >= 16 && sunPosition <= 17) return 'opacity-70 border-amber-400';
    return 'opacity-25 border-white/20'; // Day mode, dim
  };

  // Hotspots definitions
  const hotspotsData = [
    {
      id: 'sunpower-shingles',
      label: 'SUN POWER',
      title: 'Tier-1 Mono PERC Solar Panels',
      x: '38%',
      y: '38%',
      desc: 'High efficiency 550Wp+ Monocrystalline PERC half-cut PV modules. Approved under ALMM by MNRE, offering 22.8% cell efficiency with 25 years warranty.'
    },
    {
      id: 'wattage-sensor',
      label: `${activeOutput > 0 ? activeOutput + ' kW' : '⚡ 0 kW (Standby)'}`,
      title: 'On-Grid Smart Inverter Sync',
      x: '52%',
      y: '48%',
      desc: 'Real-time solar current conversion synchronizing instantly with your bi-directional state electricity grid (net metering).'
    }
  ];

  const getSunLabel = () => {
    if (sunPosition < 6 || sunPosition > 19) return 'Midnight Standby';
    if (sunPosition >= 6 && sunPosition < 9) return 'Morning Dawn';
    if (sunPosition >= 9 && sunPosition < 16) return 'Solar Maximum';
    return 'Dusk Reflection';
  };

  return (
    <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(31,50,43,0.3)] bg-gradient-to-b from-[#1E2725] to-[#121917] select-none" id="hero-stage">
      
      {/* Sky backdrop blending box */}
      <div className={`absolute inset-x-0 top-0 h-64 bg-gradient-to-b ${getSkyFilter()} transition-all duration-1000 ease-in-out`} />

      {/* Grid Landscape overlays */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[#101614] border-t border-white/[0.03] overflow-hidden pointer-events-none">
        {/* Dynamic perspective grid overlay matching background meadow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,213,66,0.02),transparent)] pointer-events-none" />
        <div style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '40px 40px' }} className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      {/* Main visual core content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side Sub-card, fully matching image text layout */}
        <div className="lg:col-span-3 space-y-5 lg:self-center relative z-10">
          <div className="inline-block px-3 py-1 bg-white/[0.04] border border-white/15 rounded-lg border-emerald-500/20">
            <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-widest uppercase">MNRE APPROVED</span>
          </div>
          <div className="space-y-4">
            <h4 className="font-display font-medium text-lg text-white leading-relaxed max-w-xs">
              Explore premium solar brands with MNRE specifications.
            </h4>
            <div className="flex flex-col gap-2 pt-1">
              <button 
                onClick={onDiscoverModelsClick}
                className="font-display font-bold text-xs uppercase tracking-wider text-white hover:text-emerald-400 transition-all duration-300 text-left relative inline-flex items-center gap-2 group cursor-pointer w-fit"
                id="discover-models-link"
              >
                Explore Brands Catalog
                <span className="absolute bottom-[-4px] left-0 right-0 h-[1.5px] bg-white group-hover:bg-emerald-400 group-hover:scale-x-105 transition-all" />
              </button>
              
              <button 
                onClick={onTakeOrderClick}
                className="font-display font-bold text-xs uppercase tracking-wider text-[#FFE63B] hover:text-white transition-all duration-300 text-left relative inline-flex items-center gap-2 group cursor-pointer w-fit mt-3"
                id="take-order-link"
              >
                Check Subsidy Sizer
                <span className="absolute bottom-[-4px] left-0 right-0 h-[1.5px] bg-[#FFE63B] group-hover:bg-white group-hover:scale-x-105 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Center / Right Visual Architectural Display Stage */}
        <div className="lg:col-span-6 relative w-full h-[320px] md:h-[380px] bg-black/15 rounded-3xl border border-white/5 overflow-hidden flex items-end justify-center">
          
          {/* Futuristic Trajectory Arc Guidance Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d={`M ${Array.from({ length: 41 }).map((_, i) => {
                const p = i / 40;
                const x = 5 + p * 90;
                const y = 100 - (12 + Math.sin(p * Math.PI) * 65);
                return `${x},${y}`;
              }).join(' L ')}`}
              fill="none"
              stroke="rgba(255, 230, 59, 0.18)"
              strokeWidth="0.75"
              strokeDasharray="2 2"
            />
          </svg>

          {/* Dynamic Celestial Sun Ball graphic that travels on slider changes */}
          <motion.div
            animate={{
              left: `${5 + ((sunPosition - 4) / 18) * 90}%`,
              bottom: `${12 + Math.sin(((sunPosition - 4) / 18) * Math.PI) * 65}%`
            }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="absolute w-11 h-11 rounded-full flex items-center justify-center pointer-events-none z-10 -ml-[22px] -mb-[22px]"
            style={{ 
              background: 'radial-gradient(circle, #FFFDF0 0%, #FFF2A2 30%, #FFD542 60%, transparent 100%)',
              boxShadow: '0 0 45px #FFD542, 0 0 90px rgba(255,213,66,0.7), inset 0 0 15px rgba(255,255,255,0.6)',
              opacity: sunPosition < 5 || sunPosition > 21 ? 0 : 0.9
            }}
          />

          {/* Mountains Silhouette */}
          <div className="absolute inset-x-0 bottom-12 h-24 bg-[#141d1b] [clip-path:polygon(0%_100%,12%_64%,28%_85%,45%_55%,62%_78%,78%_45%,92%_75%,100%_100%)] opacity-35 pointer-events-none" />

          {/* Luxury Architectural Villa Model (High Visual Fidelity CSS Rendering) */}
          <div className="relative w-72 md:w-80 h-64 flex items-end justify-center z-10 mb-2">
            
            {/* Main angled concrete modern framework block */}
            <div className="absolute bottom-0 w-64 h-36 bg-[#2D3331] rounded-lg border border-white/10 shadow-2xl flex flex-col justify-end p-2 overflow-hidden">
              {/* Internal luxurious structural pillars & layout */}
              <div className="absolute bottom-0 left-8 w-1 h-20 bg-black/40" />
              <div className="absolute bottom-0 left-32 w-1 h-20 bg-black/40" />

              {/* Glowing Warm Orange/Gold Luxury Glass Windows - responsive illumination levels */}
              <div className={`absolute inset-x-1 bottom-1 top-6 rounded-md bg-gradient-to-t from-amber-500/80 via-amber-400/90 to-amber-300 border transition-all duration-1000 ease-in-out ${getWindowBrightness()}`}>
                {/* Simulated luxury furniture shadow blocks inside glass */}
                <div className="absolute bottom-0 left-10 w-12 h-6 bg-black/30 rounded-t-md" />
                <div className="absolute bottom-0 right-8 w-8 h-10 bg-black/35 rounded-t-md" />
              </div>

              {/* Vertical accent panel */}
              <div className="absolute top-0 right-4 w-12 h-full bg-[#1F2422]/90 border-l border-white/5" />
            </div>

            {/* Overhanging Angled Floating Monocrystalline Solar Roof Structure */}
            <div className="absolute bottom-28 w-72 h-14 bg-slate-800 rounded-t-md border-t-2 border-white/30 transform -skew-x-12 rotate-[-5deg] shadow-[0_-5px_15px_rgba(0,0,0,0.4)] flex overflow-hidden">
              {/* Vector Solar Shingles divisions */}
              {Array.from({ length: 8 }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={`flex-1 h-full border-r border-[#1B2120] relative
                    ${idx % 2 === 0 ? 'bg-gradient-to-b from-slate-800 to-slate-900' : 'bg-gradient-to-b from-slate-900 to-slate-950'}
                  `}
                >
                  {/* Glowing neon trace light line */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-amber-400/80 shadow-[0_0_8px_#F2C94C] animate-pulse" />
                </div>
              ))}
            </div>

            {/* Vertical solar chimney stack accent */}
            <div className="absolute bottom-16 right-4 w-5 h-20 bg-[#242A28] border border-white/10 flex flex-col justify-between p-1">
              <div className="w-full h-[2px] bg-amber-400 shadow-[0_0_6px_#FFE63B] animate-pulse" />
              <div className="w-full h-1 bg-[#1a1f1e]" />
            </div>

            {/* Landscape elements */}
            <div className="absolute bottom-0 w-80 h-3 bg-gradient-to-r from-emerald-950/80 via-transparent to-emerald-950/80 rounded-full blur-xs" />
          </div>

          {/* Hotspots Overlays on House representation */}
          {hotspotsData.map((hs) => {
            const isSelected = selectedHotspot === hs.id;
            return (
              <div
                key={hs.id}
                className="absolute z-30 flex flex-col items-center group/hs"
                style={{ left: hs.x, top: hs.y }}
              >
                {/* Pointer Badge Container */}
                <button
                  onClick={() => setSelectedHotspot(isSelected ? null : hs.id)}
                  id={`hotspot-${hs.id}`}
                  className="flex items-center gap-1.5 bg-white text-black text-[9px] font-mono font-black scale-95 group-hover/hs:scale-100 hover:bg-[#FFE63B] px-2.5 py-1 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 animate-float"
                >
                  <Sun className="w-3 h-3 text-black fill-current animate-spin-slow" />
                  <span>{hs.label}</span>
                </button>

                {/* Connecting Vector Glowing Stick Line */}
                <div className="w-[1.5px] h-6 bg-gradient-to-b from-white to-transparent shadow-[0_0_4px_#FFE63B]" />

                {/* Tooltip Content popup */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-12 w-60 p-4 rounded-xl bg-[#202C26] border border-white/10 text-white z-40 shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-center space-y-1.5"
                    >
                      <p className="font-display font-bold text-xs text-sun-yellow">{hs.title}</p>
                      <p className="font-sans text-[10px] text-white/70 leading-relaxed">{hs.desc}</p>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedHotspot(null); }}
                        className="text-[9px] uppercase tracking-widest font-mono text-white/50 hover:text-white underline block mx-auto cursor-pointer"
                      >
                        Dismiss spec
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Side Info Section */}
        <div className="lg:col-span-3 space-y-4 relative z-10 self-center">
          <p className="font-display font-semibold text-lg text-white leading-relaxed max-w-sm">
            Have electricity ready for emergencies with ☀️ sun
          </p>
          <div className="bg-[#1f2c2b]/80 border border-white/5 p-4 rounded-2xl space-y-3.5 shadow-lg backdrop-blur-inner">
            <div className="flex items-center gap-2">
              <BatteryCharging className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="font-mono text-[9px] uppercase text-[#7BA69C] tracking-wider">Dynamic Helios Stats</span>
            </div>
            
            <div className="space-y-1.5 font-sans">
              <div className="flex justify-between text-xs">
                <span className="text-white/60">Celestial position:</span>
                <span className="font-mono font-bold text-white capitalize">{getSunLabel()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/60">Harvest Output:</span>
                <span className="font-mono font-black text-sun-yellow">{activeOutput} kW</span>
              </div>
            </div>

            {/* Heliostat Celestial Controller Slider */}
            <div className="space-y-1.5 border-t border-white/5 pt-2.5">
              <div className="flex justify-between text-[9px] uppercase font-mono text-white/40">
                <span>Celestial Lever</span>
                <span>{sunPosition}:00 Hours</span>
              </div>
              <input
                type="range"
                min="4"
                max="22"
                step="1"
                value={sunPosition}
                onChange={(e) => setSunPosition(Number(e.target.value))}
                className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-sun-yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
