import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Calendar, Clock, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMERGENCY_CHANNELS = [
  { num: '9386945647', primary: true, name: 'Principal Advisor' },
  { num: '9304941212', primary: false, name: 'Patna Billing Desk' },
  { num: '9534331212', primary: false, name: 'On-site Surveyor' },
  { num: '9334030230', primary: false, name: 'Engineering Liaison' }
];

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [prefTime, setPrefTime] = useState('immediate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    
    const timeLabel = prefTime === 'immediate' ? 'Now (~15m)' : 'Today Evening';
    const message = `*New Call Back Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Preferred Time:* ${timeLabel}\n\nPlease call me back regarding the PM Surya Ghar Solar Rooftop scheme.`;
    const whatsappUrl = `https://wa.me/919386945647?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center p-2 sm:p-4 md:p-6 overflow-y-auto pt-8 sm:pt-12 pb-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-black/92 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-md liquid-glass rounded-2xl p-5 md:p-7 bg-[#050807]/98 backdrop-blur-md border border-emerald-500/20 text-white overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.95)] z-10 my-auto"
            id="callback-modal"
          >
            {/* Ambient solar atmosphere glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Phone className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm md:text-md tracking-tight text-white flex items-center gap-1.5 leading-none">
                    Establish Live Contact
                  </h3>
                  <p className="font-sans text-[10px] text-white/50 mt-1">Authorized Patna Solar Helpline Desk</p>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center shrink-0"
                id="close-callback-modal"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            {!isSuccess ? (
              <div className="mt-5 space-y-4 relative z-10">
                
                {/* Direct Call badges */}
                <div>
                  <label className="block text-[9px] uppercase tracking-wider text-emerald-400 font-mono font-bold mb-2">
                    Connect on WhatsApp
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {EMERGENCY_CHANNELS.map((ch) => (
                      <a
                        key={ch.num}
                        href={`https://wa.me/91${ch.num}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-xl text-left border flex flex-col justify-center transition-all ${
                          ch.primary
                            ? 'bg-emerald-500/10 border-emerald-400/50 hover:border-emerald-400'
                            : 'bg-white/3 border-white/5 hover:border-white/15'
                        }`}
                      >
                        <span className="text-[10px] font-bold text-white font-mono flex items-center gap-1">
                          <Phone className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                          +91 {ch.num}
                        </span>
                        <span className="text-[8px] text-white/40 leading-none mt-0.5">{ch.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="relative py-2 flex items-center">
                  <div className="flex-grow border-t border-white/5"></div>
                  <span className="flex-shrink mx-3 text-[9px] font-mono text-white/30 uppercase tracking-widest">
                    OR SCHEDULE CALLBACK
                  </span>
                  <div className="flex-grow border-t border-white/5"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full name input */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/45 mb-1.5 font-mono">Full Name</label>
                    <input
                      id="callback-name-input"
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehta"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 placeholder:text-white/20 transition-all font-sans"
                    />
                  </div>

                  {/* WhatsApp or Mobile number input */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/45 mb-1.5 font-mono">Mobile Number</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-white/30 font-mono">+91</span>
                      <input
                        id="callback-phone-input"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="9386945647"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 placeholder:text-white/20 transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Consultation delay selector */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/45 mb-1.5 font-mono">Preferred Slot</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPrefTime('immediate')}
                        className={`p-2.5 rounded-lg border text-left transition-all flex items-center justify-between text-xs cursor-pointer ${
                          prefTime === 'immediate'
                            ? 'bg-emerald-500/10 border-emerald-400/50 text-white'
                            : 'bg-white/3 border-white/5 text-white/60 hover:border-white/15'
                        }`}
                      >
                        <span className="font-semibold block">Now (~15m)</span>
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setPrefTime('scheduled')}
                        className={`p-2.5 rounded-lg border text-left transition-all flex items-center justify-between text-xs cursor-pointer ${
                          prefTime === 'scheduled'
                            ? 'bg-emerald-500/10 border-[#FFE63B]/30 text-white'
                            : 'bg-white/3 border-white/5 text-white/60 hover:border-[#FFE63B]/15'
                        }`}
                      >
                        <span className="font-semibold block">Today Evening</span>
                        <Clock className="w-3 h-3 text-[#FFE63B]" />
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !name || !phone}
                    className="w-full bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed text-black text-xs font-bold py-3.5 px-4 rounded-xl mt-4 flex items-center justify-center gap-2 transition-all uppercase tracking-wider font-display cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span>Request Advisor Call Back</span>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4 relative z-10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-white text-md">Request Logged Successfully</h4>
                  <p className="text-xs text-white/50 max-w-xs mx-auto mt-2 leading-relaxed font-sans">
                    Thank you <strong>{name}</strong>. An advisor from <strong>Ahaquatic Solar</strong> will reach you on <strong>+91 {phone}</strong> shortly.
                  </p>
                </div>
                
                <div className="flex gap-2 justify-center">
                  <a
                    href={`https://wa.me/919386945647?text=Hi%20Ahaquatic%20Solar!%20My%20name%20is%20${encodeURIComponent(name)}.%20Please%20verify%20my%20solar%20rooftop%20subsidy.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-black text-xs font-bold py-2.5 px-5 rounded-lg flex items-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" /> Whatsapp Now
                  </a>
                  <button
                    onClick={resetForm}
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold py-2 px-5 rounded-lg transition-colors cursor-pointer"
                  >
                    Close Screen
                  </button>
                </div>
              </motion.div>
            )}

            {/* Note */}
            <div className="relative z-10 mt-5 pt-3.5 border-t border-white/5 text-center text-[10px] text-white/40 flex items-center justify-center gap-1.5">
              <span>Secure connection registered with Ahaquatic Cabinet</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
