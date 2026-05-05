import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaGraduationCap, FaScroll } from 'react-icons/fa';

const honors = [
  {
    title: "1st Prize – Mini Project",
    org: "University Level Showcase",
    desc: "Recognized for architecting a high-fidelity system with complex integration logic.",
    icon: <FaTrophy />,
    color: "#CCD67F"
  },
  {
    title: "3rd Prize – Hackathon",
    org: "SRIIT College Innovation",
    desc: "Achieved podium finish for rapid rapid prototype development under pressure.",
    icon: <FaMedal />,
    color: "#A77F60"
  },
  {
    title: "Code Vipassana Finisher",
    org: "Season 8 Residency",
    desc: "Mastered advanced full-stack architectures through an intensive technical program.",
    icon: <FaCertificate />,
    color: "#8A5F41"
  }
];

const certifications = [
  {
    title: "Full Stack Development Internship",
    org: "Infosys Springboard 6.0",
    desc: "Comprehensive corporate training in scalable system architecture and modern web standards.",
    icon: <FaGraduationCap />
  },
  {
    title: "Full Stack Web Development",
    org: "Bootcamp Certification",
    desc: "Deep-dive into MERN stack, state management, and production-ready deployments.",
    icon: <FaScroll />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-40 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-6 py-2 rounded-full border border-moss-highlight/20 bg-moss-highlight/5 mb-8"
          >
            <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px]">Proof of Excellence</span>
          </motion.div>
          <h2 className="section-title">HONORS <span className="gradient-text">& CREDENTIALS</span></h2>
          <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-earth-primary/5" />
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {honors.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="card-earth hover:shadow-[0_30px_70px_rgba(138,95,65,0.15)] group relative overflow-hidden flex flex-col items-center text-center p-16"
            >
              <div className="w-24 h-24 rounded-full bg-earth-primary/10 flex items-center justify-center mb-10 text-4xl group-hover:scale-110 transition-transform duration-700 relative">
                <span style={{ color: item.color }}>{item.icon}</span>
                <div className="absolute inset-0 rounded-full border border-moss-highlight/10 animate-ping opacity-20" />
              </div>
              <h3 className="text-2xl text-earth-light mb-4">{item.title}</h3>
              <p className="text-[10px] font-black uppercase tracking-[8px] text-earth-secondary/50 mb-10">{item.org}</p>
              <p className="text-earth-light/40 text-base leading-relaxed italic border-t border-earth-light/5 pt-10">
                "{item.desc}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div className="space-y-12">
          <div className="text-center mb-16">
            <h3 className="text-xs font-black uppercase tracking-[15px] text-earth-secondary/40">Technical Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-earth-primary/[0.05] border border-earth-light/5 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-10 hover:border-moss-highlight/30 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-moss-highlight/5 flex items-center justify-center text-moss-highlight text-3xl shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-2xl text-earth-light mb-2">{cert.title}</h4>
                  <p className="text-[10px] font-black uppercase tracking-[5px] text-moss-highlight/60 mb-4">{cert.org}</p>
                  <p className="text-earth-light/40 text-sm italic">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Glows */}
      <div className="glow-spot -top-20 -right-20 w-80 h-80 bg-moss-highlight/10" />
      <div className="glow-spot -bottom-20 -left-20 w-96 h-96 bg-earth-primary/10" />
    </section>
  );
};

export default Achievements;
