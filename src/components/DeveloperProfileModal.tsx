import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, Linkedin, Mail, GraduationCap, Award, ShieldCheck, ExternalLink, School } from 'lucide-react';

interface DeveloperProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperProfileModal({ isOpen, onClose }: DeveloperProfileModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/94 backdrop-blur-xl cursor-pointer"
          />

          {/* Modal Card content wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md liquid-glass rounded-2xl p-6 md:p-8 bg-[#040806]/98 border border-emerald-500/20 text-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 my-auto"
            id="developer-profile-modal"
          >
            {/* Visual branding decoration glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#FFE63B]/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/15 text-emerald-400 rounded-xl border border-emerald-500/20 shadow-inner">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base tracking-tight text-white leading-none">
                    Verified Developer Profile
                  </h3>
                  <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest mt-1.5 font-bold">
                    University Social Internship
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center shrink-0 border border-white/5"
                title="Dismiss Dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Avatar & Primary Information */}
            <div className="mt-6 space-y-5 relative z-10">
              
              {/* Profile Card Intro Banner */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/5 shadow-inner">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-[#FFE63B] p-[2px] shadow-lg shrink-0 overflow-hidden relative group">
                  <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center font-display font-black text-white text-lg tracking-wider">
                    KK
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-extrabold text-white leading-none tracking-tight">Krishna Kant</h4>
                  <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/25 inline-block">
                    UID: 25LBCS1292
                  </span>
                </div>
              </div>

              {/* Verified Credentials Details list */}
              <div className="space-y-3 font-sans text-xs">
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#090f0c]/90 border border-emerald-500/10">
                  <div className="p-1.5 text-[#FFE63B] shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-white/40 uppercase font-mono font-bold tracking-wider leading-none">Academic Program</p>
                    <p className="text-white font-semibold mt-1">B.Tech CSE (Computer Science & Engineering)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#090f0c]/90 border border-emerald-500/10">
                  <div className="p-1.5 text-emerald-400 shrink-0 mt-0.5">
                    <School className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-white/40 uppercase font-mono font-bold tracking-wider leading-none">University Campus</p>
                    <p className="text-white font-semibold mt-1">Chandigarh University, Unnao</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#090f0c]/90 border border-emerald-400/10">
                  <div className="p-1.5 text-emerald-400 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-white/40 uppercase font-mono font-bold tracking-wider leading-none">Vetted Undertaking</p>
                    <p className="text-white font-semibold mt-1">University Social Internship / Community Service Project</p>
                    <p className="text-[10px] text-white/40 leading-relaxed mt-1">
                      Designed & maintained a live digital interface under MNRE guidelines to boost public awareness of central subsidies for rooftop solar power in Bihar.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons Links */}
              <div className="space-y-2.5 pt-2">
                <span className="block text-[10px] uppercase font-mono font-black tracking-widest text-[#FFE63B] text-center">
                  Establish Direct Connection
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com/krshhh6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-emerald-400 text-xs font-semibold tracking-tight transition-all active:scale-[0.98]"
                  >
                    <Github className="w-4 h-4 shrink-0" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 text-white/25 ml-auto" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/krishna-kant-bba674389/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-emerald-400 text-xs font-semibold tracking-tight transition-all active:scale-[0.98]"
                  >
                    <Linkedin className="w-4 h-4 shrink-0 text-[#0077B5]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-white/25 ml-auto" />
                  </a>
                </div>

                <a
                  href="mailto:krshhh6@gmail.com"
                  className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-bold leading-none tracking-wider uppercase transition-all shadow-md shadow-emerald-400/5 active:scale-[0.98] cursor-pointer"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Send Direct Email Enquiry</span>
                </a>
              </div>

            </div>

            {/* Vetted validation footer */}
            <div className="relative z-10 mt-6 pt-3 border-t border-white/5 text-center text-[10px] text-white/30 font-medium">
              Vetted Internship Submission • Verification ID Code: CU-25LBCS1292
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
