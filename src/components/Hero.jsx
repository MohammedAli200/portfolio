import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

import img from "../assets/heroimage.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-light-bg py-24 px-6 bg-texture">
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Editorial Typography */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-earth-primary text-[10px] uppercase font-black tracking-[10px] block">Full-Stack Developer</span>
              <h1 className="text-[3.5rem] md:text-[7rem] font-bold leading-[0.9] tracking-tight text-text-primary">
                Mohammed <br /> Ali
              </h1>
            </div>
            
            <p className="text-xl md:text-3xl text-text-secondary leading-relaxed max-w-lg border-l-4 border-earth-primary/20 pl-6 md:pl-10 font-medium">
              Building <span className="text-earth-primary">scalable</span> and user-focused web applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6"
          >
            <a href="#projects" className="btn-editorial flex items-center justify-center gap-4">
              View Work <FaArrowRight size={12} />
            </a>
            <a href="/resume.pdf" className="btn-outline-editorial flex items-center justify-center gap-4">
              Download Resume <FaDownload size={12} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Minimal Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Soft background shadow blob */}
            <div className="absolute inset-[-40px] bg-earth-contrast/30 blur-[100px] rounded-full pointer-events-none opacity-50" />
            
            <div className="relative z-10 w-[280px] h-[380px] sm:w-[350px] sm:h-[450px] md:w-[450px] md:h-[580px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.08)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2">
              <img 
                src={img} 
                alt="Mohammed Ali" 
                className="w-full h-full object-cover transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Watermark */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[9px] md:text-[11px] font-bold uppercase tracking-[10px] md:tracking-[20px] text-text-secondary/10 whitespace-nowrap select-none">
        Architecting Solutions
      </div>
    </section>
  );
};

export default Hero;
