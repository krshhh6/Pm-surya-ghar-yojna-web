import React, { useState, useEffect } from 'react';
import { Battery, Zap, ShieldAlert, Cpu, Leaf, Info, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BatteryCard() {
  const [charge, setCharge] = useState<number>(94);
  const [isDischarging, setIsDischarging] = useState<boolean>(false);
  const [houseLoad, setHouseLoad] = useState<number>(1.8); // kW
  const [solarInput, setSolarInput] = useState<number>(4.2); // kW
  const [isOpenSpecs, setIsOpenSpecs] = useState<boolean>(false);

  // Auto charging/discharging modeling simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCharge((prev) => {
        if (isDischarging) {
          const lossRate = (houseLoad / 15) * 0.1; // proportional loss
          const nextVal = prev - lossRate;
          return nextVal <= 0 ? 0 : Number(nextVal.toFixed(2));
        } else {
          // Charging
          const gainRate = ((solarInput - 1.2) / 15) * 0.08; // net gain
          const nextVal = prev + gainRate;
          return nextVal >= 100 ? 100 : Number(nextVal.toFixed(2));
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isDischarging, houseLoad, solarInput]);

  // Hours left calculation
  const batteryTotalKwh = 15.4;
  const currentKwh = (charge / 100) * batteryTotalKwh;
  const netFlow = isDischarging ? -houseLoad : (solarInput - 1.2);
  const hoursLeft = netFlow < 0 
    ? (currentKwh / Math.abs(netFlow)).toFixed(1) 
    : ((batteryTotalKwh - currentKwh) / Math.abs(netFlow)).toFixed(1);

  return (
    <>
      {/* Primary Landing Card representation, matching design aesthetics */}
      <div 
        id="solar-edge-battery-card"
        onClick={() => setIsOpenSpecs(true)}
        className="group relative h-80 bg-gradient-to-br from-[#404D40] to-[#2B352B] rounded-[2.5rem] p-6 flex flex-col justify-between overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:border-white/10 cursor-pointer"
      >
        {/* Glow backdrop light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-emerald-500/15 transition-colors" />

        {/* Title */}
        <div className="relative text-center w-full">
          <p className="font-display font-semibold text-lg tracking-tight text-white/95">Solar Edge Battery</p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-[#A2B6A2] mt-0.5">Premium Storage Cell</p>
        </div>

        {/* Dynamic Vector Battery illustration */}
        <div className="relative flex-1 flex items-center justify-center py-4">
          <div className="relative w-20 h-32 bg-gradient-to-b from-[#F2F2F2] to-[#D5D5D5] rounded-xl border border-white/20 shadow-xl flex flex-col justify-between p-2.5 overflow-hidden">
            {/* Battery inner glowing state of charge ring */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.7),transparent)] pointer-events-none" />
            
            {/* Dynamic level bar inside */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#A9C3A9]/10 border-t border-emerald-400/20" style={{ height: '100%' }} />

            {/* Battery status dot */}
            <div className="flex justify-between items-center relative z-10">
              <span className="text-[8px] font-mono leading-none text-black/50 font-bold">L-01</span>
              {/* Glowing smart ring LED */}
              <div 
                className={`w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center shadow-lg transition-colors duration-500
                  ${charge < 20 
                    ? 'bg-rose-500 shadow-rose-500/50' 
                    : isDischarging 
                      ? 'bg-amber-400 shadow-amber-400/50' 
                      : 'bg-emerald-400 shadow-emerald-400/50 animate-pulse'
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Glowing ring/circle in the middle of battery chassis */}
            <div className="relative z-10 flex flex-col items-center justify-center my-1">
              <div className="w-12 h-12 rounded-full border border-black/5 bg-white/40 shadow-inner flex flex-col items-center justify-center backdrop-blur-xs">
                <span className="text-xs font-mono font-black text-black leading-none">{Math.round(charge)}%</span>
                <span className="text-[6px] font-mono font-bold uppercase text-black/40 mt-0.5">CAP</span>
              </div>
            </div>

            {/* Footer markings */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-black/20" />
                <div className="w-1 h-1 rounded-full bg-black/20" />
              </div>
              <Battery className="w-3.5 h-3.5 text-black/60 fill-current" />
            </div>
          </div>

          {/* Interactive action pointer */}
          <div className="absolute bottom-0 text-[9px] hover:underline font-bold text-[#A2B6A2] flex items-center gap-1">
            <Info className="w-3 h-3 text-[#A2B6A2]" /> Click for detailed specifications
          </div>
        </div>

        {/* Dynamic footer parameter metrics */}
        <div className="relative flex justify-between items-center text-xs text-white/50 border-t border-white/5 pt-3.5">
          <div className="text-left">
            <p className="text-[9px] font-mono uppercase tracking-wider text-[#A2B6A2]">Smart Output</p>
            <p className="font-sans font-bold text-white mt-0.5">{houseLoad} kW</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-mono uppercase tracking-wider text-[#A2B6A2]">Capacity Reserve</p>
            <p className="font-sans font-bold text-white mt-0.5">{currentKwh.toFixed(1)} kWh</p>
          </div>
        </div>
      </div>

      {/* Spec Modal overlay */}
      <AnimatePresence>
        {isOpenSpecs && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpenSpecs(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg glass-panel-heavy rounded-3xl p-6 text-white overflow-hidden shadow-2xl z-10 border border-white/15"
              id="battery-spec-details"
            >
              {/* Glowing accent background */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-5">
                <h4 className="font-display font-extrabold text-xl text-white flex items-center gap-2">
                  <Cpu className="w-5.5 h-5.5 text-emerald-400" /> Solar Edge Unit Diagnostics
                </h4>
                <button
                  onClick={() => setIsOpenSpecs(false)}
                  className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full cursor-pointer text-white/60 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Specs & Controls */}
              <div className="space-y-6">
                {/* Simulated battery dynamic readout */}
                <div className="bg-[#1f2c2b] border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs text-white/50">Capacity reserve level</p>
                    <p className="text-3xl font-display font-extrabold text-[#FFE63B]">{Math.round(charge)}% <span className="text-sm font-light text-white/60">Charged</span></p>
                    <p className="text-[10px] text-white/40">
                      Estimated {hoursLeft} hours of {isDischarging ? 'backup' : 'replenishing'} runtime remaining
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setIsDischarging(!isDischarging)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all text-center
                        ${isDischarging
                          ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                          : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                        }`}
                    >
                      {isDischarging ? '⚡ Outage Backup Active' : '🔌 Standard Charge'}
                    </button>
                  </div>
                </div>

                {/* Simulated HVAC and lighting load slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60 font-medium">Household Active load demand:</span>
                    <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-bold">{houseLoad} kW</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="8.0"
                    step="0.1"
                    value={houseLoad}
                    onChange={(e) => setHouseLoad(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    disabled={!isDischarging}
                  />
                  {!isDischarging && (
                    <p className="text-[9px] text-white/30 italic">Enable "Outage Backup Active" above to simulate running household loads of HVAC or kitchen appliances.</p>
                  )}
                </div>

                {/* Diagnostic technical details */}
                <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                  <div className="bg-white/3 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[9px] text-white/45 font-mono">SPEC STORAGE CAPACITY</span>
                    <p className="font-bold">15.4 kWh Raw</p>
                    <p className="text-[9px] text-white/40">Lithium-Iron Phosphate (LFP)</p>
                  </div>
                  <div className="bg-white/3 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[9px] text-white/45 font-mono">ROUND-TRIP EFFICIENCY</span>
                    <p className="font-bold text-emerald-400">96.5% Net Yield</p>
                    <p className="text-[9px] text-white/40">Among industry highest ranking</p>
                  </div>
                  <div className="bg-white/3 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[9px] text-white/45 font-mono">LIQUID SYSTEM COOLING</span>
                    <div className="font-bold text-white flex items-center gap-1">Active <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /></div>
                    <p className="text-[9px] text-white/40">Automated thermal regulation</p>
                  </div>
                  <div className="bg-white/3 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[9px] text-white/45 font-mono">LIFETIME CYCLES</span>
                    <p className="font-bold">10,000+ Cycles</p>
                    <p className="text-[9px] text-white/40">Includes a 15-year insurance</p>
                  </div>
                </div>

                {/* Specs disclaimer badge */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-[10px] text-white/70 leading-relaxed font-sans">
                    Every SunVault Battery is built using non-toxic cobalt-free cells, making them completely recyclable and environmentally friendly over their operational lifecycle.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
