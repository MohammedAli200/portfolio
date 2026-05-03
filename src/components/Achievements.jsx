import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    title: "1st Prize – Mini Project",
    org: "College Level Competition",
    desc: "Recognized for excellence in full-stack engineering and innovative problem solving.",
    icon: <FaTrophy />,
    color: "#FAEB92"
  },
  {
    title: "3rd Prize – Hackathon",
    org: "SRIIT College",
    desc: "Achieved podium finish in a competitive development environment focusing on rapid prototyping.",
    icon: <FaMedal />,
    color: "#CC66DA"
  },
  {
    title: "Finisher – Code Vipassana",
    org: "Season 8",
    desc: "Completed an intensive program focused on deep technical mastery and collaborative building.",
    icon: <FaCertificate />,
    color: "#9929EA"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase font-bold tracking-[10px] text-gray-500 mb-6 block"
          >
            Recognition
          </motion.span>
          <h2 className="section-title">HONORS <span className="text-gray-500">& AWARDS</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-12 border-white/[0.03] group hover:border-white/10 transition-all duration-500 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/[0.02] flex items-center justify-center mx-auto mb-8 text-3xl group-hover:scale-110 transition-transform duration-500">
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>
              <h3 className="text-xl mb-4">{item.title}</h3>
              <p className="text-[10px] font-black uppercase tracking-[5px] text-gray-500 mb-6">{item.org}</p>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                "{item.desc}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
