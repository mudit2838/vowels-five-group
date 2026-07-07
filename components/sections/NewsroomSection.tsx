"use client";

import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { newsItems } from "@/data/news";
import { staggerContainer, fadeUpVariants } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

export const NewsroomSection: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const latestNews = newsItems.slice(0, 3); // Get latest 3 announcements

  return (
    <section id="newsroom" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-border-subtle/30">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
        <SectionHeading
          label="Newsroom"
          title="Press & Perspectives"
          subtitle="Updates on brand developments, strategic investments, and cultural commentary from Vowels Five Group."
          className="mb-0 max-w-2xl"
        />

        <Link href="/newsroom" className="hidden sm:inline-block">
          <Button variant="secondary" icon={<ArrowRight className="w-4 h-4" />} size="sm">
            View Newsroom Archive
          </Button>
        </Link>
      </div>

      {/* News Teaser Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer(0.12)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {latestNews.map((news) => (
          <motion.div
            key={news.id}
            variants={fadeUpVariants(reducedMotion || false)}
            className="h-full"
          >
            <GlassCard className="h-full flex flex-col justify-between">
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-text-secondary/60 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent-blue bg-accent-blue/5 px-2 py-0.5 rounded-md">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-body">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(news.publishedAt)}</span>
                  </div>
                </div>

                {/* News Title */}
                <h3 className="text-xl font-bold font-heading text-white tracking-tight leading-snug mb-3 hover:text-accent-blue transition-colors duration-200">
                  <Link href={`/newsroom#${news.id}`}>
                    {news.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary leading-relaxed font-body">
                  {news.excerpt}
                </p>
              </div>

              {/* Action and Read-time */}
              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-text-secondary/60 font-body font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{news.readTime}</span>
                </div>

                <Link
                  href={`/newsroom#${news.id}`}
                  className="text-xs font-semibold text-accent-blue hover:text-accent-hover transition-colors flex items-center gap-1 group/link"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile-only Redirect Button */}
      <div className="mt-10 text-center sm:hidden">
        <Link href="/newsroom" className="w-full">
          <Button variant="secondary" className="w-full">
            View Newsroom Archive
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NewsroomSection;
