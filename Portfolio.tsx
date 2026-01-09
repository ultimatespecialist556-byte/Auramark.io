
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    title: 'Prism Vision',
    cat: 'UI Design',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
    color: 'border-accent/40'
  },
  {
    title: 'Aura Athletics',
    cat: 'Branding',
    img: 'https://images.unsplash.com/photo-1549497538-301288c8549a?auto=format&fit=crop&q=80',
    color: 'border-highlight/40'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="works" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-heading font-black tracking-tighter uppercase leading-none mb-6">
            Case <span className="text-accent italic">Studies</span>
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full" />
        </div>

        <div className="space-y-40">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 w-full group">
                <div className={`relative aspect-[16/10] rounded-[4rem] overflow-hidden border-2 ${work.color} shadow-2xl`}>
                  <img src={work.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              <div className="flex-1 max-w-lg">
                <span className="text-accent font-black text-xs uppercase tracking-widest mb-4 block">{work.cat}</span>
                <h3 className="text-5xl md:text-7xl font-heading font-black uppercase mb-8 leading-none tracking-tighter">
                  {work.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed mb-10">
                  A complete digital overhaul resulting in a 300% increase in customer lifetime value through innovative user patterns.
                </p>
                <button className="flex items-center gap-4 text-sm font-black uppercase tracking-widest group">
                  Explore Full Study 
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <ArrowUpRight />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
