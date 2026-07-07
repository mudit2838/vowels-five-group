"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  duration?: number;
  formatter?: (val: number) => string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  direction = "up",
  className,
  duration = 1.5,
  formatter,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  
  // Spring parameters for organic feel
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 80,
  });
  
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      // Small timeout to allow element presentation before count-up
      const timer = setTimeout(() => {
        motionValue.set(value);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest);
        
        if (formatter) {
          ref.current.textContent = formatter(rounded);
        } else {
          // If value acts like a year, display without comma grouping
          if (value >= 2000 && value <= 2100) {
            ref.current.textContent = String(rounded);
          } else {
            ref.current.textContent = rounded.toLocaleString();
          }
        }
      }
    });
  }, [springValue, value, formatter]);

  return (
    <span ref={ref} className={className}>
      {direction === "down" ? value : 0}
    </span>
  );
};

export default AnimatedCounter;
