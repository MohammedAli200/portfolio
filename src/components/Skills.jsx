import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiTailwindcss, SiBootstrap, SiExpress, SiMysql, SiMongodb 
} from 'react-icons/si';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython 
} from 'react-icons/fa';

const skillCategories = [
  {
    name: "Frontend",
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
    name: "Backend",
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
    name: "Tools & Ecosystem",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase font-bold tracking-[10px] text-gray-500 mb-6 block"
          >
            Technical Stack
          </motion.span>
          <h2 className="section-title">SKILLS <span className="text-gray-500">& STACK</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-10 border-white/[0.03]"
            >
              <h3 className="text-sm font-bold tracking-[5px] text-white/40 mb-10 uppercase border-b border-white/5 pb-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-4 group cursor-default">
                    <div className="text-4xl text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors">
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
