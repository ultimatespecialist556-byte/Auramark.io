
import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="pt-20 pb-12 px-6 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-obsidian relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-accent font-black uppercase tracking-[0.5em] text-xs mb-8">Next Step</p>
          <a 
            href="#contact"
            className="text-[clamp(3rem,12vw,10rem)] font-heading font-black tracking-tighter uppercase leading-none mb-12 select-none hover:text-accent transition-colors duration-500 cursor-pointer"
          >
            Let's Go
          </a>
          <div className="flex gap-6">
            {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="w-14 h-14 rounded-full glass-card flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-200 dark:border-white/5">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-xl font-heading font-black tracking-tighter uppercase group-hover:text-accent transition-colors">
              Aura<span className="text-accent">Mark</span>
            </span>
          </a>
          
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; 2025 AuraMark Agency. Crafted for Excellence.
          </p>
          
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-lg"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};
