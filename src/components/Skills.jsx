import React from 'react';
import { motion } from 'framer-motion';
import { SiTailwindcss, SiBootstrap, SiExpress, SiMysql, SiMongodb } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython } from 'react-icons/fa';

const skillCategories = [
  {
    name: "Architectural Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ]
  },
  {
    name: "Core Systems",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
    ]
  },
  {
    name: "Ecosystem Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 relative">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-moss-highlight text-[10px] uppercase font-black tracking-[15px] mb-8 block"
          >
            Technological Artifacts
          </motion.span>
          <h2 className="section-title">SKILLS <span className="text-earth-secondary/40">&</span> STACK</h2>
          <div className="glow-spot top-0 right-0 w-96 h-96 bg-earth-primary/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card-earth hover:scale-[1.02] transition-transform duration-500 bg-earth-primary/[0.05]"
            >
              <h3 className="text-sm font-black tracking-[8px] text-moss-highlight/40 mb-12 uppercase border-b border-earth-light/5 pb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-10">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-4 group cursor-default">
                    <div className="text-5xl text-earth-light/20 group-hover:text-moss-highlight group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[5px] text-earth-light/40 group-hover:text-earth-light transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative floating shapes */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 border border-earth-primary/10 rounded-full animate-float -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 border border-moss-highlight/10 rounded-[3rem] rotate-45 animate-float -z-10" />
    </section>
  );
};

export default Skills;
