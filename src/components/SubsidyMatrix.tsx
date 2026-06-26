import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  HelpCircle, 
  IndianRupee,
  Info, 
  Leaf, 
  Lightbulb, 
  Percent, 
  PhoneCall, 
  ShieldCheck, 
  TrendingDown, 
  UserCheck, 
  Users, 
  Zap 
} from 'lucide-react';

interface SubsidyMatrixProps {
  onSelectKw: (kw: number, label: string) => void;
}

interface TierConfig {
  kw: number;
  unitMonth: string;
  price: number;
  subsidy: number;
  totalAmt: number;
  suitedFor: string;
  appliances: string[];
}

const SUBSIDY_DATA: TierConfig[] = [
  { 
    kw: 1, 
    unitMonth: "150 - 200", 
    price: 90000, 
    subsidy: 30000, 
    totalAmt: 60000, 
    suitedFor: "Small Households & Shops",
    appliances: ["LED Lights (3-4)", "Ceiling Fans (2-3)", "Smart TV", "Water Purifier"] 
  },
  { 
    kw: 2, 
    unitMonth: "300 - 350", 
    price: 150000, 
    subsidy: 60000, 
    totalAmt: 90000, 
    suitedFor: "Medium Apartments / 2 BHK Homes",
    appliances: ["1.0 Ton AC (Usage-limited)", "Small Refrigerator", "Water Pump (0.5 HP)", "Lights & Fans"] 
  },
  { 
    kw: 3, 
    unitMonth: "450 - 550", 
    price: 210000, 
    subsidy: 78000, 
    totalAmt: 132000, 
    suitedFor: "Standard Family Dwellings / 3 BHK",
    appliances: ["1.5 Ton AC", "Washing Machine", "Double Door Fridge", "Water Pump (1 HP)", "Microwave Oven"] 
  },
  { 
    kw: 4, 
    unitMonth: "500 - 650", 
    price: 280000, 
    subsidy: 78000, 
    totalAmt: 202000, 
    suitedFor: "Large Multi-generation Households",
    appliances: ["2 ACs (1.5 Ton)", "Submersible Induction Motor", "Washing Machine & Geyser", "Heavy Kitchen Loads"] 
  },
  { 
    kw: 5, 
    unitMonth: "750 - 680", 
    price: 350000, 
    subsidy: 78000, 
    totalAmt: 272000, 
    suitedFor: "Duplex Bungalows & Commercial Offices",
    appliances: ["Multiple AC Units", "Heavy Water Pumps", "Server Blocks", "Complete Domestic Utilities"] 
  },
  { 
    kw: 6, 
    unitMonth: "1000 - 1100", 
    price: 410000, 
    subsidy: 78000, 
    totalAmt: 332000, 
    suitedFor: "Elite Residences, Tech Hubs & EV Owners",
    appliances: ["Centralized HVAC", "High-capacity Elevators", "Electric Vehicle (EV) Rapid Chargers", "Full Household Automation"] 
  }
];

const SCHEME_BENEFITS = [
  {
    icon: <Leaf className="w-5 h-5 text-emerald-400" />,
    title: "Renewable Source (नवीकरणीय स्रोत)",
    desc: "Plentiful, infinite clean solar radiation straight from the sun. Zero greenhouse gas emissions."
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-emerald-400" />,
    title: "Utilize Unused Roof Space (खाली छत का उपयोग)",
    desc: "Transforms empty flat concrete terraces or pitched sheet structures into a high-yielding green power plant."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    title: "Low Maintenance Cost (कम रखरखाव लागत)",
    desc: "Solid-state photovoltaic panels with zero complex moving parts. Generant warranty locked for 25 solid years."
  },
  {
    icon: <IndianRupee className="w-5 h-5 text-emerald-400" />,
    title: "Quick Loan Facility (त्वरित ऋण सुविधा)",
    desc: "Direct access to easy commercial banking financial assistance with government subsidized lower rate interest structure."
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    title: "Eco Friendly (पर्यावरण अनुकूल)",
    desc: "Substantially offsets your household carbon emission footprint, preserving local environments across Bihar."
  }
];

export default function SubsidyMatrix({ onSelectKw }: SubsidyMatrixProps) {
  const [selectedKw, setSelectedKw] = useState<number>(3); // 3kW default selected
  const [activeTab, setActiveTab] = useState<'matrix' | 'about'>('matrix');

  const selectedPlan = SUBSIDY_DATA.find(p => p.kw === selectedKw) || SUBSIDY_DATA[2];

  const handleBookPlan = (plan: TierConfig) => {
    onSelectKw(plan.kw, `${plan.kw} kW PM Surya Ghar Solar System`);
    
    // Auto WhatsApp redirect with structured text
    const textStr = `Hi Ahaquatic Solar! I am contacting you looking at your official PM Surya Ghar rate table. Interested in booking a ${plan.kw} kW plant with:
- Market Price: ₹${plan.price.toLocaleString()}
- Govt Subsidy Limit: ₹${plan.subsidy.toLocaleString()}
- Final Net Amount Payable: ₹${plan.totalAmt.toLocaleString()}
- Units expectation: ${plan.unitMonth} Units/month
- Office Office: Sabajpura More, Phulwari Sharif, Patna. Please get in touch for terrace layout audit!`;

    const url = `https://wa.me/919386945647?text=${encodeURIComponent(textStr)}`;
    window.open(url, '_blank', 'noreferrer,noopener');
  };

  return (
    <div className="w-full relative z-10 font-sans" id="pm-surya-ghar-subsidy-details">
      
      {/* Upper Dual-Language Official Banner card */}
      <div className="w-full relative rounded-3xl bg-black/80 border border-emerald-500/20 p-6 md:p-8 overflow-hidden mb-10 shadow-2xl">
        {/* Glow decorative graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Government Compliance Header Flag */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 text-[#FFE63B]">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#A5B3B3] font-bold">APPROVED DECK • GOVT. OF INDIA</p>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-tight flex items-center gap-1.5">
                Ministry of New & Renewable Energy (MNRE)
              </h3>
            </div>
          </div>
          
          <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-full px-4 py-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono text-emerald-300 font-extrabold uppercase tracking-wider">
              Bihar Installer ID: Ahaquatic Solar
            </span>
          </div>
        </div>

        {/* Big Dual-Language title highlights */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <span className="inline-block px-3 py-1 bg-amber-400/15 border border-amber-400/30 text-[#FFE63B] text-[10px] font-mono font-black uppercase tracking-widest rounded-lg">
              प्रधानमंत्री सूर्य घर : मुफ्त बिजली योजना
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              PM SURYA GHAR MUFT BIJLI YOJANA
            </h1>
            <p className="text-xs md:text-sm text-emerald-400 font-medium tracking-wide">
              छत पर सोलर लगाएँ, अपनी बिजली खुद बनाएँ • Get up to 300 units of free clean electricity every single month!
            </p>
          </div>

          <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-3xl">
            This historic government rooftop subsidy initiative empowers homeowners to completely eliminate their power bills (to ₹0) while receiving massive upfront direct bank-transfer subsidy awards. Check our verified rates table formulated exactly from the official Patna release below.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mt-6 pt-4 border-t border-white/5">
          <button 
            onClick={() => setActiveTab('matrix')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'matrix' 
                ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-400/15'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            Subsidy Rate Matrix
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'about' 
                ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-400/15'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            Benefits & Scheme Info
          </button>
        </div>
      </div>

      {activeTab === 'matrix' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block - The pricing matrix table exactly replicating the black and white ad */}
          <div className="lg:col-span-8 liquid-glass border border-white/5 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-5 bg-black/40 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="font-display font-extrabold text-base text-white">Direct Subsidy Breakdown</h3>
                <p className="text-[10px] font-mono text-[#A5B3B3]">Official standard on-grid rates in Patna, Bihar (2026)</p>
              </div>

              {/* Quick info tip */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                <Info className="w-3.5 h-3.5" />
                <span>3 kW is the most selected sweet-spot plan</span>
              </div>
            </div>

            {/* Custom Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/2 text-[10px] font-mono uppercase text-[#A5B3B3] tracking-wider">
                    <th className="py-4 px-5 font-bold font-mono">System Capacity (KW)</th>
                    <th className="py-4 px-5">Electricity Output (Units/Month)</th>
                    <th className="py-4 px-5 text-right">Standard Rate (MRP)</th>
                    <th className="py-4 px-5 text-emerald-400 text-right">Direct Govt. Subsidy</th>
                    <th className="py-4 px-5 text-white font-bold text-right">Net Payable Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-white/80">
                  {SUBSIDY_DATA.map((plan) => {
                    const isSelected = selectedKw === plan.kw;
                    return (
                      <tr 
                        key={plan.kw}
                        onClick={() => setSelectedKw(plan.kw)}
                        className={`hover:bg-white/3 transition-colors cursor-pointer ${
                          isSelected ? 'bg-emerald-500/5 select-none border-l-4 border-l-emerald-400' : ''
                        }`}
                      >
                        <td className="py-3.5 px-5 font-bold">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400 animate-ping' : 'bg-white/20'}`} />
                            <span className="text-sm font-display">{plan.kw} kW System</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-5">
                          <span className="font-mono bg-white/5 border border-white/15 px-2 py-0.5 rounded text-white/90">
                            {plan.unitMonth} Units
                          </span>
                        </td>
                        <td className="py-3.5 px-5 text-right font-mono text-white/50">
                          ₹{plan.price.toLocaleString()}
                        </td>
                        <td className="py-3.5 px-5 text-right font-mono text-emerald-400 font-bold">
                          - ₹{plan.subsidy.toLocaleString()}
                        </td>
                        <td className="py-3.5 px-5 text-right font-mono text-white text-sm font-black">
                          <span className={isSelected ? 'text-[#FFE63B]' : 'text-white'}>
                            ₹{plan.totalAmt.toLocaleString()}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Banner of Dealer Office beneath list */}
            <div className="p-4 bg-emerald-500/5 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-400 text-black px-1.5 py-0.5 rounded text-[9px] font-mono font-extrabold uppercase">MNRE DEALER</span>
                <p className="text-[#A5B3B3]">
                  Authorized PM Surya Ghar agent: <strong>Ahaquatic Solar, Patna</strong>
                </p>
              </div>
              <p className="text-[10px] font-mono text-white/50 flex items-center gap-1">
                Pin Code Location: 801505 • Phulwari Sharif
              </p>
            </div>
          </div>

          {/* Right Block - Interactive active selected details view */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="liquid-glass border border-[#FFE63B]/20 rounded-3xl p-6 space-y-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-[#FFE63B]/5 to-transparent rounded-full blur-xl pointer-events-none" />
              
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#FFE63B] font-black uppercase tracking-widest block">DYNAMIC CALCULATOR SUMMARY</span>
                <h4 className="text-xl font-display font-extrabold text-white">{selectedPlan.kw} kW Solar Rooftop Configuration</h4>
                <p className="text-xs text-white/60">Selected tier details and recommended load profile.</p>
              </div>

              {/* Comparative Stats strip */}
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/5">
                <div>
                  <span className="text-[8px] text-white/40 uppercase block font-mono">Monthly Output</span>
                  <span className="text-base font-black text-white font-mono">{selectedPlan.unitMonth} Units</span>
                </div>
                <div>
                  <span className="text-[8px] text-white/40 uppercase block font-mono">Net Investment cost</span>
                  <span className="text-base font-black text-[#FFE63B] font-mono">₹{selectedPlan.totalAmt.toLocaleString()}</span>
                </div>
              </div>

              {/* Appliances recommended list */}
              <div className="space-y-3">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Ideal appliance load guide:
                </span>
                <div className="flex flex-wrap gap-1.5 h-auto">
                  {selectedPlan.appliances.map((app, index) => (
                    <span 
                      key={index}
                      className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-[10px] text-white/80 font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] text-white/50 leading-relaxed font-sans">
                  * Perfect for families finding recommended coverage for <strong>{selectedPlan.suitedFor}</strong>.
                </p>
              </div>

              {/* Warranties & Guarantees specifications panel */}
              <div className="p-3.5 bg-black/40 border border-white/5 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-white/60">Module Warranty:</span>
                  <span className="font-bold text-white ml-auto">25 Years Peak Performance</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-white/60">Installer Warranty:</span>
                  <span className="font-bold text-white ml-auto">5 Years Workmanship</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-white/60">Net Metering:</span>
                  <span className="font-bold text-emerald-400 ml-auto">Bi-directional Smart Sync</span>
                </div>
              </div>

              {/* Big Booking Button */}
              <button
                onClick={() => handleBookPlan(selectedPlan)}
                className="w-full bg-[#FFE63B] hover:bg-white text-black font-display font-black text-xs uppercase tracking-widest py-4 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                Book {selectedPlan.kw} kW via WhatsApp <ChevronRight className="w-4 h-4 fill-current" />
              </button>

              <p className="text-center text-[9px] text-white/30 font-mono">
                * Zero hidden costs. Govt checks standard structure layout.
              </p>

            </div>

          </div>

        </div>
      ) : (
        /* The 5 key benefits of Solar Rooftop from exact list */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHEME_BENEFITS.map((benefit, idx) => (
            <div 
              key={idx}
              className="liquid-glass border border-white/5 p-6 rounded-3xl space-y-4 hover:border-emerald-400/25 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                {benefit.icon}
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-extrabold text-white text-base tracking-tight">{benefit.title}</h4>
                <p className="text-xs text-[#A5B3B3] leading-relaxed font-sans">{benefit.desc}</p>
              </div>
            </div>
          ))}

          {/* Quick FAQ info block */}
          <div className="liquid-glass border border-white/5 p-6 rounded-3xl bg-emerald-950/10 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-[#FFE63B]/10 text-[#FFE63B] text-[8px] font-mono font-black tracking-widest uppercase px-2 py-0.5 rounded border border-[#FFE63B]/20 self-start">
                PM SURYA GHAR INFO
              </span>
              <h4 className="font-display font-bold text-white text-base">Who is eligible for this?</h4>
              <p className="text-xs text-[#A5B3B3] leading-relaxed font-sans">
                All Indian residential families with a clear rooftop concrete terrace or clean sheet location, active electricity connection (DISCOM ID), and basic documentation are instantly eligible.
              </p>
            </div>
            
            <a 
              href="https://pmsuryaghar.gov.in" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[11px] text-emerald-400 hover:underline font-bold mt-4 inline-flex items-center gap-1 font-mono"
            >
              Visit Govt National Portal <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
