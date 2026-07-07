"use client";

import React from "react";
import { ArrowDown, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import { fadeUpVariants, staggerContainer } from "@/lib/motion";

export const Hero: React.FC = () => {
  const reducedMotion = useReducedMotion();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden py-20 px-6 sm:px-8 border-b border-border-subtle/30 bg-[#050505]">
      {/* Premium Subtle Ambient Background - 90% monochrome */}
      {!reducedMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
          {/* Static Extremely Subtle Stripe-style Glow behind headline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.035)_0%,transparent_70%)] blur-[20px]" />
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      )}

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8 sm:gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.2, 0.2)}
          className="flex flex-col items-center gap-6"
        >
          {/* Restrained Logo Entrance */}
          <motion.div
            variants={fadeUpVariants(reducedMotion || false)}
            className="relative w-24 h-24 flex items-center justify-center rounded-full border border-border-subtle bg-[#101010]/80 shadow-[0_0_50px_rgba(255,255,255,0.01)]"
          >
            {/* Extremely thin static accent ring */}
            <div className="absolute inset-0 rounded-full border border-accent-blue/20" />
            
            <span className="text-4xl font-extrabold tracking-widest text-text-primary ml-[3px] select-none font-heading">
              V
            </span>
          </motion.div>

          {/* Group Label */}
          <motion.span
            variants={fadeUpVariants(reducedMotion || false)}
            className="text-xs uppercase tracking-[0.4em] font-semibold text-accent-blue"
          >
            Vowels Five Group
          </motion.span>

          {/* Headline (No text gradients, solid soft off-white #F5F5F4) */}
          <motion.h1
            variants={fadeUpVariants(reducedMotion || false)}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-primary font-heading max-w-4xl leading-[1.1]"
          >
            Building Companies That <br className="hidden sm:block" />
            Shape Tomorrow.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUpVariants(reducedMotion || false)}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl font-normal font-body leading-relaxed"
          >
            Integrating premium fashion, forward-thinking technology, and deep AI infrastructure to build a multi-sector ecosystem designed for the next century.
          </motion.p>

          {/* Call to Actions (Primary Indigo / Secondary Hairline Border) */}
          <motion.div
            variants={fadeUpVariants(reducedMotion || false)}
            className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto px-6 sm:px-0"
          >
            <Button
              variant="primary"
              size="lg"
              magnetic
              icon={<ChevronRight className="w-4 h-4 text-text-primary" />}
              onClick={() => handleScrollTo("companies")}
            >
              Explore Ventures
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleScrollTo("about")}
            >
              Our Vision
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-8 cursor-pointer text-text-secondary hover:text-text-primary transition-colors flex flex-col items-center gap-2"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to About section"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleScrollTo("about");
          }
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};

export default Hero;
