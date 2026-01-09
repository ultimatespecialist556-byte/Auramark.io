
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Layers, Play, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Animated abstract background shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] border border-accent/10 rounded-full flex items-center justify-center -z-10"
      >
        <div className="w-6 h-6 bg-accent rounded-full absolute -top-3 shadow-[0_0_30px_rgba(139,92,246,0.5)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="w-11 h-11 rounded-full border-2 border-obsidian dark:border-snow bg-slate-800 overflow-hidden cursor-pointer"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="avatar" />
                  </motion.div>
                ))}
              </div>
              <div className="h-px w-10 bg-slate-300 dark:bg-white/10 mx-2" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Top 1% Agency</span>
            </motion.div>

            <div className="mb-12">
              <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.85] font-heading font-black tracking-tighter uppercase select-none">
                <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: "110%", skewY: 10, rotate: 2 }}
                    animate={{ y: 0, skewY: 0, rotate: 0 }}
                    transition={{ 
                      duration: 1.2, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 
                    }}
                    className="block origin-left"
                  >
                    Make Your <span className="text-accent">Mark</span>
                  </motion.span>
                </div>
                <div className="overflow-hidden mt-2">
                  <motion.span 
                    initial={{ y: "110%", skewY: -10, rotate: -2 }}
                    animate={{ y: 0, skewY: 0, rotate: 0 }}
                    transition={{ 
                      duration: 1.2, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.25 
                    }}
                    className="block text-outline opacity-40 dark:opacity-20 italic font-light tracking-widest"
                  >
                    In The Void
                  </motion.span>
                </div>
              </h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-tight max-w-lg mb-12"
            >
              Transforming raw potential into digital empires through high-velocity aesthetics.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <a 
                href="#contact"
                className="w-full sm:w-auto px-12 py-7 bg-accent text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-accent/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                Begin Transformation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="flex items-center gap-4 px-8 py-6 rounded-[2rem] border border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/5 transition-all font-bold uppercase text-[10px] tracking-[0.3em]">
                <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center text-obsidian shadow-xl shadow-highlight/20">
                  <Play size={18} fill="currentColor" />
                </div>
                The Process
              </button>
            </motion.div>
          </div>

          <div className="relative mt-20 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
              className="relative z-20 perspective-[1000px]"
            >
              <div className="relative aspect-square w-full max-w-md mx-auto glass-card rounded-[5rem] p-1.5 shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden group">
                 <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" 
                    className="w-full h-full object-cover rounded-[4.8rem] transition-transform duration-[2000ms] group-hover:scale-110 grayscale hover:grayscale-0"
                    alt="Creative Design"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-transparent to-accent/30 opacity-40 group-hover:opacity-20 transition-opacity" />
                 
                 <div className="absolute top-10 right-10 p-5 glass-card rounded-3xl backdrop-blur-3xl border-white/20">
                    <MousePointer2 className="text-highlight animate-pulse" size={24} />
                 </div>
              </div>

              <motion.div 
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [12, 15, 12]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -left-12 w-36 h-36 glass-card rounded-[3rem] flex items-center justify-center rotate-12 shadow-2xl"
              >
                <Layers className="text-accent" size={48} />
              </motion.div>

              <motion.div 
                animate={{ 
                  y: [0, 40, 0],
                  rotate: [-10, -15, -10]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 w-28 h-28 glass-card rounded-full flex items-center justify-center -rotate-12 border-highlight/20"
              >
                <Star className="text-highlight" size={32} fill="currentColor" />
              </motion.div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 rounded-full blur-[140px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};
