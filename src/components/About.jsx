import React from 'react';
import { motion } from 'framer-motion';

const narrativeBlocks = [
  {
    title: "The Introduction",
    content: "I am a Full-Stack Developer driven by the intersection of engineering and design. I focus on building digital products that are as performant as they are aesthetically refined.",
    label: "01 Identity"
  },
  {
    title: "Accelerated Growth",
    content: "Having architected 20+ frontend and full-stack projects, I've developed a rigorous methodology for rapid delivery without compromising on architectural integrity.",
    label: "02 Experience"
  },
  {
    title: "Market Impact",
    content: "From completing a Full Stack Residency at Infosys Springboard 6.0 to delivering commercial-grade photography portfolios, I bring corporate standards to freelance projects.",
    label: "03 Track Record"
  },
  {
    title: "The Present Focus",
    content: "Currently engineering an institutional college portal while exploring the frontiers of AI-driven interfaces and high-performance web systems.",
    label: "04 Vision"
  }
];

const About = () => {
  return (
    <section id="about" className="py-40 px-6 bg-light-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Header Block */}
          <div className="lg:col-span-4 sticky top-40 h-fit">
            <span className="section-label-light">The Narrative</span>
            <h2 className="text-[4rem] md:text-[5rem] font-bold leading-tight mb-8">A Journey of <span className="text-earth-primary/50">Purpose.</span></h2>
            <div className="h-1 w-20 bg-earth-primary/20" />
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-8 space-y-32">
            {narrativeBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8 max-w-2xl"
              >
                <span className="text-[11px] font-black uppercase tracking-[10px] text-earth-secondary/40 block">
                  {block.label}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-text-primary">
                  {block.title}
                </h3>
                <p className="text-2xl text-text-secondary leading-relaxed font-medium">
                  {block.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Contrast Block */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-light-contrast/30 -z-10" />
    </section>
  );
};

export default About;
