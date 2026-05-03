import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    title: "1st – Premier Project",
    org: "University Showcase",
    desc: "Awarded for exceptional architectural planning and implementation of complex full-stack logic.",
    icon: <FaTrophy />,
    color: "#CCD67F"
  },
  {
    title: "3rd – Regional Hack",
    org: "SRIIT Innovation Labs",
    desc: "Achieved top-tier ranking among regional innovators for rapid full-stack delivery.",
    icon: <FaMedal />,
    color: "#A77F60"
  },
  {
    title: "Season 8 Mastery",
    org: "Code Vipassana",
    desc: "Successfully completed an intensive deep-tech residency focused on advanced scalable systems.",
    icon: <FaCertificate />,
    color: "#8A5F41"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40 relative">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-moss-highlight text-[10px] uppercase font-black tracking-[15px] mb-8 block"
          >
            Commendations
          </motion.span>
          <h2 className="section-title">AWARDS <span className="text-earth-secondary/40">&</span> HONORS</h2>
          <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-earth-primary/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="card-earth hover:shadow-[0_30px_70px_rgba(138,95,65,0.15)] group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-earth-primary/5 flex items-center justify-center mb-10 text-4xl group-hover:scale-110 transition-transform duration-700 relative">
                <span style={{ color: item.color }}>{item.icon}</span>
                <div className="absolute inset-0 rounded-full border border-moss-highlight/10 animate-ping opacity-20" />
              </div>
              <h3 className="text-2xl text-earth-light mb-4">{item.title}</h3>
              <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/50 mb-10">{item.org}</p>
              <p className="text-earth-light/40 text-base leading-relaxed italic border-t border-earth-light/5 pt-10">
                "{item.desc}"
              </p>
              <div className="glow-spot -bottom-20 -right-20 w-48 h-48 bg-moss-highlight/5 group-hover:bg-moss-highlight/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
