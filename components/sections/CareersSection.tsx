"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { fadeUpVariants } from "@/lib/motion";

export const CareersSection: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="careers" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto bg-[#050505]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants(reducedMotion || false)}
        className="w-full"
      >
        {/* Full-width Glass Recruitment CTA Banner */}
        <GlassCard hoverEffect={true} className="w-full relative overflow-hidden border-border-subtle bg-[#101010]/80 hover:border-accent-blue/20 p-12 sm:p-20 text-center flex flex-col items-center gap-8 shadow-ambient">
          {/* Subtle Ambient Radial Orb behind card */}
          {!reducedMotion && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.025)_0%,transparent_60%)] pointer-events-none" />
          )}

          {/* Micro-label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/20 bg-accent-blue/5">
            <Sparkles className="w-3.5 h-3.5 text-accent-blue animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-accent-blue font-body">
              Join Vowels Five Group
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-text-primary tracking-tight leading-tight max-w-2xl">
            Build the Future <br />
            With Us.
          </h2>

          {/* Support blurb */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-body font-normal max-w-xl mx-auto">
            We are looking for systems architects, AI engineers, and design visionaries who prioritize depth, stability, and generational execution.
          </p>

          {/* Action triggers */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mt-2">
            <Link href="/careers" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                className="w-full flex items-center justify-center gap-2 group/btn"
                magnetic
                icon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />}
              >
                View Open Positions
              </Button>
            </Link>
            <a href="mailto:careers@vowelsfive.com" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="md"
                className="w-full border-border-subtle hover:border-text-secondary hover:bg-white/5"
              >
                General Submission
              </Button>
            </a>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default CareersSection;
