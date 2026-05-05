import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Magnetic from './Magnetic';

const projects = [
  {
    title: "AI Synthesis Platform",
    tagline: "The Future of Intelligence",
    description: "An advanced digital nervous system leveraging Gemini AI and Firebase for real-time institutional insight generation.",
    tech: ["React", "Gemini", "Firebase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    color: "#8A5F41"
  },
  {
    title: "Cinematic Visuals",
    tagline: "The Art of Motion",
    description: "A high-performance sanctuary for visual arts, designed with a focus on buttery motion and earthy aesthetics.",
    tech: ["Framer", "React", "Shaders"],
    image: "https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000",
    color: "#CCD67F"
  },
  {
    title: "Institutional Portal",
    tagline: "Scalable Infrastructure",
    description: "A modular full-stack system architected for student resource streamlining and academic management.",
    tech: ["Node", "MongoDB", "React"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
    color: "#A77F60"
  }
];

const HorizontalProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-dark-bg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 px-24">
          <div className="flex flex-col justify-center min-w-[600px] space-y-10 pr-20">
            <span className="text-moss-highlight text-xs font-black uppercase tracking-[20px]">Showcase</span>
            <h2 className="text-[12rem] font-black leading-none tracking-tighter">PROJECT <br /> <span className="gradient-text-luxury">LAUNCHES</span></h2>
            <p className="text-earth-light/40 text-2xl italic leading-relaxed max-w-md">
              "Every line of code is an architectural decision. Every interface is a launch of a new experience."
            </p>
          </div>

          {projects.map((project, index) => (
            <div key={index} className="group relative h-[80vh] w-[80vw] md:w-[60vw] flex-shrink-0 luxury-panel overflow-hidden p-12 md:p-24 flex flex-col justify-between">
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
              </div>

              <div className="relative z-10 space-y-6">
                <span className="text-moss-highlight text-sm font-black uppercase tracking-[10px]">{project.tagline}</span>
                <h3 className="text-7xl md:text-9xl font-black text-earth-light tracking-tighter uppercase">{project.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-6 py-2 rounded-full border border-earth-light/20 text-[10px] font-black uppercase tracking-[5px] text-earth-light/60">{t}</span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-10">
                <p className="text-earth-light/50 text-xl md:text-2xl italic max-w-xl leading-relaxed border-l-4 border-moss-highlight/20 pl-10">
                  {project.description}
                </p>
                <Magnetic>
                  <a href="#" className="btn-magnetic">Launch Case <FaExternalLinkAlt className="inline ml-4" /></a>
                </Magnetic>
              </div>

              {/* Aesthetic Numbers */}
              <div className="absolute top-10 right-10 text-[10rem] font-black text-white/[0.03] select-none">
                0{index + 1}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalProjects;
