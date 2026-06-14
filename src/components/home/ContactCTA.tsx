"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import CTAButton from "@/components/common/CTAButton";
import {
  ArrowRight,
  Rocket,
  Code2,
  Palette,
  Smartphone,
  Megaphone,
  Globe,
  PenTool,
  Sparkles,
} from "lucide-react";

const capabilities = [
  { icon: Code2, label: "Web Development", color: "#7C3AED" },
  { icon: Smartphone, label: "Mobile Apps", color: "#06B6D4" },
  { icon: Palette, label: "UI/UX Design", color: "#10B981" },
  { icon: PenTool, label: "Branding & Logos", color: "#F97316" },
  { icon: Megaphone, label: "Ad Creatives", color: "#F43F5E" },
  { icon: Globe, label: "Landing Pages", color: "#0EA5E9" },
];

/* ─── Animated rotating capability ─── */
function RotatingCapability() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % capabilities.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const cap = capabilities[index];

  return (
    <div className="flex items-center gap-2">
      <div
        className="w-7 h-7 rounded-md flex items-center justify-center"
        style={{
          backgroundColor: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <cap.icon size={13} className="text-white" />
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={cap.label}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          className="text-sm font-medium text-white/90"
        >
          {cap.label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Component ─── */
export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]" />

          {/* Animated grid overlay */}
          <motion.div
            style={{ y: overlayY }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="w-full h-full opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </motion.div>

          {/* Glow orbs */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/[0.06] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

          <div className="relative z-10 py-14 md:py-20 px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* ─── Left: Text Content ─── */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium mb-6 backdrop-blur-sm"
                >
                  <Sparkles size={12} />
                  LaunchFive Studio
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                >
                  Ready to Launch Something{" "}
                  <span className="text-white/70">Clear, Modern & Useful?</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-white/60 text-sm md:text-base max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
                >
                  From websites and apps to branding, logos, and ad creatives — we
                  help you shape ideas into polished digital outcomes.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center lg:items-start gap-3"
                >
                  <CTAButton
                    href="#contact"
                    size="lg"
                    className="bg-white text-[#7C3AED] hover:shadow-xl hover:shadow-black/20"
                  >
                    <Rocket size={18} />
                    Discuss Your Project
                    <ArrowRight size={18} />
                  </CTAButton>
                  <CTAButton
                    variant="secondary"
                    size="lg"
                    className="bg-white/10 text-white hover:bg-white/20 border-white/20"
                  >
                    View Our Work
                  </CTAButton>
                </motion.div>
              </div>

              {/* ─── Right: Capabilities ─── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-4"
              >
                {/* What we do heading */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2 text-center lg:text-left"
                >
                  What We Build
                </motion.p>

                {/* Capability cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap, i) => (
                    <motion.div
                      key={cap.label}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5 + i * 0.07,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] hover:border-white/[0.2] transition-all cursor-default"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(255,255,255,0.12)",
                        }}
                      >
                        <cap.icon size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium leading-tight">
                          {cap.label}
                        </p>
                        <p className="text-white/40 text-[10px]">
                          Professional quality
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Rotating highlight */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="flex items-center justify-center lg:justify-start gap-3 pt-2"
                >
                  <div className="h-px flex-1 bg-white/10" />
                  <RotatingCapability />
                  <div className="h-px flex-1 bg-white/10" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
