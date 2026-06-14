"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { reasons, whyUsStats, trustSignals } from "@/data/whyUs";
import SectionHeading from "@/components/common/SectionHeading";
import { ArrowRight } from "lucide-react";

/* ───────────── Animated Counter ───────────── */
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const incrementTime = (duration * 1000) / end;
    const step = Math.max(1, Math.floor(end / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ───────────── Reason Card ───────────── */
function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative rounded-2xl glass overflow-hidden hover:border-[#7C3AED]/30 transition-all duration-500"
        data-cursor-hover
      >
        {/* Top gradient accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${reason.color}, ${reason.color}00)`,
          }}
        />

        <div className="p-6">
          {/* Header: Badge + Icon */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Animated icon container */}
              <motion.div
                className="relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${reason.color}20, ${reason.color}08)`,
                  border: `1px solid ${reason.color}30`,
                }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <reason.icon size={24} style={{ color: reason.color }} />
                {/* Pulse ring on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"
                  style={{
                    boxShadow: `0 0 20px ${reason.color}40`,
                  }}
                />
              </motion.div>

              <div>
                <h3 className="text-white font-semibold text-base leading-tight mb-0.5">
                  {reason.title}
                </h3>
                <p
                  className="text-xs font-semibold"
                  style={{ color: reason.color }}
                >
                  {reason.headline}
                </p>
              </div>
            </div>

            {/* Stat pill */}
            <div
              className="px-3 py-1.5 rounded-lg text-center shrink-0"
              style={{
                backgroundColor: `${reason.color}12`,
                border: `1px solid ${reason.color}25`,
              }}
            >
              <span
                className="text-sm font-bold block leading-none"
                style={{ color: reason.color }}
              >
                {reason.stat.value}
              </span>
              <span className="text-[9px] text-[#94A3B8] leading-none">
                {reason.stat.label}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
            {reason.description}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {reason.features.map((feature, fi) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + fi * 0.05, duration: 0.3 }}
                className="px-2.5 py-1 text-[10px] font-medium rounded-full flex items-center gap-1"
                style={{
                  backgroundColor: `${reason.color}10`,
                  color: `${reason.color}CC`,
                  border: `1px solid ${reason.color}20`,
                }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: reason.color }}
                />
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Bottom row: Badge + CTA */}
          <div className="flex items-center justify-between">
            <span
              className="px-2.5 py-1 text-[10px] font-semibold rounded-full uppercase tracking-wider"
              style={{
                backgroundColor: `${reason.color}15`,
                color: reason.color,
                border: `1px solid ${reason.color}25`,
              }}
            >
              {reason.badge}
            </span>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
              style={{ color: reason.color }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Learn More
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>
        </div>

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 0 40px ${reason.color}12, 0 0 80px ${reason.color}06`,
          }}
        />

        {/* Floating accent orb */}
        <div
          className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"
          style={{ backgroundColor: `${reason.color}15` }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ───────────── Main Component ───────────── */
export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Parallax background accents */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full bg-[#7C3AED]/[0.04] rounded-full blur-[140px]" />
      </motion.div>
      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full bg-[#06B6D4]/[0.04] rounded-full blur-[120px]" />
      </motion.div>

      {/* Floating grid dots pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7C3AED 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Why Choose Us"
          title="Why Clients Trust LaunchFive Studio"
          description="We combine focused execution, clear communication, and modern creative skills to make the project experience simple, transparent, and reliable."
        />

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {whyUsStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative text-center p-5 rounded-2xl glass hover:border-[#7C3AED]/20 transition-all duration-300"
              data-cursor-hover
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: stat.color }}
              />
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                <AnimatedCounter
                  target={parseInt(stat.value)}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-[#94A3B8] text-xs font-medium uppercase tracking-wider">
                {stat.label}
              </p>
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 30px ${stat.color}10`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Reason Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.id} reason={reason} index={i} />
          ))}
        </div>

        {/* ─── Trust Signals Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {trustSignals.map((signal, i) => (
            <motion.div
              key={signal.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${signal.color}15`,
                  border: `1px solid ${signal.color}25`,
                }}
              >
                <signal.icon size={14} style={{ color: signal.color }} />
              </div>
              <span className="text-sm font-medium text-[#94A3B8] group-hover:text-white transition-colors duration-300">
                {signal.text}
              </span>
            </motion.div>
          ))}

          {/* Center divider dots */}
          <div className="hidden md:flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#7C3AED]/40" />
            <span className="w-1 h-1 rounded-full bg-[#7C3AED]/25" />
            <span className="w-1 h-1 rounded-full bg-[#7C3AED]/10" />
          </div>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-sm font-semibold shadow-lg shadow-[#7C3AED]/20 hover:shadow-[#7C3AED]/40 transition-shadow duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Start a Project
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
