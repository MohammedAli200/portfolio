import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI-based Application',
    description: 'An intelligent platform leveraging Gemini AI and Firebase for real-time data processing and user interaction.',
    tech: ['React', 'Gemini AI', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000', // Using unsplash for placeholders
    github: 'https://github.com/MohammedAli200',
    demo: '#'
  },
  {
    title: 'Photography Portfolio',
    description: 'A cinematic, high-performance portfolio website for a professional photographer showcasing visual arts.',
    tech: ['React', 'Framer Motion', 'Vanilla CSS'],
    image: 'https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    demo: '#'
  },
  {
    title: 'College Website',
    description: 'A comprehensive educational portal for institutional management and student resources (In Progress).',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    demo: '#'
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="glass-panel overflow-hidden h-full flex flex-col group"
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
            <a href={project.github} className="text-3xl text-white hover:text-neon-primary"><FaGithub /></a>
            <a href={project.demo} className="text-3xl text-white hover:text-neon-secondary"><FaExternalLinkAlt /></a>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-6 line-clamp-3">
            {project.description}
          </p>
          
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <p className="text-gray-500">A showcase of my recent work and technical expertise.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
