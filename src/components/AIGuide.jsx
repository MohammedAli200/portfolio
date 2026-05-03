import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from './Avatar';

const AIGuide = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showBubble, setShowBubble] = useState(false);

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    
    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentText(text);
      setShowBubble(true);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setTimeout(() => setShowBubble(false), 3000);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const handleSpeakEvent = (e) => speak(e.detail);
    window.addEventListener('ai-speak', handleSpeakEvent);
    
    const timer = setTimeout(() => {
      speak("Hi, I'm Mohammed Ali. Let me walk you through my journey.");
    }, 3000);

    return () => {
      window.removeEventListener('ai-speak', handleSpeakEvent);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 w-48 h-48 z-[150] pointer-events-none">
      <div className="w-full h-full pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Avatar isSpeaking={isSpeaking} />
        </Canvas>
      </div>

      {/* HTML Overlay Bubble */}
      <div className="absolute bottom-40 right-12 z-[160] pointer-events-none">
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-black/80 backdrop-blur-md border border-neon-primary/30 p-6 rounded-3xl max-w-xs shadow-2xl pointer-events-auto"
            >
              <p className="text-white text-sm font-medium leading-relaxed italic">
                "{currentText}"
              </p>
              <div className="absolute -bottom-2 right-10 w-4 h-4 bg-black/80 border-r border-b border-neon-primary/30 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIGuide;
