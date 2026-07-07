"use client";

import React from "react";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 px-6 sm:px-8 max-w-4xl mx-auto w-full">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="text" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Back to Home
          </Button>
        </Link>
      </div>

      <SectionHeading
        label="Legal"
        title="Terms of Service"
        subtitle="Last updated: July 2026. Please read these terms carefully before accessing Vowels Five Group digital platforms."
      />

      <GlassCard hoverEffect={false} className="border-border-subtle bg-bg-secondary/40 font-body">
        <div className="flex flex-col gap-6 text-text-secondary leading-relaxed text-sm sm:text-base">
          <div className="flex items-center gap-3 p-4 rounded-input bg-accent-blue/5 border border-accent-blue/10 text-accent-blue mb-2">
            <Shield className="w-5 h-5 flex-shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider">Draft Version — Pending Legal Council Review</span>
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">1. Acceptance of Terms</h3>
          <p>
            By accessing or browsing this website, you acknowledge that you have read, understood, and agree to be bound by these draft terms and all applicable regulations. If you do not agree, you are prohibited from using the site.
          </p>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">2. Proprietary Rights</h3>
          <p>
            The content, design, logo marks, icons, layout, and assets featured on this site are the exclusive intellectual property of Vowels Five Group Ltd. and are protected by international trademark and copyright laws. Unauthorized reproduction is strictly prohibited.
          </p>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">3. Disclaimers</h3>
          <p>
            This website provides informational context about Vowels Five Group's corporate roadmap and portfolio ventures. All material is provided "as is," without warranties of accuracy, completeness, or suitability for investment decisions.
          </p>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">4. Limitation of Liability</h3>
          <p>
            In no event shall Vowels Five Group, its directors, or its affiliates be liable for damages arising out of the use or inability to use this site, even if notified of the possibility of such damage.
          </p>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">5. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the State of New York, USA, without regard to conflict of law principles.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
