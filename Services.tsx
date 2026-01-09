
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Zap, Camera, MousePointer2, TrendingUp, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Branding",
    icon: <Sparkles size={32} />,
    desc: "We sculpt legendary identities that carve their own path in competitive markets.",
    grid: "md:col-span-2",
    color: "from-accent/20 to-purple-600/0",
    glow: "shadow-accent/10"
  },
  {
    title: "Ads Growth",
    icon: <TrendingUp size={32} />,
    desc: "Unrelenting conversion engines built on behavioral science.",
    grid: "md:col-span-1",
    color: "from-highlight/10 to-green-600/0",
    glow: "shadow-highlight/5"
  },
  {
    title: "App Design",
    icon: <Cpu size={32} />,
    desc: "Liquid interfaces that feel as good as they look.",
    grid: "md:col-span-1",
    color: "from-blue-500/10 to-blue-600/0",
    glow: "shadow-blue-500/10"
  },
  {
    title: "E-Commerce",
    icon: <Zap size={32} />,
    desc: "Turning visitors into advocates through seamless checkout experiences.",
    grid: "md:col-span-2",
    color: "from-orange-500/10 to-orange-600/0",
    glow: "shadow-orange-500/10"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Arsenal</span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-black tracking-tighter uppercase leading-none">
              High Velocity <br /> <span className="text-outline">Impact</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-sm">
            Moving faster than the speed of culture. Our tools are built for the leaders of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-12 rounded-[3.5rem] glass-card overflow-hidden transition-all duration-500 hover:shadow-2xl ${s.glow} ${s.grid}`}
            >
              {/* Hover gradient reveal */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-white/5 dark:bg-white/10 flex items-center justify-center text-accent mb-12 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-4xl font-heading font-black uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Bottom decorative arrow */}
              <div className="absolute bottom-12 right-12 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                <MousePointer2 size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
