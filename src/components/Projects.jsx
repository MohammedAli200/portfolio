import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "NESTANA",
    category: "Full Stack",
    tech: ["MERN", "Clerk"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/MohammedAli200/NESTANA.git",
    external: "#"
  },
  {
    title: "Student Shield",
    category: "Analytics",
    tech: ["React", "D3.js"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/MohammedAli200/Student-Shield.git",
    external: "#"
  },
  {
    title: "Fest Management",
    category: "Infrastructure",
    tech: ["MERN", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/MohammedAli200/presto-cse-fest",
    external: "https://presto-cse-fest.vercel.app"
  },
  {
    title: "Studio Suite",
    category: "Automation",
    tech: ["React", "API"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/MohammedAli200/vasu_studioz_atp.git",
    external: "https://vasu-studioz-atp.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-light-bg border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="section-label-light">The Showcase</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
              Curated <span className="text-earth-primary/50">Creations.</span>
            </h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[5px] text-earth-secondary/40 max-w-xs md:text-right">
            A precise selection of full-stack engineering and visual interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group space-y-6"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-light-contrast/30">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-all shadow-lg">
                    <FaGithub size={16} />
                  </a>
                  <a href={project.external} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-all shadow-lg">
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-earth-primary transition-colors">{project.title}</h3>
                  <span className="text-[9px] font-black uppercase tracking-widest text-earth-secondary/60">{project.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[8px] font-bold uppercase tracking-widest text-text-secondary/40">{t}</span>
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