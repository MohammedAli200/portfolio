import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHandshake } from 'react-icons/fa';

const freelanceWork = [
  {
    title: "Cinematic Photography Hub",
    description: "Built for a global visual artist to showcase high-fidelity work with a focus on buttery smooth performance and moss-inspired aesthetics.",
    result: "Delivered a digital sanctuary with 99+ Lighthouse scores."
  },
  {
    title: "Institutional College Portal",
    description: "Architecting a comprehensive system for academic infrastructure, integrating secure authentication and dynamic resource management.",
    result: "Ongoing development with a modular full-stack approach."
  }
];

const Freelance = () => {
  return (
    <section id="freelance" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12 relative">
          <div className="max-w-2xl">
            <span className="text-moss-highlight text-xs font-black uppercase tracking-[15px] mb-8 block">Independent Ventures</span>
            <h2 className="section-title mb-10 text-earth-light">FREELANCE <br /> <span className="text-earth-secondary/40">PARTNERSHIPS</span></h2>
            <p className="text-earth-light/50 text-xl italic leading-relaxed border-l-4 border-moss-highlight/20 pl-10">
              "Crafting professional digital identities through focused engineering and cinematic design."
            </p>
          </div>
          <div className="bg-earth-primary/[0.1] backdrop-blur-xl px-12 py-6 border border-moss-highlight/20 rounded-[2rem] flex items-center gap-6 shadow-2xl">
            <div className="w-3 h-3 bg-moss-highlight rounded-full animate-pulse shadow-[0_0_15px_rgba(204,214,127,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[5px] text-earth-light">Status: Accepting Collaborations</span>
          </div>
          <div className="glow-spot -top-20 -left-20 w-80 h-80 bg-earth-primary/5 -z-10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {freelanceWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="card-earth border-earth-light/5 hover:border-moss-highlight/20 group relative overflow-hidden"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-moss-highlight/5 flex items-center justify-center text-moss-highlight group-hover:bg-moss-highlight group-hover:text-black transition-all duration-700">
                  <FaCheckCircle size={28} />
                </div>
                <h3 className="text-3xl text-earth-light">{work.title}</h3>
              </div>
              <p className="text-earth-light/40 text-lg leading-relaxed mb-12 italic">
                {work.description}
              </p>
              <div className="pt-10 border-t border-earth-light/5">
                <p className="text-[10px] font-black uppercase tracking-[8px] text-moss-highlight/40 italic">
                  Success Metrics: {work.result}
                </p>
              </div>
              
              <div className="glow-spot -bottom-10 -right-10 w-32 h-32 bg-earth-primary/5 group-hover:bg-moss-highlight/5 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="btn-primary inline-flex items-center gap-6 shadow-[0_20px_50px_rgba(138,95,65,0.1)]"
          >
            <FaHandshake size={20} /> Establish Connection
          </motion.a>
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none -z-10 bg-[radial-gradient(#CCD67F_1px,transparent_1px)] [background-size:40px_40px]" />
    </section>
  );
};

export default Freelance;
