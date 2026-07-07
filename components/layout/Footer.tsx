"use client";

import React from "react";
import { Linkedin, Instagram, Twitter, Mail, ArrowUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const Footer: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Intercept hash scroll
    if (href.includes("#")) {
      e.preventDefault();
      const hash = href.substring(href.indexOf("#"));
      const targetId = hash.substring(1);

      if (pathname === "/") {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: reducedMotion ? "auto" : "smooth",
          });
        }
      } else {
        router.push(href);
      }
    }
  };

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle/50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group self-start">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:border-accent-blue/50">
                <span className="text-sm font-bold text-white tracking-widest ml-[1px]">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-[0.25em] font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                  Vowels
                </span>
                <span className="text-[9px] uppercase tracking-[0.15em] text-text-secondary font-medium">
                  Five Group
                </span>
              </div>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              An ecosystem builder housing category-defining ventures across apparel, technology, AI, finance, and consumer sectors. Committed to long-term impact.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border-subtle bg-white/0 flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/20 transition-all duration-300 hover:scale-105"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border-subtle bg-white/0 flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/20 transition-all duration-300 hover:scale-105"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border-subtle bg-white/0 flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/20 transition-all duration-300 hover:scale-105"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@vowelsfive.com"
                className="w-10 h-10 rounded-full border border-border-subtle bg-white/0 flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/20 transition-all duration-300 hover:scale-105"
                aria-label="Email Vowels Five Group"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-text-primary">Ecosystem</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/#companies"
                  onClick={(e) => handleLinkClick(e, "/#companies")}
                  className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
                >
                  Our Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/#roadmap"
                  onClick={(e) => handleLinkClick(e, "/#roadmap")}
                  className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
                >
                  Group Roadmap
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-text-primary">Corporate</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={(e) => handleLinkClick(e, "/#contact")}
                  className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
                >
                  Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-border-subtle/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-text-secondary/80 font-normal">
            &copy; {currentYear} Vowels Five Group Ltd. All rights reserved.
          </p>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-accent-blue transition-colors py-2 px-3 border border-border-subtle rounded-md hover:bg-white/5 cursor-pointer"
            aria-label="Scroll to top of the page"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 text-accent-blue" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
