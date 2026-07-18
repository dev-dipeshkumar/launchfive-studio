"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { reasons, whyUsStats, trustSignals } from "@/data/whyUs";
import SectionHeading from "@/components/common/SectionHeading";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView || target === 0) return;

    const end = target;
    const totalTime = duration * 1000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalTime, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {target === 0 ? "0" : count}
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative rounded-2xl bg-section-light-card border border-section-light-border overflow-hidden hover:border-primary/30 transition-all duration-300"
        data-cursor-hover
      >
        {/* Subtle top accent line */}
        <div
          className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, ${reason.color}, transparent)`,
          }}
        />

        <div className="p-4 sm:p-6">
          {/* Header: Icon + Title + Stat */}
          <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Icon */}
              <div
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${reason.color}12`,
                  border: `1px solid ${reason.color}20`,
                }}
              >
                <reason.icon size={17} style={{ color: reason.color }} className="sm:!w-[20px] sm:!h-[20px]" />
              </div>

              <div className="min-w-0">
                <h3 className="text-section-light-foreground font-semibold text-sm leading-tight mb-0.5">
                  {reason.title}
                </h3>
                <p
                  className="text-[10px] sm:text-[11px] font-medium"
                  style={{ color: `${reason.color}CC` }}
                >
                  {reason.headline}
                </p>
              </div>
            </div>

            {/* Stat pill */}
            <div
              className="px-2 py-1 sm:px-2.5 sm:py-1 rounded-md text-center shrink-0"
              style={{
                backgroundColor: `${reason.color}0A`,
                border: `1px solid ${reason.color}15`,
              }}
            >
              <span
                className="text-[10px] sm:text-xs font-bold block leading-none"
                style={{ color: `${reason.color}CC` }}
              >
                {reason.stat.value}
              </span>
              <span className="text-[9px] sm:text-[10px] text-section-light-foreground/70 leading-none">
                {reason.stat.label}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-section-light-foreground/60 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            {reason.description}
          </p>

          {/* Feature list */}
          <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
            {reason.features.map((feature) => (
              <div key={feature} className="flex items-center gap-1.5 sm:gap-2">
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: `${reason.color}80` }}
                />
                <span className="text-[11px] sm:text-xs text-section-light-foreground/70">{feature}</span>
              </div>
            ))}
          </div>

          {/* Bottom: Badge + CTA */}
          <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-section-light-border">
            <span
              className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 text-[8px] sm:text-[9px] font-semibold rounded uppercase tracking-wider"
              style={{
                backgroundColor: `${reason.color}1A`,
                color: `${reason.color}ff`,
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
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-section-light-foreground/70 hover:text-section-light-foreground transition-colors"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Learn More
              <ArrowRight
                size={10}
                className="sm:!w-[11px] sm:!h-[11px] transition-transform group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>
        </div>
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
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-section-light-bg text-section-light-foreground"
    >
      {/* Subtle background accent */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full bg-primary/[0.04] dark:bg-primary/[0.03] rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Why Choose Us"
          title="Why Clients Trust LaunchFive Studio"
          description="We combine focused execution, clear communication, and modern creative skills to make the project experience simple, transparent, and reliable."
        />

        {/* ─── Stats Bar — 2x2 on mobile, 4-col on md+ ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          {whyUsStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group text-center p-3 sm:p-4 rounded-xl bg-section-light-card border border-section-light-border"
            >
              <div
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5"
                style={{ color: stat.color }}
              >
                <AnimatedCounter
                  target={parseInt(stat.value)}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-section-light-foreground/60 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Reason Cards Grid — 1 col mobile, 2 col md, 3 col lg ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.id} reason={reason} index={i} />
          ))}
        </div>

        {/* ─── Trust Signals ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {trustSignals.map((signal, i) => (
            <div
              key={signal.text}
              className="flex items-center gap-1.5 sm:gap-2 group"
            >
              <div
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${signal.color}10`,
                  border: `1px solid ${signal.color}18`,
                }}
              >
                <signal.icon size={11} style={{ color: signal.color }} className="sm:!w-[12px] sm:!h-[12px]" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-section-light-foreground/60 group-hover:text-section-light-foreground transition-colors duration-300">
                {signal.text}
              </span>
            </div>
          ))}
          
          <div className="hidden md:block w-px h-5 bg-section-light-border" />

          <Button asChild>
            <a href="#contact">
              Start a Project
              <ArrowRight size={14} className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
