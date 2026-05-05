import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy, FaBriefcase, FaRocket, FaLaptopCode } from 'react-icons/fa';

const storyPoints = [
  {
    title: "Initial Curiosity",
    content: "Started with curiosity in HTML, CSS, and JavaScript, building small projects to understand the core mechanics of the web.",
    year: "The Spark",
    icon: <FaCode />,
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: "Technological Growth",
    content: "Built 20+ frontend projects and transitioned into full-stack development. Mastered React, Node.js, and modern databases.",
    year: "Evolution",
    icon: <FaLaptopCode />,
    tags: ["React", "Node.js", "Full-Stack"]
  },
  {
    title: "Academic Excellence & Honors",
    content: "Won 1st Prize in Mini Project (College) and 3rd Prize in SRIIT Hackathon. Completed Code Vipassana Season 8.",
    year: "Recognition",
    icon: <FaTrophy />,
    tags: ["1st Prize", "Hackathon", "Vipassana"]
  },
  {
    title: "Corporate Immersion",
    content: "Completed Full Stack Development Internship at Infosys Springboard 6.0. Gained hands-on experience in building scalable, real-world applications.",
    year: "Internship",
    icon: <FaBriefcase />,
    tags: ["Infosys", "Scalability", "Agile"]
  },
  {
    title: "Market Impact",
    content: "Started professional freelancing with a cinematic Photography Website. Currently architecting a comprehensive college portal.",
    year: "Freelance",
    icon: <FaRocket />,
    tags: ["Photography Site", "College Portal"]
  },
  {
    title: "The Vision Forward",
    content: "Exploring the intersection of AI and Data Science while building impactful applications that solve complex problems.",
    year: "Present",
    icon: <FaGraduationCap />,
    tags: ["AI", "Data Science", "Impact"]
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="about" className="py-40 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-40 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block px-6 py-2 rounded-full border border-moss-highlight/20 bg-moss-highlight/5 mb-8"
          >
            <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px]">The Narrative</span>
          </motion.div>
          <h2 className="section-title tracking-[-0.05em]">A JOURNEY OF <span className="gradient-text">EVOLUTION</span></h2>
          <p className="text-earth-light/40 text-xl max-w-2xl mx-auto italic font-medium">
            "Turning curiosity into code, and code into impact."
          </p>
          <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-earth-primary/5" />
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[-2px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-moss-highlight/80 via-earth-primary to-transparent origin-top hidden md:block"
          />

          <div className="space-y-40">
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:block w-5/12" />
                
                {/* Timeline Node with Icon */}
                <div className="absolute left-[-20px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-4 w-10 h-10 rounded-full bg-dark-bg border-2 border-moss-highlight flex items-center justify-center text-moss-highlight shadow-[0_0_20px_rgba(204,214,127,0.3)] z-10 transition-transform duration-500 hover:scale-125">
                  {point.icon}
                </div>

                <div className="w-full md:w-5/12">
                  <div className="card-earth border-earth-light/5 hover:border-moss-highlight/30 group p-12 relative overflow-hidden bg-earth-primary/[0.03]">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[11px] font-black tracking-[8px] text-moss-highlight/60 uppercase group-hover:text-moss-highlight transition-colors">
                        {point.year}
                      </span>
                    </div>
                    <h3 className="text-3xl mb-6 text-earth-light group-hover:translate-x-2 transition-transform duration-500">{point.title}</h3>
                    <p className="text-earth-light/50 text-lg leading-relaxed mb-8">
                      {point.content}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {point.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-moss-highlight/10 text-moss-highlight/80 rounded-md border border-moss-highlight/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Decorative Background Icon */}
                    <div className="absolute -bottom-4 -right-4 text-7xl text-earth-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                      {point.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
