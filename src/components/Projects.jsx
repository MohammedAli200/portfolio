import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "AI Synthesis Platform",
    description: "An advanced digital infrastructure leveraging Gemini AI and Firebase for real-time insight generation.",
    tech: ["React", "Gemini AI", "Firebase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    links: { github: "#", live: "#" }
  },
  {
    title: "Photography Portfolio",
    description: "A high-performance sanctuary for visual arts, designed with a focus on refined motion and clean aesthetics.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000",
    links: { github: "#", live: "#" }
  },
  {
    title: "Institutional Portal",
    description: "A scalable modular system architected for student resource streamlining and academic management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
    links: { github: "#", live: "#" }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="section-label">Selected Works</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-earth-light">PROJECT <span className="text-moss-highlight/60">GALLERY</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="premium-card overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
                <div className="space-y-8">
                  <h3 className="text-4xl md:text-5xl font-bold text-earth-light">{project.title}</h3>
                  <p className="text-xl text-earth-light/50 leading-relaxed italic">
                    "{project.description}"
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest bg-white/5 text-earth-light/40 rounded-lg border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-8 pt-4">
                    <a href={project.links.github} className="text-sm font-bold text-earth-light/60 hover:text-moss-highlight transition-colors flex items-center gap-2">
                      <FaGithub /> Repository
                    </a>
                    <a href={project.links.live} className="text-sm font-bold text-earth-light/60 hover:text-moss-highlight transition-colors flex items-center gap-2">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 group-hover:scale-[1.02] transition-transform duration-1000">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
