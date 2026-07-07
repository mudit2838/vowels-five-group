"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { ChevronDown, CheckCircle2, Circle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { roadmapMilestones } from "@/data/roadmap";
import { fadeUpVariants } from "@/lib/motion";

export const Roadmap: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<string | null>("2026");
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Scroll tracking for progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleMilestoneClick = (year: string) => {
    setActiveMilestone(activeMilestone === year ? null : year);
  };

  return (
    <section id="roadmap" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-border-subtle/30">
      <SectionHeading
        label="Timeline"
        title="Our Strategic Roadmap"
        subtitle="Exploring the decade ahead. Each milestone represents a deliberate, capital-backed step toward our global multi-sector vision."
      />

      {/* Interactive Timeline Container */}
      <div ref={containerRef} className="relative max-w-4xl mx-auto pl-8 sm:pl-0">

        {/* Continuous Central Vertical Line (Desktop: center, Mobile: left) */}
        <div className="absolute top-0 bottom-0 left-0 sm:left-1/2 w-[2px] bg-border-subtle/50 transform -translate-x-[1px] z-0" />

        {/* Animated Progress Line */}
        {!reducedMotion && (
          <motion.div
            className="absolute top-0 bottom-0 left-0 sm:left-1/2 w-[2px] bg-accent-blue origin-top transform -translate-x-[1px] z-10"
            style={{ scaleY }}
          />
        )}

        {/* Timeline Items */}
        <div className="flex flex-col gap-12 sm:gap-16 relative z-20">
          {roadmapMilestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const isOpen = activeMilestone === milestone.year;
            const isCompleted = milestone.status === "completed";
            const isCurrent = milestone.status === "current";

            return (
              <div
                key={milestone.year}
                className={`flex flex-col sm:flex-row items-start sm:items-center w-full relative ${isLeft ? "sm:justify-start" : "sm:justify-end"
                  }`}
              >

                {/* Node Point Indicator */}
                <div className="absolute left-[-32px] sm:left-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-border-subtle transform -translate-x-[9px] z-30 flex items-center justify-center transition-all duration-500">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-accent-blue bg-bg-primary rounded-full" />
                  ) : isCurrent ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40" />
                  )}
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUpVariants(reducedMotion || false)}
                  className={`w-full sm:w-[45%] cursor-pointer`}
                  onClick={() => handleMilestoneClick(milestone.year)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={!!isOpen}
                  aria-label={`Milestone year ${milestone.year}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleMilestoneClick(milestone.year);
                    }
                  }}
                >
                  <GlassCard
                    className={`border transition-all duration-300 ${isOpen
                        ? "border-accent-blue/40 shadow-[0_10px_30px_rgba(99,102,241,0.04)]"
                        : "border-border-subtle/80"
                      }`}
                  >
                    <div className="flex flex-col gap-2">

                      {/* Header: Year + Expansion Chevron */}
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-extrabold font-heading text-white tracking-tight">
                          {milestone.year}
                        </span>
                        <div className="flex items-center gap-2">
                          {isCurrent && (
                            <span className="text-[9px] uppercase tracking-wider font-bold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded-full">
                              Active Focus
                            </span>
                          )}
                          <ChevronDown
                            className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                              }`}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold font-heading text-white tracking-tight mt-1">
                        {milestone.title}
                      </h4>

                      {/* Short Description */}
                      <p className="text-sm text-text-secondary leading-relaxed font-body mt-1">
                        {milestone.description}
                      </p>

                      {/* Expandable Details Container */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3"
                      >
                        <ul className="flex flex-col gap-2.5 pt-3 border-t border-white/[0.04]">
                          {milestone.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary/90 leading-relaxed font-body">
                              <span className="text-accent-blue mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
