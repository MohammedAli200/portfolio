import React, { useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const storySteps = [
  {
    year: '2023',
    title: 'The Spark of Curiosity',
    description: 'Started as a curious developer learning the fundamentals of the web: HTML, CSS, and JavaScript.',
    comment: 'This is where the journey began. Just curiosity and a text editor.',
    icon: <FaLightbulb />,
    color: '#FAEB92'
  },
  {
    year: '2023',
    title: 'The Growth Phase',
    description: 'Built 20+ frontend projects, mastering React and diving deep into the full-stack ecosystem.',
    comment: 'I spent countless nights debugging React hooks and perfecting layouts.',
    icon: <FaCode />,
    color: '#9929EA'
  },
  {
    year: '2024',
    title: 'Breakthrough Success',
    description: 'Won 1st Prize in Mini Project and 3rd Prize in SRIIT Hackathon.',
    comment: 'Winning these awards gave me the confidence to take on real-world challenges.',
    icon: <FaRocket />,
    color: '#CC66DA'
  },
  {
    year: '2024',
    title: 'Entering the Real World',
    description: 'Started professional freelancing, delivering a high-end photography website.',
    comment: 'Freelancing taught me how to bridge the gap between code and client needs.',
    icon: <FaLaptopCode />,
    color: '#25D366'
  },
  {
    year: 'Present',
    title: 'The Current Mission',
    description: 'Building a full-scale college website while exploring AI and Data Science.',
    comment: 'Now, I’m focused on building intelligent platforms that feel human.',
    icon: <FaGraduationCap />,
    color: '#00f3ff'
  }
];

const StoryStep = ({ step, index }) => {
  const triggerAISpeech = (text) => {
    window.dispatchEvent(new CustomEvent('ai-speak', { detail: text }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => triggerAISpeech(step.comment)}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex items-center justify-between mb-32 w-full ${
        index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Spacer for desktop */}
      <div className="hidden md:block w-5/12" />
      
      {/* Icon Node */}
      <div 
        className="absolute left-[-20px] md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-20"
        style={{ background: 'black', border: `2px solid ${step.color}`, boxShadow: `0 0 20px ${step.color}40` }}
      >
        <div style={{ color: step.color }} className="text-2xl">{step.icon}</div>
      </div>

      {/* Content Card */}
      <div className="w-full md:w-5/12 perspective-container group">
        <motion.div
          whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
          className="glass-panel p-10 border-white/5 relative overflow-hidden group-hover:border-white/20 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
            {step.year}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[5px] mb-4 block" style={{ color: step.color }}>
            {step.year} Evolution
          </span>
          <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter leading-none">
            {step.title}
          </h3>
          <p className="text-gray-400 leading-relaxed italic border-l-2 pl-6" style={{ borderColor: step.color }}>
            "{step.description}"
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="about" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent text-xs font-bold uppercase tracking-[15px] mb-6 block"
          >
            The Narrative
          </motion.span>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">
            MY <br /> <span className="gradient-text">STORY</span>
          </h2>
          <p className="text-gray-500 mt-8 uppercase tracking-[5px] text-xs">A Chronological Evolution of a Builder</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[-2px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-primary via-neon-secondary to-accent origin-top z-0"
          />

          <div className="space-y-16">
            {storySteps.map((step, index) => (
              <StoryStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
