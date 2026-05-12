import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaLayerGroup, FaCogs, FaChartLine } from 'react-icons/fa';

const freelanceWork = [
  {
    title: "Cinematic Visuals",
    tagline: "Commercial Residency",
    problem: "Establishing a high-fidelity visual presence for international cinematography.",
    solution: "Motion-driven architecture with refined asset optimization.",
    result: "Secured 3 high-value commissions in month one.",
    tech: ["React", "Performance"]
  },
  {
    title: "Institutional Portal",
    tagline: "Academic Solutions",
    problem: "Streamlining student data accessibility for a large institution.",
    solution: "Modular full-stack system with real-time dashboarding.",
    result: "Serving 2000+ active student identities.",
    tech: ["Node.js", "MongoDB"]
  }
];

const Freelance = () => {
  return (
    <section id="freelance" className="py-32 px-6 bg-light-contrast/10 relative border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="section-label-light">Independent Delivery</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-none text-text-primary">
            Freelance <span className="text-earth-primary/50">Solutions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {freelanceWork.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="editorial-card p-10 group bg-white/50 backdrop-blur-sm"
            >
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-earth-secondary/60 text-[9px] font-black uppercase tracking-[8px]">{work.tagline}</span>
                  <h3 className="text-3xl font-bold text-text-primary group-hover:text-earth-primary transition-colors duration-500 tracking-tight">{work.title}</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-xl bg-earth-primary/5 flex items-center justify-center text-earth-primary text-sm shrink-0"><FaLayerGroup /></div>
                    <p className="text-sm text-text-secondary/70 leading-relaxed italic">"{work.problem}"</p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-xl bg-earth-primary/5 flex items-center justify-center text-earth-primary text-sm shrink-0"><FaChartLine /></div>
                    <p className="text-sm text-earth-primary font-bold">"{work.result}"</p>
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-black/5">
                  <div className="flex gap-3">
                    {work.tech.map(t => (
                      <span key={t} className="text-[8px] font-black uppercase tracking-widest text-text-secondary/40">{t}</span>
                    ))}
                  </div>
                  <a href="#contact" className="text-[9px] font-black uppercase tracking-widest text-earth-primary hover:underline flex items-center gap-2">
                    Inquire <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;
