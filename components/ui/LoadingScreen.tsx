"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loader once window is fully loaded (or simulated timeout)
    const handleLoad = () => setIsVisible(false);

    if (document.readyState === "complete") {
      const timer = setTimeout(() => setIsVisible(false), 1200);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback safety timeout
      const safetyTimer = setTimeout(() => setIsVisible(false), 3000);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(safetyTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Elegant SVG Loading Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-20 h-20"
            >
              {/* Outer glowing ambient ring */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />

              {/* Spinning/pulsing accent circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-t border-accent-blue border-r border-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />

              {/* Center V logo mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold font-heading tracking-widest text-white ml-[2px]">V</span>
              </div>
            </motion.div>

            {/* Holding Company Label */}
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xs uppercase tracking-[0.3em] font-semibold text-white"
              >
                Vowels Five Group
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-[10px] uppercase tracking-[0.2em] text-text-secondary mt-1"
              >
                Define Tomorrow
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
