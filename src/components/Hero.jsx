import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Magnetic from './Magnetic';
import Avatar from './Avatar';

const ParticleField = (props) => {
  const ref = useRef();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Mouse interaction with particles
    const { x, y } = state.mouse;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x * 0.2, 0.1);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y * 0.2, 0.1);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#FAEB92"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Antigravity Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleField />
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Avatar scale={0.2} position={[0, -0.1, 0]} />
            </Float>
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating UI Elements */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <Magnetic strength={2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter uppercase mb-4 text-white">
                MOHAMMED <br /> 
                <span className="gradient-text animate-pulse">ALI</span>
              </h1>
            </motion.div>
          </Magnetic>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-3xl font-medium mb-12 h-12 text-white/50"
          >
            <TypeAnimation
              sequence={[
                'Zero Gravity Designer',
                2000,
                'Full-Stack Architect',
                2000,
                'Physics-Based Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Magnetic strength={1.5}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.1 }}
                className="neon-button text-sm px-12 py-5 shadow-[0_20px_50px_rgba(153,41,234,0.3)]"
              >
                Launch Experience
              </motion.a>
            </Magnetic>
            
            <Magnetic strength={1} repulsion>
              <motion.a
                href="#about"
                className="text-accent uppercase tracking-[5px] text-[10px] font-bold hover:text-white transition-colors"
              >
                Learn Mission
              </motion.a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-gradient-to-b from-white to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
