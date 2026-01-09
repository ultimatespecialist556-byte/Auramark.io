
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-slate-100 dark:bg-obsidian/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="sticky top-40">
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-heading font-black tracking-tighter uppercase leading-none mb-10">
              Launch <br /> Your <span className="text-highlight">Era</span>
            </h2>
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-2">Electronic Mail</p>
                <p className="text-3xl font-heading font-bold hover:text-accent transition-colors">hello@auramark.agency</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-2">Direct Signal</p>
                <p className="text-3xl font-heading font-bold hover:text-accent transition-colors">+1 (234) MARK-ME</p>
              </div>
              <div className="flex gap-4 pt-4">
                 <div className="p-6 glass-card rounded-[2rem] flex-1">
                    <MapPin className="text-accent mb-4" />
                    <p className="font-bold">New York</p>
                    <p className="text-slate-400 text-sm">Creative Hub 01</p>
                 </div>
                 <div className="p-6 glass-card rounded-[2rem] flex-1">
                    <MapPin className="text-highlight mb-4" />
                    <p className="font-bold">Tokyo</p>
                    <p className="text-slate-400 text-sm">Satellite Unit 04</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 md:p-16 rounded-[4rem] border-accent/10">
            <form className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Collaborator Identity</label>
                <input 
                  type="text" 
                  placeholder="The Visionary Name"
                  className="w-full bg-transparent border-b border-slate-300 dark:border-white/10 pb-4 outline-none text-2xl font-medium focus:border-accent transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-800"
                />
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Communication Node</label>
                <input 
                  type="email" 
                  placeholder="name@vision.com"
                  className="w-full bg-transparent border-b border-slate-300 dark:border-white/10 pb-4 outline-none text-2xl font-medium focus:border-accent transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-800"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">The Manifesto</label>
                <textarea 
                  rows={4}
                  placeholder="Describe the future you want to build"
                  className="w-full bg-transparent border-b border-slate-300 dark:border-white/10 pb-4 outline-none text-xl font-medium focus:border-accent transition-colors resize-none placeholder:text-slate-300 dark:placeholder:text-slate-800"
                />
              </div>

              <button className="w-full py-8 bg-accent text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-accent/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group">
                Establish Connection <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
