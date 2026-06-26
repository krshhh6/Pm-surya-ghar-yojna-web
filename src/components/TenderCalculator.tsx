import React, { useState } from 'react';
import { X, Sparkles, Percent, Sun, IndianRupee, Leaf, Shield, CheckCircle, ArrowRight, MapPin, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TenderCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

// Strictly modeled on the New Aqua Home Appliance advertisement images:
interface PresetSolarTier {
  kw: number;
  unitsPerMonth: string;
  systemPrice: number;
  subsidy: number;
  addonDiscount?: number; // extra Aqua benefit e.g. 11,000 INR on 3kW
  totalPayOnly: number;
  appliancesSuited: string;
}

const SOLAR_PRESENTS: PresetSolarTier[] = [
  { kw: 1, unitsPerMonth: '150 - 200 Units/Month', systemPrice: 90000, subsidy: 30000, totalPayOnly: 60000, appliancesSuited: 'LED Lights, Fans, TV & Water Purifier' },
  { kw: 2, unitsPerMonth: '300 - 350 Units/Month', systemPrice: 150000, subsidy: 60000, totalPayOnly: 90000, appliancesSuited: '1 AC (1 Ton), Refrigerator, Iron, Lights/Fans' },
  { kw: 3, unitsPerMonth: '450 - 550 Units/Month', systemPrice: 210000, subsidy: 78000, addonDiscount: 11000, totalPayOnly: 121000, appliancesSuited: '2 ACs (1.5 Ton), Washing Machine, Water Pump, TV & Fridge' },
  { kw: 4, unitsPerMonth: '500 - 650 Units/Month', systemPrice: 280000, subsidy: 78000, totalPayOnly: 202000, appliancesSuited: 'Whole House Load, Heavy Water Pumps, Clay/Tile Roof Ready' },
  { kw: 5, unitsPerMonth: '750 - 800 Units/Month', systemPrice: 350000, subsidy: 78000, totalPayOnly: 272000, appliancesSuited: 'Commercial-grade residential load, multiple air conditioners' },
  { kw: 6, unitsPerMonth: '1000 - 1100 Units/Month', systemPrice: 410000, subsidy: 78000, totalPayOnly: 332000, appliancesSuited: 'Large bungalows, heavy heating/cooling machinery & EV Chargers' }
];

const DEALER_BRANDS = [
  { name: 'Adani Solar', desc: 'High Efficiency Monocrystalline Cell' },
  { name: 'Tata Power Solaroof', desc: 'India\'s Most Trusted Tier-1 Solar Panels' },
  { name: 'Waaree Solar', desc: 'Premium Solar Performance & Net-Metering' },
  { name: 'Luminous Solar', desc: 'Excellent low-light generation & durable frames' },
  { name: 'UTL Solar', desc: 'Advanced on-grid intelligent solar inverter system' }
];

export default function TenderCalculator({ isOpen, onClose }: TenderCalculatorProps) {
  const [selectedKw, setSelectedKw] = useState<number>(3); // Default to the popular 3 kW tier
  const [selectedBrand, setSelectedBrand] = useState<string>('Waaree Solar');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Primary numbers from New Aqua Home Appliance
  const WHATSAPP_NUMBER = "919386945647";
  const PRIMARY_PHONE = "9386945647";

  const activeTier = SOLAR_PRESENTS.find(p => p.kw === selectedKw) || SOLAR_PRESENTS[2];

  const totalBenefit = activeTier.subsidy + (activeTier.addonDiscount || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !phone) return;
    setIsSubmitted(true);
  };

  const getWhatsAppURL = (tier: PresetSolarTier, brand: string) => {
    const textStr = `Hi Ahaquatic Solar! I am interested in installing your MNRE approved ${tier.kw} kW Solar Rooftop power system (${brand}) under the PM Surya Ghar government subsidy scheme at Patna. Please share official quotes for System Price: ₹${tier.systemPrice.toLocaleString()} - Subsidy: ₹${tier.subsidy.toLocaleString()} = Net Payout: ₹${tier.totalPayOnly.toLocaleString()}.`;
    return `https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent(textStr)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center p-2 sm:p-4 md:p-6 overflow-y-auto pt-4 sm:pt-8 pb-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/92 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-4xl liquid-glass rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 bg-[#040807]/98 backdrop-blur-md border border-emerald-500/20 text-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-10 my-auto"
            id="tender-modal"
          >
            {/* Glowing solar flares decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFE63B]/5 rounded-full blur-[120px] pointer-events-none -ml-40 -mb-40" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                  <Sun className="w-6 h-6 animate-spin-slow" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white">
                      PM Surya Ghar Subsidy Portal
                    </h3>
                    <span className="text-[9px] font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                      MNRE APPROVED DEALER
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-white/60 mt-0.5">
                    Ahaquatic Solar • Sabajpura More, Phulwari Sharif, Patna
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all cursor-pointer border border-white/10 shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                id="close-calculator"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid Area */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">
              
              {/* Left Selector (KW capacity selection & brands list) */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Step 1: Select Solar Plant Capacity */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A5B3B3]">
                      Step 1: Select Plant Size (KW)
                    </span>
                    <span className="text-xs text-white/40">Select system capacity limits</span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {SOLAR_PRESENTS.map((tier) => (
                      <button
                        key={tier.kw}
                        onClick={() => {
                          setSelectedKw(tier.kw);
                          setIsSubmitted(false);
                        }}
                        className={`py-3 px-1.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col justify-center items-center ${
                          selectedKw === tier.kw
                            ? 'bg-emerald-500/10 border-emerald-400 text-emerald-400 font-bold shadow-[0_0_15px_rgba(52,211,153,0.15)] bg-gradient-to-b from-[#101b17] to-[#0a1411]'
                            : 'bg-white/3 border-white/5 text-white/70 hover:border-white/15 hover:bg-white/5'
                        }`}
                      >
                        <span className="text-sm font-display tracking-tight font-extrabold">{tier.kw} KW</span>
                        <span className="text-[8px] opacity-75 mt-0.5 font-mono">Tier {tier.kw}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Brand */}
                <div>
                  <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#A5B3B3] mb-3">
                    Step 2: Choose MNRE Approved Panel Brand
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {DEALER_BRANDS.map((brand) => (
                      <button
                        key={brand.name}
                        onClick={() => setSelectedBrand(brand.name)}
                        className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex justify-between items-center ${
                          selectedBrand === brand.name
                            ? 'bg-[#101b17] border-emerald-400/80 text-white shadow-[0_0_12px_rgba(52,211,153,0.12)]'
                            : 'bg-white/3 border-white/5 text-white/50 hover:border-white/10 hover:text-white/80'
                        }`}
                      >
                        <div>
                          <p className="font-sans text-xs font-bold">{brand.name}</p>
                          <p className="text-[9px] opacity-60 leading-tight mt-0.5">{brand.desc}</p>
                        </div>
                        {selectedBrand === brand.name ? (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1.5" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-white/10 shrink-0 ml-1.5" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Office Info Card */}
                <div className="p-3 bg-white/3 border border-white/5 rounded-xl flex gap-3 text-xs text-[#A5B3B3]">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-[11px] uppercase tracking-wide">Patna Headquarters</p>
                    <p className="text-[10px] mt-0.5">Sabajpura More, Phulwari Sharif, Patna, Bihar-801505</p>
                    <p className="text-[9px] mt-1 text-emerald-400 font-mono">
                      MNRE Approved Dealer • Direct DISCOM Net Metering Support
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Summary Specs (Display calculations, benefits, and call to action) */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                
                {/* Live Cost and Benefit Calculations Card */}
                <div className="bg-[#111917]/90 border border-emerald-500/20 rounded-2xl p-5 relative overflow-hidden space-y-4">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFE63B]/5 rounded-full blur-xl pointer-events-none" />

                  {/* Header Title inside card */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <div>
                      <p className="font-mono text-[9px] text-[#A5B3B3] uppercase tracking-widest font-black">
                        PROPOSAL SCHEDULER
                      </p>
                      <h4 className="text-sm font-bold text-white uppercase font-display tracking-tight">
                        {activeTier.kw} KW On-Grid System (Patna)
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-[#FFE63B] font-bold bg-[#FFE63B]/10 px-2 py-0.5 rounded">
                      ₹0 BIJLI BILL
                    </span>
                  </div>

                  {/* Pricing Matrix details exactly from visual flyer */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-white/50 mb-1">
                        System Price
                      </span>
                      <p className="text-lg font-bold font-mono text-white">
                        ₹{activeTier.systemPrice.toLocaleString()}
                      </p>
                      <span className="text-[9px] text-white/40 block mt-0.5">Standard Base Cost</span>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-white/50 mb-1 text-emerald-400">
                        Govt. Subsidy
                      </span>
                      <p className="text-lg font-bold font-mono text-emerald-400">
                        - ₹{activeTier.subsidy.toLocaleString()}
                      </p>
                      <span className="text-[9px] text-white/40 block mt-0.5">PM Surya Ghar Credit</span>
                    </div>

                    <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-white/5 pt-2.5 sm:pt-0 sm:pl-3">
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-white/50 mb-1 text-amber-300">
                        Total Benefits
                      </span>
                      <p className="text-lg font-bold font-mono text-amber-300">
                        ₹{totalBenefit.toLocaleString()}
                      </p>
                      <span className="text-[9px] text-amber-300/60 block mt-0.5">
                        {activeTier.addonDiscount ? `Incl. ₹${activeTier.addonDiscount.toLocaleString()} Ahaquatic Discount!` : 'Subsidy Applied'}
                      </span>
                    </div>
                  </div>

                  {/* Highlights section from Flyer */}
                  <div className="border-t border-white/5 pt-3.5 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-white/50 mb-1">
                        Average Generation
                      </span>
                      <p className="font-semibold text-white">
                        {activeTier.unitsPerMonth}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-[#B2BDBB] mb-1">
                        Applicable Appliances
                      </span>
                      <p className="font-semibold text-white/80 leading-snug text-[10px] line-clamp-2" title={activeTier.appliancesSuited}>
                        {activeTier.appliancesSuited}
                      </p>
                    </div>
                  </div>

                  {/* Total Net Pay - PAY ONLY */}
                  <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <span className="block text-[10px] font-semibold text-emerald-300 uppercase tracking-wide">
                        PAY ONLY (REDUCED COST)
                      </span>
                      <p className="text-[10px] text-white/50 mt-0.5">All subsidies and discounts deducted</p>
                    </div>
                    <p className="text-2xl sm:text-3.5xl font-display font-black text-white shrink-0 font-mono tracking-tight text-right">
                      ₹{activeTier.totalPayOnly.toLocaleString()}
                    </p>
                  </div>

                </div>

                {/* Forms Actions or PDF confirmation */}
                <div className="mt-4 sm:mt-5">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <p className="text-xs text-[#A5B3B3] leading-snug">
                        Submit details for instant Patna DISCOM verification and on-site rooftop measurement lock:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-white/30 focus:border-emerald-400 outline-none transition-colors"
                        />
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[10px] text-white/40 font-mono">+91</span>
                          <input
                            required
                            type="tel"
                            pattern="[0-9]{10}"
                            placeholder="Mobile / Whatsapp"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-11 pr-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-white/30 focus:border-emerald-400 outline-none font-mono"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {/* Direct WhatsApp Action using image specifications */}
                        <a
                          href={getWhatsAppURL(activeTier, selectedBrand)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs py-3 px-4 rounded-xl transition-all font-sans cursor-pointer shrink-0"
                          title="Instant WhatsApp Sizer Chat"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>WhatsApp Chat</span>
                        </a>

                        {/* Submit Request Pin */}
                        <button
                          type="submit"
                          className="flex-1 select-none flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-black font-display font-black uppercase text-[11px] tracking-wider py-3 rounded-xl transition-all shadow-md cursor-pointer"
                        >
                          <span>Lock Free Subsidy</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl text-center space-y-3"
                    >
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-400">
                        <CheckCircle className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-white text-sm">Rooftop Subsidy Request Lodged!</h4>
                        <p className="text-xs text-white/60 max-w-md mx-auto mt-1">
                          Hi <strong>{userName}</strong>. Your choice of a <strong>{activeTier.kw} KW {selectedBrand}</strong> system (Payable ₹{activeTier.totalPayOnly.toLocaleString()}) has been compiled. Contacting you shortly at <strong>+91 {phone}</strong>.
                        </p>
                      </div>
                      
                      <div className="pt-2 border-t border-white/5 flex flex-wrap gap-2 justify-center">
                        <a
                          href={`tel:+91${PRIMARY_PHONE}`}
                          className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[10px] font-mono px-3.5 py-1.5 rounded-lg transition-colors font-bold flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" /> Call Helpline: +91 {PRIMARY_PHONE}
                        </a>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="bg-white/5 hover:bg-white/10 text-white/70 text-[10px] font-mono px-3.5 py-1.5 rounded-lg transition-colors"
                        >
                          Recalculate
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>

              </div>

            </div>

            {/* Note/Disclaimer exact translation */}
            <div className="relative z-10 mt-5 pt-3.5 border-t border-white/5 text-center text-[10px] text-white/40 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span>* Subsidy Subject to MNRE & DISCOM approval limits.</span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span>All rights reserved by Ahaquatic Solar.</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
