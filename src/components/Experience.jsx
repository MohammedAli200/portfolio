import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaUniversity, FaUsers } from 'react-icons/fa';

const honors = [
  {
    title: "1st Prize – Departmental Project Expo",
    project: "NESTANA Collaboration Platform",
    desc: "Recognized for full-stack architecture and community-centric design.",
    icon: <FaTrophy />,
  },
  {
    title: "3rd Prize – Regional Hackathon",
    project: "Student Shield Analytics",
    desc: "Awarded for rapid prototyping of predictive mental health dashboards.",
    icon: <FaMedal />,
  },
  {
    title: "Honorable Mention",
    project: "Google Build & Blog Marathon",
    desc: "Recognized for technical blogging and engineering contributions.",
    icon: <FaAward />,
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 px-6 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto">

        {/* Minimal Header consistent with Skills component */}
        <div className="mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-earth-primary font-bold tracking-[0.4em] uppercase text-xs block"
          >
            Recognition
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-text-primary"
          >
            Honors & <span className="text-earth-primary/40">Awards</span>
          </motion.h2>
          <div className="h-1 w-20 bg-earth-primary/20 rounded-full" />
        </div>

        {/* Minimal Structured List (Table-like consistency) */}
        <div className="border-t border-black/5">
          {honors.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row py-10 border-b border-black/5 hover:bg-black/[0.01] transition-colors"
            >
              <div className="md:w-1/4 mb-4 md:mb-0 flex items-center gap-4">
                <div className="text-2xl text-earth-primary/40 group-hover:text-earth-primary transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/40">
                  Award 0{idx + 1}
                </span>
              </div>

              <div className="md:w-3/4 flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-text-primary tracking-tight">{item.title}</h3>
                  <p className="text-sm font-bold text-earth-primary/60 uppercase tracking-wider">{item.project}</p>
                </div>
                <p className="md:w-1/2 text-text-secondary/60 text-sm leading-relaxed md:text-right">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Credentials Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Infosys Springboard",
              sub: "Frontend Developer Intern",
              icon: <FaUniversity />,
              text: "Successfully completed intensive 2-month professional training."
            },
            {
              title: "ALTS Code Crafters",
              sub: "Coding Club President",
              icon: <FaUsers />,
              text: "Leading a community of 200+ engineering students."
            }
          ].map((cert, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white border border-black/5 flex items-start gap-6">
              <div className="text-2xl text-earth-primary/30 mt-1">{cert.icon}</div>
              <div>
                <h4 className="font-bold text-text-primary">{cert.title}</h4>
                <p className="text-[10px] font-black text-earth-primary/50 uppercase tracking-widest mb-2">{cert.sub}</p>
                <p className="text-xs text-text-secondary/60 leading-relaxed">{cert.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Detail */}
        <div className="mt-12 text-right">
          <p className="text-[10px] text-text-secondary/40 font-black uppercase tracking-widest">
            Academic Performance: Top 5 Rank — 8.73 CGPA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;