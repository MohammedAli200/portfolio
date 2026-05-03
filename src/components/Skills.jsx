import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiTailwindcss, SiBootstrap, SiExpress, SiMysql, SiMongodb, SiJavascript, SiPython, SiCplusplus, SiTypescript
} from 'react-icons/si';
import { 
  FaHtml5 as HtmlIcon, 
  FaCss3Alt as CssIcon, 
  FaJsSquare as JsIcon, 
  FaReact as ReactIcon, 
  FaNodeJs as NodeIcon, 
  FaGitAlt as GitIcon, 
  FaGithub as GithubIcon, 
  FaJava as JavaIcon, 
  FaPython as PythonIcon 
} from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <HtmlIcon className="text-[#E34F26]" />, category: 'Frontend', level: 95 },
  { name: 'CSS3', icon: <CssIcon className="text-[#1572B6]" />, category: 'Frontend', level: 90 },
  { name: 'JavaScript', icon: <JsIcon className="text-[#F7DF1E]" />, category: 'Frontend', level: 92 },
  { name: 'React', icon: <ReactIcon className="text-[#61DAFB]" />, category: 'Frontend', level: 88 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, category: 'Frontend', level: 95 },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" />, category: 'Frontend', level: 85 },
  { name: 'Node.js', icon: <NodeIcon className="text-[#339933]" />, category: 'Backend', level: 85 },
  { name: 'Express.js', icon: <SiExpress className="text-white" />, category: 'Backend', level: 82 },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, category: 'Backend', level: 80 },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, category: 'Backend', level: 85 },
  { name: 'Git', icon: <GitIcon className="text-[#F05032]" />, category: 'Tools', level: 90 },
  { name: 'GitHub', icon: <GithubIcon className="text-white" />, category: 'Tools', level: 92 },
  { name: 'Java', icon: <JavaIcon className="text-[#007396]" />, category: 'Backend', level: 80 },
  { name: 'Python', icon: <PythonIcon className="text-[#3776AB]" />, category: 'Backend', level: 75 },
];

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-black mb-8 uppercase tracking-widest"
          >
            Technical <span className="gradient-text">Matrix</span>
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? 'bg-neon-primary text-white shadow-[0_0_15px_#9929EA]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(153, 41, 234, 0.2)",
                  borderColor: "#9929EA"
                }}
                className="glass-panel p-8 flex flex-col items-center justify-center gap-4 border-white/5 transition-all group relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute -inset-10 bg-neon-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="text-5xl transition-transform duration-300 group-hover:scale-110 relative z-10">
                  {skill.icon}
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-white uppercase tracking-tighter relative z-10">
                  {skill.name}
                </span>

                {/* Level Bar */}
                <div className="w-full h-1 bg-white/5 rounded-full mt-2 relative z-10 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-neon-primary to-neon-secondary"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
