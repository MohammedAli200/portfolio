import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaHandshake, FaLayerGroup, FaCogs, FaChartLine } from 'react-icons/fa';

const freelanceWork = [
  {
    title: "Cinematic Portfolio",
    tagline: "Visual Arts Residency",
    problem: "The client required a digital sanctuary that matched the high-fidelity quality of their cinematography without compromising performance.",
    solution: "Built a motion-driven architecture with advanced asset optimization and refined editorial transitions.",
    result: "Successfully established a premium online presence that secured 3 high-value international commissions in month one.",
    tech: ["React", "Motion", "Performance"]
  },
  {
    title: "Institutional Infrastructure",
    tagline: "Scalable Academic Solutions",
    problem: "A large institution required a unified portal to streamline student data and resource accessibility across departments.",
    solution: "Architected a modular full-stack system with secure authentication and real-time dashboarding.",
    result: "Automated 40% of administrative overhead while serving 2000+ active student identities.",
    tech: ["Node.js", "MongoDB", "Dashboard UI"]
  }
];

const Freelance = () => {
  return (
    <section id="freelance" className="py-40 px-6 bg-light-contrast/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <span className="section-label-light">Independent Delivery</span>
            <h2 className="text-[4rem] md:text-[5rem] font-bold tracking-tight leading-none mb-10">
              FREELANCE <br /> <span className="text-earth-primary/50">SOLUTIONS.</span>
            </h2>
            <p className="text-2xl text-text-secondary leading-relaxed italic border-l-4 border-earth-primary/20 pl-10">
              "Providing corporate-grade engineering for creative and institutional visionaries."
            </p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-xl px-10 py-5 border border-black/5 rounded-full flex items-center gap-6 shadow-sm">
            <div className="w-2.5 h-2.5 bg-earth-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(138,95,65,0.4)]" />
            <span className="text-[10px] font-black uppercase tracking-[5px] text-text-primary">Status: Open for Strategic Collaboration</span>
          </div>
        </div>

        <div className="space-y-24">
          {freelanceWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="editorial-card p-12 md:p-20 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5 space-y-10">
                  <div className="space-y-4">
                    <span className="text-earth-secondary/60 text-[10px] font-black uppercase tracking-[8px]">{work.tagline}</span>
                    <h3 className="text-4xl md:text-5xl font-bold text-text-primary group-hover:text-earth-primary transition-colors duration-500 tracking-tight">{work.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {work.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 text-[9px] font-black uppercase tracking-widest bg-black/5 text-text-secondary rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a
                      href="#contact"
                      className="btn-editorial flex items-center justify-center gap-4 w-full"
                    >
                      Inquire Details <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-earth-primary/5 flex items-center justify-center text-earth-primary"><FaLayerGroup /></div>
                    <h4 className="text-[10px] font-black uppercase tracking-[5px] text-text-primary/60">Challenge</h4>
                    <p className="text-text-secondary/70 text-base leading-relaxed italic">"{work.problem}"</p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-earth-primary/5 flex items-center justify-center text-earth-primary"><FaCogs /></div>
                    <h4 className="text-[10px] font-black uppercase tracking-[5px] text-text-primary/60">Execution</h4>
                    <p className="text-text-secondary/70 text-base leading-relaxed italic">"{work.solution}"</p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-earth-primary/10 flex items-center justify-center text-earth-primary shadow-sm"><FaChartLine /></div>
                    <h4 className="text-[10px] font-black uppercase tracking-[5px] text-text-primary/60">Impact</h4>
                    <p className="text-earth-primary text-base leading-relaxed font-bold">"{work.result}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-editorial inline-flex items-center gap-6 px-16"
          >
            <FaHandshake size={20} /> Hire for Strategic Project
          </motion.a>
        </div>
      </div>
      
      {/* Editorial Decorative Overlays */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.01] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </section>
  );
};

export default Freelance;
