import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-earth-primary/30 pointer-events-none z-[1000] hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(138, 95, 65, 0.1)' : 'transparent',
      }}
      transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <div className="absolute inset-0 m-auto w-1 h-1 bg-earth-primary rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;
