import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { SkeletonUtils } from 'three-stdlib';

// A high-quality public GLB model of a stylized developer character
const MODEL_URL = "https://models.readyplayer.me/6485ec93e038933391d4e414.glb";

const Avatar = ({ isSpeaking, ...props }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(MODEL_URL);
  
  // Clone the scene to avoid issues with multiple instances
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  
  const { actions, names } = useAnimations(animations, group);
  const [currentAction, setCurrentAction] = useState("Idle");

  useEffect(() => {
    // Basic animation handling
    if (actions && actions["Idle"]) {
      actions["Idle"].fadeIn(0.5).play();
    }
    
    // If speaking, maybe add a slight gesture or jaw movement (if rigged)
    if (isSpeaking && actions["Talking"]) {
      actions["Idle"].fadeOut(0.5);
      actions["Talking"].reset().fadeIn(0.5).play();
    } else if (actions["Talking"]) {
      actions["Talking"].fadeOut(0.5);
      actions["Idle"].reset().fadeIn(0.5).play();
    }
  }, [isSpeaking, actions]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smoothly follow the mouse with the head
    if (nodes.Head) {
      const targetRotation = new THREE.Euler(
        state.mouse.y * -0.2,
        state.mouse.x * 0.2,
        0
      );
      nodes.Head.rotation.set(
        THREE.MathUtils.lerp(nodes.Head.rotation.x, targetRotation.x, 0.1),
        THREE.MathUtils.lerp(nodes.Head.rotation.y, targetRotation.y, 0.1),
        0
      );
    }

    // Floating drift effect (Antigravity)
    if (group.current) {
      group.current.position.y = Math.sin(time) * 0.05;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clone} />
    </group>
  );
};

export default Avatar;

// Preload the model for performance
useGLTF.preload(MODEL_URL);
