import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, MeshWobbleMaterial, Box } from '@react-three/drei';
import * as THREE from 'three';

const AntigravityTwin = ({ isSpeaking }) => {
  const group = useRef();
  const headRef = useRef();
  const bodyRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Antigravity drift
    if (group.current) {
      group.current.position.y = Math.sin(time * 0.5) * 0.1;
      
      // Look at mouse
      const targetRotationY = state.mouse.x * 0.5;
      const targetRotationX = -state.mouse.y * 0.2;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.05);
    }

    // Breathing / Idle movement
    if (bodyRef.current) {
      bodyRef.current.scale.y = 1 + Math.sin(time * 2) * 0.02;
    }

    // Speaking feedback (Glowing Core)
    if (headRef.current) {
      const glowIntensity = isSpeaking ? 2 + Math.abs(Math.sin(time * 20)) * 3 : 1;
      headRef.current.material.emissiveIntensity = glowIntensity;
    }

    // Arm idle sway
    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(time) * 0.1 - 0.2;
      rightArmRef.current.rotation.z = -Math.sin(time) * 0.1 + 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Head - Digital Core */}
      <mesh ref={headRef} position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.4, 64, 64]} />
        <meshStandardMaterial 
          color="#9929EA" 
          emissive="#9929EA" 
          emissiveIntensity={1}
          roughness={0}
          metalness={1}
        />
      </mesh>
      
      {/* Futuristic Mask/Visor */}
      <mesh position={[0, 1.2, 0.35]}>
        <boxGeometry args={[0.5, 0.15, 0.1]} />
        <meshStandardMaterial color="#FAEB92" emissive="#FAEB92" emissiveIntensity={2} />
      </mesh>

      {/* Torso - Geometric Prism */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.2, 1.5, 6]} />
        <MeshDistortMaterial
          color="#CC66DA"
          distort={0.2}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Floating Arms */}
      <mesh ref={leftArmRef} position={[-0.7, 0.3, 0]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#9929EA" transparent opacity={0.6} />
      </mesh>
      <mesh ref={rightArmRef} position={[0.7, 0.3, 0]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#9929EA" transparent opacity={0.6} />
      </mesh>

      {/* Digital Halo */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 1.2, 0]}>
        <torusGeometry args={[0.7, 0.01, 16, 100]} />
        <MeshWobbleMaterial color="#FAEB92" speed={2} factor={0.5} />
      </mesh>

      {/* Aura Sphere */}
      <Sphere args={[2.5, 32, 32]}>
        <meshStandardMaterial
          color="#9929EA"
          transparent
          opacity={0.03}
          wireframe
        />
      </Sphere>
    </group>
  );
};

const Avatar = ({ isSpeaking, ...props }) => {
  return (
    <group {...props}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <AntigravityTwin isSpeaking={isSpeaking} />
      </Float>
    </group>
  );
};

export default Avatar;
