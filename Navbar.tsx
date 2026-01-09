
import React from 'react';
import { Sun, Moon, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 100], ['100%', '85%']);
  const top = useTransform(scrollY, [0, 100], ['0px', '20px']);
  const borderRadius = useTransform(scrollY, [0, 100], ['0px', '999px']);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      style={{ width, top, borderRadius }}
      className="fixed left-1/2 -translate-x-1/2 z-[100] glass-card px-8 h-16 md:h-20 flex items-center justify-between"
    >
      <a href="#home" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform">
          <Zap size={20} className="text-white fill-current" />
        </div>
        <span className="text-xl font-heading font-black tracking-tighter uppercase">
          Aura<span className="text-accent">Mark</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="text-xs font-black tracking-[0.2em] uppercase hover:text-accent transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a 
          href="#contact"
          className="hidden sm:block px-6 py-2 bg-accent text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
        >
          Get Started
        </a>
      </div>
    </motion.nav>
  );
};
