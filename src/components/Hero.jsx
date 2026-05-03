import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const ParticleField = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(2000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 40;
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
          opacity={0.2}
        />
      </Points>
    </group>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg py-24">
      {/* Background 3D */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Text */}
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-moss-highlight text-[10px] uppercase font-black tracking-[10px] block"
            >
              The Architecture of Experience
            </motion.span>
            <h1 className="text-6xl md:text-[8rem] font-black leading-none tracking-tighter">
              MOHAMMED <br />
              <span className="gradient-text">ALI</span>
            </h1>
          </div>

          <div className="h-16 text-xl md:text-3xl text-earth-light/60 font-medium italic border-l-2 border-earth-primary/30 pl-8">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Freelance Solutions Architect',
                2000,
                'Experience Designer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap gap-6 pt-8">
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href="/resume.pdf" className="btn-secondary">Download CV</a>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative group"
        >
          {/* Main Image Container */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-earth-light/10 shadow-2xl animate-float">
            <img 
              src="/Users/mohammedali/.gemini/antigravity/brain/1188a591-ad83-46f9-bac1-d67bb536fdc6/developer_portrait_1777835399377.png" 
              alt="Mohammed Ali" 
              className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-40" />
          </div>

          {/* Decorative Glows */}
          <div className="glow-spot -top-20 -right-20 w-96 h-96 bg-moss-highlight/10" />
          <div className="glow-spot -bottom-20 -left-20 w-80 h-80 bg-earth-primary/10" />
          
          {/* Accent Frame */}
          <div className="absolute -inset-4 border border-moss-highlight/20 rounded-[3.5rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Section Glows */}
      <div className="glow-spot top-0 left-0 w-full h-full bg-earth-primary/[0.03] -z-10" />
    </section>
  );
};

export default Hero;
