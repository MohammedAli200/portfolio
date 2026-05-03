import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const ParticleField = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(3000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
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
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background 3D */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "20px" }}
            animate={{ opacity: 1, letterSpacing: "8px" }}
            transition={{ duration: 1.5 }}
            className="text-[10px] uppercase font-bold text-gray-500 block"
          >
            Full-Stack Developer | Freelancer
          </motion.span>
          
          <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter">
            MOHAMMED <br />
            <span className="text-gray-500">ALI</span>
          </h1>

          <div className="h-12 text-xl md:text-3xl text-gray-400 font-medium">
            <TypeAnimation
              sequence={[
                'Building digital products with purpose.',
                2000,
                'Architecting scalable full-stack systems.',
                2000,
                'Engineering cinematic web experiences.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col md:flex-row gap-6 items-center justify-center pt-12"
          >
            <a href="#projects" className="btn-primary">View Work</a>
            <a href="/resume.pdf" className="btn-secondary" target="_blank">Download Resume</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none" />
      
      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[5px] text-gray-600"
      >
        Scroll to discover
      </motion.div>
    </section>
  );
};

export default Hero;
