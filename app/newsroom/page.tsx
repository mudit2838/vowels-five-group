"use client";

import React, { useState } from "react";
import { Calendar, Clock, Newspaper, ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { newsItems, NewsItem } from "@/data/news";
import { staggerContainer, fadeUpVariants } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

export default function NewsroomPage() {
  const reducedMotion = useReducedMotion();
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Announcement", "Press Release", "Insight"];

  const filteredNews = newsItems.filter(
    (item) => filter === "All" || item.category === filter
  );

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
        label="Archive"
        title="Vowels Five Group Newsroom"
        subtitle="The repository of all press releases, corporate announcements, and insights published by Vowels Five Group."
      />

      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/[0.04] pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none ${filter === cat
                ? "bg-accent-blue text-white shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
                : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles List / Empty State */}
      {filteredNews.length > 0 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08)}
          className="flex flex-col gap-8"
        >
          {filteredNews.map((news) => (
            <motion.article
              key={news.id}
              id={news.id}
              variants={fadeUpVariants(reducedMotion || false)}
              className="scroll-mt-32"
            >
              <GlassCard hoverEffect={false} className="border-border-subtle/80">
                <div className="flex flex-col gap-6">
                  {/* Category, Date, and Read Time */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-secondary/60">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded-md">
                      {news.category}
                    </span>
                    <div className="flex items-center gap-1.5 font-body">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(news.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-body">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{news.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
                    {news.title}
                  </h2>

                  {/* Complete Content Body */}
                  <div className="text-sm sm:text-base text-text-secondary/90 leading-relaxed font-body flex flex-col gap-4 border-t border-white/[0.04] pt-6 max-w-4xl">
                    <p className="font-semibold text-white">{news.excerpt}</p>
                    <p className="whitespace-pre-line">{news.content}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </motion.div>
      ) : (
        /* Empty State Card */
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto py-16 text-center"
        >
          <GlassCard hoverEffect={false} className="flex flex-col items-center justify-center gap-5 p-12">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary/50">
              <Newspaper className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold font-heading text-white tracking-tight">No Articles Published</h3>
              <p className="text-sm text-text-secondary/70 max-w-md font-body">
                There are no articles listed under the "{filter}" category right now. Check back soon for the latest updates.
              </p>
            </div>
            <Button variant="secondary" onClick={() => setFilter("All")} className="mt-2">
              Show All Articles
            </Button>
          </GlassCard>
        </motion.div>
      )}
    </div>
  );
}
