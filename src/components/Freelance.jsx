import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHandshake } from 'react-icons/fa';

const freelanceWork = [
  {
    title: "Photography Portfolio",
    description: "Built for a professional visual artist to showcase cinematic captures with a focus on high-performance loading and motion design.",
    result: "Successfully delivered a digital sanctuary that highlights artistry."
  },
  {
    title: "College Institutional Portal",
    description: "Developing a scalable, secure management system for students and administration with a unified dashboard experience.",
    result: "Ongoing development with a focus on high availability."
  }
];

const Freelance = () => {
  return (
    <section id="freelance" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-[10px] mb-4 block">Independent Work</span>
            <h2 className="section-title mb-8">FREELANCE <br /> <span className="text-gray-500">SOLUTIONS</span></h2>
            <p className="text-gray-400 text-lg italic leading-relaxed">
              Bridging the gap between creative vision and technical execution for independent clients and institutions.
            </p>
          </div>
          <div className="glass-panel px-8 py-4 border-white/5 flex items-center gap-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Status: Available for hire</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {freelanceWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-12 border-white/[0.03] group hover:border-white/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <FaCheckCircle size={24} />
                </div>
                <h3 className="text-2xl">{work.title}</h3>
              </div>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                {work.description}
              </p>
              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 italic">
                  Outcome: {work.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="btn-primary inline-flex items-center gap-4"
          >
            <FaHandshake /> Start a Collaboration
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
