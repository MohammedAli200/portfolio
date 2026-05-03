import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaRobot } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Magnetic from './Magnetic';

const projects = [
  {
    id: 'ai-app',
    title: 'AI-based Application',
    description: 'An intelligent platform leveraging Gemini AI and Firebase for real-time data processing.',
    tech: ['React', 'Gemini AI', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
  },
  {
    id: 'photo-port',
    title: 'Photography Portfolio',
    description: 'A cinematic, high-performance portfolio website showcasing visual arts.',
    tech: ['React', 'Framer Motion', 'Vanilla CSS'],
    image: 'https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
  },
  {
    id: 'college-site',
    title: 'College Website',
    description: 'A comprehensive educational portal for institutional management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/MohammedAli200',
  },
];

const AntigravityCard = ({ project, index, onOpen }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 1 }}
      className="relative w-full h-[450px] perspective-container cursor-pointer group"
      onClick={onOpen}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="glass-panel w-full h-full overflow-hidden flex flex-col group-hover:border-neon-primary/50 transition-all duration-500 shadow-2xl"
      >
        <div className="relative h-2/3 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="p-8 flex-1 flex flex-col bg-white/[0.02]">
          <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-neon-primary transition-colors">{project.title}</h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-6">{project.description}</p>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t}</span>
              ))}
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs group-hover:border-neon-primary transition-colors">
              +
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const fetchAIAnalysis = async () => {
      setIsAnalyzing(true);
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Explain this project in Antigravity theme: ${project.title}. Provide JSON: {problem, solution, impact}.`;
        const result = await model.generateContent(prompt);
        const text = result.response.text().replace(/```json|```/g, '');
        setAiAnalysis(JSON.parse(text));
      } catch (e) {
        setAiAnalysis({ problem: "Traditional constraints.", solution: "Innovative UI.", impact: "High engagement." });
      } finally {
        setIsAnalyzing(false);
      }
    };
    if (project) fetchAIAnalysis();
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-3xl"
    >
      <motion.div
        initial={{ scale: 0.8, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 100 }}
        className="glass-panel w-full max-w-5xl max-h-[90vh] overflow-y-auto border-neon-primary/30 p-12"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-2xl hover:text-neon-primary"><FaTimes /></button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-5xl font-black uppercase tracking-tighter">{project.title}</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-neon-primary text-[10px] font-bold uppercase tracking-[4px]">
                <FaRobot /> AI Project Explainer
              </div>
              
              {isAnalyzing ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-white/5 w-full rounded" />
                  <div className="h-4 bg-white/5 w-2/3 rounded" />
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-accent text-[10px] font-bold uppercase mb-2">Problem</h4>
                    <p className="text-gray-400 text-sm italic">"{aiAnalysis?.problem}"</p>
                  </div>
                  <div>
                    <h4 className="text-neon-primary text-[10px] font-bold uppercase mb-2">Solution</h4>
                    <p className="text-gray-400 text-sm italic">"{aiAnalysis?.solution}"</p>
                  </div>
                  <div>
                    <h4 className="text-neon-secondary text-[10px] font-bold uppercase mb-2">Impact</h4>
                    <p className="text-gray-400 text-sm italic">"{aiAnalysis?.impact}"</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex gap-4 pt-8">
              <a href={project.github} className="neon-button text-[10px] px-8 flex items-center gap-2"><FaGithub /> GitHub</a>
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
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">
            PRODUCT <br /> <span className="gradient-text">GALAXY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <AntigravityCard key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
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
