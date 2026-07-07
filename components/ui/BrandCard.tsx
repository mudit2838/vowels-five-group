"use client";

import React from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Brand } from "@/data/brands";
import GlassCard from "./GlassCard";
import Button from "./Button";

interface BrandCardProps {
  brand: Brand;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  const reducedMotion = useReducedMotion();
  const isLive = brand.status === "live";

  return (
    <GlassCard className="h-full flex flex-col justify-between">
      <div>
        {/* Header: Category & Status Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-text-secondary/60">
            {brand.category}
          </span>
          {isLive ? (
            <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded-full">
              Flagship Brand
            </span>
          ) : (
            <span className="text-[9px] uppercase tracking-[0.15em] font-medium text-text-secondary/30 border border-white/5 bg-white/[0.01] px-2.5 py-1 rounded-full flex items-center gap-1">
              <Lock className="w-2.5 h-2.5 opacity-60" />
              Coming Soon
            </span>
          )}
        </div>

        {/* Brand Name */}
        <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-3">
          <Link href={`/brands/${brand.slug}`} className="hover:text-accent-blue transition-colors">
            {brand.name}
          </Link>
        </h3>

        {/* Brand Description */}
        <p className="text-sm text-text-secondary leading-relaxed font-body">
          {brand.description}
        </p>
      </div>

      {/* Footer: Action button or status message */}
      <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between">
        {isLive ? (
          <div className="flex items-center gap-3 w-full">
            <Link href={`/brands/${brand.slug}`} className="flex-1">
              <Button
                variant="glass"
                size="sm"
                className="w-full flex items-center justify-center"
              >
                View Details
              </Button>
            </Link>
            {brand.url && (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full flex items-center justify-center gap-1.5 group/btn"
                  icon={<ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />}
                >
                  Visit Site
                </Button>
              </a>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-medium text-text-secondary/40 font-body select-none">
              In Incubation
            </span>
            <Link href={`/brands/${brand.slug}`}>
              <Button
                variant="glass"
                size="sm"
                className="flex items-center justify-center animate-pulse-subtle"
              >
                Explore Venture
              </Button>
            </Link>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default BrandCard;
