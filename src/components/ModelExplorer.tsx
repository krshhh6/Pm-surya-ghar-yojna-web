import React, { useState } from 'react';
import { X, Check, Shield, Sun, Weight, ChevronRight, Zap, Phone, Heart, IndianRupee, Award, Leaf, Layers, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SolarModel } from '../types';

interface ModelExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  onTakeOrder: (modelName: string) => void;
}

// MNRE Approved High Efficiency Tier-1 Models as per Patna distribution schema
const BRANDS_DATA = [
  {
    id: 'tata-power',
    name: 'Tata Power Solaroof',
    efficiency: 22.4,
    cellType: 'Monocrystalline' as const,
    roofCompat: 'Standard Pitched & RCC Flat Roofs',
    warranty: 25,
    pricePerKw: 70000,
    tagline: 'India\'s Most Trusted Tier-1 Solar brand',
    description: 'Constructed with premium high-reliability solar cells of anti-induction capability, offering superior micro-generation efficiency even under monsoon shade conditions in Patna.'
  },
  {
    id: 'adani-solar',
    name: 'Adani Solar',
    efficiency: 22.8,
    cellType: 'Monocrystalline' as const,
    roofCompat: 'RCC roofs, elevated structures',
    warranty: 25,
    pricePerKw: 70000,
    tagline: 'Leading technology for high temperatures',
    description: 'Adani high-capacity panels capture maximum energy under the hot summers of Bihar with an excellent temperature coefficient, ensuring continuous peak performance.'
  },
  {
    id: 'waaree-solar',
    name: 'Waaree Solar Mono',
    efficiency: 23.1,
    cellType: 'Bifacial' as const,
    roofCompat: 'Pitched, corrugated tin & high-rise roofs',
    warranty: 25,
    pricePerKw: 70000,
    tagline: 'One with the Sun - Global Tier-1 Certification',
    description: 'Leveraging bifacial reflection technology to tap light from both sides, guaranteeing up to an extra 15% generation over traditional arrays.'
  },
  {
    id: 'luminous-solar',
    name: 'Luminous Solar',
    efficiency: 21.8,
    cellType: 'Monocrystalline' as const,
    roofCompat: 'Residential residential setups & brick clay tiles',
    warranty: 25,
    pricePerKw: 70000,
    tagline: 'Advanced smart charge & grid syncing',
    description: 'Engineered for exceptional low-light performance on cloudy days. Fully compliant with modern on-grid DISCOM smart-meter standards.'
  },
  {
    id: 'utl-solar',
    name: 'UTL Solar Intelligent',
    efficiency: 22.1,
    cellType: 'Monocrystalline' as const,
    roofCompat: 'Brick roofs, slate tile surfaces',
    warranty: 25,
    pricePerKw: 70000,
    tagline: 'Complete on-grid intelligent solar inverter systems',
    description: 'Comes combined with state-of-the-art intelligent string systems that protect your home appliances against voltage surges while optimizing direct solar dispatch.'
  }
];

// Exact Pricing and Subsidy Matrix from the uploaded advertisement image
interface TierConfig {
  kw: number;
  unitMonth: string;
  price: number;
  subsidy: number;
  bonusDiscount?: number; // Aqua special bonus
  totalAmt: number;
  suitsAppliances: string;
}

const TIER_MATRIX: TierConfig[] = [
  { kw: 1, unitMonth: "150 - 200", price: 90000, subsidy: 30000, totalAmt: 60000, suitsAppliances: "LED Lights, Fans, Smart TV & Water Purifier" },
  { kw: 2, unitMonth: "300 - 350", price: 150000, subsidy: 60000, totalAmt: 90000, suitsAppliances: "1 AC (1 Ton), Small Refrigerator, Water Pump & Lights" },
  { kw: 3, unitMonth: "450 - 550", price: 210000, subsidy: 78000, bonusDiscount: 11000, totalAmt: 121000, suitsAppliances: "2 ACs (1.5 Ton), Washing Machine, Deep Fridge, Computers & Pumps" },
  { kw: 4, unitMonth: "500 - 650", price: 280000, subsidy: 78000, totalAmt: 202000, suitsAppliances: "Whole House Load, Heavy Water Pumps & Submersible Induction Motors" },
  { kw: 5, unitMonth: "750 - 680", price: 350000, subsidy: 78000, totalAmt: 272000, suitsAppliances: "Commercial Office Spaces, High-Capacity Building loads & AC Blocks" },
  { kw: 6, unitMonth: "1000 - 1100", price: 410000, subsidy: 78000, totalAmt: 332000, suitsAppliances: "Multi-story dwellings, Heavy HVAC cooling, EV Chargers & Elevators" }
];

const ROOFTOP_BENEFITS = [
  { title: "Renewable Source", desc: "Infinite green power straight from the sun" },
  { title: "Utilize Unused Roof Space", desc: "Convert vacant terraces into profit engines" },
  { title: "Low Maintenance Cost", desc: "No complex moving parts, robust 25-yr life" },
  { title: "Quick Loan Facility", desc: "Easy financing with low interest support" },
  { title: "Eco Friendly", desc: "Conserve carbon footprints securely and cleanly" }
];

const HELPLINE_PHONES = [
  { num: "9386945647", tag: "Primary Desk" },
  { num: "9304941212", tag: "Billing Desk" },
  { num: "9534331212", tag: "Site Surveyor" },
  { num: "9334030230", tag: "Liaison Office" }
];

export default function ModelExplorer({ isOpen, onClose, onTakeOrder }: ModelExplorerProps) {
  const [selectedBrandId, setSelectedBrandId] = useState<string>('waaree-solar');
  const [selectedKw, setSelectedKw] = useState<number>(3); // Standard 3kW promotion
  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  const activeBrand = BRANDS_DATA.find(b => b.id === selectedBrandId) || BRANDS_DATA[2];
  const activeTier = TIER_MATRIX.find(t => t.kw === selectedKw) || TIER_MATRIX[2];

  const handleBookNow = () => {
    setIsOrdered(true);
    onTakeOrder(`${activeBrand.name} - ${activeTier.kw}kW System`);
    
    // Auto-redirect to WhatsApp check
    const textStr = `Hi New Aqua Home Appliances! I am looking to install a ${activeTier.kw} kW solar plant using MNRE Approved ${activeBrand.name}. Proposal price: ₹${activeTier.price.toLocaleString()} with ₹${activeTier.subsidy.toLocaleString()} Govt. Subsidy. Final Payable Amount: ₹${activeTier.totalAmt.toLocaleString()}. Please arrange a home site inspection.`;
    const url = `https://wa.me/919386945647?text=${encodeURIComponent(textStr)}`;
    window.open(url, '_blank', 'noreferrer,noopener');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Wrapper */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 24, stiffness: 170 }}
            className="relative w-full max-w-xl h-full bg-[#050908] border-l border-white/10 text-white flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.85)] z-10"
            id="brand-explorer-drawer"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div>
                <span className="font-mono text-[9px] uppercase text-[#FFE63B] tracking-widest font-black block">
                  APPROVED CERTIFIED BRANDS
                </span>
                <h3 className="font-display font-extrabold text-lg mt-0.5 tracking-tight text-white flex items-center gap-2">
                  Brand & Rate Matrix
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto p-5 space-y-6">
              
              {/* Brand Tabs */}
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#A5B3B3] mb-2.5">
                  1. Select MNRE Partner Brand:
                </span>
                <div className="flex flex-wrap gap-1.5 bg-black/30 p-1 rounded-xl border border-white/5">
                  {BRANDS_DATA.map((brand) => {
                    const isSelected = selectedBrandId === brand.id;
                    return (
                      <button
                        key={brand.id}
                        onClick={() => {
                          setSelectedBrandId(brand.id);
                          setIsOrdered(false);
                        }}
                        className={`flex-1 min-w-[124px] py-2 px-2.5 text-[10px] md:text-xs font-bold rounded-lg transition-colors cursor-pointer text-center relative focus:outline-none`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeBrandExplorerTab"
                            className="absolute inset-0 bg-emerald-500/10 border border-emerald-400/30 rounded-lg -z-10 shadow-md"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                        )}
                        <span className={isSelected ? 'text-emerald-400 font-extrabold' : 'text-white/60 hover:text-white'}>
                          {brand.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Brand Specs */}
              <div className="liquid-glass border border-emerald-500/10 rounded-2xl p-4 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-extrabold text-md text-white">{activeBrand.name}</h4>
                    <p className="text-[10px] text-emerald-400 font-mono mt-0.5">{activeBrand.tagline}</p>
                  </div>
                  <span className="text-[9px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                    {activeBrand.cellType}
                  </span>
                </div>
                <p className="text-xs text-[#A5B3B3] leading-relaxed font-sans">{activeBrand.description}</p>
                
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-2 bg-white/3 border border-white/5 rounded-lg flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="block text-[8px] text-white/40 uppercase">Warranty</span>
                      <span className="font-bold text-[11px]">{activeBrand.warranty} Yrs Linear</span>
                    </div>
                  </div>
                  <div className="p-2 bg-white/3 border border-white/5 rounded-lg flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="block text-[8px] text-white/40 uppercase">Module Efficiency</span>
                      <span className="font-bold text-[11px]">{activeBrand.efficiency}% Peak</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider / Preset select modeled from the advertisement rate table */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase font-bold text-[#A5B3B3]">
                  <span>2. Select Approved System Price:</span>
                  <span className="text-emerald-400">Patna rates matrix lookup</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {TIER_MATRIX.map((tier) => {
                    const isSelected = selectedKw === tier.kw;
                    return (
                      <button
                        key={tier.kw}
                        onClick={() => {
                          setSelectedKw(tier.kw);
                          setIsOrdered(false);
                        }}
                        className={`py-2 rounded-xl text-center border transition-all cursor-pointer flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-[#101b17] border-emerald-400 text-emerald-400 font-bold shadow-[0_0_12px_rgba(52,211,153,0.15)]'
                            : 'bg-white/3 border-white/5 text-white/70 hover:border-white/15'
                        }`}
                      >
                        <span className="text-xs font-display font-extrabold">{tier.kw} KW</span>
                        <span className="text-[7px] font-mono text-white/50">{tier.unitMonth} Units</span>
                      </button>
                    );
                  })}
                </div>

                {/* Subsidies Breakdown visual panel */}
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-3 font-sans">
                  
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                    <div>
                      <span className="block text-[8px] font-mono text-white/40 uppercase">APPROVED BASE RATE</span>
                      <span className="font-bold text-white text-[13px]">₹{activeTier.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-center px-1 shrink-0" title="Subtract">
                      <span className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs text-white/60 font-black leading-none select-none">
                        &minus;
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono text-emerald-400 uppercase">PM SURYA GHAR SUBSIDY</span>
                      <span className="font-bold text-emerald-400 text-[13px]">- ₹{activeTier.subsidy.toLocaleString()}</span>
                    </div>
                    {activeTier.bonusDiscount && (
                      <>
                        <div className="flex items-center justify-center px-1 shrink-0" title="Subtract">
                          <span className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs text-white/60 font-black leading-none select-none">
                            &minus;
                          </span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-mono text-amber-300 uppercase">AQUA PROMO</span>
                          <span className="font-bold text-amber-300 text-[13px]">- ₹{activeTier.bonusDiscount.toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex justify-between items-center bg-emerald-500/10 p-3 rounded-lg border border-emerald-400/20">
                    <div>
                      <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">NET PAY AMOUNT</p>
                      <p className="text-[8px] text-white/50">Everything included in India solar portal</p>
                    </div>
                    <p className="text-xl font-mono font-black text-white">₹{activeTier.totalAmt.toLocaleString()}</p>
                  </div>

                  <div className="text-[11px] text-white/70 flex flex-col gap-1.5 bg-white/3 p-3 rounded-lg border border-white/5">
                    <p className="flex justify-between">
                      <span className="text-white/40">Suited Appliances:</span>
                      <span className="font-bold text-[#FFE63B] text-right line-clamp-1">{activeTier.suitsAppliances}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-white/40">Standard Monthly Output:</span>
                      <span className="font-mono font-bold text-white">{activeTier.unitMonth} Units/Month</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits of solar rooftop from exact black & white list */}
              <div className="space-y-2.5">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#A5B3B3]">
                  Benefits of Solar Rooftop (MNRE list):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOFTOP_BENEFITS.map((b) => (
                    <div key={b.title} className="p-2.5 bg-white/3 border border-white/5 rounded-lg flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-bold text-white font-sans">{b.title}</p>
                        <p className="text-[9px] text-white/40 leading-tight">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact numbers explicitly from the uploaded graphics */}
              <div className="bg-gradient-to-r from-emerald-500/5 to-transparent border border-emerald-500/10 p-3.5 rounded-xl space-y-2">
                <span className="text-[9px] font-mono text-emerald-400 uppercase font-black tracking-widest block">
                  AUTHORIZED DIRECT LINE DEPARTMENTS
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {HELPLINE_PHONES.map((ph) => (
                    <a
                      key={ph.num}
                      href={`tel:+91${ph.num}`}
                      className="p-2 bg-black/40 border border-white/5 hover:border-emerald-400/40 rounded-lg flex items-center justify-between transition-colors text-xs"
                    >
                      <span className="font-mono text-[11px] text-white">Call +91 {ph.num}</span>
                      <span className="text-[8px] text-[#A5B3B3] uppercase tracking-wider">{ph.tag}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Action Footer inside Drawer */}
            <div className="p-4 border-t border-white/10 bg-black/80 flex flex-col justify-end space-y-2">
              {!isOrdered ? (
                <button
                  onClick={handleBookNow}
                  className="w-full bg-[#FFE63B] hover:bg-white text-black font-display font-black text-xs md:text-sm tracking-widest py-3.5 rounded-xl uppercase flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                  id="submit-model-request-drawer"
                >
                  Confirm {activeBrand.name.split(' ')[0]} {selectedKw}kW Order & WhatsApp <ChevronRight className="w-4 h-4 fill-current" />
                </button>
              ) : (
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-emerald-500/20 border border-emerald-500/30 p-4 rounded-xl text-center space-y-1"
                >
                  <p className="text-xs font-bold text-emerald-300 flex items-center justify-center gap-1.5 leading-none">
                    <Check className="w-4 h-4" /> Consultation Locked & Redirection complete!
                  </p>
                  <p className="text-[10px] text-white/50">
                    We requested a direct advisory sync with Patna representative. Dial +91 9386945647 anytime.
                  </p>
                </motion.div>
              )}
              <div className="text-center text-[9px] text-white/30 font-mono">
                * Approved Govt of India Partner • Authorized MNRE Installer: New Aqua Home Appliances
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
