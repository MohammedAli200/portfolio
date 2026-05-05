import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaScroll, FaUniversity } from 'react-icons/fa';

const honors = [
  {
    title: "1st – Mini Project",
    org: "University Level",
    desc: "Architected a high-fidelity system with complex integration logic.",
    icon: <FaTrophy />,
    color: "#CCD67F"
  },
  {
    title: "3rd – SRIIT Hackathon",
    org: "Regional Finals",
    desc: "Rapid prototype development and full-stack orchestration.",
    icon: <FaMedal />,
    color: "#A77F60"
  },
  {
    title: "Season 8 Vipassana",
    org: "Finisher Status",
    desc: "Intensive residency mastering advanced scalable architectures.",
    icon: <FaCertificate />,
    color: "#8A5F41"
  }
];

const SpotlightCard = ({ item, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative luxury-panel overflow-hidden p-16 group"
    >
      {/* Spotlight Background */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(204,214,127,0.1), transparent 80%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-white/[0.03] flex items-center justify-center text-5xl mb-10 group-hover:scale-125 transition-transform duration-700">
          <span style={{ color: item.color }}>{item.icon}</span>
        </div>
        <h3 className="text-3xl font-black text-earth-light mb-4">{item.title}</h3>
        <p className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/40 mb-10">{item.org}</p>
        <p className="text-earth-light/40 text-lg leading-relaxed italic border-t border-white/5 pt-10">
          "{item.desc}"
        </p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-40 px-6 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-40 text-center">
          <span className="text-moss-highlight text-xs font-black uppercase tracking-[20px] block mb-8">Commendations</span>
          <h2 className="text-[6rem] md:text-[10rem] font-black leading-tight tracking-tighter">HONORS <span className="text-white/5">&</span> <br /> <span className="gradient-text-luxury">CREDENTIALS</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {honors.map((item, idx) => (
            <SpotlightCard key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Infosys Springboard 6.0", org: "Internship Certificate", icon: <FaUniversity /> },
            { title: "Full Stack Web Mastery", org: "Bootcamp Certification", icon: <FaScroll /> }
          ].map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="luxury-panel p-12 flex items-center gap-10 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-moss-highlight/5 flex items-center justify-center text-moss-highlight text-3xl shrink-0 group-hover:bg-moss-highlight group-hover:text-black transition-all">
                {cert.icon}
              </div>
              <div>
                <h4 className="text-3xl text-earth-light mb-2">{cert.title}</h4>
                <p className="text-xs font-black uppercase tracking-[8px] text-moss-highlight/40">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-earth-light/10 to-transparent -z-10" />
    </section>
  );
};

export default Achievements;
