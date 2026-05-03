import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    id: 'ai-app',
    title: 'AI Synthesis Platform',
    description: 'An advanced digital nervous system leveraging Gemini AI and Firebase for real-time institutional insight generation.',
    tech: ['React', 'Gemini AI', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#'
  },
  {
    id: 'photo-port',
    title: 'Cinematic Visuals',
    description: 'A high-performance sanctuary for visual arts, designed with a focus on buttery motion and earthy aesthetics.',
    tech: ['React', 'Framer Motion', 'Vanilla CSS'],
    image: 'https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#'
  },
  {
    id: 'college-site',
    title: 'Institutional Portal',
    description: 'A scalable infrastructure for academic management, streamlining student and administration workflows.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#'
  },
];

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 1 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
      onClick={onOpen}
    >
      <div className="bg-earth-primary/[0.15] backdrop-blur-2xl border border-earth-light/10 rounded-[3rem] overflow-hidden h-[550px] flex flex-col group-hover:border-moss-highlight/30 group-hover:translate-y-[-20px] transition-all duration-700 shadow-2xl relative">
        <div className="relative h-1/2 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
        </div>
        
        <div className="p-10 flex-1 flex flex-col relative">
          <div className="glow-spot -top-10 -right-10 w-32 h-32 bg-moss-highlight/5 group-hover:bg-moss-highlight/10 transition-all duration-700" />
          
          <span className="text-moss-highlight/60 text-[10px] font-black uppercase tracking-[8px] mb-6 block">Module 0{index + 1}</span>
          <h3 className="text-3xl mb-6 text-earth-light group-hover:text-moss-highlight transition-colors">{project.title}</h3>
          <p className="text-earth-light/40 text-base line-clamp-3 mb-10 leading-relaxed italic border-l border-moss-highlight/20 pl-6">
            {project.description}
          </p>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex gap-4">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-black text-earth-light/30 uppercase tracking-[4px]">{t}</span>
              ))}
            </div>
            <div className="w-12 h-12 rounded-full border border-moss-highlight/20 flex items-center justify-center text-moss-highlight group-hover:bg-moss-highlight group-hover:text-black transition-all duration-500">
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-dark-bg/95 backdrop-blur-3xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-earth-primary/[0.1] border border-moss-highlight/20 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[4rem] p-16 relative"
      >
        <button onClick={onClose} className="absolute top-10 right-10 text-3xl text-earth-light/40 hover:text-moss-highlight transition-colors z-10"><FaTimes /></button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] lg:h-full border border-white/5 relative group">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
            <div className="absolute inset-0 bg-moss-highlight/[0.05] pointer-events-none" />
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-moss-highlight text-xs font-black uppercase tracking-[15px]">The Portfolio</span>
              <h2 className="text-6xl text-earth-light">{project.title}</h2>
            </div>
            
            <p className="text-earth-light/60 text-xl leading-relaxed italic border-l-4 border-moss-highlight/30 pl-10">"{project.description}"</p>
            
            <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[10px] text-earth-secondary/40">Architectural Stack</h4>
              <div className="flex flex-wrap gap-6">
                {project.tech.map(t => (
                  <span key={t} className="px-8 py-3 rounded-full border border-moss-highlight/20 text-[10px] font-black uppercase tracking-[5px] text-moss-highlight bg-moss-highlight/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 pt-12">
              <a href={project.github} className="btn-primary flex items-center justify-center gap-4">
                <FaGithub size={18} /> Documentation
              </a>
              <a href={project.live} className="btn-secondary flex items-center justify-center gap-4">
                <FaExternalLinkAlt size={16} /> Deploy Site
              </a>
            </div>
          </div>
        </div>
        
        <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-earth-primary/5 -z-10" />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40 relative">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-moss-highlight text-[10px] uppercase font-black tracking-[15px] mb-8 block"
          >
            Digital Gallery
          </motion.span>
          <h2 className="section-title">THE <span className="text-earth-secondary/40">COLLECTION</span></h2>
          <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-moss-highlight/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
      
      {/* Dynamic background accents */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] border border-earth-primary/5 rounded-full -z-10" />
    </section>
  );
};

export default Projects;
