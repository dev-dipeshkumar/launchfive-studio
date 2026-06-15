"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, ChevronDown, Code2, Palette, Smartphone, Megaphone, PenTool, Rocket } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";

const Hero3DScene = dynamic(() => import("@/components/3d/Hero3DScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
  ),
});

const rotatingServices = [
  { icon: Code2, label: "Full-Stack Development", color: "#7C3AED" },
  { icon: Smartphone, label: "Mobile App Design", color: "#06B6D4" },
  { icon: Palette, label: "UI/UX Design", color: "#10B981" },
  { icon: PenTool, label: "Branding & Logos", color: "#F97316" },
  { icon: Megaphone, label: "Ad Creatives", color: "#F43F5E" },
  { icon: Rocket, label: "Landing Pages", color: "#0EA5E9" },
];

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
    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted border border-border backdrop-blur-sm">
      <div
        className="w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center"
        style={{
          backgroundColor: `${service.color}15`,
          border: `1px solid ${service.color}25`,
        }}
      >
        <service.icon size={9} style={{ color: service.color }} className="sm:!w-[10px] sm:!h-[10px]" />
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={service.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="text-[11px] sm:text-xs font-medium"
          style={{ color: service.color }}
        >
          {service.label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

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
      {/* 3D Background — hidden on small mobile for performance */}
      <div className="hidden sm:block">
        <Hero3DScene />
      </div>
      {/* Fallback gradient for mobile */}
      <div className="sm:hidden absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-[1]" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 lg:pt-0"
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] sm:text-sm font-medium">
            <Sparkles size={12} className="sm:w-[14px] sm:h-[14px]" />
            5-Member Creative-Tech Studio
          </span>
        </motion.div>

        {/* Rotating service badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-5 sm:mb-8"
        >
          <RotatingBadge />
        </motion.div>

        {/* Headline — fluid typography with proper mobile sizing */}
        <div className="mb-3 sm:mb-6">
          <h1 className="text-[1.75rem] leading-[1.15] sm:text-[2.75rem] sm:leading-[1.1] md:text-5xl lg:text-6xl xl:text-[5.25rem] font-bold text-foreground mb-1 sm:mb-2">
            <AnimatedWords
              text="Focused Creative-Tech Studio"
              delay={0.5}
            />
          </h1>
          <h1 className="text-[1.75rem] leading-[1.15] sm:text-[2.75rem] sm:leading-[1.1] md:text-5xl lg:text-6xl xl:text-[5.25rem] font-bold">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="gradient-text"
            >
              for Websites, Apps,
            </motion.span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
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
          className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
        >
          We help startups, creators, and businesses turn ideas into clean digital
          experiences — from websites and apps to UI/UX, branding, graphics, logos,
          templates, and ad creatives.
        </motion.p>

        {/* CTAs — stacked on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 px-2 sm:px-0"
        >
          <CTAButton href="#contact" size="lg" className="w-full sm:w-auto justify-center">
            Discuss Your Project
            <ArrowRight size={18} />
          </CTAButton>
          <CTAButton href="#services" variant="outline" size="lg" className="w-full sm:w-auto justify-center">
            View Our Capabilities
          </CTAButton>
        </motion.div>

        {/* Micro-trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="text-muted-foreground/50 text-[10px] sm:text-xs max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-10"
        >
          Clean design, clear communication, reliable execution.
        </motion.p>

        {/* Service tags — hidden on small mobile, shown on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="hidden sm:flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {rotatingServices.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.9 + i * 0.06, duration: 0.3 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted border border-border hover:border-primary/30 transition-colors cursor-default"
            >
              <service.icon size={11} style={{ color: service.color }} />
              <span className="text-[11px] font-medium text-muted-foreground">
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
          className="flex items-center justify-center gap-5 sm:gap-8 md:gap-12"
        >
          {[
            { value: "5", label: "Specialists" },
            { value: "7 Steps", label: "Process" },
            { value: "24h", label: "Response" },
            { value: "0", label: "Middlemen" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-sm sm:text-lg md:text-xl font-bold text-foreground/80 mb-0.5">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-[8px] sm:text-[10px] md:text-xs font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] sm:text-[10px] text-muted-foreground/40 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
