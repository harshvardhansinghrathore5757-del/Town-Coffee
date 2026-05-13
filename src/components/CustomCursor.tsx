import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Hide native cursor if possible (can be done in css)
    document.body.style.cursor = 'none';
    
    // Cleanup
    const aTags = document.querySelectorAll('a, button');
    aTags.forEach((el) => {
      (el as HTMLElement).style.cursor = 'none';
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === 'undefined') return null;
  // Ignore on small screens
  if (window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#1e3a2f] pointer-events-none z-[100] flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1.5 : 1,
        borderColor: isHovering ? '#c4714a' : '#1e3a2f',
        backgroundColor: isHovering ? 'rgba(196, 113, 74, 0.1)' : 'transparent',
      }}
    >
      <motion.div 
        className="w-1.5 h-1.5 bg-[#1e3a2f] rounded-full"
        style={{
          backgroundColor: isHovering ? '#c4714a' : '#1e3a2f'
        }}
      />
    </motion.div>
  );
        }
