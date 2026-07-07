"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "text";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      magnetic = false,
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const reducedMotion = useReducedMotion();

    // Magnetic motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for magnetic motion
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || reducedMotion || disabled || typeof window === "undefined") return;

      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from cursor to button center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Magnetic pull limits (max 15px displacement)
      const pullFactor = 0.35;
      const moveX = distanceX * pullFactor;
      const moveY = distanceY * pullFactor;

      x.set(Math.max(-12, Math.min(12, moveX)));
      y.set(Math.max(-12, Math.min(12, moveY)));
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    // Variant classes
    const variantClasses = {
      primary: "bg-accent-blue text-text-primary hover:bg-accent-hover shadow-[0_4px_20px_-2px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.4)] border border-transparent",
      secondary: "bg-transparent text-text-primary border border-border-subtle hover:bg-white/5 hover:border-text-secondary",
      glass: "glass-effect text-text-primary hover:bg-white/10 hover:border-white/20",
      text: "bg-transparent text-text-secondary hover:text-text-primary hover:underline p-0 border-none shadow-none",
    };

    // Size classes
    const sizeClasses = {
      sm: "px-4 py-2 text-sm rounded-[10px]",
      md: "px-6 py-3 text-base rounded-button",
      lg: "px-8 py-4 text-lg rounded-button",
    };

    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const buttonContent = (
      <>
        {icon && iconPosition === "left" && <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      </>
    );

    const mergedRef = (node: HTMLButtonElement) => {
      // Handle forwardRef
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      // Handle local ref for coordinate calculations
      (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    };

    if (magnetic && !reducedMotion && !disabled) {
      return (
        <motion.button
          ref={mergedRef}
          className={cn(baseClasses, variantClasses[variant], sizeClasses[size], "group", className)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          disabled={disabled}
          {...(props as any)}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        ref={mergedRef}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], "group", className)}
        disabled={disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
