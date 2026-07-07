"use client";

import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Instagram, Twitter, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { fadeUpVariants } from "@/lib/motion";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Thank you. Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "An error occurred. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setStatusMessage("Unable to connect. Please check your internet connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-border-subtle/30">
      <SectionHeading
        label="Inquiries"
        title="Connect With Our Team"
        subtitle="For partnership inquiries, media requests, or career submissions, use the secure channel below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">

        {/* Left Column: Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants(reducedMotion || false)}
          className="lg:col-span-7 flex flex-col w-full h-full"
        >
          <GlassCard hoverEffect={false} className="w-full h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                    Full Name <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className={`w-full bg-[#050505] border ${errors.name ? "border-red-500/80" : "border-border-subtle hover:border-white/15"
                      } focus:border-accent-blue focus:outline-none focus-visible:outline-none px-4 py-3 rounded-input text-sm text-white font-body transition-colors placeholder:text-text-secondary/30`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-xs text-red-400 font-body mt-0.5">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                    Email Address <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className={`w-full bg-[#050505] border ${errors.email ? "border-red-500/80" : "border-border-subtle hover:border-white/15"
                      } focus:border-accent-blue focus:outline-none focus-visible:outline-none px-4 py-3 rounded-input text-sm text-white font-body transition-colors placeholder:text-text-secondary/30`}
                    placeholder="name@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-400 font-body mt-0.5">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                  Subject <span className="text-accent-blue">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className={`w-full bg-[#050505] border ${errors.subject ? "border-red-500/80" : "border-border-subtle hover:border-white/15"
                    } focus:border-accent-blue focus:outline-none focus-visible:outline-none px-4 py-3 rounded-input text-sm text-white font-body transition-colors placeholder:text-text-secondary/30`}
                  placeholder="Inquiry subject"
                />
                {errors.subject && <span className="text-xs text-red-400 font-body mt-0.5">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                  Message <span className="text-accent-blue">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className={`w-full bg-[#050505] border ${errors.message ? "border-red-500/80" : "border-border-subtle hover:border-white/15"
                    } focus:border-accent-blue focus:outline-none focus-visible:outline-none px-4 py-3 rounded-input text-sm text-white font-body transition-colors resize-none placeholder:text-text-secondary/30`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && <span className="text-xs text-red-400 font-body mt-0.5">{errors.message}</span>}
              </div>

              {/* Submit Trigger */}
              <Button
                variant="primary"
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 mt-2"
                magnetic
                icon={<Send className="w-4 h-4" />}
              >
                {status === "submitting" ? "Sending Request..." : "Send Message"}
              </Button>

              {/* Feedback State Display */}
              {status === "success" && (
                <div className="flex items-start gap-2.5 p-4 rounded-input bg-success/10 border border-success/20 text-success text-sm font-body mt-4">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-start gap-2.5 p-4 rounded-input bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-body mt-4">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

            </form>
          </GlassCard>
        </motion.div>

        {/* Right Column: Address Info & Interactive Map Embed */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants(reducedMotion || false)}
          className="lg:col-span-5 flex flex-col gap-6 w-full h-full justify-between"
        >
          {/* Corporate Details */}
          <GlassCard hoverEffect={false} className="bg-bg-secondary w-full">
            <div className="flex flex-col gap-5">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Global Headquarters</h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-body">
                    Dhampur, Bijnor<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Direct Communications</h4>
                  <p className="text-sm text-text-secondary font-body">
                    General Inquiries: <a href="mailto:contact@vowelsfive.com" className="text-accent-blue hover:underline">contact@vowelsfive.com</a><br />
                    Careers: <a href="mailto:careers@vowelsfive.com" className="text-accent-blue hover:underline">careers@vowelsfive.com</a>
                  </p>
                </div>
              </div>

            </div>
          </GlassCard>

          {/* Google Maps Embed iframe (Styled) */}
          <div className="relative w-full aspect-video sm:aspect-auto sm:flex-grow min-h-[220px] rounded-card overflow-hidden border border-border-subtle bg-bg-secondary shadow-ambient">
            <iframe
              src="https://maps.google.com/maps?q=Dhampur,%20Bijnor,%20Uttar%20Pradesh,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(100%) opacity(85%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vowels Five Group Headquarters Location map"
            ></iframe>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
