"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = "left",
  className,
}) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-3 mb-12 sm:mb-16 max-w-3xl",
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariants(reducedMotion || false)}
    >
      {label && (
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue bg-accent-blue/10 px-3.5 py-1.5 rounded-full inline-block">
          {label}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-white leading-tight">
        {title}
      </h2>

      {/* Editorial horizontal separator line */}
      <div className={cn(
        "h-0.5 bg-gradient-to-r from-accent-blue/50 to-transparent rounded-full mt-1",
        align === "center" ? "w-24 bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" : "w-16"
      )} />

      {subtitle && (
        <p className="text-base sm:text-lg text-text-secondary font-body font-normal leading-relaxed mt-2 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
