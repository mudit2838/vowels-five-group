"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { fadeUpVariants } from "@/lib/motion";

export const Founder: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="founder" className="w-full bg-[#101010] border-b border-border-subtle/30">
      <div className="max-w-7xl mx-auto py-24 sm:py-32 px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        {/* Left Column: Founder Photo Placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants(reducedMotion || false)}
          className="lg:col-span-5 flex flex-col items-center justify-center w-full"
        >
          <div className="relative w-full aspect-[4/5] max-w-md rounded-card border border-border-subtle bg-bg-primary flex flex-col items-center justify-center text-center p-8 overflow-hidden shadow-ambient group">
            {/* Ambient Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] opacity-50 group-hover:scale-110 transition-transform duration-700" />

            {/* Visual Portrait Placeholder (Elegant SVG silhouette) */}
            <div className="relative w-36 h-36 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-text-secondary/40 shadow-inner">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue mb-1">
              Founder & Director
            </span>
            <h3 className="text-xl font-bold font-heading text-white tracking-tight mb-2">
              [Founder Photo Placeholder]
            </h3>
            <p className="text-xs text-text-secondary/70 max-w-xs leading-relaxed">
              Replace this vector asset with a professional portrait (`founder.jpg`, dimensions: 800x1000px, transparent or dark background).
            </p>
          </div>
        </motion.div>

        {/* Right Column: Message Letter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants(reducedMotion || false)}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="text-accent-blue opacity-50 mb-2">
            <Quote className="w-10 h-10 transform -scale-x-100" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight">
            “Crafting the Pillars of a Generational Journey”
          </h2>

          <div className="flex flex-col gap-5 text-text-secondary leading-relaxed text-base font-body">
            <p>
              To our partners, future collaborators, and consumers,
            </p>
            <p>
              We established Vowels Five Group on a core philosophy: complexity is cheap, but elegance and longevity require deliberate craftsmanship. In a market often focused on short-term valuation and quick exits, we choose to measure progress in decades.
            </p>
            <p>
              By aligning lifestyle craftsmanship in apparel with structural stability in software and artificial intelligence, we believe we can build a collection of brands that respect the consumer's intelligence and stand the test of time.
            </p>
            <p>
              Our initial flagship venture, QRAM, marks the start of this commitment. What you see here is the roadmap for a continuous, compounding effort that will shape our investments in technology, science, and everyday utility over the next decade.
            </p>
            <p>
              We look forward to building this future alongside you.
            </p>
          </div>

          {/* Founder Signature Area */}
          <div className="mt-8 border-t border-border-subtle/30 pt-6 flex items-center justify-between">
            <div>
              <p className="text-base font-bold font-heading text-white">Vowels Five Group</p>
              <p className="text-xs text-text-secondary uppercase tracking-wider">Office of the Founder</p>
            </div>

            {/* Signature Graphic Placeholder */}
            <div className="h-12 w-40 border border-dashed border-white/10 bg-white/[0.01] rounded-[8px] flex items-center justify-center p-2 text-text-secondary/50 text-[10px] uppercase tracking-wider select-none">
              [Founder Signature]
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
