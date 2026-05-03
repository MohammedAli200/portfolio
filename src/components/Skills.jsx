import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiTailwindcss, SiBootstrap, SiExpress, SiMysql, SiMongodb 
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
  { name: 'HTML5', icon: <HtmlIcon className="text-[#E34F26]" /> },
  { name: 'CSS3', icon: <CssIcon className="text-[#1572B6]" /> },
  { name: 'JavaScript', icon: <JsIcon className="text-[#F7DF1E]" /> },
  { name: 'React', icon: <ReactIcon className="text-[#61DAFB]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
  { name: 'Node.js', icon: <NodeIcon className="text-[#339933]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-white" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  { name: 'Git', icon: <GitIcon className="text-[#F05032]" /> },
  { name: 'GitHub', icon: <GithubIcon className="text-white" /> },
  { name: 'Java', icon: <JavaIcon className="text-[#007396]" /> },
  { name: 'Python', icon: <PythonIcon className="text-[#3776AB]" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)",
                borderColor: "rgba(0, 243, 255, 0.5)"
              }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 border-transparent transition-all"
            >
              <div className="text-5xl">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
