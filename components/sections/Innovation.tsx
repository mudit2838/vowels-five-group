"use client";

import React from "react";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { innovationItems, InnovationItem } from "@/data/innovation";
import { staggerContainer, fadeUpVariants } from "@/lib/motion";

export const Innovation: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="innovation" className="py-24 sm:py-32 px-6 sm:px-8 max-w-[1400px] mx-auto border-b border-border-subtle/30 bg-[#101010]">
      <SectionHeading
        label="Technology & R&D"
        title="Pillars of Innovation"
        subtitle="Vowels Five Group funds, researches, and deploys high-performance systems to support our portfolio ventures."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {innovationItems.map((item: InnovationItem) => {
          // Dynamic Icon Resolution
          const IconComponent = (Icons as any)[item.iconName];

          return (
            <motion.div
              key={item.id}
              variants={fadeUpVariants(reducedMotion || false)}
            >
              <GlassCard hoverEffect={true} className="h-full border-border-subtle/60 hover:border-accent-blue/20">
                <div className="flex flex-col gap-5">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-[12px] bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue shadow-inner">
                    {IconComponent ? (
                      <IconComponent className="w-5 h-5" />
                    ) : (
                      <Icons.Compass className="w-5 h-5" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] sm:text-[24px] font-bold font-heading text-white tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed font-body font-normal">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}

        {/* 6th Interactive Card */}
        <motion.div variants={fadeUpVariants(reducedMotion || false)}>
          <GlassCard hoverEffect={true} className="h-full border-dashed border-accent-blue/30 bg-accent-blue/[0.01] hover:bg-accent-blue/[0.03] hover:border-accent-blue/50">
            <div className="flex flex-col justify-between h-full gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-[12px] bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                  <Icons.ArrowUpRight className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-bold font-heading text-white tracking-tight">
                  Join Our Research Lab
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-body">
                  We are constantly looking for senior systems architects, ML researchers, and product operators who value depth, restraint, and precision.
                </p>
              </div>

              <Link href="/careers" className="w-full">
                <Button variant="text" size="sm" className="flex items-center gap-1 text-accent-blue hover:text-text-primary font-semibold">
                  View Labs Roles
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </GlassCard>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Innovation;
