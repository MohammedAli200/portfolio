import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import Magnetic from './Magnetic';
import Avatar from './Avatar';

const ParticleField = (props) => {
  const ref = useRef();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    const { x, y } = state.mouse;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x * 0.2, 0.1);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y * 0.2, 0.1);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#FAEB92" size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const Hero = () => {
  const [isListening, setIsListening] = useState(false);
  const [voiceNote, setVoiceNote] = useState("");

  const triggerAISpeech = (text) => {
    window.dispatchEvent(new CustomEvent('ai-speak', { detail: text }));
  };

  const handleVoiceCommand = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice recognition not supported.");
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
      if (command.includes("show my journey") || command.includes("story") || command.includes("about")) {
        triggerAISpeech("Let's look back at how it all started.");
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
      } else if (command.includes("open projects") || command.includes("projects")) {
        triggerAISpeech("Launching the product galaxy. These are my favorite builds.");
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
      } else if (command.includes("freelance") || command.includes("work")) {
        triggerAISpeech("Showing my professional freelance archive.");
        document.getElementById("freelance").scrollIntoView({ behavior: 'smooth' });
      } else if (command.includes("contact") || command.includes("hire")) {
        triggerAISpeech("Establishing secure communication link. I'm ready to collaborate.");
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
      }
    };
  };

  const startNarrative = () => {
    triggerAISpeech("Welcome to my world. I'm Mohammed, and I build things that float between art and code. Let's explore my journey together.");
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleField />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
        </Canvas>
      </div>

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
                MOHAMMED <br /> <span className="gradient-text animate-pulse">ALI</span>
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
              sequence={['Full-Stack Architect', 2000, 'AI Solutions Explorer', 2000, 'Physics-Based Developer', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Magnetic strength={1.5}>
              <motion.button
                onClick={startNarrative}
                whileHover={{ scale: 1.1 }}
                className="neon-button text-sm px-12 py-5 shadow-[0_20px_50px_rgba(153,41,234,0.3)]"
              >
                Launch Experience
              </motion.button>
            </Magnetic>
            
            <motion.button
              onClick={handleVoiceCommand}
              whileHover={{ scale: 1.1 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center glass-panel border-white/10 ${isListening ? 'text-red-500 shadow-[0_0_20px_red]' : 'text-accent hover:border-accent/50'}`}
            >
              {isListening ? <FaMicrophoneSlash size={24} className="animate-pulse" /> : <FaMicrophone size={24} />}
            </motion.button>
          </div>
          
          {voiceNote && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-[10px] text-accent font-bold uppercase tracking-[4px]">
              " {voiceNote} "
            </motion.p>
          )}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 20, 0], opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
