import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle, FaHandshake, FaQuoteLeft } from 'react-icons/fa';
import Magnetic from './Magnetic';

const freelanceProjects = [
  {
    title: 'Photography Portfolio',
    client: 'Visual Artist',
    problem: 'The client needed a digital sanctuary to showcase high-resolution cinematic captures without sacrificing performance.',
    solution: 'Engineered a bespoke React platform with advanced lazy-loading and custom Framer Motion transitions.',
    result: 'Achieved a 95+ PageSpeed score and secured 3 new international client leads in the first month.',
    image: 'https://images.unsplash.com/photo-1452581764120-0433290680dc?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Institutional Portal',
    client: 'Education Center',
    problem: 'Fragmented administrative processes and lack of a unified digital interface for students.',
    solution: 'Developing a complete MERN stack ecosystem with real-time notifications and centralized database management.',
    result: 'Streamlined communication for 500+ users (Ongoing Beta).',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000'
  }
];

const Freelance = () => {
  return (
    <section id="freelance" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-neon-secondary text-xs font-bold uppercase tracking-[10px] mb-4 block">The Business Side</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
              FREELANCE <br /> <span className="gradient-text">ARCHIVE</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-panel px-8 py-4 border-neon-secondary/20 flex items-center gap-4"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Available for Projects</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {freelanceProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative group perspective-container">
                  <div className="absolute -inset-4 bg-neon-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -5 : 5 }}
                    className="relative glass-panel overflow-hidden border-white/5"
                  >
                    <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-8 left-8">
                      <span className="text-[10px] font-black uppercase tracking-[5px] text-accent mb-2 block">Client: {project.client}</span>
                      <h3 className="text-4xl font-black uppercase">{project.title}</h3>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className={`space-y-10 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-4">
                  <h4 className="text-neon-secondary text-xs font-bold uppercase tracking-[5px]">The Challenge</h4>
                  <p className="text-gray-400 text-lg leading-relaxed italic border-l-2 border-neon-secondary/30 pl-8">
                    "{project.problem}"
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h5 className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <FaCheckCircle className="text-neon-secondary" /> Solution
                    </h5>
                    <p className="text-xs text-gray-500 leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <FaCheckCircle className="text-neon-secondary" /> Result
                    </h5>
                    <p className="text-xs text-gray-500 leading-relaxed">{project.result}</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Magnetic strength={1.2}>
                    <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[5px] hover:text-neon-secondary transition-colors group">
                      View Project Analysis <FaExternalLinkAlt className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 glass-panel p-16 border-neon-primary/20 bg-gradient-to-br from-neon-primary/5 to-transparent relative overflow-hidden"
        >
          <FaQuoteLeft className="absolute top-10 left-10 text-8xl text-white/5" />
          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed italic text-gray-300">
              "Mohammed has an uncanny ability to translate abstract ideas into fluid, high-performance interfaces. His work on our portal exceeded every expectation."
            </p>
            <div>
              <h5 className="text-white font-bold uppercase tracking-widest">Satisfied Client</h5>
              <p className="text-[10px] text-gray-500 uppercase tracking-[5px]">Visual Arts Studio</p>
            </div>
            <div className="pt-8">
              <Magnetic strength={1.5}>
                <a href="#contact" className="neon-button px-12 py-5 flex items-center gap-4 justify-center mx-auto max-w-xs">
                  <FaHandshake /> HIRE ME
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelance;
