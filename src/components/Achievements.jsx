import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaScroll, FaUniversity, FaAward } from 'react-icons/fa';

const honors = [
  {
    title: "1st Prize – NESTANA",
    org: "Departmental Project Expo",
    desc: "Recognized for architecting a scalable student collaboration ecosystem using the MERN stack.",
    icon: <FaTrophy />,
    color: "#CCD67F"
  },
  {
    title: "3rd Prize – Student Shield",
    org: "Regional Hackathon",
    desc: "Awarded for developing a predictive analytics dashboard for campus mental health support.",
    icon: <FaMedal />,
    color: "#A77F60"
  },
  {
    title: "Honorable Mention",
    org: "Google Build & Blog",
    desc: "Recognized in the Marathon event in collaboration with Google and Code Vipassana.",
    icon: <FaAward />,
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
      className="relative luxury-panel overflow-hidden p-10 md:p-16 group bg-[#111] border border-white/5 rounded-3xl"
    >
      {/* Spotlight Background */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(204,214,127,0.07), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/[0.03] flex items-center justify-center text-4xl md:text-5xl mb-8 group-hover:scale-110 transition-transform duration-700">
          <span style={{ color: item.color }}>{item.icon}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
        <p className="text-[9px] font-black uppercase tracking-[6px] md:tracking-[10px] text-earth-primary/50 mb-8">{item.org}</p>
        <p className="text-white/40 text-base md:text-lg leading-relaxed italic border-t border-white/10 pt-8">
          "{item.desc}"
        </p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 md:py-48 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-40 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-earth-primary text-xs font-bold uppercase tracking-[15px] md:tracking-[20px] block mb-6"
          >
            Commendations
          </motion.span>
          <h2 className="text-5xl md:text-[8rem] font-extrabold leading-tight tracking-tighter text-white">
            HONORS <span className="text-white/5">&</span> <br />
            <span className="text-earth-primary/80">CREDENTIALS</span>
          </h2>
        </div>

        {/* Main Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
          {honors.map((item, idx) => (
            <SpotlightCard key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* Professional Certifications & Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              title: "Infosys Springboard",
              org: "Frontend Internship Certified",
              icon: <FaUniversity />,
              details: "2-Month immersive internship on Healthcare modules."
            },
            {
              title: "Coding Club President",
              org: "Leadership & Community",
              icon: <FaScroll />,
              details: "Leading 200+ students at ALTS Code Crafters."
            }
          ].map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="luxury-panel p-8 md:p-12 flex items-center gap-8 md:gap-10 group bg-white/[0.02] border border-white/5 rounded-2xl"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-earth-primary/5 flex items-center justify-center text-earth-primary text-3xl shrink-0 group-hover:bg-earth-primary group-hover:text-black transition-all">
                {cert.icon}
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">{cert.title}</h4>
                <p className="text-[10px] font-black uppercase tracking-[5px] text-earth-primary/60 mb-2">{cert.org}</p>
                <p className="text-white/30 text-sm">{cert.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-earth-primary/10 to-transparent -z-10" />
    </section>
  );
};

export default Achievements;