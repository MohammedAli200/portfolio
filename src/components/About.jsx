import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const storyPoints = [
  {
    title: "Initial Curiosity",
    content: "Started with the foundations of the web. HTML, CSS, and JavaScript weren't just languages; they were tools for infinite creation.",
    year: "Beginning"
  },
  {
    title: "The Growth Catalyst",
    content: "Architected 20+ frontend projects. Mastered React and the full-stack ecosystem to build high-performance digital products.",
    year: "Evolution"
  },
  {
    title: "Market Breakthrough",
    content: "Delivered a professional Photography Portfolio for an international client, balancing cinematic design with technical precision.",
    year: "2023"
  },
  {
    title: "The Vision Forward",
    content: "Currently engineering an institutional college portal while pushing the boundaries of AI-driven user interfaces.",
    year: "Present"
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="about" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="mb-40 text-center relative">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-moss-highlight text-[10px] uppercase font-black tracking-[15px] mb-8 block"
          >
            The Chronological Narrative
          </motion.span>
          <h2 className="section-title"><span className="text-earth-secondary/40">THE</span> JOURNEY</h2>
          <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-moss-highlight/5" />
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[-2px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-moss-highlight/50 via-earth-primary/50 to-transparent origin-top hidden md:block"
          />

          <div className="space-y-40">
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:block w-5/12" />
                
                {/* Timeline Dot with Glow */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-2 w-4 h-4 rounded-full bg-moss-highlight shadow-[0_0_15px_rgba(204,214,127,0.4)] z-10" />

                <div className="w-full md:w-5/12">
                  <div className="card-earth hover:shadow-[0_20px_50px_rgba(138,95,65,0.1)] group">
                    <span className="text-[10px] font-black tracking-[8px] text-moss-highlight/60 mb-6 block uppercase group-hover:text-moss-highlight transition-colors">
                      {point.year}
                    </span>
                    <h3 className="text-3xl mb-6 text-earth-light">{point.title}</h3>
                    <p className="text-earth-light/60 text-lg leading-relaxed italic border-l-2 border-moss-highlight/20 pl-8">
                      "{point.content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
