import React, { useState } from 'react';
import AnimatedHeading from './components/AnimatedHeading';
import FadeIn from './components/FadeIn';
import ScrollReveal from './components/ScrollReveal';
import BatteryCard from './components/BatteryCard';
import WeatherCard from './components/WeatherCard';
import ReviewCard from './components/ReviewCard';
import SpecsHotspots from './components/SpecsHotspots';
import TenderCalculator from './components/TenderCalculator';
import ModelExplorer from './components/ModelExplorer';
import CallbackModal from './components/CallbackModal';
import DeveloperProfileModal from './components/DeveloperProfileModal';
import SubsidyMatrix from './components/SubsidyMatrix';
import ScrollProgressBar from './components/ScrollProgressBar';
import { ArrowRight, Sliders, Zap, Award, ShieldAlert, Sparkles, PhoneCall, MessageCircle, MessageSquare, MapPin } from 'lucide-react';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isModelExplorerOpen, setIsModelExplorerOpen] = useState<boolean>(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState<boolean>(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState<boolean>(false);
  const [lastSelectedModel, setLastSelectedModel] = useState<string | null>(null);

  const PRIMARY_PHONE = "9386945647";
  const SECONDARY_PHONES = ["9304941212", "9534331212", "9334030230"];
  const WHATSAPP_URL = `https://wa.me/919386945647?text=Hi%20Ahaquatic!%20I%20am%20interested%20in%20your%20solar%20panel%20rooftop%20schemes%20under%20the%20PM%20Surya%20Ghar%20government%20subsidy.%20Could%20you%20please%20share%20pricing%20details?`;

  const handleStartChat = () => {
    // Open the calculator proposal directly as our custom chat replacement
    setIsCalculatorOpen(true);
  };

  const handleTakeModelOrder = (modelName: string) => {
    setLastSelectedModel(modelName);
    // Automatically trigger calculator with updated details
    setTimeout(() => {
      setIsCalculatorOpen(true);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full text-white bg-[#030605] flex flex-col font-sans selection:bg-white selection:text-black">
      <ScrollProgressBar />
      
      {/* 1. Video Background: Full-screen background video playing with elegant dark vignette & softening overlays */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
        <video
          src="https://ik.imagekit.io/4uwtveet8/0610.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          id="solar-main-loop-video"
        />
        {/* Universal micro-vignette to reduce eye strain, maximize accessibility, and enrich green/yellow theme tones */}
        <div className="absolute inset-0 bg-[#030605]/45 mix-blend-multiply z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-[#030605]/15 to-[#030605]/65 z-[1]" />
      </div>

      {/* Main Content Area (Z-10 relative to sit on top of background video) */}
      <div className="relative z-10 w-full flex flex-col justify-between">
        
        {/* --- VIEWPORT 1: HERO CONTAINER --- */}
        <div className="relative min-h-screen flex flex-col justify-between w-full overflow-hidden">
          
          {/* Beautiful PM Modi Landing Background (seamless mix-blend-screen overlay with no rectangular border-lines or local gradients) */}
          <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full pointer-events-none select-none z-0 overflow-hidden">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 12%, rgba(0,0,0,0.6) 55%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 12%, rgba(0,0,0,0.6) 55%, black 100%)'
              }}
            >
              <img 
                src="https://res.cloudinary.com/dfvfphe5z/image/upload/a_hflip/v1781368607/MODi_MODI_MODI_hwqbdg.png" 
                alt="PM Narendra Modi Campaign Background"
                className="w-full h-full object-cover object-top lg:object-center scale-[1.04] pointer-events-none opacity-[0.28] sm:opacity-[0.42] lg:opacity-[0.90] mix-blend-screen filter saturate-[1.12] brightness-[0.98] contrast-[1.4]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* 2. Navbar with horizontal page padding: px-4 md:px-12 lg:px-16 with pt-4/pt-6 top padding */}
          <header className="relative z-10 w-full px-4 md:px-12 lg:px-16 pt-4 md:pt-6">
            <nav className="liquid-glass rounded-xl px-4 py-2.5 flex items-center justify-between">
              {/* Left: Logo with Custom Brand - Only logo image, text removed */}
              <div 
                className="cursor-pointer flex items-center gap-2" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                id="logo-container"
              >
                <svg className="w-8 h-8 md:w-9.5 md:h-9.5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="navBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#00B4F5" />
                      <stop offset="100%" stop-color="#0054A6" />
                    </linearGradient>
                    <linearGradient id="navGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#8DC63F" />
                      <stop offset="100%" stop-color="#009245" />
                    </linearGradient>
                    <linearGradient id="navRippleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#009245" />
                      <stop offset="50%" stop-color="#00B4F5" />
                      <stop offset="100%" stop-color="#0054A6" />
                    </linearGradient>
                  </defs>
                  <path d="M 23,38 C 21,38 18,40 19,43 C 20,46 24,45 25,43 C 26,41 25,38 23,38 Z" fill="url(#navBlueGrad)" />
                  <path d="M 16,46 C 14,46 12,48 13,51 C 14,54 18,53 19,51 C 20,49 18,46 16,46 Z" fill="url(#navBlueGrad)" />
                  <path d="M 22,54 C 20,54 18,56 19,59 C 20,62 24,61 25,59 C 26,57 24,54 22,54 Z" fill="url(#navBlueGrad)" />
                  <path d="M 8,72 C 12,85 88,85 92,72 C 80,78 20,78 8,72 Z" fill="url(#navRippleGrad)" />
                  <path d="M 45,13 C 35,28 22,46 27,66 C 31,80 50,81 53,66 C 53,53 48,39 45,13 Z" fill="url(#navBlueGrad)" />
                  <path d="M 46,26 C 53,35 62,49 57,63 C 54,72 42,72 39,63 C 38,53 42,39 46,26 Z" fill="url(#navGreenGrad)" />
                  <path d="M 33,30 Q 33,35 28,35 Q 33,35 33,40 Q 33,35 38,35 Q 33,35 33,30 Z" fill="#FFFFFF" />
                </svg>
                <span className="text-[9px] uppercase font-mono tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                  MNRE APPROVED
                </span>
              </div>

              {/* Center links: Hidden on mobile/tablet, beautifully spaced on desktop without artificial width limits */}
              <div className="hidden lg:flex items-center gap-5 xl:gap-8 text-xs font-semibold uppercase tracking-wider text-white/70">
                <a href="#proposals" className="transition-colors hover:text-emerald-400 whitespace-nowrap">Subsidy Rates</a>
                <a href="#specs" className="transition-colors hover:text-emerald-400 whitespace-nowrap">Rooftop Technology</a>
                <a href="#controls" className="transition-colors hover:text-emerald-400 whitespace-nowrap">Diagnostics</a>
                <a href="#testimonials" className="transition-colors hover:text-emerald-400 whitespace-nowrap">Rooftop Portfolio</a>
              </div>

              {/* Right Menu Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Instant Helpline Link */}
                <a
                  href={`tel:+91${PRIMARY_PHONE}`}
                  className="hidden xl:inline-block text-[11px] font-mono text-[#FFE63B] hover:underline"
                  title="Direct Call Helpline"
                >
                  Helpline: <b className="font-bold">+91 {PRIMARY_PHONE}</b>
                </a>

                {/* Instant WhatsApp Enquiry */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-black hover:bg-[#20ba5a] px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>

                {/* Instant Callback Selector */}
                <button
                  id="navbar-callback-btn"
                  onClick={() => setIsCallbackOpen(true)}
                  className="liquid-glass hover:bg-white hover:text-black border border-white/10 text-white px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3 h-3 text-emerald-400" />
                  <span className="hidden md:inline">Call Back</span>
                </button>

                {/* Start a Sizer calculator */}
                <button
                  id="navbar-chat-btn"
                  onClick={handleStartChat}
                  className="bg-white text-black px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Sizer
                </button>
              </div>
            </nav>
          </header>

          {/* 3. Hero Content (Aligned to Bottom of viewport) */}
          <main className="relative z-10 w-full px-4 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16 mt-16 lg:mt-0">
            <div className="lg:grid lg:grid-cols-2 lg:items-end gap-12">
              
              {/* Left Column - Main content */}
              <div className="flex flex-col items-start max-w-xl">
                {/* Animated Main Heading */}
                <AnimatedHeading 
                  text={"PRADHAN MANTRI\nSURYA GHAR\nMUFT BIJLI YOJNA"} 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 text-white uppercase leading-[0.9] tracking-tight text-white"
                />

                {/* Left-aligned PM Modi Campaign card exactly under the main heading */}
                <FadeIn delay={800} duration={1000} className="mb-6 w-full">
                  <div className="liquid-glass border border-emerald-500/30 p-3.5 rounded-2xl flex items-center gap-4 relative overflow-hidden shadow-2xl max-w-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE63B]/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative shrink-0">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFE63B]/45 to-emerald-400/45 rounded-xl blur opacity-75 animate-pulse" />
                      <img 
                        src="https://res.cloudinary.com/dfvfphe5z/image/upload/v1781368607/MODi_MODI_MODI_hwqbdg.png" 
                        alt="PM Narendra Modi - National Solar Campaign" 
                        referrerPolicy="no-referrer"
                        className="relative w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-white/10 select-none shadow-lg"
                      />
                    </div>
                    <div className="leading-snug">
                      <span className="text-[8px] sm:text-[9px] font-mono font-black text-[#FFE63B] uppercase tracking-wider block mb-1">GOVERNMENT OF INDIA SCHEME</span>
                      <h4 className="text-xs sm:text-sm font-black text-white leading-tight uppercase tracking-tight">
                        Pradhan Mantri Surya Ghar Muft Bijli Yojna
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight mt-1">
                        Up to ₹78,000 Direct Subsidy & 300 Units Free Electricity
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Action Buttons: Fade-in animation at 1100ms delay, 1000ms duration */}
                <FadeIn delay={1100} duration={1000}>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button
                      id="hero-chat-btn"
                      onClick={handleStartChat}
                      className="bg-[#FFE63B] text-black px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors cursor-pointer flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wide font-display shadow-lg shadow-[#FFE63B]/10"
                    >
                      Check Subsidy Sizer <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => setIsCallbackOpen(true)}
                      className="liquid-glass border border-emerald-400/40 text-white hover:text-emerald-300 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-2 text-xs sm:text-sm"
                    >
                      <PhoneCall className="w-4 h-4 text-emerald-400" />
                      Get Callback
                    </button>

                    <button
                      id="hero-explore-btn"
                      onClick={() => setIsModelExplorerOpen(true)}
                      className="liquid-glass border border-white/10 text-white/80 px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer text-xs sm:text-sm"
                    >
                      Explore Brands
                    </button>
                  </div>
                </FadeIn>

                {/* Re-located description and map coordinates link right below the Explore Brands CTA action row */}
                <FadeIn delay={1300} duration={1000} className="w-full mt-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal border-l-2 border-emerald-500/40 pl-3.5">
                    Get up to <b>300 units of free electricity</b> per month! Government solar subsidy scheme to provide free electricity. Managed officially by <b>Ahaquatic Solar</b> in Patna. Install premium tier-1 systems with 25 years warranty.
                  </p>
                  
                  <a 
                    href="https://maps.app.goo.gl/qzRZzMcAaDikdMtA8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-[#FFE63B] transition-colors mt-3 font-mono hover:underline group"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FFE63B] group-hover:scale-110 transition-transform" />
                    <span>Office: Sabajpura More, Phulwari Sharif, Patna (Get Directions)</span>
                  </a>
                </FadeIn>
              </div>

              {/* Right Column - Partner Agent details card */}
              <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0 w-full">
                {/* Fade-in animation at 1400ms delay, 1000ms duration */}
                <FadeIn delay={1400} duration={1000} className="w-full max-w-xs md:max-w-md lg:ml-auto">
                  <div className="flex flex-col gap-4 w-full">
                    {/* Partner Agent Glass Card with Maps coordinates embedded */}
                    <div className="liquid-glass border border-emerald-500/10 px-5 py-3.5 rounded-2xl relative shadow-lg">
                      <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping m-3" />
                      <p className="text-[9px] uppercase font-mono tracking-widest text-[#FFE63B] font-extrabold mb-0.5">UTILITY CONTRACTOR</p>
                      <p className="text-sm font-extrabold tracking-wide text-white mb-2">
                        Ahaquatic Solar
                      </p>
                      
                      {/* Integrated shop directions link directly on the partner badge */}
                      <a 
                        href="https://maps.app.goo.gl/qzRZzMcAaDikdMtA8" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 text-[10px] text-emerald-300 font-mono hover:underline mb-2 pb-2 border-b border-white/5 group"
                      >
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span>Showroom: Sabajpura, Phulwari Sharif, Patna</span>
                      </a>

                      <div className="flex flex-col gap-1 text-[10px] text-[#A5B3B3] font-mono font-normal">
                        <div className="flex items-center justify-between">
                          <span>Primary Line:</span>
                          <a href={`tel:+91${PRIMARY_PHONE}`} className="text-[#FFE63B] font-bold">
                            +91 {PRIMARY_PHONE}
                          </a>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Alt Lines:</span>
                          <span className="text-white/80 shrink-0">
                            9304941212, 9534331212
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </main>
        </div>


        {/* --- VIEWPORT 2: SOLAR PANELS DISPATCH DESK --- */}
        <section id="proposals" className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-20 bg-gradient-to-b from-transparent via-[#050908]/90 to-[#050908]">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Sizing & Sourcing Section Titles */}
            <ScrollReveal direction="up" duration={0.8}>
              <div className="space-y-2 border-l-2 border-emerald-400 pl-4">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-black">PM SURYA GHAR PORTAL</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">MNRE Approved Solar Grid Rates</h2>
                <p className="text-xs text-[#A5B3B3] max-w-xl font-sans">
                  Below are the official approved rates with instant payouts under the <b>Government solar subsidy scheme</b>. Select a capacity to load our live interactive Smart Grid Sizer tool.
                </p>
              </div>
            </ScrollReveal>

            {/* Approved Brands list styled elegantly */}
            <ScrollReveal direction="up" delay={0.15} duration={0.8}>
              <div className="liquid-glass border border-white/5 p-5 rounded-2xl">
                <p className="text-[10px] font-mono tracking-widest text-[#A5B3B3] uppercase font-bold text-center mb-4">
                  We Deal in MNRE Approved Premium Tier-1 Brands:
                </p>
                <div className="flex flex-wrap items-center justify-around gap-y-4 gap-x-8 text-sm font-bold uppercase tracking-widest text-white/80">
                  <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> TATA POWER SOLAROOF
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> ADANI SOLAR
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> WAAREE SOLAR
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> LUMINOUS SOLAR
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> UTL SOLAR
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Central Official PM Surya Ghar Subsidy Information Grid */}
            <ScrollReveal direction="up" delay={0.3} duration={0.8}>
              <SubsidyMatrix 
                onSelectKw={(kw, label) => {
                  setLastSelectedModel(`${kw}.0 kW System`);
                  setIsCalculatorOpen(true);
                }}
              />
            </ScrollReveal>

            {/* Quick action grid cards representing custom proposals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Proposal 1: Dynamic Calculation Trigger */}
              <ScrollReveal direction="up" delay={0.1} duration={0.7} className="flex flex-col h-full">
                <div 
                  onClick={() => setIsCalculatorOpen(true)}
                  className="liquid-glass border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-400/30 transition-all cursor-pointer group hover:scale-[1.01] h-full"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <Sliders className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">Interactive Sizer Tool</h4>
                      <p className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider mt-0.5">ESTIMATE PAYBACK & SUBSIDIES</p>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-sans">
                      Instantly load our visual sizer. Tap through presets from 1 kW up to 6 kW, review net payers amount (such as the exclusive 3 kW promotion of ₹1,21,000!) & lock your subsidy request.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-emerald-400 font-bold group-hover:underline">
                    <span>Open Interactive Rate Matrix</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Proposal 2: Hardware Line-up Drawer Trigger */}
              <ScrollReveal direction="up" delay={0.2} duration={0.7} className="flex flex-col h-full">
                <div 
                  onClick={() => setIsModelExplorerOpen(true)}
                  className="liquid-glass border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FFE63B]/20 transition-all cursor-pointer group hover:scale-[1.01] h-full"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">Panel Catalog</h4>
                      <p className="font-mono text-[9px] text-[#FFE63B] uppercase tracking-wider mt-0.5">DISCOVER APPLICABLE HARDWARE</p>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-sans">
                      Compare Monocrystalline and premium Double-sided Bifacial modules designed for extreme weather. All materials are approved under direct MNRE specifications.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-[#FFE63B] font-bold group-hover:underline">
                    <span>Explore Brands Catalog</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Proposal 3: Active selected summary or placeholder */}
              <ScrollReveal direction="up" delay={0.3} duration={0.7} className="flex flex-col h-full">
                <div className="liquid-glass border border-emerald-500/20 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">Ahaquatic Guarantee</h4>
                      <p className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider mt-0.5">SECURE PATNA DEALERSHIP</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white/60">Selected Capacity:</span>
                        <span className="font-mono font-bold text-white text-[11px] bg-white/5 px-2 py-0.5 rounded-md">{lastSelectedModel || "3.0 kW Premium System"}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white/60">Performance Warranty:</span>
                        <span className="font-mono font-bold text-emerald-400">25 Years Warranty</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCalculatorOpen(true)}
                    className="mt-8 w-full bg-emerald-400 hover:bg-emerald-300 text-black py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-colors cursor-pointer animate-pulse"
                  >
                    Configure system proposal
                  </button>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* --- VIEWPORT 3: HELIOSTAT CELESTIAL STAGE --- */}
        <section id="specs" className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-20 bg-[#050908]">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Title */}
            <ScrollReveal direction="up" duration={0.8}>
              <div className="space-y-2 border-l-2 border-sun-yellow pl-4">
                <span className="font-mono text-xs text-sun-yellow uppercase tracking-widest font-black">SOLAR HELIOSTAT CONTROL DESK</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">Interactive Architectural specs</h2>
                <p className="text-xs text-white/50 max-w-xl">
                  Slide the Celestial lever to rotate the simulated sun. Match real daily sun hours to test output generation performance in active residential photovoltaic models.
                </p>
              </div>
            </ScrollReveal>

            {/* Immersive interactive Hotspot house display */}
            <ScrollReveal direction="up" delay={0.2} duration={0.8}>
              <SpecsHotspots 
                onDiscoverModelsClick={() => setIsModelExplorerOpen(true)} 
                onTakeOrderClick={() => setIsCalculatorOpen(true)} 
              />
            </ScrollReveal>
          </div>
        </section>


        {/* --- VIEWPORT 4: ACTIVE DIAGNOSTICS DECK --- */}
        <section id="controls" className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-20 bg-gradient-to-b from-[#050908] to-black">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Title */}
            <ScrollReveal direction="up" duration={0.8}>
              <div className="space-y-2 border-l-2 border-emerald-400 pl-4">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-black">BATTERY & WEATHER LAB</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">Smart Controller Diagnostics</h2>
                <p className="text-xs text-white/50 max-w-xl">
                  Observe the live simulation. Adjust extreme weather profiles from standard to blizzards or class-5 gale storms, or simulate an electrical grid outage to test standby battery runtime.
                </p>
              </div>
            </ScrollReveal>

            {/* Two Column Grid containing Battery and Weather Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Battery Card Component with customizable Outage Simulator */}
              <ScrollReveal direction="left" delay={0.1} duration={0.8} className="space-y-3">
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-bold">15.4 KWH ENERGY ARCHITECTURE</span>
                <BatteryCard />
              </ScrollReveal>

              {/* Weather resistant simulator shell */}
              <ScrollReveal direction="right" delay={0.2} duration={0.8} className="space-y-3">
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider block font-bold">WEATHERPROOF INTEGRITY SHELL</span>
                <WeatherCard />
              </ScrollReveal>

            </div>
          </div>
        </section>


        {/* --- VIEWPORT 5: ENTRUSTED PORTFOLIO & CASE STUDIES --- */}
        <section id="testimonials" className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-20 bg-black">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Title */}
            <ScrollReveal direction="up" duration={0.8}>
              <div className="space-y-2 border-l-2 border-emerald-400 pl-4">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-black">VERIFIED ROOFTOP PORTFOLIO (सफल सोलर प्रोजेक्ट्स)</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">Real Bill Reductions & Case Studies in Bihar</h2>
                <p className="text-xs text-white/50 max-w-xl">
                  See detailed before vs. after electricity bill savings, net metering exports, and system capacities installed in Patna neighborhoods by Ahaquatic Solar.
                </p>
              </div>
            </ScrollReveal>

            {/* Review component */}
            <ScrollReveal direction="up" delay={0.2} duration={0.8}>
              <ReviewCard />
            </ScrollReveal>
          </div>
        </section>


        {/* --- FOOTER REGISTRY --- */}
        <footer className="w-full px-6 md:px-12 lg:px-16 pt-12 pb-36 md:pb-24 border-t border-white/5 bg-black/60 relative z-10 text-xs text-white/50">
          <div className="max-w-7xl mx-auto md:pr-80 lg:pr-96 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <p className="font-display font-black text-white text-sm tracking-widest uppercase">AHAQUATIC SOLAR</p>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <p className="text-[10px] text-white/40 leading-relaxed font-sans">
                Authorized Solar Rooftop Distributor in Bihar under the PM Surya Ghar scheme.<br />
                <a 
                  href="https://maps.app.goo.gl/qzRZzMcAaDikdMtA8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FFE63B] transition-colors inline-flex items-center gap-1 mt-1 font-medium underline decoration-emerald-500/20"
                >
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  Office Address: Sabajpura More, Phulwari Sharif, Patna, Bihar, Pin - 801505
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Approved MNRE Helplines</p>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <a href="tel:+919386945647" className="hover:text-white transition-colors">Call: 9386945647 (Primary)</a>
                <a href="tel:+919304941212" className="hover:text-white transition-colors">Call: 9304941212</a>
                <a href="tel:+919534331212" className="hover:text-white transition-colors">Call: 9534331212</a>
                <a href="tel:+919334030230" className="hover:text-white transition-colors">Call: 9334030230</a>
              </div>
            </div>
            
            <div className="flex justify-start md:justify-end gap-6 font-mono text-[10px] uppercase tracking-wider">
              <a href="#proposals" className="hover:text-white transition-colors">Subsidy Rates</a>
              <a href="#specs" className="hover:text-white transition-colors">Technology Specs</a>
              <a href="#controls" className="hover:text-white transition-colors font-semibold">Diagnostics</a>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto md:pr-80 lg:pr-96 pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40">
            <span className="text-center sm:text-left leading-relaxed">
              Approved Govt. of India • Ministry of New and Renewable Energy (MNRE) Dealer ID • Ahaquatic Solar © 2026
            </span>
            <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-full px-4 py-1.5 flex items-center justify-center shrink-0">
              <button 
                onClick={() => setIsCreditsOpen(true)}
                className="text-emerald-400 font-bold hover:text-emerald-300 hover:underline cursor-pointer bg-transparent border-none p-0 inline-flex items-center gap-1.5 font-mono transition-all text-xs"
                title="View Verified Developer Credentials"
                id="view-developer-credits"
              >
                Designed & Developed by Krishna Kant
              </button>
            </div>
          </div>
        </footer>

      </div>

      {/* --- PERSISTENT FLOATING COMMUNICATION ACTION DOCK (Responsive Corner Action panel for Desktop only) --- */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-2.5 items-end max-w-[210px] sm:max-w-[250px] animate-fade-in">
        
        {/* PM Modi Floating Card, placed directly ABOVE the chat and call triggers - Compact design */}
        <div className="relative group shrink-0 select-none w-full max-w-[170px] sm:max-w-[195px] transition-all">
          {/* Subtle gold/emerald gradient glow behind the photo */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-[#FFE63B] to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-300" />
          
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative bg-[#040806]/98 border border-emerald-500/25 rounded-2xl p-1.5 shadow-2xl overflow-hidden flex items-center gap-2 transition-transform active:scale-[0.98] cursor-pointer group-hover:border-emerald-400/40"
            title="Go to start of website"
          >
            <img 
              src="https://res.cloudinary.com/dfvfphe5z/image/upload/v1781368607/MODi_MODI_MODI_hwqbdg.png" 
              alt="PM Narendra Modi - Surya Ghar Yojana" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-11 sm:h-11 object-cover rounded-xl border border-white/10 shrink-0 select-none pointer-events-none"
            />
            <div className="leading-tight">
              <span className="text-[7.5px] font-mono font-black text-[#FFE63B] uppercase tracking-wider block leading-none mb-0.5">NATIONAL SCHEME</span>
              <p className="text-[10px] font-extrabold text-white leading-tight">
                PM Surya Ghar
              </p>
              <p className="text-[9px] text-emerald-400 font-medium leading-none mt-0.5">
                Up to ₹78,000 Subsidy
              </p>
            </div>
          </div>
        </div>

        {/* Floating Call Back Sticky Card trigger - whole tab clickable */}
        <div 
          onClick={() => setIsCallbackOpen(true)}
          className="liquid-glass border border-emerald-400/25 bg-[#090e0c]/95 rounded-2xl p-2.5 shadow-2lg flex items-center justify-between gap-3 select-none hover:border-emerald-400/45 transition-all group shrink-0 w-full hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          title="Request Instant Callback"
        >
          <div className="font-sans pr-0.5">
            <span className="text-[8px] uppercase tracking-wider font-mono text-[#A2B6A2] block font-bold leading-none mb-0.5">PATNA HELPLINE</span>
            <span className="text-[11px] font-semibold text-white group-hover:text-emerald-400 transition-colors">Dial: +91 {PRIMARY_PHONE}</span>
          </div>
          <div
            className="w-8 h-8 rounded-xl bg-emerald-400 text-black flex items-center justify-center group-hover:bg-emerald-300 transition-all font-bold shadow-md shadow-emerald-400/10 scale-100 group-hover:scale-105 active:scale-95 shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>

        {/* Floating WhatsApp Sticky Card trigger - whole tab clickable */}
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass border border-[#25D366]/25 bg-[#040907]/95 rounded-2xl p-2.5 shadow-2lg flex items-center justify-between gap-3 select-none hover:border-[#25D366]/50 transition-all group shrink-0 w-full hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          title="Chat via WhatsApp"
        >
          <div className="font-sans pr-0.5">
            <span className="text-[8px] uppercase tracking-wider font-mono text-[#A2B6A2] block font-bold leading-none mb-0.5">WHATSAPP ENQUIRY</span>
            <span className="text-[11px] font-semibold text-white group-hover:text-[#25D366] transition-colors">Chat Instantly</span>
          </div>
          <div
            className="w-8 h-8 rounded-xl bg-[#25D366] text-black flex items-center justify-center group-hover:bg-[#20ba5a] transition-all font-bold shadow-md shadow-green-400/10 scale-100 group-hover:scale-105 active:scale-95 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
        </a>

      </div>

      {/* --- PERSISTENT STICKY ACTION TRAY (For Mobile viewports < md to avoid overlapping content) --- */}
      <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden flex flex-row items-center gap-2 p-1.5 rounded-2xl bg-[#040907]/95 border border-white/10 shadow-2xl backdrop-blur-md">
        
        {/* PM Modi Quick Scroll Tag */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 cursor-pointer shrink-0 border border-white/5 bg-white/5 rounded-xl p-1 pr-2 hover:bg-white/10 active:scale-95 transition-all"
          title="Go to start of website"
        >
          <img 
            src="https://res.cloudinary.com/dfvfphe5z/image/upload/v1781368607/MODi_MODI_MODI_hwqbdg.png" 
            alt="PM Modi" 
            className="w-7 h-7 object-cover rounded-lg border border-white/10"
          />
          <div className="leading-none">
            <span className="text-[6.5px] font-mono text-[#FFE63B] font-black uppercase block">Surya Ghar</span>
            <span className="text-[9px] font-bold text-white tracking-tight">Yojana</span>
          </div>
        </div>

        {/* Callback Helpline target */}
        <button 
          onClick={() => setIsCallbackOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 active:scale-95 transition-all text-[10px] font-bold"
          title="Request Callback"
        >
          <PhoneCall className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>Call Helpline</span>
        </button>

        {/* WhatsApp Chat target */}
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl bg-[#25D366] text-black hover:bg-[#20ba5a] active:scale-95 transition-all text-[10px] font-bold shadow-md shadow-green-400/10"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-black" />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* --- FLOATING OVERLAY MODALS & DRAWERS --- */}
      <TenderCalculator 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />

      <ModelExplorer 
        isOpen={isModelExplorerOpen} 
        onClose={() => setIsModelExplorerOpen(false)} 
        onTakeOrder={handleTakeModelOrder}
      />

      <CallbackModal 
        isOpen={isCallbackOpen} 
        onClose={() => setIsCallbackOpen(false)} 
      />

      <DeveloperProfileModal 
        isOpen={isCreditsOpen}
        onClose={() => setIsCreditsOpen(false)}
      />

    </div>
  );
}
