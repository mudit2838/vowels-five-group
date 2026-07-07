import React from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ShieldCheck, Hourglass, Cpu } from "lucide-react";
import Link from "next/link";
import { brands } from "@/data/brands";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

interface BrandPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const isLive = brand.status === "live";

  return (
    <div className="py-16 sm:py-24 px-6 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="text" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Main Content Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
              {brand.category}
            </span>
            {isLive ? (
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                Active Venture
              </span>
            ) : (
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                In Incubation
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            {brand.name}
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed font-body">
            {brand.description}
          </p>

          {isLive && brand.longDescription && (
            <div className="text-sm sm:text-base text-text-secondary/90 leading-relaxed font-body border-t border-white/[0.04] pt-6 flex flex-col gap-4">
              <h3 className="text-sm uppercase tracking-wider font-bold text-white font-heading">
                Detailed Brand Objective
              </h3>
              <p className="whitespace-pre-line">{brand.longDescription}</p>
            </div>
          )}

          {!isLive && (
            <GlassCard hoverEffect={false} className="bg-bg-secondary/40 border-dashed mt-4">
              <div className="flex items-start gap-4">
                <Hourglass className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-white font-heading">Ecosystem Expansion Phase</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    This vertical is currently in the strategic planning and initial technical capitalization phase. Vowels Five Group is assembling specialized teams and proprietary resources to ensure a premium launch.
                  </p>
                </div>
              </div>
            </GlassCard>
          )}
        </div>

        {/* Sidebar Info Panel */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full">
          <GlassCard hoverEffect={false} className="bg-bg-secondary/80">
            <div className="flex flex-col gap-5">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white border-b border-white/[0.04] pb-3">
                Venture Metadata
              </h3>

              {isLive && brand.details ? (
                <div className="flex flex-col gap-4 font-body">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-text-secondary/60">Established</span>
                    <span className="text-sm font-semibold text-white">{brand.details.established}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-text-secondary/60">Core Focus</span>
                    <span className="text-sm font-semibold text-white">{brand.details.focus}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-text-secondary/60">Current Status</span>
                    <span className="text-sm font-semibold text-accent-blue">{brand.details.stage}</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 font-body">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-text-secondary/60">Planned Launch</span>
                    <span className="text-sm font-semibold text-white">Refer to Timeline Roadmap</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-text-secondary/60">Incubation Team</span>
                    <span className="text-sm font-semibold text-white">Vowels Five Labs</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-text-secondary/60">Capital Status</span>
                    <span className="text-sm font-semibold text-white">Fully Backed</span>
                  </div>
                </div>
              )}

              {isLive && brand.url && (
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2"
                >
                  <Button variant="primary" className="w-full flex items-center justify-center gap-1.5" icon={<ArrowUpRight className="w-4 h-4" />}>
                    Visit Brand Website
                  </Button>
                </a>
              )}
            </div>
          </GlassCard>

          <GlassCard hoverEffect={false} className="bg-bg-secondary/20 border-dashed text-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <Cpu className="w-5 h-5 text-accent-blue" />
              <h4 className="text-xs uppercase tracking-wider font-bold text-white">Platform Security</h4>
              <p className="text-[10px] text-text-secondary/70 leading-relaxed max-w-xs">
                All Vowels Five Group ventures operate under shared security rules, cloud architectures, and data protection structures.
              </p>
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  );
}
