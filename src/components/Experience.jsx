import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaTrophy } from 'react-icons/fa';

const credentials = [
  {
    type: "Internship",
    title: "Full Stack Development Resident",
    org: "Infosys Springboard 6.0",
    date: "2024",
    icon: <FaBriefcase />,
    desc: "Engineered scalable web applications using modern corporate standards and agile methodologies."
  },
  {
    type: "Achievement",
    title: "1st Prize – Mini Project",
    org: "University Level",
    date: "Honors",
    icon: <FaTrophy />,
    desc: "Recognized for exceptional architectural planning and implementation of complex full-stack logic."
  },
  {
    type: "Achievement",
    title: "3rd Prize – Hackathon",
    org: "SRIIT College Innovation",
    date: "Honors",
    icon: <FaTrophy />,
    desc: "Achieved podium finish for rapid prototype development and real-time problem solving."
  },
  {
    type: "Certification",
    title: "Full Stack Web Mastery",
    org: "Bootcamp Accreditation",
    date: "2023",
    icon: <FaCertificate />,
    desc: "Deep-dive certification covering MERN stack, state management, and production-ready deployments."
  },
  {
    type: "Recognition",
    title: "Code Vipassana Finisher",
    org: "Season 8 Residency",
    date: "2023",
    icon: <FaCertificate />,
    desc: "Completed an intensive technical residency focused on deep-tech mastery and system design."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <span className="section-label">Proof of Competence</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-earth-light">EXPERIENCE <span className="text-moss-highlight/60">&</span> CREDENTIALS</h2>
        </div>

        <div className="space-y-8">
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="premium-card p-10 flex flex-col md:flex-row items-center gap-10 hover:translate-x-2 transition-transform duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-earth-primary/5 flex items-center justify-center text-moss-highlight text-2xl shrink-0 border border-white/5">
                {item.icon}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-earth-light">{item.title}</h3>
                    <p className="text-sm font-bold text-earth-secondary/60 uppercase tracking-widest">{item.org}</p>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-1 rounded-full text-earth-light/40 border border-white/5">
                    {item.date}
                  </span>
                </div>
                <p className="text-earth-light/50 text-base leading-relaxed italic">
                  "{item.desc}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
