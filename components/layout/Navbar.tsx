"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Companies", href: "#companies" },
  { label: "Core Values", href: "#values" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Newsroom", href: "#newsroom" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Standard hash scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      if (pathname === "/") {
        const targetElement = document.getElementById(targetId || "hero");
        const element = targetElement || document.body;
        setIsOpen(false);
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: targetId ? offsetPosition : 0,
          behavior: reducedMotion ? "auto" : "smooth",
        });
      } else {
        setIsOpen(false);
        router.push("/" + href);
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full border-b border-transparent",
          isScrolled
            ? "bg-[#050505]/75 backdrop-blur-md border-border-subtle/50 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => handleLinkClick(e, "#")}
          >
            <div className="relative w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:border-accent-blue/50">
              <span className="text-sm font-bold text-white tracking-widest ml-[1px]">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm uppercase tracking-[0.25em] font-bold text-white transition-colors duration-300 group-hover:text-accent-blue">
                Vowels
              </span>
              <span className="text-[9px] uppercase tracking-[0.15em] text-text-secondary font-medium">
                Five Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary font-medium hover:text-white transition-colors duration-200 relative group py-2"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="glass"
              size="sm"
              magnetic
              onClick={(e) => {
                const target = document.getElementById("companies");
                if (target) {
                  const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offsetPosition, behavior: reducedMotion ? "auto" : "smooth" });
                }
              }}
            >
              Explore Our Brands
            </Button>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            className="md:hidden text-text-secondary hover:text-white p-2 rounded-lg transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-30 md:hidden glass-effect border-b border-border-subtle shadow-lg"
          >
            <nav className="flex flex-col py-6 px-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-text-secondary font-medium py-2 hover:text-white border-b border-white/[0.03] transition-colors"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                className="mt-2 w-full"
                onClick={(e) => {
                  setIsOpen(false);
                  const target = document.getElementById("companies");
                  if (target) {
                    const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetPosition, behavior: reducedMotion ? "auto" : "smooth" });
                  }
                }}
              >
                Explore Our Brands
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
