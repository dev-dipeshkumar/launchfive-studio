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
    if (target === 0) {
      setCount(0);
      return;
    }
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
        className="relative rounded-2xl glass overflow-hidden hover:border-white/[0.15] transition-all duration-300"
        data-cursor-hover
      >
        {/* Subtle top accent line */}
        <div
          className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, ${reason.color}, transparent)`,
          }}
        />

        <div className="p-6">
          {/* Header: Icon + Title + Stat */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${reason.color}12`,
                  border: `1px solid ${reason.color}20`,
                }}
              >
                <reason.icon size={20} style={{ color: reason.color }} />
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm leading-tight mb-0.5">
                  {reason.title}
                </h3>
                <p
                  className="text-[11px] font-medium"
                  style={{ color: `${reason.color}CC` }}
                >
                  {reason.headline}
                </p>
              </div>
            </div>

            {/* Stat pill */}
            <div
              className="px-2.5 py-1 rounded-md text-center shrink-0"
              style={{
                backgroundColor: `${reason.color}0A`,
                border: `1px solid ${reason.color}15`,
              }}
            >
              <span
                className="text-xs font-bold block leading-none"
                style={{ color: `${reason.color}CC` }}
              >
                {reason.stat.value}
              </span>
              <span className="text-[8px] text-[#94A3B8] leading-none">
                {reason.stat.label}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
            {reason.description}
          </p>

          {/* Feature list */}
          <div className="space-y-1.5 mb-4">
            {reason.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: `${reason.color}80` }}
                />
                <span className="text-xs text-[#94A3B8]">{feature}</span>
              </div>
            ))}
          </div>

          {/* Bottom: Badge + CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
            <span
              className="px-2 py-0.5 text-[9px] font-semibold rounded uppercase tracking-wider"
              style={{
                backgroundColor: `${reason.color}0A`,
                color: `${reason.color}BB`,
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
              className="inline-flex items-center gap-1 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Learn More
              <ArrowRight
                size={11}
                className="transition-transform group-hover:translate-x-0.5"
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
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full bg-[#7C3AED]/[0.03] rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Why Choose Us"
          title="Why Clients Trust LaunchFive Studio"
          description="We combine focused execution, clear communication, and modern creative skills to make the project experience simple, transparent, and reliable."
        />

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {whyUsStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group text-center p-4 rounded-xl glass"
            >
              <div
                className="text-2xl md:text-3xl font-bold mb-0.5"
                style={{ color: stat.color }}
              >
                <AnimatedCounter
                  target={parseInt(stat.value)}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-[#94A3B8] text-[11px] font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Reason Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
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
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {trustSignals.map((signal, i) => (
            <div
              key={signal.text}
              className="flex items-center gap-2 group"
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${signal.color}10`,
                  border: `1px solid ${signal.color}18`,
                }}
              >
                <signal.icon size={12} style={{ color: signal.color }} />
              </div>
              <span className="text-sm font-medium text-[#94A3B8] group-hover:text-white transition-colors duration-300">
                {signal.text}
              </span>
            </div>
          ))}

          <div className="hidden md:block w-px h-5 bg-white/10" />

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/15 transition-shadow duration-300"
            whileHover={{ scale: 1.04, y: -1 }}
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
