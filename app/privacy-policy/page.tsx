"use client";

import React from "react";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function PrivacyPolicyPage() {
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
        title="Privacy Policy"
        subtitle="Last updated: July 2026. This policy outlines how Vowels Five Group handles corporate data and user privacy."
      />

      <GlassCard hoverEffect={false} className="border-border-subtle bg-bg-secondary/40 font-body">
        <div className="flex flex-col gap-6 text-text-secondary leading-relaxed text-sm sm:text-base">
          <div className="flex items-center gap-3 p-4 rounded-input bg-accent-blue/5 border border-accent-blue/10 text-accent-blue mb-2">
            <Shield className="w-5 h-5 flex-shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider">Draft Version — Pending Legal Council Review</span>
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">1. Scope of Policy</h3>
          <p>
            This Privacy Policy applies to the digital presence of Vowels Five Group Ltd. and its affiliated ventures. It regulates the collection, storage, and processing of information collected through our corporate portal.
          </p>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">2. Collection of Information</h3>
          <p>
            We collect information that you explicitly submit to us. This includes details provided via our secure contact channel (names, email addresses, message text) and job application materials (resumes, cover letters, portfolios).
          </p>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">3. Use of Data</h3>
          <p>
            Vowels Five Group processes data solely to address inquiries, evaluate candidates for career opportunities, and optimize our corporate digital communication performance. We do not sell or monetize personal information.
          </p>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">4. Security Measures</h3>
          <p>
            We implement system-wide encryption, secure data transmission protocols, and firewalls to safeguard all information received against unauthorized access, disclosure, or modification.
          </p>

          <h3 className="text-lg font-bold text-white tracking-tight mt-4">5. Contact Information</h3>
          <p>
            For privacy inquiries or data removal requests, contact the Vowels Five Group data officer at <a href="mailto:privacy@vowelsfive.com" className="text-accent-blue hover:underline">privacy@vowelsfive.com</a>.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
