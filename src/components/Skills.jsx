import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiTailwindcss, SiBootstrap, SiExpress, SiMysql, SiMongodb 
} from 'react-icons/si';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython 
} from 'react-icons/fa';
import Magnetic from './Magnetic';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend', level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend', level: 90 },
  { name: 'JavaScript', icon: <FaJsSquare />, category: 'Frontend', level: 92 },
  { name: 'React', icon: <FaReact />, category: 'Frontend', level: 88 },
  { name: 'Tailwind', icon: <SiTailwindcss />, category: 'Frontend', level: 95 },
  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend', level: 85 },
  { name: 'Express', icon: <SiExpress />, category: 'Backend', level: 82 },
  { name: 'MySQL', icon: <SiMysql />, category: 'Backend', level: 80 },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Backend', level: 85 },
  { name: 'Git', icon: <FaGitAlt />, category: 'Tools', level: 90 },
  { name: 'Python', icon: <FaPython />, category: 'Backend', level: 75 },
];

const FloatingOrb = ({ skill, index }) => {
  return (
    <Magnetic strength={1.2} repulsion={index % 2 === 0}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, index % 2 === 0 ? 5 : -5, 0]
        }}
        transition={{
          y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 1 },
          scale: { duration: 0.5 }
        }}
        className="group relative"
      >
        <div className="glass-panel w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center gap-2 border-white/5 group-hover:border-neon-primary/50 group-hover:bg-neon-primary/10 transition-all duration-500">
          <div className="text-3xl md:text-4xl group-hover:scale-125 transition-transform duration-500 text-white/70 group-hover:text-white">
            {skill.icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-neon-primary opacity-0 group-hover:opacity-100 transition-opacity">
            {skill.name}
          </span>
          
          {/* Skill Level Glow */}
          <div className="absolute inset-0 rounded-[2rem] bg-neon-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
        </div>
      </motion.div>
    </Magnetic>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent text-xs font-bold uppercase tracking-[10px] mb-4 block"
          >
            Technical Ecosystem
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            ZERO <span className="gradient-text">GRAVITY</span> SKILLS
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 perspective-container">
          {skills.map((skill, index) => (
            <FloatingOrb key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background Particles Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-secondary/5 blur-[100px] rounded-full" />
    </section>
  );
};

export default Skills;
