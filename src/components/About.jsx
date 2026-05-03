import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const storyPoints = [
  {
    title: "The Beginning",
    content: "Started with HTML, CSS, and JavaScript out of curiosity. The fascination with building things for the web was immediate.",
    year: "Early Days"
  },
  {
    title: "The Growth Phase",
    content: "Built 20+ frontend projects and explored React & full-stack development. Focused on creating scalable and user-centric applications.",
    year: "Evolution"
  },
  {
    title: "Professional Breakthrough",
    content: "Started professional freelancing with a high-end Photography Website, bridging the gap between design and functionality.",
    year: "2023"
  },
  {
    title: "Current Mission",
    content: "Currently developing a comprehensive college website while exploring the intersection of AI and Data Science.",
    year: "Present"
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="about" className="py-32 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-32 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase font-bold tracking-[10px] text-gray-500 mb-6 block"
          >
            The Story
          </motion.span>
          <h2 className="section-title">THE <span className="text-gray-500">JOURNEY</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[-2px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/20 origin-top hidden md:block"
          />

          <div className="space-y-32">
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
                
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-2 timeline-dot z-10" />

                <div className="w-full md:w-5/12">
                  <div className="glass-panel p-10 group hover:border-white/20 transition-all duration-500">
                    <span className="text-[10px] font-black tracking-[5px] text-gray-500 mb-4 block uppercase">
                      {point.year}
                    </span>
                    <h3 className="text-3xl mb-6">{point.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed italic">
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
