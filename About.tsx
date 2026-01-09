
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, Users } from 'lucide-react';

const stats = [
  { icon: <Zap className="text-accent" />, label: "Response Rate", value: "98%" },
  { icon: <Users className="text-highlight" />, label: "Active Clients", value: "150+" },
  { icon: <Award className="text-blue-400" />, label: "Design Awards", value: "12" },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our DNA</span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-black tracking-tighter uppercase leading-none mb-8">
              We Breathe <br /> <span className="text-outline">Innovation</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
              AuraMark is more than an agency; we are a digital forge where brands are tempered with cutting-edge design and aggressive growth strategies. We don't follow trends—we set them.
            </p>
            
            <div className="space-y-4">
              {["Obsessive attention to detail", "Data-backed visual hierarchy", "Built for high-velocity conversion"].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-bold text-lg">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sm:col-span-2 glass-card p-10 rounded-[3rem] border-accent/20"
            >
              <h3 className="text-4xl font-heading font-black mb-4 tracking-tight">OUR MISSION</h3>
              <p className="text-slate-500 font-medium">To empower visionaries with digital tools that transcend the ordinary and capture the absolute attention of the modern world.</p>
            </motion.div>
            
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-[2.5rem] text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-heading font-black">{stat.value}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
