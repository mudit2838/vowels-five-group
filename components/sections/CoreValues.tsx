"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { values } from "@/data/values";
import { staggerContainer, fadeUpVariants } from "@/lib/motion";

export const CoreValues: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="values" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-border-subtle/30">
      <SectionHeading
        label="Core Philosophy"
        title="Principles That Guide Our Ventures"
        subtitle="A shared set of execution guidelines that dictate how we operate, how we build, and how we interact across all sectors."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
      >
        {values.map((value) => {
          // Dynamic Lucide Icon Resolution
          const IconComponent = (Icons as any)[value.iconName];

          return (
            <motion.div
              key={value.id}
              variants={fadeUpVariants(reducedMotion || false)}
            >
              <GlassCard hoverEffect={true} className="h-full">
                <div className="flex flex-col gap-4">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-[12px] border border-white/10 bg-white/5 flex items-center justify-center text-accent-blue shadow-inner">
                    {IconComponent ? (
                      <IconComponent className="w-5 h-5" />
                    ) : (
                      <Icons.Compass className="w-5 h-5" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-white tracking-tight">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed font-body">
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default CoreValues;
