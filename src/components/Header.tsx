import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

interface HeaderProps {
  onNavClick: (tab: string) => void;
  activeTab: string;
  onGetStartedClick: () => void;
}

export default function Header({ onNavClick, activeTab, onGetStartedClick }: HeaderProps) {
  const navItems = ['How It Works', 'Our Cases', 'About Us', 'Careers', 'Resources', 'Customers'];

  return (
    <motion.header 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="w-full px-4 pt-4 md:px-8 absolute top-0 left-0 z-50 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-full bg-transparent transition-all duration-300">
        {/* Brand Logo - reposit */}
        <div 
          className="flex items-center gap-1.5 cursor-pointer group"
          onClick={() => onNavClick('Home')}
          id="logo-container"
        >
          {/* Symmetrical energy mark with interactive spin and scaling */}
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 12 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="text-white flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-400 text-emerald-400">
              <path d="M19 10h-6V3a1 1 0 0 0-1.707-.707l-9 9A1 1 0 0 0 3 13h6v7a1 1 0 0 0 1.707.707l9-9A1 1 0 0 0 19 10z" />
            </svg>
          </motion.div>
          <span className="font-display font-light text-2xl md:text-[1.65rem] tracking-tight text-white select-none whitespace-nowrap">
            reposit
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item, index) => {
            const isActive = activeTab.toLowerCase() === item.toLowerCase();
            return (
              <motion.button
                key={item}
                id={`nav-${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onNavClick(item)}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-sans text-[13px] font-medium tracking-wide transition-colors duration-250 cursor-pointer relative py-1 px-2 rounded-md
                  ${isActive 
                    ? 'text-white bg-white/5' 
                    : 'text-white/75 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item}
                {isActive && (
                  <motion.div 
                    layoutId="activeHeaderTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Instant Quote CTA Button */}
        <div className="flex items-center">
          <motion.button
            id="get-started-button"
            onClick={onGetStartedClick}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(52, 211, 153, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-2 bg-white hover:bg-emerald-400 hover:text-black text-black font-bold text-xs md:text-sm px-6 py-2.5 rounded-full transition-colors duration-350 shadow-md transform cursor-pointer relative overflow-hidden"
          >
            {/* Ambient sliding light pulse sheen */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-sheen"></span>
            <span className="relative z-10">Get an Instant Quote</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

