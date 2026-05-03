import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import Magnetic from './Magnetic';

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
      
      if (command.includes("journey") || command.includes("story")) {
        triggerAISpeech("Navigating to my story. Let's look at the timeline.");
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
      } else if (command.includes("project")) {
        triggerAISpeech("Showing projects now.");
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
      } else if (command.includes("contact") || command.includes("hire")) {
        triggerAISpeech("Establishment contact portal.");
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
      } else {
        triggerAISpeech(`You said ${command}. I'm searching my database for that.`);
      }
    };
  };

  const startNarrative = () => {
    triggerAISpeech("Welcome to my digital sanctuary. I'm Mohammed Ali, and this is my vision of the future. Let me guide you.");
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* 
          NOTE: The 3D Avatar is now rendered globally by AIGuide 
          behind this content for an immersive depth effect.
      */}
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <Magnetic strength={2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter uppercase mb-4 text-white mix-blend-difference">
                MOHAMMED <br /> <span className="gradient-text animate-pulse">ALI</span>
              </h1>
            </motion.div>
          </Magnetic>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-3xl font-medium mb-12 h-12 text-white/70"
          >
            <TypeAnimation
              sequence={['Global Full-Stack Architect', 2000, 'AI Immersive Designer', 2000, 'Experience Builder', 2000]}
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

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div animate={{ y: [0, 20, 0], opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
