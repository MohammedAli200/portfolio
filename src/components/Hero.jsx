import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import Magnetic from './Magnetic';

import img from "../assets/heroimage.png";

const ParticleField = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 40;
    ref.current.rotation.y -= delta / 50;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#CCD67F"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg py-24 px-6">
      {/* Immersive 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Huge Luxury Heading */}
        <div className="lg:col-span-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-20 bg-moss-highlight" />
              <span className="text-moss-highlight text-[11px] uppercase font-black tracking-[12px] block">The Digital Maverick</span>
            </div>
            
            <h1 className="text-[6rem] md:text-[11rem] font-black leading-[0.8] tracking-tighter text-earth-light">
              MOHAMMED <br />
              <span className="gradient-text-luxury">ALI</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl space-y-8"
          >
            <p className="text-2xl md:text-4xl text-earth-light/60 font-medium italic border-l-8 border-moss-highlight/20 pl-12 leading-snug">
              Building <span className="text-earth-light">scalable</span> web experiences and transforming <span className="text-moss-highlight">ideas</span> into real-world digital products.
            </p>
            
            <div className="h-10 text-xl md:text-2xl text-earth-secondary uppercase font-black tracking-[8px]">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'Freelance Architect',
                  2000,
                  'AI Experience Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap gap-10 pt-10"
          >
            <Magnetic>
              <a href="#projects" className="btn-magnetic flex items-center gap-6">
                Explore Work <FaArrowRight />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/resume.pdf" className="btn-outline-luxury flex items-center gap-6">
                Acquire Resume <FaDownload />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Visual Anchor (Right Side) */}
        <motion.div
          style={{ y: y2, rotate }}
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 relative flex justify-center lg:justify-end"
        >
          {/* Developer Image with Glow Ring */}
          <div className="relative group animate-float-luxury">
            <div className="absolute -inset-10 rounded-full bg-moss-highlight/20 blur-[100px] group-hover:bg-moss-highlight/40 transition-all duration-1000" />
            <div className="relative z-10 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
              <img 
                src={img} 
                alt="Mohammed Ali" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
            </div>
            
            {/* Spinning Glow Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -inset-8 border-[1px] border-dashed border-moss-highlight/30 rounded-full -z-10" 
            />
          </div>
        </motion.div>
      </div>

      {/* Luxury Parallax Decoration */}
      <div className="absolute bottom-20 right-20 text-[20rem] font-black text-earth-light/[0.02] select-none pointer-events-none -z-10">
        AL
      </div>
    </section>
  );
};

export default Hero;
