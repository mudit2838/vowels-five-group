"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import AnimatedCounter from "../ui/AnimatedCounter";
import { fadeUpVariants, staggerContainer } from "@/lib/motion";

export const About: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-border-subtle/30">
      <SectionHeading
        label="Our Origin"
        title="Formed on a Horizon of Decades, Not Quarters"
        subtitle="Vowels Five Group is a privately held holding company established to build, acquire, and guide enterprises that elevate human experience through design, engineering, and trust."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer(0.2)}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Column: Deep Story & History */}
        <motion.div
          variants={fadeUpVariants(reducedMotion || false)}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4 text-text-secondary leading-relaxed text-base sm:text-lg">
            <p>
              Vowels Five Group was founded with a singular conviction: the most meaningful impact is built at the intersection of aesthetic restraint and rigorous engineering. While traditional corporate structures separate consumer lifestyle from heavy technology, we believe the future belongs to integrated ecosystems that treat design and infrastructure as one.
            </p>
            <p>
              Our journey begins with **QRAM**, our flagship premium clothing brand launching in 2026. QRAM represents the physical manifestation of our core philosophy — uncompromising quality, premium presentation, and detail-oriented craftsmanship.
            </p>
            <p>
              Over the next decade, Vowels Five Group will systematically scale this philosophy. We are establishing foundational hubs in **Technology, Healthcare, Education, Finance, AI, and Consumer Products**, ensuring each brand within our portfolio shares a common lineage of trust, longevity, and premium execution.
            </p>
          </div>

          {/* Quick Metrics Teaser Grid */}
          <div className="grid grid-cols-3 gap-4 mt-6 border-t border-border-subtle/30 pt-8">
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
                <AnimatedCounter value={2026} />
              </p>
              <p className="text-xs uppercase tracking-wider text-text-secondary mt-1">Foundation</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
                <AnimatedCounter value={7} />
              </p>
              <p className="text-xs uppercase tracking-wider text-text-secondary mt-1">Target Sectors</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
                <AnimatedCounter value={100} />%
              </p>
              <p className="text-xs uppercase tracking-wider text-text-secondary mt-1">Long-Term Held</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Mission & Vision Cards */}
        <motion.div
          variants={fadeUpVariants(reducedMotion || false)}
          className="lg:col-span-5 flex flex-col gap-6 w-full"
        >
          <GlassCard className="w-full">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue">The Mission</span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">To Build Category-Defining Pillars</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-2">
                We craft, support, and scale ventures that set new standards in their respective industries. By prioritizing longevity, craftsmanship, and integrity over quick exits, we ensure our ecosystem remains a trusted foundation for generations.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="w-full">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue">The Vision</span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">A Harmonious Multi-Brand Ecosystem</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-2">
                To create a unified group of companies that seamlessly blend the digital and physical. From the garments we wear to the AI platforms that power our institutions, Vowels Five Group aims to be the invisible mark of quality and premium utility globally.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
