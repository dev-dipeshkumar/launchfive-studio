"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { workProcess } from "@/data/process";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Compass,
  Map,
  PenTool,
  Braces,
  MonitorCheck,
  Wand2,
  Rocket,
  Clock,
  Check,
} from "lucide-react";

// 3D animated workflow scene (client-only, no SSR to avoid WebGL errors on static export)
const Process3DScene = dynamic(() => import("@/components/3d/Process3DScene"), {
  ssr: false,
});

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
> = {
  Compass,
  Map,
  PenTool,
  Braces,
  MonitorCheck,
  Wand2,
  Rocket,
};

// Client involvement visualization (filled / empty blocks)
const involvementMeta: Record<
  "low" | "medium" | "high",
  { label: string; filled: number; color: string }
> = {
  high: { label: "High", filled: 5, color: "#7C3AED" },
  medium: { label: "Medium", filled: 3, color: "#06B6D4" },
  low: { label: "Low", filled: 2, color: "#10B981" },
};

function InvolvementBar({ level }: { level: "low" | "medium" | "high" }) {
  const meta = involvementMeta[level];
  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] uppercase tracking-wider text-section-light-foreground/50">
        Client
      </span>
      <div className="flex gap-1" aria-label={`Client involvement: ${meta.label}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-3 rounded-full transition-colors duration-500"
            style={{
              backgroundColor: i < meta.filled ? meta.color : "rgba(127,127,127,0.2)",
            }}
          />
        ))}
      </div>
      <span className="text-[11px] font-semibold" style={{ color: meta.color }}>
        {meta.label}
      </span>
    </div>
  );
}

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 90, damping: 28 }
  );

  // Track active step based on which card is centered in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActiveStep(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    const nodes = containerRef.current?.querySelectorAll("[data-index]");
    nodes?.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden bg-section-light-bg text-section-light-foreground"
      ref={containerRef}
    >
      {/* 3D animated workflow background */}
      <Process3DScene />

      {/* Soft radial gradients + low-opacity geometric shapes */}
      <div className="absolute -top-20 left-1/4 w-[40rem] h-[40rem] bg-primary/[0.10] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-secondary/[0.10] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-40 h-40 border border-primary/10 rounded-3xl rotate-12 pointer-events-none" />
      <div className="absolute bottom-1/4 right-16 w-28 h-28 border border-secondary/10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Our Workflow"
          title="A Guided Journey From Idea to Launch"
          description="A transparent, collaborative process you can actually follow. Here's exactly where you're involved — and where we take the wheel."
        />

        {/* Desktop: timeline left-of-center, cards on right. Mobile: single column */}
        <div className="relative mt-14 sm:mt-20">
          {/* Animated gradient timeline spine (desktop/tablet) */}
          <div className="hidden sm:block absolute left-[31px] lg:left-[39px] top-2 bottom-2 w-[2px] bg-section-light-border/60 rounded-full" />
          <motion.div
            className="hidden sm:block absolute left-[31px] lg:left-[39px] top-2 w-[2px] rounded-full origin-top"
            style={{
              height: lineHeight,
              background: "linear-gradient(180deg, #7C3AED 0%, #8B5CF6 45%, #06B6D4 100%)",
              boxShadow: "0 0 12px rgba(124,58,237,0.5)",
            }}
          />

          <div className="space-y-6 sm:space-y-10">
            {workProcess.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Clock;
              const isActive = activeStep === i;
              const isPast = i < activeStep;
              const fromLeft = i % 2 === 0;

              return (
                <div
                  key={step.step}
                  data-index={i}
                  className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
                >
                  {/* Timeline node + icon */}
                  <div className="flex sm:flex-col items-center sm:w-[78px] lg:w-[94px] shrink-0">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      {/* Glowing node on the spine */}
                      <span
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500"
                        style={{
                          backgroundColor: isActive || isPast ? step.color : "rgba(127,127,127,0.3)",
                          boxShadow: isActive ? `0 0 16px 3px ${step.color}` : "none",
                        }}
                      />
                      {/* Icon container */}
                      <div
                        className="relative w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-2xl flex items-center justify-center transition-all duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}, ${step.color}aa)`,
                          boxShadow: isActive
                            ? `0 0 28px -2px ${step.color}, 0 10px 30px -10px ${step.color}`
                            : "0 8px 24px -10px rgba(0,0,0,0.4)",
                          transform: isActive ? "rotate(-3deg)" : "rotate(0deg)",
                        }}
                      >
                        <span
                          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
                          style={{
                            boxShadow: `0 0 0 1px ${step.color}55, 0 0 22px ${step.color}66`,
                            opacity: isActive ? 1 : 0,
                          }}
                        />
                        <Icon
                          size={26}
                          className="text-white relative z-10 transition-transform duration-500"
                          style={{ transform: isActive ? "rotate(3deg)" : "none" }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Glassmorphism card — alternates slide direction */}
                  <motion.div
                    initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.75,
                      delay: (i % 3) * 0.13,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex-1 group"
                  >
                    <div
                      className="relative rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-7 border backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderColor: isActive ? `${step.color}55` : "rgba(255,255,255,0.08)",
                        boxShadow: isActive
                          ? `0 20px 50px -20px ${step.color}66, 0 0 0 1px ${step.color}22`
                          : "0 10px 30px -20px rgba(0,0,0,0.5)",
                      }}
                    >
                      {/* Gradient accent strip */}
                      <span
                        className="absolute left-0 top-6 bottom-6 w-1 rounded-full transition-all duration-500"
                        style={{
                          background: `linear-gradient(180deg, ${step.color}, transparent)`,
                          opacity: isActive ? 1 : 0.4,
                        }}
                      />

                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <span
                            className="text-[12px] font-bold tracking-widest uppercase"
                            style={{ color: step.color }}
                          >
                            Step {String(step.step).padStart(2, "0")}
                          </span>
                          <h4 className="text-section-light-foreground font-semibold text-xl lg:text-2xl">
                            {step.title}
                          </h4>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] text-section-light-foreground/50">
                          <Clock size={13} /> {step.duration}
                        </span>
                      </div>

                      <p className="text-section-light-foreground/70 text-sm sm:text-[15px] leading-relaxed mb-4 max-w-2xl">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {step.deliverables.map((d) => (
                          <span
                            key={d}
                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] text-section-light-foreground/70 bg-white/5 border border-white/10"
                          >
                            <Check size={12} style={{ color: step.color }} />
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Client involvement */}
                      <InvolvementBar level={step.engagement} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
