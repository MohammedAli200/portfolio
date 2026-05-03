import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import Avatar from './Avatar';

const Hero = () => {
  const [isListening, setIsListening] = useState(false);
  const [voiceNote, setVoiceNote] = useState("");

  const triggerAISpeech = (text) => {
    window.dispatchEvent(new CustomEvent('ai-speak', { detail: text }));
  };

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
        triggerAISpeech("Navigating to projects showcase.");
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
      } else if (command.includes("contact")) {
        triggerAISpeech("Opening contact portal.");
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
      } else if (command.includes("about") || command.includes("who is")) {
        triggerAISpeech("Here is some information about Mohammed Ali.");
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
      } else if (command.includes("resume") || command.includes("download")) {
        triggerAISpeech("Preparing resume for download.");
        window.open("/resume.pdf", "_blank");
      }
    };
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Avatar />
            <ContactShadows opacity={0.4} scale={10} blur={2.4} far={10} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-[10px] uppercase tracking-[10px] text-accent mb-6 block"
          >
            Intelligent Interface Active
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter text-white">
            MOHAMMED <span className="gradient-text">ALI</span>
          </h1>
          
          <div className="text-xl md:text-3xl font-medium mb-12 h-12 text-white/40">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'AI Solutions Architect',
                2000,
                'Freelance Product Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pointer-events-auto">
            <motion.a
              href="#projects"
              onClick={() => triggerAISpeech("Exploring Mohammed's innovative projects.")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #9929EA" }}
              className="neon-button text-lg font-black px-12 py-4"
            >
              EXPLORE WORK
            </motion.a>
            
            <motion.button
              onClick={handleVoiceCommand}
              whileHover={{ scale: 1.1 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center glass-panel border-white/10 ${isListening ? 'text-red-500 shadow-[0_0_20px_red]' : 'text-accent hover:border-accent/50'}`}
            >
              {isListening ? <FaMicrophoneSlash size={24} className="animate-pulse" /> : <FaMicrophone size={24} />}
            </motion.button>
          </div>
          
          {voiceNote && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-[10px] text-accent font-bold uppercase tracking-[4px]"
            >
              " {voiceNote} "
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Decorative Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
