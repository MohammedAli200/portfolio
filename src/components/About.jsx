import React from 'react';
import { motion } from 'framer-motion';

const strongBlocks = [
  {
    title: "Who I Am",
    content: "I am a Full-Stack Developer with a deep-seated passion for architectural precision and user-centric design. I specialize in turning complex problems into elegant, scalable digital solutions.",
    label: "Identity"
  },
  {
    title: "What I’ve Done",
    content: "Architected 20+ frontend projects, delivered professional freelance solutions (Photography Hub), and completed a Full Stack Residency at Infosys Springboard 6.0.",
    label: "Experience"
  },
  {
    title: "What I’m Doing Now",
    content: "Currently engineering an institutional college portal while exploring the frontiers of AI integration and high-performance web systems.",
    label: "Vision"
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="section-label">A Brief Overview</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-earth-light">THE <span className="text-moss-highlight/60">NARRATIVE</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {strongBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="premium-card p-12 space-y-8"
            >
              <span className="text-[10px] font-bold tracking-[6px] text-earth-secondary/40 uppercase block">{block.label}</span>
              <h3 className="text-3xl font-bold text-earth-light">{block.title}</h3>
              <p className="text-earth-light/50 text-lg leading-relaxed font-medium">
                {block.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
