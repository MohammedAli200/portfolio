import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    id: 'ai-app',
    title: 'AI-based Application',
    description: 'An intelligent platform leveraging Gemini AI and Firebase for real-time data processing and insight generation.',
    tech: ['React', 'Gemini AI', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#'
  },
  {
    id: 'photo-port',
    title: 'Photography Portfolio',
    description: 'A cinematic, high-performance portfolio website showcasing visual arts with custom motion design.',
    tech: ['React', 'Framer Motion', 'Vanilla CSS'],
    image: 'https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#'
  },
  {
    id: 'college-site',
    title: 'College Website',
    description: 'A comprehensive educational portal for institutional management and student engagement.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#'
  },
];

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
      onClick={onOpen}
    >
      <div className="glass-panel overflow-hidden h-[500px] flex flex-col border-white/[0.03] group-hover:border-white/10 group-hover:translate-y-[-10px] transition-all duration-500 shadow-2xl">
        <div className="relative h-1/2 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
        </div>
        
        <div className="p-8 flex-1 flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[4px] mb-4">Case Study 0{index + 1}</span>
          <h3 className="text-2xl mb-4 group-hover:text-white transition-colors">{project.title}</h3>
          <p className="text-gray-500 text-sm line-clamp-3 mb-8">{project.description}</p>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex gap-4">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t}</span>
              ))}
            </div>
            <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-xs group-hover:border-white/20 transition-all">
              →
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/95 backdrop-blur-3xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass-panel w-full max-w-6xl max-h-[90vh] overflow-y-auto border-white/10 p-12"
      >
        <button onClick={onClose} className="absolute top-10 right-10 text-2xl hover:text-white transition-colors z-10"><FaTimes /></button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-full">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-[5px]">Featured Project</span>
              <h2 className="text-5xl">{project.title}</h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
            
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[5px] text-white/40">Technology Stack</h4>
              <div className="flex flex-wrap gap-4">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 rounded-full border border-white/5 text-[10px] font-bold uppercase tracking-widest bg-white/[0.02]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-6 pt-10">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                <FaGithub /> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase font-bold tracking-[10px] text-gray-500 mb-6 block"
          >
            Portfolio
          </motion.span>
          <h2 className="section-title">FEATURED <span className="text-gray-500">WORKS</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
