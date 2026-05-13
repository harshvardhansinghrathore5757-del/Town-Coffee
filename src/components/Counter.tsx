import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CounterProps {
  endValue: number;
  label: string;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({ endValue, label, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * endValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    if (isInView) {
      window.requestAnimationFrame(step);
    }
  }, [endValue, duration, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-serif text-5xl md:text-6xl text-tc-accent font-bold mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-tc-muted-dark font-semibold">
        {label}
      </div>
    </div>
  );
}
