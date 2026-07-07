import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import Innovation from "@/components/sections/Innovation";
import Founder from "@/components/sections/Founder";
import Roadmap from "@/components/sections/Roadmap";
import NewsroomSection from "@/components/sections/NewsroomSection";
import CareersSection from "@/components/sections/CareersSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-bg-primary overflow-x-hidden">
      {/* 1. Hero Section (Cinematic Split layout) */}
      <Hero />

      {/* 2. About Section (Who we are, Mission, Vision, Purpose) */}
      <About />

      {/* 3. Companies Section (Venture Portfolio) */}
      <Companies />

      {/* 4. Innovation Section (Technology, AI, R&D) */}
      <Innovation />

      {/* 5. Timeline Section (Strategic Roadmap milestones) */}
      <Roadmap />

      {/* 6. Founder Section (Philosophy Message) */}
      <Founder />

      {/* 7. Newsroom Teaser Section */}
      <NewsroomSection />

      {/* 8. Careers Recruitment Banner CTA ("Build the Future With Us") */}
      <CareersSection />

      {/* 9. Contact Section (Corporate inquiries & Map) */}
      <Contact />
    </div>
  );
}
