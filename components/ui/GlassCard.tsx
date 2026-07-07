"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hoverEffect = true, delay = 0, ...props }, ref) => {
    const reducedMotion = useReducedMotion();

    const cardContent = (
      <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between">
        {children}
      </div>
    );

    const baseClass =
      "relative overflow-hidden rounded-card border border-border-subtle bg-[#101010]/40 backdrop-blur-md transition-colors duration-500 hover:border-white/15 shadow-ambient";

    if (hoverEffect && !reducedMotion) {
      return (
        <motion.div
          ref={ref as any}
          className={cn(baseClass, className)}
          whileHover={{
            y: -6,
            scale: 1.01,
            boxShadow: "0 20px 40px -5px rgba(99, 102, 241, 0.06)",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          {...(props as any)}
        >
          {/* Subtle Ambient Accent Glow on Card Hover */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99, 102, 241, 0.03)_0%,transparent_70%)] opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          {cardContent}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={cn(baseClass, className)} {...props}>
        {cardContent}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
export default GlassCard;
