import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingDown, 
  TrendingUp, 
  IndianRupee, 
  Zap, 
  MapPin, 
  Users, 
  FileText, 
  ChevronRight, 
  BarChart3, 
  Calendar,
  Check,
  ChevronLeft,
  Building
} from 'lucide-react';

interface CaseStudy {
  id: string;
  name: string;
  location: string;
  systemSize: string;
  panelBrand: string;
  inverterBrand: string;
  beforeBill: number;
  afterBill: number;
  savingsMonthly: number;
  investmentCost: number;
  subsidyClaimed: number;
  unitsMonthly: number;
  paybackTimeline: string;
  status: string;
  dateInstalled: string;
  imagesUrl: string;
  milestone: 'site-audit' | 'struct-design' | 'net-metering' | 'subsidy-payout';
}

const LOCAL_PROJECTS: CaseStudy[] = [
  {
    id: 'project-1',
    name: 'Raman Kumar',
    location: 'Phulwari Sharif, Patna (Patna Central)',
    systemSize: '3 kW On-Grid',
    panelBrand: 'Tata Power 545Wp Mono PERC',
    inverterBrand: 'Luminous Smart Sync 3kVA',
    beforeBill: 6200,
    afterBill: 0,
    savingsMonthly: 5400,
    investmentCost: 210000,
    subsidyClaimed: 78000,
    unitsMonthly: 360,
    paybackTimeline: '3.4 Years (Slicing ₹50k+ yearly)',
    status: 'Operational & Net-Meter Active',
    dateInstalled: 'March 2026',
    imagesUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=650&h=400&q=80',
    milestone: 'subsidy-payout'
  },
  {
    id: 'project-2',
    name: 'Dr. Satish Prasad',
    location: 'Kankarbagh Colony, Patna',
    systemSize: '2 kW On-Grid',
    panelBrand: 'Waaree Energies Half-Cut Mono',
    inverterBrand: 'UTL On-Grid Smart Link',
    beforeBill: 3950,
    afterBill: 280,
    savingsMonthly: 3670,
    investmentCost: 150000,
    subsidyClaimed: 60000,
    unitsMonthly: 245,
    paybackTimeline: '3.7 Years',
    status: 'Operational & Feed-in Live',
    dateInstalled: 'January 2026',
    imagesUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=650&h=400&q=80',
    milestone: 'net-metering'
  },
  {
    id: 'project-3',
    name: 'Rajesh Khanna',
    location: 'Gola Road, Danapur (Duplex)',
    systemSize: '5 kW On-Grid System',
    panelBrand: 'Adani Solar Bifacial Dual-Glass',
    inverterBrand: 'Growatt Smart Inverter 5kW',
    beforeBill: 12400,
    afterBill: 140,
    savingsMonthly: 12160,
    investmentCost: 350000,
    subsidyClaimed: 78000,
    unitsMonthly: 610,
    paybackTimeline: '4.2 Years (Elite load coverage)',
    status: 'Operational & Bi-directional approved',
    dateInstalled: 'November 2025',
    imagesUrl: 'https://images.unsplash.com/photo-1542332213-9b5a5a3faf3a?auto=format&fit=crop&w=650&h=400&q=80',
    milestone: 'subsidy-payout'
  }
];

export default function ReviewCard() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showLeadModal, setShowLeadModal] = useState<boolean>(false);
  
  // Site Audit Enquiry states
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerArea, setCustomerArea] = useState<string>('Phulwari Sharif, Patna');
  const [selectedSize, setSelectedSize] = useState<string>('3 kW System');
  const [isSent, setIsSent] = useState<boolean>(false);

  const activeProject = LOCAL_PROJECTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % LOCAL_PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + LOCAL_PROJECTS.length) % LOCAL_PROJECTS.length);
  };

  const handleWhatsAppAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    // Build perfect WhatsApp lead redirect
    const waText = `Hi Ahaquatic Solar! I would like to book a PM Surya Ghar Solar site audit:
- Name: ${customerName}
- Contact No: ${customerPhone}
- Site Locality: ${customerArea}
- Desired Capacity: ${selectedSize}
Please contact me for structural terrace audit layout scheduling!`;

    const url = `https://wa.me/919386945647?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSent(true);
    setCustomerName('');
    setCustomerPhone('');
  };

  return (
    <div className="w-full font-sans text-white relative z-10" id="local-rooftop-portfolio-studies">
      {/* 2-Column Split Dashboard layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Dynamic Showcase of Active Projects in Bihar */}
        <div className="lg:col-span-8 liquid-glass border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Header Portfolio Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-white/15">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-400 text-black text-[9px] font-mono font-black rounded uppercase tracking-wider">
                  VERIFIED BIHAR INSTALLATION
                </span>
                <span className="text-[10px] text-white/50 font-mono tracking-wide">Ref ID: {activeProject.id}</span>
              </div>
              <h3 className="text-xl font-extrabold text-white font-display">Rooftop Solar Success Stories</h3>
            </div>
            
            {/* Sliding buttons */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button 
                onClick={handlePrev}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 border border-white/10 transition-colors cursor-pointer"
                title="Previous Case"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-white/40">
                {activeIndex + 1} / {LOCAL_PROJECTS.length}
              </span>
              <button 
                onClick={handleNext}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 border border-white/10 transition-colors cursor-pointer"
                title="Next Case"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Project Image & Visual before/after bills block */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 shadow-lg group">
                <img 
                  src={activeProject.imagesUrl} 
                  alt={activeProject.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Brand Overlay Tag */}
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>{activeProject.panelBrand.split(' ')[0]} Verified</span>
                </div>
              </div>

              {/* Quick Details Stripe */}
              <div className="flex gap-4 p-3 bg-black/40 border border-white/5 rounded-xl text-xs">
                <div>
                  <span className="text-[8px] text-white/40 block uppercase font-mono">Commissioned</span>
                  <span className="font-bold flex items-center gap-1 text-white mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {activeProject.dateInstalled}
                  </span>
                </div>
                <div className="border-l border-white/5 pl-4 ml-auto">
                  <span className="text-[8px] text-white/40 block uppercase font-mono">System Type</span>
                  <span className="font-bold text-amber-300 mt-0.5 block">{activeProject.systemSize}</span>
                </div>
              </div>
            </div>

            {/* Information Grid for the active case study */}
            <div className="md:col-span-7 space-y-5">
              <div className="space-y-1">
                <p className="text-xs font-mono text-white/40 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> {activeProject.location}
                </p>
                <h4 className="text-lg font-extrabold text-[#FFE63B] font-sans">
                  {activeProject.name}’s Residence
                </h4>
              </div>

              {/* Bill Reduction Comparison Slide Container */}
              <div className="grid grid-cols-2 gap-4 bg-emerald-950/10 border border-emerald-500/10 rounded-2xl p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-400/5 rounded-full blur-xl" />
                
                <div>
                  <span className="block text-[8px] font-mono text-white/40 uppercase">BEFORE MONTHLY BILL</span>
                  <span className="text-base font-mono font-black text-white/40 line-through">₹{activeProject.beforeBill.toLocaleString()}</span>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <span className="block text-[8px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    AFTER SOLAR RATING <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  </span>
                  <span className="text-xl font-mono font-black text-emerald-400">
                    {activeProject.afterBill === 0 ? '₹0 BILL' : `₹${activeProject.afterBill}`}
                  </span>
                </div>
              </div>

              {/* Grid with 3 core financial parameters */}
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-white/3 border border-white/5 rounded-xl p-3 text-center">
                  <TrendingDown className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <span className="block text-[8px] text-white/40 uppercase font-mono">Monthly Savings</span>
                  <span className="font-bold font-mono text-white text-[11.5px]">₹{activeProject.savingsMonthly.toLocaleString()}/m</span>
                </div>

                <div className="bg-white/3 border border-white/5 rounded-xl p-3 text-center">
                  <IndianRupee className="w-4 h-4 text-amber-300 mx-auto mb-1" />
                  <span className="block text-[8px] text-white/40 uppercase font-mono">Govt Subsidy Off</span>
                  <span className="font-bold font-mono text-amber-300 text-[11.5px]">₹{activeProject.subsidyClaimed.toLocaleString()}</span>
                </div>

                <div className="bg-white/3 border border-white/5 rounded-xl p-3 text-center">
                  <Zap className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                  <span className="block text-[8px] text-white/40 uppercase font-mono">Units / Month</span>
                  <span className="font-bold font-mono text-[#FFE63B] text-[11.5px]">~{activeProject.unitsMonthly} Units</span>
                </div>
              </div>

              {/* Technical breakdown line */}
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5 text-xs text-white/80">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-white/40">Approved Modules:</span>
                  <span className="font-mono font-medium text-white">{activeProject.panelBrand}</span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-white/40">Smart Inverter Sync:</span>
                  <span className="font-mono font-medium text-white">{activeProject.inverterBrand}</span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-white/40">Net Payback Metric:</span>
                  <span className="font-mono font-bold text-emerald-400">{activeProject.paybackTimeline}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Scheme Application Interactive Progress Steps for this client */}
          <div className="pt-4 border-t border-white/5">
            <span className="block text-[9px] font-mono text-white/30 uppercase tracking-widest mb-3">
              PM SURYA GHAR NATIONAL PORTAL WORKFLOW TIMELINE
            </span>
            <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 relative">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="font-bold block leading-none">1. Site Audit</span>
                <span className="text-[8px] text-emerald-400/70 font-mono mt-0.5 block">Approved</span>
              </div>

              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 relative">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="font-bold block leading-none">2. Structure Ready</span>
                <span className="text-[8px] text-emerald-400/70 font-mono mt-0.5 block">Completed</span>
              </div>

              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 relative">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="font-bold block leading-none">3. Net Metering</span>
                <span className="text-[8px] text-emerald-400/70 font-mono mt-0.5 block">Active</span>
              </div>

              <div className={`p-2.5 rounded-xl border transition-all ${
                activeProject.milestone === 'subsidy-payout' 
                  ? 'bg-[#FFE63B]/10 border-[#FFE63B]/30 text-amber-300' 
                  : 'bg-white/5 border-white/10 text-white/50'
              }`}>
                {activeProject.milestone === 'subsidy-payout' ? (
                  <CheckCircle2 className="w-4 h-4 text-[#FFE63B] mx-auto mb-1" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px] mx-auto mb-1">4</div>
                )}
                <span className="font-bold block leading-none">4. Subsidy Claim</span>
                <span className="text-[8px] font-mono mt-0.5 block">
                  {activeProject.milestone === 'subsidy-payout' ? 'Direct Disbursed' : 'In Progress'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Quick Lead/Site Audit Booking Panel - Directly converting reviews form to active layout */}
        <div className="lg:col-span-4 space-y-6">
          <div className="liquid-glass border border-emerald-500/20 rounded-3xl p-6 space-y-5 relative overflow-hidden shadow-2xl">
            {/* Real Backdrop Install Image with high-contrast overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
              <img 
                src="https://res.cloudinary.com/dfvfphe5z/image/upload/v1781368738/WhatsApp_Image_2026-06-13_at_22.01.54_mrtb7x.jpg" 
                alt="Real Installation Background"
                className="w-full h-full object-cover scale-[1.05] pointer-events-none opacity-[0.55] filter saturate-125 brightness-[0.7]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/95 z-[1]" />
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl pointer-events-none z-[1]" />
            
            <div className="space-y-1 relative z-10">
              <span className="text-[8px] font-mono text-[#FFE63B] font-black tracking-widest uppercase block">
                SCHEDULER PROGRAM
              </span>
              <h4 className="text-lg font-extrabold text-white">Book Free Site Audit</h4>
              <p className="text-xs text-white/50 leading-relaxed font-sans">
                Want zero electricity bills at your home? Enter details below to schedule an official PM Surya Ghar design consultation with Ahaquatic Solar.
              </p>
            </div>

            {!isSent ? (
              <form onSubmit={handleWhatsAppAudit} className="space-y-4 relative z-10">
                <div>
                  <label className="block text-[8px] font-mono uppercase tracking-wider text-white/60 mb-1">Your Name (नाम)</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Anand Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-white/30 outline-none focus:border-emerald-400 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[8px] font-mono uppercase tracking-wider text-white/60 mb-1">WhatsApp Mobile No (मोबाइल नंबर)</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g. 93869xxxxx"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-white/30 outline-none focus:border-emerald-400 transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[8px] font-mono uppercase tracking-wider text-white/60 mb-1">Bihar Site Area / Ward (इलाका)</label>
                  <select 
                    value={customerArea}
                    onChange={(e) => setCustomerArea(e.target.value)}
                    className="w-full px-3 py-2 bg-[#090e0c] border border-white/10 rounded-xl text-xs text-white outline-none focus:border-emerald-400 transition-all cursor-pointer font-sans"
                  >
                    <option value="Phulwari Sharif, Patna">Phulwari Sharif, Patna</option>
                    <option value="Kankarbagh Colony, Patna">Kankarbagh, Patna</option>
                    <option value="Danapur Cantonment, Patna">Danapur Gola Road, Patna</option>
                    <option value="Gardanibagh Area, Patna">Gardanibagh, Patna</option>
                    <option value="Boring Road / Kidwaipuri, Patna">Boring Road, Patna</option>
                    <option value="Muzaffarpur District Office Area">Muzaffarpur, Bihar</option>
                    <option value="Other Area in Bihar">Other Locality in Bihar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[8px] font-mono uppercase tracking-wider text-white/60 mb-1">Target Plant Sizing (सोलर क्षमता )</label>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <button 
                      type="button"
                      onClick={() => setSelectedSize('2 kW Solar System')}
                      className={`py-1.5 px-2 rounded-lg border font-bold font-mono transition-all text-center cursor-pointer ${
                        selectedSize === '2 kW Solar System' 
                          ? 'bg-emerald-400 text-black border-emerald-400' 
                          : 'bg-white/5 border-white/10 text-white/70'
                      }`}
                    >
                      2 kW Plant
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSelectedSize('3 kW Solar System')}
                      className={`py-1.5 px-2 rounded-lg border font-bold font-mono transition-all text-center cursor-pointer ${
                        selectedSize === '3 kW Solar System' 
                          ? 'bg-emerald-400 text-black border-emerald-400' 
                          : 'bg-white/5 border-white/10 text-white/70'
                      }`}
                    >
                      3 kW Sizer
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFE63B] hover:bg-white text-black font-display font-black text-[10px] uppercase tracking-wider py-3.5 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-lg shadow-[#FFE63B]/10 active:scale-98"
                >
                  Schedule Site Survey via WhatsApp <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-center space-y-3 relative z-10"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-white text-sm">Site Audit Request Submitted!</h5>
                <p className="text-[11px] text-white/60 leading-relaxed font-sans">
                  Excellent! Your structural survey layout request has been formatted. Our site engineer will schedule a site visit shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="text-[10px] text-[#FFE63B] hover:underline font-bold font-mono uppercase cursor-pointer"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}

            <div className="pt-2 border-t border-white/5 text-[10px] text-white/40 leading-relaxed font-mono text-center flex justify-center items-center gap-1.5 relative z-10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>MNRE Approved Vendor: Ahaquatic Solar</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
