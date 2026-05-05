import React from 'react';
import { motion } from 'framer-motion';
import { SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiJavascript, SiReact, SiNodedotjs, SiPython } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

const skillGroups = [
  {
    name: "Architectural Foundations",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ]
  },
  {
    name: "Backend & Systems",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "MySQL", icon: <SiMysql /> },
    ]
  },
  {
    name: "Stacks & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Git", icon: <FaGitAlt /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-40 px-6 bg-light-contrast/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="section-label-light">Technical Depth</span>
          <h2 className="text-[4rem] font-bold tracking-tight">Systematic <span className="text-earth-primary/50">Abilities</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h3 className="text-sm font-black uppercase tracking-[8px] text-earth-secondary/40 border-b border-black/5 pb-6">
                {group.name}
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-4 group">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-text-primary text-3xl group-hover:bg-earth-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/60 group-hover:text-text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
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
