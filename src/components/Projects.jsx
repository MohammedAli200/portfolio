import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "AI Synthesis Platform",
    category: "Intelligence Interface",
    description: "An advanced digital infrastructure leveraging Gemini AI and Firebase for real-time institutional insight generation.",
    tech: ["React", "Gemini", "Firebase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Cinematic Visuals",
    category: "High-End Portfolio",
    description: "A high-performance sanctuary for visual arts, designed with a focus on refined motion and clean editorial aesthetics.",
    tech: ["Framer", "React", "CSS"],
    image: "https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Institutional Portal",
    category: "Full Stack System",
    description: "A scalable modular system architected for student resource streamlining and academic management.",
    tech: ["Node", "MongoDB", "React"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 px-6 bg-light-contrast/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="section-label-light">The Showcase</span>
          <h2 className="text-[4rem] md:text-[5rem] font-bold tracking-tight">Curated <span className="text-earth-primary/50">Creations</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="editorial-card group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-colors">
                    <FaGithub size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-colors">
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60 block">{project.category}</span>
                  <h3 className="text-3xl font-bold group-hover:text-earth-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-text-secondary/70 leading-relaxed italic line-clamp-3">
                  "{project.description}"
                </p>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-black/5">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-black uppercase tracking-widest text-text-secondary/40">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
