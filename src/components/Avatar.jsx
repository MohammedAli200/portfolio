import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, MeshWobbleMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

const Avatar = () => {
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Text to Speech
  const speak = (text) => {
    if (!window.speechSynthesis) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.1;
    utterance.pitch = 0.9;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  // Exposed for external use via custom event or similar
  useEffect(() => {
    const handleSpeakEvent = (e) => speak(e.detail);
    window.addEventListener('ai-speak', handleSpeakEvent);
    
    // Initial greeting
    const timer = setTimeout(() => {
      speak("Initializing system. Hi, I am your AI assistant. Explore Mohammed Ali's portfolio by scrolling or using voice commands.");
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
      headRef.current.position.y = Math.sin(time * 2) * 0.1;
    }
    
    // Eye movement
    if (leftEyeRef.current && rightEyeRef.current) {
      const targetY = isSpeaking ? Math.abs(Math.sin(time * 10)) * 0.2 : 0;
      leftEyeRef.current.scale.y = THREE.MathUtils.lerp(leftEyeRef.current.scale.y, 1 + targetY, 0.1);
      rightEyeRef.current.scale.y = THREE.MathUtils.lerp(rightEyeRef.current.scale.y, 1 + targetY, 0.1);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Head Structure */}
        <mesh ref={headRef}>
          <Sphere args={[1, 64, 64]}>
            <MeshDistortMaterial
              color="#9929EA"
              distort={0.3}
              speed={2}
              roughness={0}
              metalness={1}
              transparent
              opacity={0.8}
            />
          </Sphere>
          
          {/* Eyes */}
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

          {/* Mouth/Voice Visualizer */}
          <mesh position={[0, -0.4, 0.8]}>
            <boxGeometry args={[0.5, 0.05, 0.1]} />
            <meshStandardMaterial 
              color="#CC66DA" 
              emissive="#CC66DA" 
              emissiveIntensity={isSpeaking ? 5 : 0.5} 
            />
          </mesh>
        </mesh>

        {/* Outer Tech Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <MeshWobbleMaterial color="#FAEB92" speed={1} factor={0.6} />
        </mesh>
      </Float>
    </group>
  );
};

export default Avatar;
