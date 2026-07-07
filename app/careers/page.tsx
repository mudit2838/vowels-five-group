"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Search, ArrowLeft, ArrowUpRight, HelpCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { careersList, CareerOpportunity } from "@/data/careers";
import { staggerContainer, fadeUpVariants } from "@/lib/motion";

export default function CareersPage() {
  const reducedMotion = useReducedMotion();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDept, setActiveDept] = useState("All");
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const departments = ["All", "Engineering", "Design", "Operations", "Product"];

  const filteredRoles = careersList.filter((role) => {
    const matchesSearch =
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = activeDept === "All" || role.department === activeDept;
    return matchesSearch && matchesDept;
  });

  const toggleExpand = (id: string) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <div className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="text" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Back to Home
          </Button>
        </Link>
      </div>

      <SectionHeading
        label="Talent"
        title="Join Vowels Five Group"
        subtitle="Help us build a multi-sector ecosystem designed for longevity. We seek operators who prioritize detail, quality, and rigorous thinking."
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between mb-10 border-b border-white/[0.04] pb-8">
        {/* Search */}
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-secondary/50" />
          <input
            type="text"
            placeholder="Search open opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#101010] border border-border-subtle hover:border-white/15 focus:border-accent-blue focus:outline-none focus-visible:outline-none pl-12 pr-4 py-3 rounded-input text-sm text-white font-body transition-colors shadow-inner placeholder:text-text-secondary/40"
          />
        </div>

        {/* Departments */}
        <div className="flex flex-wrap items-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none ${activeDept === dept
                  ? "bg-accent-blue text-white shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
                  : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white"
                }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Jobs Column & sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Jobs List Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {filteredRoles.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.08)}
              className="flex flex-col gap-6"
            >
              {filteredRoles.map((role) => {
                const isExpanded = expandedRole === role.id;

                return (
                  <motion.div
                    key={role.id}
                    id={role.id}
                    variants={fadeUpVariants(reducedMotion || false)}
                    className="scroll-mt-32"
                  >
                    <GlassCard
                      hoverEffect={!isExpanded}
                      className={`border transition-all duration-300 ${isExpanded ? "border-accent-blue/30" : "border-border-subtle"
                        }`}
                    >
                      <div className="flex flex-col gap-4">

                        {/* Summary Header */}
                        <div
                          onClick={() => toggleExpand(role.id)}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                          role="button"
                          tabIndex={0}
                          aria-expanded={isExpanded}
                          aria-label={`Toggle details for ${role.title}`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleExpand(role.id);
                            }
                          }}
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center flex-wrap gap-2.5">
                              <h3 className="text-xl font-bold font-heading text-white tracking-tight hover:text-accent-blue transition-colors">
                                {role.title}
                              </h3>
                              <span className="text-[9px] uppercase tracking-wider font-bold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded-full">
                                {role.type}
                              </span>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-text-secondary/60 font-body font-medium">
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-3.5 h-3.5" />
                                {role.department}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {role.location}
                              </span>
                            </div>
                          </div>
                          <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
                            {isExpanded ? "Collapse Details" : "View Details"}
                          </Button>
                        </div>

                        {/* Brief Intro */}
                        {!isExpanded && (
                          <p className="text-sm text-text-secondary leading-relaxed font-body mt-1">
                            {role.description.substring(0, 180)}...
                          </p>
                        )}

                        {/* Expanded details */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? "auto" : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-6 pt-6 mt-4 border-t border-white/[0.04]">

                            {/* Role Overview */}
                            <div>
                              <h4 className="text-sm uppercase tracking-wider font-bold text-white mb-2 font-heading">
                                Role Overview
                              </h4>
                              <p className="text-sm text-text-secondary leading-relaxed font-body">
                                {role.description}
                              </p>
                            </div>

                            {/* Requirements */}
                            <div>
                              <h4 className="text-sm uppercase tracking-wider font-bold text-white mb-3 font-heading">
                                Requirements & Experience
                              </h4>
                              <ul className="flex flex-col gap-2">
                                {role.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary/90 leading-relaxed font-body">
                                    <span className="text-accent-blue mt-1">•</span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-sm uppercase tracking-wider font-bold text-white mb-3 font-heading">
                                Key Responsibilities
                              </h4>
                              <ul className="flex flex-col gap-2">
                                {role.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary/90 leading-relaxed font-body">
                                    <span className="text-accent-blue mt-1">•</span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* How to Apply CTA inside card */}
                            <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                              <p className="text-xs text-text-secondary/60 font-body">
                                Apply by sending your CV & portfolio to <a href="mailto:careers@vowelsfive.com" className="text-accent-blue hover:underline">careers@vowelsfive.com</a>, referencing the Role ID in the subject.
                              </p>
                              <a href="mailto:careers@vowelsfive.com" className="w-full sm:w-auto">
                                <Button variant="primary" size="sm" className="w-full flex items-center justify-center gap-1.5" icon={<ArrowUpRight className="w-4 h-4" />}>
                                  Apply Now
                                </Button>
                              </a>
                            </div>

                          </div>
                        </motion.div>

                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* Empty State */
            <GlassCard hoverEffect={false} className="flex flex-col items-center justify-center gap-6 p-16 text-center border-dashed">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary/50">
                <Briefcase className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold font-heading text-white tracking-tight">No Active Openings</h3>
                <p className="text-sm text-text-secondary/70 max-w-md font-body mx-auto">
                  We don't have any open positions listed in "{activeDept}" at this moment. You can submit a general application for future opportunities.
                </p>
              </div>
              <Button variant="secondary" onClick={() => { setSearchTerm(""); setActiveDept("All"); }}>
                Clear Filters
              </Button>
            </GlassCard>
          )}
        </div>

        {/* Sidebar Info (General/Future Opportunities) */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full">

          <GlassCard hoverEffect={false} className="bg-[#101010]/80">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white tracking-tight">
                Future Opportunities
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-body">
                Since Vowels Five Group is expanding across multiple verticals over the next 5 years, we are always looking for premium talent in Software, AI Research, Biotech, Healthcare Operations, and Product Design.
              </p>
              <p className="text-xs text-text-secondary leading-relaxed font-body">
                If your skills don't match our active postings, send a general inquiry outlining your vertical of choice.
              </p>
              <a href="mailto:careers@vowelsfive.com" className="mt-2">
                <Button variant="glass" size="sm" className="w-full flex items-center justify-center gap-1" icon={<ArrowUpRight className="w-4 h-4" />}>
                  General Submission
                </Button>
              </a>
            </div>
          </GlassCard>

          <GlassCard hoverEffect={false} className="bg-[#101010]/30 border-dashed">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-2">Our Culture Checklist</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-text-secondary leading-relaxed font-body">
              <li className="flex items-start gap-2">
                <span className="text-accent-blue font-bold">✓</span>
                <span>Generational timeline alignment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-blue font-bold">✓</span>
                <span>Restraint in design, rigor in engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-blue font-bold">✓</span>
                <span>Intellectual curiosity and objective execution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-blue font-bold">✓</span>
                <span>High-performance, hybrid autonomy</span>
              </li>
            </ul>
          </GlassCard>

        </div>

      </div>
    </div>
  );
}
