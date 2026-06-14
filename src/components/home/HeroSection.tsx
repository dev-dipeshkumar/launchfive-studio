"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, ChevronDown, Code2, Palette, Smartphone, Megaphone, PenTool, Rocket } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";

const Hero3DScene = dynamic(() => import("@/components/3d/Hero3DScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#06B6D4]/5" />
  ),
});

/* ─── Animated text reveal by word ─── */
function AnimatedWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.06,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Rotating service badge ─── */
const rotatingServices = [
  { icon: Code2, label: "Full-Stack Development", color: "#7C3AED" },
  { icon: Smartphone, label: "Mobile App Design", color: "#06B6D4" },
  { icon: Palette, label: "UI/UX Design", color: "#10B981" },
  { icon: PenTool, label: "Branding & Logos", color: "#F97316" },
  { icon: Megaphone, label: "Ad Creatives", color: "#F43F5E" },
  { icon: Rocket, label: "Landing Pages", color: "#0EA5E9" },
];

function RotatingBadge() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingServices.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const service = rotatingServices[index];

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
      <div
        className="w-5 h-5 rounded-md flex items-center justify-center"
        style={{
          backgroundColor: `${service.color}15`,
          border: `1px solid ${service.color}25`,
        }}
      >
        <service.icon size={10} style={{ color: service.color }} />
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={service.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="text-xs font-medium"
          style={{ color: service.color }}
        >
          {service.label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ─── Hero stat counter ─── */
function HeroStat({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center group"
    >
      <div className="text-lg md:text-xl font-bold text-white/80 mb-0.5">
        {value}
      </div>
      <div className="text-[#94A3B8] text-[10px] md:text-xs font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <Hero3DScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A13] via-transparent to-[#070A13] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070A13]/80 via-transparent to-[#070A13]/80 z-[1]" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-sm font-medium">
            <Sparkles size={14} />
            5-Member Creative-Tech Studio
          </span>
        </motion.div>

        {/* Rotating service badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <RotatingBadge />
        </motion.div>

        {/* Main headline */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-2">
            <AnimatedWords
              text="Focused Creative-Tech Studio"
              delay={0.5}
            />
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="gradient-text"
            >
              for Websites, Apps,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="gradient-text-accent"
            >
              Brands & Campaigns
            </motion.span>
          </h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          We help startups, creators, and businesses turn ideas into clean digital
          experiences — from websites and apps to UI/UX, branding, graphics, logos,
          templates, and ad creatives.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <CTAButton href="#contact" size="lg">
            Discuss Your Project
            <ArrowRight size={18} />
          </CTAButton>
          <CTAButton href="#services" variant="outline" size="lg">
            View Our Capabilities
          </CTAButton>
        </motion.div>

        {/* Micro-trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="text-[#94A3B8]/50 text-xs max-w-md mx-auto mb-12"
        >
          Clean design, clear communication, reliable execution.
        </motion.p>

        {/* Service tags row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {rotatingServices.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.9 + i * 0.06, duration: 0.3 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-colors cursor-default"
            >
              <service.icon size={11} style={{ color: service.color }} />
              <span className="text-[11px] font-medium text-[#94A3B8]">
                {service.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="flex items-center justify-center gap-8 md:gap-12"
        >
          <HeroStat value="5" label="Specialists" delay={2.3} />
          <div className="w-px h-6 bg-white/10" />
          <HeroStat value="7 Steps" label="Process" delay={2.35} />
          <div className="w-px h-6 bg-white/10" />
          <HeroStat value="24h" label="Response" delay={2.4} />
          <div className="w-px h-6 bg-white/10" />
          <HeroStat value="0" label="Middlemen" delay={2.45} />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#94A3B8]/40 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#94A3B8]/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
