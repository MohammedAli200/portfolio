import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup, FaLightbulb, FaRocket } from 'react-icons/fa';

const projects = [
  {
    title: 'AI-based Application',
    description: 'An intelligent platform leveraging Gemini AI and Firebase for real-time data processing and user interaction.',
    longDescription: 'Developed a robust AI ecosystem that integrates Google Gemini Pro for natural language processing. The platform handles real-time data sync via Firebase and features a custom-built dashboard for analytics.',
    problem: 'Traditional data management systems were too rigid and lacked intelligent insights.',
    solution: 'Integrated Gemini API to provide automated summaries and predictive analytics for user data.',
    impact: 'Increased user engagement by 40% and reduced manual data processing time by 60%.',
    tech: ['React', 'Gemini AI', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    demo: '#'
  },
  {
    title: 'Photography Portfolio',
    description: 'A cinematic, high-performance portfolio website for a professional photographer showcasing visual arts.',
    longDescription: 'A bespoke photography platform designed to deliver a high-end visual experience. Optimized for fast image loading and features custom transitions that mimic camera shutter effects.',
    problem: 'Standard templates were too slow and didn\'t represent the client\'s cinematic style.',
    solution: 'Built a custom React architecture with image lazy loading and Framer Motion for premium transitions.',
    impact: 'Direct leads increased by 25% within the first month of deployment.',
    tech: ['React', 'Framer Motion', 'Vanilla CSS'],
    image: 'https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    demo: '#'
  },
  {
    title: 'College Website',
    description: 'A comprehensive educational portal for institutional management and student resources (In Progress).',
    longDescription: 'A large-scale institutional project aimed at digitizing campus resources. Includes student portals, faculty management, and automated scheduling systems.',
    problem: 'Fragmented communication and manual administrative processes across departments.',
    solution: 'A unified MERN stack application providing a single source of truth for all campus data.',
    impact: 'Currently being piloted with 500+ students for feedback.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    demo: '#'
  },
];

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Tilt
        options={{ max: 15, scale: 1.02, speed: 400 }}
        className="glass-panel overflow-hidden h-full flex flex-col group cursor-pointer border-white/5"
      >
        <div className="relative h-60 overflow-hidden" onClick={onOpen}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-black uppercase group-hover:text-neon-primary transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col bg-white/[0.02]">
          <p className="text-gray-400 text-sm mb-6 line-clamp-3">
            {project.description}
          </p>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map(t => (
                <span key={t} className="text-[10px] px-2 py-0.5 border border-white/10 rounded-full text-gray-500 uppercase font-bold">
                  {t}
                </span>
              ))}
            </div>
            <button 
              onClick={onOpen}
              className="text-accent text-xs font-bold uppercase tracking-widest hover:underline"
            >
              Details
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
    >
      <motion.div
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.95 }}
        className="glass-panel w-full max-w-5xl max-h-[90vh] overflow-y-auto border-neon-primary/30 relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-2xl text-white hover:text-neon-primary z-10 p-2 glass-panel"
        >
          <FaTimes />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image/Media */}
          <div className="h-64 lg:h-full relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
          </div>

          {/* Details */}
          <div className="p-8 sm:p-12 space-y-8">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[5px] mb-2 block">Case Study</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase mb-4">{project.title}</h2>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed italic text-lg border-l-2 border-neon-primary pl-6">
              "{project.longDescription}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent font-bold uppercase text-[10px] tracking-widest">
                  <FaLayerGroup /> Problem
                </div>
                <p className="text-xs text-gray-400">{project.problem}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-neon-primary font-bold uppercase text-[10px] tracking-widest">
                  <FaLightbulb /> Solution
                </div>
                <p className="text-xs text-gray-400">{project.solution}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-neon-secondary font-bold uppercase text-[10px] tracking-widest">
                  <FaRocket /> Impact
                </div>
                <p className="text-xs text-gray-400">{project.impact}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Technology Stack</h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-black uppercase tracking-tighter"
        >
          Product <span className="gradient-text">Showcase</span>
        </motion.h2>
        <p className="text-gray-500 mt-4 uppercase tracking-[5px] text-xs">Transforming Ideas into Digital Products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={index} 
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
