import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number; // In seconds
  duration?: number; // In seconds
  distance?: number; // In pixels
  className?: string;
  once?: boolean; // Only trigger once
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = '',
  once = true,
}: ScrollRevealProps) {
  // Define offset translations
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initialOffset = directions[direction] || {};

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        margin: '-80px 0px', // Animates slightly before reaching the viewport threshold
      }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Premium, elastic Cubic Bezier ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
