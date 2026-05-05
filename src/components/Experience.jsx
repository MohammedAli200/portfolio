import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaTrophy } from 'react-icons/fa';

const credentials = [
  {
    type: "Residency",
    title: "Full Stack Development Internship",
    org: "Infosys Springboard 6.0",
    date: "2024",
    icon: <FaBriefcase />,
    desc: "Engineered scalable web applications and mastered corporate development standards."
  },
  {
    type: "Honors",
    title: "1st Prize – Mini Project",
    org: "University Level",
    date: "2023",
    icon: <FaTrophy />,
    desc: "Recognized for exceptional architectural implementation of complex logic systems."
  },
  {
    type: "Honors",
    title: "3rd Prize – Hackathon",
    org: "SRIIT College Innovation",
    date: "2023",
    icon: <FaTrophy />,
    desc: "Achieved podium finish for rapid prototype development and real-time execution."
  },
  {
    type: "Mastery",
    title: "Code Vipassana Finisher",
    org: "Season 8 Residency",
    date: "2023",
    icon: <FaCertificate />,
    desc: "Completed an intensive program focused on deep-tech mastery and system architecture."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-40 px-6 bg-light-bg relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="section-label-light">The Record</span>
            <h2 className="text-[2.5rem] md:text-[4rem] font-bold tracking-tight">Experience & <br className="hidden md:block" /> <span className="text-earth-primary/50">Recognition</span></h2>
          </div>
          <div className="bg-earth-primary/5 px-6 py-3 md:px-8 md:py-4 rounded-2xl border border-earth-primary/10 w-fit">
            <span className="text-[10px] font-black uppercase tracking-widest text-earth-primary">Ready for New Challenges</span>
          </div>
        </div>

        <div className="space-y-6 md:space-y-10">
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group editorial-card p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 hover:border-earth-primary/30"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-light-contrast/50 flex items-center justify-center text-earth-primary text-2xl md:text-3xl shrink-0 group-hover:bg-earth-primary group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/40 block mb-1">{item.type}</span>
                    <h3 className="text-lg md:text-2xl font-bold text-text-primary leading-tight">{item.title}</h3>
                    <p className="text-sm font-bold text-earth-primary/60">{item.org}</p>
                  </div>
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-text-secondary/30 bg-black/5 px-4 md:px-5 py-1.5 md:py-2 rounded-full h-fit w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="text-text-secondary/70 text-sm md:text-base leading-relaxed italic max-w-2xl">
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
