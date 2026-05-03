import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const FloatingShapes = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Torus args={[3, 0.2, 16, 100]} position={[-5, 2, -5]} rotation={[1, 1, 0]}>
          <meshStandardMaterial color="#9929EA" emissive="#9929EA" emissiveIntensity={0.5} wireframe />
        </Torus>
      </Float>
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1, 0]} position={[6, -2, -4]}>
          <meshStandardMaterial color="#CC66DA" emissive="#CC66DA" emissiveIntensity={0.5} wireframe />
        </Icosahedron>
      </Float>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.5, 100, 200]} position={[0, 0, -2]}>
          <MeshDistortMaterial
            color="#9929EA"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
    </>
  );
};

const Hero = () => {
  const [isListening, setIsListening] = useState(false);
  const [voiceNote, setVoiceNote] = useState("");

  const handleVoiceCommand = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      setVoiceNote(command);
      
      if (command.includes("show projects") || command.includes("projects")) {
        window.location.href = "#projects";
      } else if (command.includes("contact")) {
        window.location.href = "#contact";
      } else if (command.includes("about")) {
        window.location.href = "#about";
      }
    };
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
            <FloatingShapes />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "10px" }}
            animate={{ opacity: 1, letterSpacing: "2px" }}
            transition={{ duration: 1.5 }}
            className="text-xs font-bold uppercase tracking-[5px] text-accent mb-4 block"
          >
            Futuristic Full-Stack Architect
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
            MOHAMMED <span className="gradient-text">ALI</span>
          </h1>
          
          <div className="text-xl md:text-3xl font-medium mb-12 h-12">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Freelance Product Engineer',
                2000,
                'AI Solutions Explorer',
                2000,
                'UI/UX Visionary',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white/60"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #9929EA" }}
              whileTap={{ scale: 0.95 }}
              className="neon-button text-lg font-bold px-10"
            >
              Explore Work
            </motion.a>
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 border border-white/10 rounded-lg transition-all text-lg font-bold glass-panel"
            >
              Resume
            </motion.a>
            
            {/* Voice Control Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleVoiceCommand}
              className={`p-4 rounded-full border border-white/10 glass-panel ${isListening ? 'text-red-500 shadow-[0_0_15px_red]' : 'text-accent'}`}
            >
              {isListening ? <FaMicrophoneSlash size={24} className="animate-pulse" /> : <FaMicrophone size={24} />}
            </motion.button>
          </div>
          
          {voiceNote && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-xs text-accent italic uppercase tracking-widest"
            >
              Detected: "{voiceNote}"
            </motion.p>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-accent to-transparent animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
