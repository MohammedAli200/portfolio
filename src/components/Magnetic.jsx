import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const Magnetic = ({ children, strength = 1, repulsion = false }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const maxDistance = 300;

    if (distance < maxDistance) {
      const factor = (1 - distance / maxDistance) * 40 * strength;
      if (repulsion) {
        x.set(-deltaX * (factor / 50));
        y.set(-deltaY * (factor / 50));
      } else {
        x.set(deltaX * (factor / 100));
        y.set(deltaY * (factor / 100));
      }
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
