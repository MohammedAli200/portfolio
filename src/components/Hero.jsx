import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

import img from "../assets/heroimage.png";

const ParticleField = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(3000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 35;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#CCD67F"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg py-32">
      {/* Background Cinematic 3D */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >
        {/* Left Side: Cinematic Typography */}
        <motion.div
          style={{ y: springY1 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="inline-flex items-center gap-4 px-4 py-1 rounded-full border border-moss-highlight/20 bg-moss-highlight/5 overflow-hidden"
            >
              <div className="w-2 h-2 bg-moss-highlight rounded-full animate-pulse" />
              <span className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px] whitespace-nowrap">The Visionary Architect</span>
            </motion.div>
            
            <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85] tracking-tighter text-earth-light">
              MOHAMMED <br />
              <motion.span 
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="gradient-text"
              >
                ALI
              </motion.span>
            </h1>
          </div>

          <div className="h-20 text-2xl md:text-4xl text-earth-light/50 font-medium italic border-l-4 border-moss-highlight/20 pl-10 flex items-center">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Independent Consultant',
                2000,
                'AI Experience Designer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap gap-8"
          >
            <a href="#projects" className="btn-primary flex items-center gap-4 group">
              View Architecture <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="/resume.pdf" className="btn-secondary flex items-center gap-4 group">
              Acquire Resume <FaDownload className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: High-End Visual */}
        <motion.div
          style={{ y: springY2 }}
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group flex justify-end items-center"
        >
          {/* Main Image Container */}
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-float max-w-sm md:max-w-md border border-white/5 bg-earth-primary/5">
            <img 
              src={img} 
              alt="Mohammed Ali" 
              className="w-full h-auto object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
            />
            {/* Cinematic overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-moss-highlight/5 mix-blend-overlay opacity-30" />
          </div>

          {/* Layered Decorative Elements */}
          <div className="glow-spot -top-20 -right-20 w-96 h-96 bg-moss-highlight/20" />
          <div className="glow-spot -bottom-20 -left-20 w-80 h-80 bg-earth-primary/10" />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -inset-10 border border-moss-highlight/5 rounded-[5rem] -z-10" 
          />
          <div className="absolute -inset-4 border border-moss-highlight/20 rounded-[4.5rem] -z-10 group-hover:scale-105 transition-transform duration-1000" />
        </motion.div>
      </motion.div>

      {/* Narrative Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-earth-primary/[0.02] -z-10" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[15px] text-earth-secondary/10 whitespace-nowrap animate-pulse">
        Scroll to Initiate Journey
      </div>
    </section>
  );
};

export default Hero;
