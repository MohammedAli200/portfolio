import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiTailwindcss, SiBootstrap, SiExpress, SiMysql, SiMongodb, SiJavascript, SiReact, SiNodedotjs, SiGit, SiGithub, SiPython } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const skillData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: "95%" },
      { name: "CSS3", icon: <FaCss3Alt />, level: "90%" },
      { name: "JavaScript", icon: <SiJavascript />, level: "85%" },
      { name: "React", icon: <SiReact />, level: "85%" },
      { name: "Tailwind", icon: <SiTailwindcss />, level: "90%" },
      { name: "Bootstrap", icon: <SiBootstrap />, level: "80%" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: "80%" },
      { name: "Express", icon: <SiExpress />, level: "80%" },
      { name: "MySQL", icon: <SiMysql />, level: "75%" },
      { name: "MongoDB", icon: <SiMongodb />, level: "75%" },
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: <FaJava />, level: "75%" },
      { name: "Python", icon: <SiPython />, level: "70%" },
      { name: "JavaScript", icon: <SiJavascript />, level: "85%" },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit />, level: "85%" },
      { name: "GitHub", icon: <SiGithub />, level: "90%" },
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="py-40 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-full border border-moss-highlight/20 bg-moss-highlight/5 mb-8"
          >
            <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px]">Technical Stack</span>
          </motion.div>
          <h2 className="section-title">THE <span className="gradient-text">ENGINEERING</span> BASE</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {skillData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(cat.category)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[4px] transition-all duration-500 border ${
                  activeTab === cat.category 
                    ? 'bg-moss-highlight text-black border-moss-highlight shadow-[0_0_20px_rgba(204,214,127,0.4)]' 
                    : 'bg-white/5 text-earth-light/40 border-white/5 hover:border-white/20'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {skillData.find(c => c.category === activeTab).skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative flex flex-col items-center p-8 rounded-[2.5rem] bg-earth-primary/[0.03] border border-earth-light/5 hover:border-moss-highlight/30 hover:bg-earth-primary/[0.08] transition-all duration-500"
                >
                  <div className="text-5xl text-earth-light/20 group-hover:text-moss-highlight group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mb-6">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[5px] text-earth-light/40 group-hover:text-earth-light transition-colors">
                    {skill.name}
                  </span>
                  
                  {/* Skill Level Indicator on Hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-dark-bg/90 rounded-[2.5rem] p-6 text-center border border-moss-highlight/20 backdrop-blur-sm">
                    <span className="text-moss-highlight font-black text-2xl mb-2">{skill.level}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-earth-light/60">Proficiency</span>
                    <div className="w-full h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        className="h-full bg-moss-highlight"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Dynamic Visual Accents */}
      <div className="glow-spot -top-40 -left-40 w-[600px] h-[600px] bg-earth-primary/5 -z-10" />
      <div className="glow-spot -bottom-40 -right-40 w-[600px] h-[600px] bg-moss-highlight/5 -z-10" />
    </section>
  );
};

export default Skills;
