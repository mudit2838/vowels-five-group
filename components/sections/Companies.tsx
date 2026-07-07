"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import BrandCard from "../ui/BrandCard";
import { brands } from "@/data/brands";
import { staggerContainer, fadeUpVariants } from "@/lib/motion";

export const Companies: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="companies" className="py-24 sm:py-32 px-6 sm:px-8 max-w-[1400px] mx-auto border-b border-border-subtle/30 bg-[#050505]">
      <SectionHeading
        label="Venture Portfolio"
        title="Our Companies"
        subtitle="A collection of specialized companies, built on common guidelines of design restraint, stability, and generational growth."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer(0.12)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            variants={fadeUpVariants(reducedMotion || false)}
            className="h-full"
          >
            <BrandCard brand={brand} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Companies;
