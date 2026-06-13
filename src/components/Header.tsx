import React from 'react';
import { Zap } from 'lucide-react';

interface HeaderProps {
  onNavClick: (tab: string) => void;
  activeTab: string;
  onGetStartedClick: () => void;
}

export default function Header({ onNavClick, activeTab, onGetStartedClick }: HeaderProps) {
  const navItems = ['How It Works', 'Our Cases', 'About Us', 'Careers', 'Resources', 'Customers'];

  return (
    <header className="w-full px-4 pt-4 md:px-8 absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-ful bg-transparent transition-all duration-300">
        {/* Brand Logo - reposit */}
        <div 
          className="flex items-center gap-1.5 cursor-pointer group"
          onClick={() => onNavClick('Home')}
          id="logo-container"
        >
          {/* Symmetrical energy mark in line with 'reposit' logo */}
          <div className="text-white flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-400 text-emerald-400">
              <path d="M19 10h-6V3a1 1 0 0 0-1.707-.707l-9 9A1 1 0 0 0 3 13h6v7a1 1 0 0 0 1.707.707l9-9A1 1 0 0 0 19 10z" />
            </svg>
          </div>
          <span className="font-display font-light text-2xl md:text-[1.65rem] tracking-tight text-white select-none whitespace-nowrap">
            reposit
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeTab.toLowerCase() === item.toLowerCase();
            return (
              <button
                key={item}
                id={`nav-${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onNavClick(item)}
                className={`font-sans text-[13px] font-normal tracking-wide transition-all duration-300 cursor-pointer relative py-1
                  ${isActive 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Instant Quote CTA Button */}
        <div className="flex items-center">
          <button
            id="get-started-button"
            onClick={onGetStartedClick}
            className="group flex items-center gap-2 bg-white hover:bg-emerald-400 text-black font-semibold text-xs md:text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95 cursor-pointer"
          >
            <span>Get an Instant Quote</span>
          </button>
        </div>
      </div>
    </header>
  );
}

