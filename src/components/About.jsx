import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const chapters = [
  {
    id: "01",
    title: "CURIOSITY",
    subtitle: "The Genesis",
    content: "Started experimenting with the core DNA of the web—HTML, CSS, and JavaScript. Understanding how bits and pixels weave digital reality.",
    theme: "#8A5F41"
  },
  {
    id: "02",
    title: "GROWTH",
    subtitle: "The Evolution",
    content: "Architected 20+ specialized projects, evolving into a full-stack engineer capable of bridging vision and functionality.",
    theme: "#CCD67F"
  },
  {
    id: "03",
    title: "ACHIEVEMENT",
    subtitle: "The Validation",
    content: "Awarded 1st Prize for Mini Project and 3rd Prize at SRIIT Hackathon. Season 8 Code Vipassana Finisher.",
    theme: "#A77F60"
  },
  {
    id: "04",
    title: "INTERNSHIP",
    subtitle: "The Professional",
    content: "Infosys Springboard 6.0 Full Stack Developer Residency. Mastering scalable architectures in a corporate ecosystem.",
    theme: "#F3E4C9"
  },
  {
    id: "05",
    title: "FREELANCE",
    subtitle: "The Autonomy",
    content: "Launching impactful brands, from cinematic photography portfolios to comprehensive institutional college systems.",
    theme: "#CCD67F"
  },
  {
    id: "06",
    title: "FUTURE",
    subtitle: "The Horizon",
    content: "Exploring the convergence of AI, Data Science, and autonomous digital systems to build what's next.",
    theme: "#8A5F41"
  }
];

const Chapter = ({ chapter, index }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 0.8]);

  return (
    <div ref={container} className="h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden bg-dark-bg">
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-6xl px-6 w-full text-center space-y-12"
      >
        <span className="text-moss-highlight text-xs font-black uppercase tracking-[20px] block mb-10">Chapter {chapter.id}</span>
        
        <h2 className="text-[6rem] md:text-[14rem] font-black leading-none tracking-tighter text-earth-light relative">
          {chapter.title}
          <motion.div 
            style={{ x: y }}
            className="absolute inset-0 text-white/[0.03] -z-10 whitespace-nowrap"
          >
            {chapter.title} {chapter.title}
          </motion.div>
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-4xl text-earth-secondary font-black tracking-[10px] uppercase">{chapter.subtitle}</h3>
          <p className="text-earth-light/50 text-xl md:text-2xl leading-relaxed italic border-l-4 border-moss-highlight/20 pl-10">
            "{chapter.content}"
          </p>
        </div>
      </motion.div>
      
      {/* Decorative Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-earth-light to-transparent" />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative">
      {chapters.map((chapter, index) => (
        <Chapter key={chapter.id} chapter={chapter} index={index} />
      ))}
    </section>
  );
};

export default About;
