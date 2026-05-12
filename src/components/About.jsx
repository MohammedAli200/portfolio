import React from 'react';
import { motion } from 'framer-motion';

const journalLogs = [
  {
    date: "Aug 2022",
    location: "Academic Foundation",
    title: "The First Syntax",
    content: "It started with curiousity at the university lab. Learning the fundamentals of Java and C, but realizing that the web was where the real impact lived. I spent nights deconstructing browser rendering engines.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    label: "Log #01"
  },
  {
    date: "June 2023",
    location: "SRIIT Innovation Hub",
    title: "Pressure & Prototypes",
    content: "Winning 3rd at the College Hackathon. 24 hours of pure adrenaline, building a real-time tracking system. This is where I learned that a working prototype beats a perfect design every time.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    label: "Log #02"
  },
  {
    date: "Jan 2024",
    location: "Infosys Residency",
    title: "Corporate Rigor",
    content: "Selected for the Infosys Springboard 6.0 Full Stack Internship. This wasn't just coding; it was engineering. Agile sprints, peer reviews, and deploying production-grade modules. A total paradigm shift.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    label: "Log #03"
  },
  {
    date: "Present Day",
    location: "Freelance Forge",
    title: "Architecting Autonomy",
    content: "Now building for individual visionaries and institutional clients. My current focus is a centralized University Portal and high-end creative portfolios. Every line of code is a signature of quality.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    label: "Log #04"
  }
];

const About = () => {
  return (
    <section id="about" className="py-40 px-6 bg-light-bg relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <span className="section-label-light">The Narrative Log</span>
          <h2 className="text-[3.5rem] md:text-[6rem] font-bold tracking-tighter leading-[0.85] text-text-primary">
            A REAL-WORLD <br /> <span className="text-earth-primary/50">CHRONICLE.</span>
          </h2>
          <p className="mt-12 text-2xl text-text-secondary max-w-2xl font-medium leading-relaxed italic border-l-4 border-earth-primary/20 pl-10">
            "No template-talk. Just the actual path of building, breaking, and refining. This is the log of an engineer in the making."
          </p>
        </div>

        <div className="space-y-40 relative">
          {/* Central Path Indicator */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/5 hidden lg:block" />

          {journalLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-earth-primary/5 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-700" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={log.image} 
                      alt={log.title} 
                      className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                      <span className="text-[10px] font-black uppercase tracking-widest text-text-primary">{log.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-6">
                  <span className="text-[12px] font-black uppercase tracking-[8px] text-earth-primary/40">
                    {log.label}
                  </span>
                  <div className="flex-1 h-[1px] bg-black/5" />
                  <span className="text-[11px] font-bold text-text-secondary/40 font-mono">
                    [{log.date}]
                  </span>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
                    {log.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
                    {log.content}
                  </p>
                </div>

                {/* Proof Tag */}
                <div className="pt-6 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-earth-primary shadow-[0_0_10px_rgba(138,95,65,0.4)]" />
                  <span className="text-[10px] font-black uppercase tracking-[4px] text-text-primary/60">Verified Experience</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative End Marker */}
      <div className="mt-40 text-center">
        <div className="w-px h-24 bg-gradient-to-b from-earth-primary/30 to-transparent mx-auto" />
        <span className="text-[9px] font-black uppercase tracking-[15px] text-text-secondary/20 block mt-8">The Journey Continues</span>
      </div>
    </section>
  );
};

export default About;
