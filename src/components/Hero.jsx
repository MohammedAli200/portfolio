import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

import img from "../assets/heroimage.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg py-24 px-6">
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Refined Typography */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-moss-highlight/40" />
              <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px] block">Full-Stack Developer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight text-earth-light">
              MOHAMMED <br /> ALI
            </h1>
            
            <p className="text-xl md:text-2xl text-earth-light/60 font-medium max-w-lg leading-relaxed">
              I build <span className="text-earth-light">scalable</span>, user-focused web applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="flex flex-wrap gap-6 pt-6"
          >
            <a href="#projects" className="btn-premium flex items-center gap-3">
              View Work <FaArrowRight size={12} />
            </a>
            <a href="/resume.pdf" className="btn-outline-premium flex items-center gap-3">
              Resume <FaDownload size={12} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Clean Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Subtle soft glow */}
            <div className="absolute inset-0 bg-moss-highlight/5 blur-[80px] rounded-full pointer-events-none" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-[350px] h-[450px] md:w-[450px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/[0.05]"
            >
              <img 
                src={img} 
                alt="Mohammed Ali" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Narrative Label */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[15px] text-earth-secondary/10 pointer-events-none">
        Architecting Digital Solutions
      </div>
    </section>
  );
};

export default Hero;
