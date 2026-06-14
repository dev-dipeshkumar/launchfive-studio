"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";

const Hero3DScene = dynamic(() => import("@/components/3d/Hero3DScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#06B6D4]/5" />
  ),
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <Hero3DScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A13] via-transparent to-[#070A13] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070A13]/80 via-transparent to-[#070A13]/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-sm font-medium mb-8"
          >
            <Sparkles size={14} />
            A New Creative Force
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          A Fresh Freelance Team
          <br />
          <span className="gradient-text">Ready to Bring</span>
          <br />
          <span className="gradient-text-accent">Your Vision to Life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          We are a newly-formed collective of five friends and colleagues — trained in
          development, design, and marketing — now teaming up to tackle real-world projects.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#94A3B8]/80 text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          While we have not yet worked with paying clients, we have built personal and
          university projects that sharpened our skills — and we are eager to apply them
          professionally. We want your project to be our first success story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton href="#contact" size="lg">
            Be Our First Client
            <ArrowRight size={18} />
          </CTAButton>
          <CTAButton href="#portfolio" variant="outline" size="lg">
            See Our Work
          </CTAButton>
        </motion.div>

        {/* Mission statement instead of stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <p className="text-2xl md:text-3xl font-bold gradient-text text-center">
            5 creatives on a mission
          </p>
          <p className="text-[#94A3B8] text-sm md:text-base text-center max-w-md">
            Hungry for our first success story — and committed to making it yours.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[#7C3AED]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
