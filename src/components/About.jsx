import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import Magnetic from './Magnetic';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Story Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <span className="text-accent text-xs font-bold uppercase tracking-[10px] mb-6 block">The Narrative</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">
            BEYOND <br /> <span className="gradient-text">GRAVITY</span>
          </h2>
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            <p>
              I am <span className="text-white font-bold">Mohammed Ali</span>, a Full-Stack Developer who views software as a fluid, dynamic space rather than a collection of rigid grids.
            </p>
            <p>
              My philosophy? <span className="text-neon-primary font-bold">Antigravity UI</span>. I build interfaces that feel alive, reacting to your presence with physics-based precision and smooth, elastic motion.
            </p>
          </div>
        </motion.div>

        {/* Floating Cards Side */}
        <div className="relative h-[600px] perspective-container">
          <Magnetic strength={1.5}>
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 z-20 glass-panel p-10 w-80 hover:border-neon-primary/50 transition-colors cursor-pointer"
            >
              <div className="text-4xl text-neon-primary mb-6"><FaCode /></div>
              <h4 className="text-xl font-black uppercase mb-2">The Vision</h4>
              <p className="text-xs text-gray-500 italic">"Engineering the future where code meets physics."</p>
            </motion.div>
          </Magnetic>

          <Magnetic strength={2} repulsion>
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotateZ: [0, -3, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-0 z-10 glass-panel p-10 w-80 border-white/5 hover:border-accent/50 transition-colors cursor-pointer"
            >
              <div className="text-4xl text-accent mb-6"><FaRocket /></div>
              <h4 className="text-xl font-black uppercase mb-2">The Mission</h4>
              <p className="text-xs text-gray-500 italic">"Scaling intelligence in a zero-gravity digital world."</p>
            </motion.div>
          </Magnetic>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-primary/5 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
