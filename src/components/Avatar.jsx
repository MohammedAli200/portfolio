import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const Avatar = () => {
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
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
      setTimeout(() => setShowBubble(false), 2000);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const handleSpeakEvent = (e) => speak(e.detail);
    window.addEventListener('ai-speak', handleSpeakEvent);
    
    // Initial welcome sequence
    const timer = setTimeout(() => {
      speak("Hi, I'm Mohammed Ali. Let me walk you through my journey.");
    }, 3000);

    return () => {
      window.removeEventListener('ai-speak', handleSpeakEvent);
      clearTimeout(timer);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      headRef.current.position.y = Math.sin(time * 2) * 0.05;
    }
    
    if (leftEyeRef.current && rightEyeRef.current) {
      const targetScale = isSpeaking ? 1 + Math.abs(Math.sin(time * 15)) * 0.5 : 1;
      leftEyeRef.current.scale.y = THREE.MathUtils.lerp(leftEyeRef.current.scale.y, targetScale, 0.1);
      rightEyeRef.current.scale.y = THREE.MathUtils.lerp(rightEyeRef.current.scale.y, targetScale, 0.1);
    }
  });

  return (
    <>
      <group position={[0, 0, 0]}>
        <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh ref={headRef}>
            <Sphere args={[1, 64, 64]}>
              <MeshDistortMaterial
                color="#9929EA"
                distort={0.4}
                speed={2}
                roughness={0}
                metalness={1}
                transparent
                opacity={0.9}
              />
            </Sphere>
            <mesh ref={leftEyeRef} position={[-0.4, 0.2, 0.8]}>
              <Sphere args={[0.1, 32, 32]}>
                <meshStandardMaterial color="#FAEB92" emissive="#FAEB92" emissiveIntensity={2} />
              </Sphere>
            </mesh>
            <mesh ref={rightEyeRef} position={[0.4, 0.2, 0.8]}>
              <Sphere args={[0.1, 32, 32]}>
                <meshStandardMaterial color="#FAEB92" emissive="#FAEB92" emissiveIntensity={2} />
              </Sphere>
            </mesh>
            <mesh position={[0, -0.4, 0.8]}>
              <boxGeometry args={[0.5, 0.05, 0.1]} />
              <meshStandardMaterial 
                color="#CC66DA" 
                emissive="#CC66DA" 
                emissiveIntensity={isSpeaking ? 10 : 1} 
              />
            </mesh>
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.6, 0.01, 16, 100]} />
            <MeshWobbleMaterial color="#FAEB92" speed={2} factor={0.5} />
          </mesh>
        </Float>
      </group>

      {/* HTML Overlay Bubble (using portal logic in App for better placement, or just fixed here) */}
      <div className="fixed bottom-32 right-12 z-[100] pointer-events-none">
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-black/80 backdrop-blur-md border border-neon-primary/30 p-6 rounded-3xl max-w-xs shadow-2xl"
            >
              <p className="text-white text-sm font-medium leading-relaxed italic">
                "{currentText}"
              </p>
              {/* Triangle Tail */}
              <div className="absolute -bottom-2 right-10 w-4 h-4 bg-black/80 border-r border-b border-neon-primary/30 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Avatar;
