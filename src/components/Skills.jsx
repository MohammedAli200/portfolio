import React from 'react';
import { motion } from 'framer-motion';
import {
  SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiJavascript,
  SiReact, SiNodedotjs, SiPython, SiPostman, SiVercel, SiFramer
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa';

const skillCategories = [
  {
    name: "Frontend Architecture",
    skills: [
      { name: "React.js", icon: <SiReact />, level: "95%" },
      { name: "JavaScript", icon: <SiJavascript />, level: "92%" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "95%" },
      { name: "HTML5/CSS3", icon: <FaHtml5 />, level: "98%" },
      { name: "Framer Motion", icon: <SiFramer />, level: "85%" },
    ]
  },
  {
    name: "Backend & Cloud",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: "88%" },
      { name: "Express.js", icon: <SiExpress />, level: "90%" },
      { name: "MongoDB", icon: <SiMongodb />, level: "85%" },
      { name: "REST APIs", icon: <FaDatabase />, level: "92%" },
      { name: "Clerk Auth", icon: <span className="text-xl font-bold">C</span>, level: "88%" },
    ]
  },
  {
    name: "Engineering Stack",
    skills: [
      { name: "Java", icon: <FaJava />, level: "82%" },
      { name: "Python", icon: <SiPython />, level: "85%" },
      { name: "MySQL", icon: <SiMysql />, level: "80%" },
      { name: "Git/GitHub", icon: <FaGitAlt />, level: "94%" },
      { name: "Postman", icon: <SiPostman />, level: "90%" },
      { name: "Vercel", icon: <SiVercel />, level: "95%" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto">
        {/* Top Aligned Heading */}
        <div className="mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-earth-primary font-bold tracking-[0.4em] uppercase text-xs block"
          >
            Technical Proficiency
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-text-primary"
          >
            Systematic <span className="text-earth-primary/40">Abilities</span>
          </motion.h2>
          <div className="h-1 w-20 bg-earth-primary/20 rounded-full" />
        </div>

        {/* Table-like Grid Structure */}
        <div className="border border-black/5 rounded-3xl overflow-hidden bg-white shadow-sm">
          {skillCategories.map((category, categoryIdx) => (
            <div
              key={categoryIdx}
              className={`flex flex-col md:flex-row border-b border-black/5 last:border-b-0`}
            >
              {/* "Table Header" Column */}
              <div className="md:w-1/4 bg-light-bg/30 p-8 flex items-center border-b md:border-b-0 md:border-r border-black/5">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-earth-primary/40 uppercase tracking-widest">Category 0{categoryIdx + 1}</span>
                  <h3 className="text-lg font-bold text-text-primary uppercase tracking-tight leading-tight">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Icons Grid Column */}
              <div className="md:w-3/4 p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group flex flex-col items-center text-center space-y-3"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-3xl text-text-secondary/50 group-hover:text-earth-primary group-hover:border-earth-primary/30 group-hover:shadow-md transition-all duration-300">
                        {skill.icon}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-black uppercase tracking-wider text-text-primary">
                          {skill.name}
                        </p>
                        <p className="text-[9px] font-bold text-earth-primary/60">
                          {skill.level}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-12 text-right">
          <p className="text-sm text-text-secondary/50 font-medium italic">
            * Core CS Fundamentals: DSA, OOPs, DBMS (8.73 CGPA Performance)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;