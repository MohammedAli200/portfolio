import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup, FaLightbulb, FaCheckDouble } from 'react-icons/fa';

const projects = [
  {
    id: 'ai-app',
    title: 'AI Synthesis Platform',
    description: 'An intelligent platform leveraging Gemini AI and Firebase for real-time institutional insight generation.',
    tech: ['React', 'Gemini AI', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#',
    problem: 'Information silos and delayed data analysis in institutional environments.',
    solution: 'Engineered a centralized hub that synthesizes data using Gemini AI for instant reporting.',
    result: 'Reduced data processing time by 60% and improved reporting accuracy.'
  },
  {
    id: 'photo-port',
    title: 'Cinematic Visuals Hub',
    description: 'A high-performance portfolio for visual artists with a focus on cinematic motion and earthy aesthetics.',
    tech: ['React', 'Framer Motion', 'Vanilla CSS'],
    image: 'https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#',
    problem: 'Photography portfolios often suffer from poor performance and generic layouts.',
    solution: 'Designed a motion-heavy, yet ultra-performant experience with custom earthy shaders.',
    result: 'Achieved 95+ Lighthouse performance score and highly positive client feedback.'
  },
  {
    id: 'college-site',
    title: 'Institutional Management System',
    description: 'A scalable, secure infrastructure for academic management and student resource streamlining.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
    live: '#',
    problem: 'Legacy institutional portals were non-responsive and difficult for students to navigate.',
    solution: 'Developed a mobile-first, modular architecture for all campus services.',
    result: 'Simplified student resource access for 2000+ users (Ongoing).'
  },
];

const ProjectCard = ({ project, index, onOpen }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const springX = useSpring(rotateX);
  const springY = useSpring(rotateY);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      style={{ perspective: 1000, rotateX: springX, rotateY: springY }}
      className="group relative cursor-pointer"
    >
      <div className="bg-earth-primary/[0.15] backdrop-blur-2xl border border-earth-light/10 rounded-[3rem] overflow-hidden h-[550px] flex flex-col group-hover:border-moss-highlight/40 group-hover:translate-z-10 transition-all duration-700 shadow-2xl relative">
        <div className="relative h-1/2 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent" />
        </div>
        
        <div className="p-10 flex-1 flex flex-col relative">
          <span className="text-moss-highlight/60 text-[10px] font-black uppercase tracking-[8px] mb-4 block">Case Study 0{index + 1}</span>
          <h3 className="text-3xl mb-4 text-earth-light group-hover:text-moss-highlight transition-colors">{project.title}</h3>
          <p className="text-earth-light/40 text-base line-clamp-2 mb-8 leading-relaxed italic border-l border-moss-highlight/20 pl-6">
            {project.description}
          </p>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[9px] font-black text-earth-light/30 uppercase tracking-[3px] px-3 py-1 border border-white/5 rounded-md">{t}</span>
              ))}
            </div>
            <div className="w-12 h-12 rounded-full border border-moss-highlight/20 flex items-center justify-center text-moss-highlight group-hover:bg-moss-highlight group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(204,214,127,0.2)]">
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-dark-bg/95 backdrop-blur-3xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 100 }}
        className="bg-earth-primary/[0.08] border border-moss-highlight/20 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[4rem] p-8 md:p-20 relative scrollbar-none shadow-[0_0_100px_rgba(0,0,0,0.5)]"
      >
        <button onClick={onClose} className="fixed top-8 right-8 text-4xl text-earth-light/40 hover:text-moss-highlight transition-colors z-[210] p-4 bg-dark-bg/50 backdrop-blur-md rounded-full"><FaTimes /></button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div className="rounded-[3.5rem] overflow-hidden shadow-2xl h-[350px] lg:h-[600px] border border-white/10 relative group self-start">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-moss-highlight text-xs font-black uppercase tracking-[15px]">Detailed Briefing</span>
              <h2 className="text-5xl md:text-7xl text-earth-light tracking-tighter">{project.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-earth-primary/10 flex items-center justify-center text-moss-highlight shrink-0"><FaLayerGroup /></div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60 mb-2">The Challenge</h4>
                  <p className="text-earth-light/70 italic">"{project.problem}"</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-moss-highlight/10 flex items-center justify-center text-moss-highlight shrink-0"><FaLightbulb /></div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60 mb-2">The Solution</h4>
                  <p className="text-earth-light/70 italic">"{project.solution}"</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-moss-highlight/20 flex items-center justify-center text-moss-highlight shrink-0"><FaCheckDouble /></div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-earth-secondary/60 mb-2">The Result</h4>
                  <p className="text-earth-light/70 italic font-bold">"{project.result}"</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[10px] text-earth-secondary/40">Architectural Stack</h4>
              <div className="flex flex-wrap gap-4">
                {project.tech.map(t => (
                  <span key={t} className="px-6 py-2 rounded-full border border-moss-highlight/20 text-[10px] font-black uppercase tracking-[4px] text-moss-highlight bg-moss-highlight/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-10">
              <a href={project.github} className="btn-primary flex items-center justify-center gap-4 group">
                <FaGithub size={20} className="group-hover:rotate-12 transition-transform" /> Repository
              </a>
              <a href={project.live} className="btn-secondary flex items-center justify-center gap-4 group">
                <FaExternalLinkAlt size={16} className="group-hover:scale-110 transition-transform" /> Live Architecture
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
    <section id="projects" className="py-40 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 rounded-full border border-moss-highlight/20 bg-moss-highlight/5 mb-8"
          >
            <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px]">Case Study Gallery</span>
          </motion.div>
          <h2 className="section-title">ENGINEERING <span className="gradient-text">SHOWCASE</span></h2>
          <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-moss-highlight/5 -z-10" />
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
    </section>
  );
};

export default Projects;
