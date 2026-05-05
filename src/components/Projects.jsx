import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "AI Synthesis Platform",
    category: "Intelligence Interface",
    description: "An advanced digital infrastructure leveraging Gemini AI and Firebase for real-time institutional insight generation. This featured system streamlines complex data processing through a conversational AI layer.",
    tech: ["React", "Gemini", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    title: "Cinematic Visuals",
    category: "High-End Portfolio",
    description: "A high-performance sanctuary for visual arts, designed with a focus on refined motion and clean editorial aesthetics.",
    tech: ["Framer", "React", "CSS"],
    image: "https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000",
    featured: false
  },
  {
    title: "Institutional Portal",
    category: "Full Stack System",
    description: "A scalable modular system architected for student resource streamlining and academic management.",
    tech: ["Node", "MongoDB", "React"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
    featured: false
  },
  {
    title: "Eco-Track System",
    category: "Sustainability Tool",
    description: "Real-time carbon footprint monitoring dashboard built with focused performance and clear data visualization.",
    tech: ["Chart.js", "Express", "React"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    featured: false
  }
];

const ProjectCard = ({ project, isFeatured }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className={`editorial-card group overflow-hidden ${isFeatured ? 'lg:flex gap-12' : ''}`}
  >
    <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-3/5 h-[400px] lg:h-[500px]' : 'aspect-video'}`}>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
      />
      <div className="absolute top-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <a href="#" className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-all shadow-lg">
          <FaGithub size={18} />
        </a>
        <a href="#" className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-text-primary hover:bg-earth-primary hover:text-white transition-all shadow-lg">
          <FaExternalLinkAlt size={16} />
        </a>
      </div>
    </div>

    <div className={`p-10 flex flex-col justify-center ${isFeatured ? 'lg:w-2/5 space-y-8' : 'space-y-6'}`}>
      <div className="space-y-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60 block">{project.category}</span>
        <h3 className={`${isFeatured ? 'text-5xl' : 'text-3xl'} font-bold group-hover:text-earth-primary transition-colors tracking-tight`}>
          {project.title}
        </h3>
      </div>
      <p className="text-text-secondary/70 leading-relaxed italic text-lg">
        "{project.description}"
      </p>
      <div className="flex flex-wrap gap-3 pt-6 border-t border-black/5">
        {project.tech.map(t => (
          <span key={t} className="px-3 py-1 bg-light-contrast/30 text-[9px] font-black uppercase tracking-widest text-text-secondary/60 rounded-md">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-40 px-6 bg-light-contrast/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <span className="section-label-light">The Showcase</span>
          <h2 className="text-[4rem] md:text-[5rem] font-bold tracking-tight">Curated <span className="text-earth-primary/50">Creations</span></h2>
        </div>

        <div className="space-y-20">
          {/* Featured Project */}
          {featured && <ProjectCard project={featured} isFeatured={true} />}

          {/* Grid Layout for others */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {others.map((project, index) => (
              <ProjectCard key={index} project={project} isFeatured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
