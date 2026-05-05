import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle, FaHandshake, FaLayerGroup, FaCogs, FaChartLine } from 'react-icons/fa';

const freelanceWork = [
  {
    title: "Photography Portfolio",
    tagline: "High-Fidelity Visual Sanctuary",
    problem: "The client needed a professional online presence that matched the cinematic quality of their work without sacrificing load speed.",
    solution: "Built a motion-driven, ultra-performant gallery with advanced lazy-loading and custom earthy shaders.",
    result: "Improved portfolio visibility by 200% and secured 3 high-value international bookings within month one.",
    tech: ["React", "Motion", "Asset Optimization"]
  },
  {
    title: "Institutional College Portal",
    tagline: "Scalable Academic Infrastructure",
    problem: "A large-scale institution required a unified portal to streamline student resources and administration management.",
    solution: "Architected a modular full-stack system with secure authentication and real-time dashboarding.",
    result: "Successfully simplified resource access for 2000+ users and automated 40% of administrative tasks.",
    tech: ["Node.js", "MongoDB", "Dashboard UI"]
  }
];

const Freelance = () => {
  return (
    <section id="freelance" className="py-40 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-6 py-2 rounded-full border border-moss-highlight/20 bg-moss-highlight/5 mb-8"
            >
              <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px]">Independent Delivery</span>
            </motion.div>
            <h2 className="section-title mb-10 text-earth-light leading-none">FREELANCE <br /> <span className="gradient-text">SOLUTIONS</span></h2>
            <p className="text-earth-light/50 text-xl italic leading-relaxed border-l-4 border-moss-highlight/20 pl-10">
              "Delivering professional-grade digital products through precise engineering and cinematic storytelling."
            </p>
          </div>
          
          <div className="bg-earth-primary/[0.1] backdrop-blur-xl px-12 py-6 border border-moss-highlight/20 rounded-[2.5rem] flex items-center gap-6 shadow-2xl relative overflow-hidden group">
            <div className="w-3 h-3 bg-moss-highlight rounded-full animate-pulse shadow-[0_0_15px_rgba(204,214,127,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[5px] text-earth-light">Status: Available for Collaboration</span>
            <div className="absolute inset-0 bg-moss-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="glow-spot -top-20 -left-20 w-96 h-96 bg-earth-primary/5 -z-10" />
        </div>

        <div className="grid grid-cols-1 gap-20">
          {freelanceWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="bg-earth-primary/[0.05] border border-earth-light/5 rounded-[4rem] p-10 md:p-20 group hover:border-moss-highlight/30 transition-all duration-700 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-4 space-y-8">
                  <div className="space-y-4">
                    <span className="text-moss-highlight/60 text-[10px] font-black uppercase tracking-[8px]">{work.tagline}</span>
                    <h3 className="text-4xl text-earth-light group-hover:text-moss-highlight transition-colors duration-500">{work.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {work.tech.map(t => (
                      <span key={t} className="px-4 py-2 text-[9px] font-black uppercase tracking-widest bg-white/5 text-earth-light/40 rounded-lg border border-white/5">{t}</span>
                    ))}
                  </div>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    className="btn-secondary inline-flex items-center gap-4 w-full justify-center"
                  >
                    View Details <FaExternalLinkAlt size={12} />
                  </motion.a>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-earth-primary/10 flex items-center justify-center text-moss-highlight"><FaLayerGroup /></div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60">The Challenge</h4>
                    <p className="text-earth-light/50 text-sm leading-relaxed italic border-l-2 border-moss-highlight/20 pl-6">"{work.problem}"</p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-moss-highlight/5 flex items-center justify-center text-moss-highlight"><FaCogs /></div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60">The Solution</h4>
                    <p className="text-earth-light/50 text-sm leading-relaxed italic border-l-2 border-moss-highlight/20 pl-6">"{work.solution}"</p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-moss-highlight/20 flex items-center justify-center text-moss-highlight shadow-[0_0_20px_rgba(204,214,127,0.2)]"><FaChartLine /></div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60">The Result</h4>
                    <p className="text-moss-highlight text-sm leading-relaxed font-black border-l-2 border-moss-highlight pl-6">"{work.result}"</p>
                  </div>
                </div>
              </div>
              
              <div className="glow-spot -bottom-40 -right-40 w-[500px] h-[500px] bg-earth-primary/5 group-hover:bg-moss-highlight/5 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-6 shadow-[0_30px_60px_rgba(138,95,65,0.15)]"
          >
            <FaHandshake size={20} /> Hire for Next Project
          </motion.a>
        </div>
      </div>
      
      {/* Cinematic Overlays */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-[radial-gradient(#CCD67F_1px,transparent_1px)] [background-size:60px_60px]" />
    </section>
  );
};

export default Freelance;
