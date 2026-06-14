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
            LaunchFive Studio
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          A Fresh 5-Member
          <br />
          <span className="gradient-text">Creative-Tech Team</span>
          <br />
          <span className="gradient-text-accent">Ready to Build Your Idea</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          We design and build websites, apps, UI/UX, branding, graphics, logos,
          templates, and ad creatives with dedication, clarity, and fresh energy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#94A3B8]/80 text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We are starting our journey and looking for our first client success story.
          Fresh minds. Focused team. Ready to launch your next idea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton href="#contact" size="lg">
            Start Our First Project Together
            <ArrowRight size={18} />
          </CTAButton>
          <CTAButton href="#portfolio" variant="outline" size="lg">
            Explore What We Can Build
          </CTAButton>
        </motion.div>

        {/* Honest stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "5", label: "Team Members" },
            { value: "0", label: "Fake Claims" },
            { value: "100%", label: "Dedication" },
            { value: "1st", label: "Client Wanted" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-[#94A3B8] text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
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
