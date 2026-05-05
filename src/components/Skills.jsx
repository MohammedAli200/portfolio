import React from 'react';
import { motion } from 'framer-motion';
import { SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiJavascript, SiReact, SiNodedotjs, SiPython, SiPostman, SiVite, SiFigma } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "HTML5/CSS3", icon: <FaHtml5 /> },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Figma", icon: <SiFigma /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-40 px-6 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="section-label-light">Technical Depth</span>
          <h2 className="text-[4rem] font-bold tracking-tight">Systematic <span className="text-earth-primary/50">Abilities</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4 border-b border-black/5 pb-6">
                <span className="w-2 h-2 bg-earth-primary rounded-full" />
                <h3 className="text-sm font-black uppercase tracking-[6px] text-text-primary">
                  {category.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-4 p-6 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-md hover:border-earth-primary/20 transition-all duration-300"
                  >
                    <div className="text-3xl text-earth-secondary group-hover:text-earth-primary transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/60 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
