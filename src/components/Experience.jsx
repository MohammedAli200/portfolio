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
    <section id="experience" className="py-40 px-6 bg-light-bg relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="section-label-light">The Record</span>
            <h2 className="text-[4rem] font-bold tracking-tight">Experience & <br /> <span className="text-earth-primary/50">Recognition</span></h2>
          </div>
          <div className="bg-earth-primary/5 px-8 py-4 rounded-2xl border border-earth-primary/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-earth-primary">Ready for New Challenges</span>
          </div>
        </div>

        <div className="space-y-10">
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group editorial-card p-10 flex flex-col md:flex-row items-center gap-10 hover:border-earth-primary/30"
            >
              <div className="w-20 h-20 rounded-3xl bg-light-contrast/50 flex items-center justify-center text-earth-primary text-3xl shrink-0 group-hover:bg-earth-primary group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/40 block mb-1">{item.type}</span>
                    <h3 className="text-2xl font-bold text-text-primary">{item.title}</h3>
                    <p className="text-sm font-bold text-earth-primary/60">{item.org}</p>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-text-secondary/30 bg-black/5 px-5 py-2 rounded-full h-fit">
                    {item.date}
                  </span>
                </div>
                <p className="text-text-secondary/70 leading-relaxed italic max-w-2xl">
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
