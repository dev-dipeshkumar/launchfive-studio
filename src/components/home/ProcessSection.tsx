"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { workProcess } from "@/data/team";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  CheckCircle2,
  GitBranch,
  Rocket,
  User,
  Users,
  Clock,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Search,
  ClipboardList,
  Palette,
  Code2,
  CheckCircle2,
  GitBranch,
  Rocket,
};

const engagementConfig = {
  high: {
    label: "High",
    bars: 3,
    color: "#7C3AED",
    bgColor: "bg-[#7C3AED]/10",
    textColor: "text-[#7C3AED]",
    borderColor: "border-[#7C3AED]/30",
    glowColor: "shadow-[0_0_12px_rgba(124,58,237,0.25)]",
    dotPulse: true,
  },
  medium: {
    label: "Medium",
    bars: 2,
    color: "#06B6D4",
    bgColor: "bg-[#06B6D4]/10",
    textColor: "text-[#06B6D4]",
    borderColor: "border-[#06B6D4]/30",
    glowColor: "shadow-[0_0_12px_rgba(6,182,212,0.25)]",
    dotPulse: false,
  },
  low: {
    label: "Low",
    bars: 1,
    color: "#10B981",
    bgColor: "bg-[#10B981]/10",
    textColor: "text-[#10B981]",
    borderColor: "border-[#10B981]/30",
    glowColor: "",
    dotPulse: false,
  },
};

function EngagementBar({ level, color }: { level: "low" | "medium" | "high"; color: string }) {
  const config = engagementConfig[level];
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3].map((bar) => (
        <motion.div
          key={bar}
          className="h-1.5 rounded-full"
          style={{
            width: bar <= config.bars ? "12px" : "12px",
            backgroundColor: bar <= config.bars ? color : "rgba(255,255,255,0.08)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: bar * 0.1 }}
        />
      ))}
      <span className="text-[10px] font-medium ml-1" style={{ color }}>
        {config.label}
      </span>
    </div>
  );
}

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="process" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#06B6D4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Our Workflow"
          title="A Clear Process From Idea to Launch"
          description="A transparent, step-by-step workflow showing exactly when you're involved and when we handle things. No guesswork."
        />

        {/* Engagement Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <User size={14} className="text-[#7C3AED]" />
            <span>Your involvement level:</span>
          </div>
          {(["high", "medium", "low"] as const).map((level) => {
            const config = engagementConfig[level];
            return (
              <div key={level} className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((bar) => (
                    <div
                      key={bar}
                      className="w-2 h-1.5 rounded-full"
                      style={{
                        backgroundColor: bar <= config.bars ? config.color : "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
                <span className="text-[10px]" style={{ color: config.color }}>{config.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            {/* Track */}
            <div className="absolute inset-0 bg-white/5" />
            {/* Progress fill */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#7C3AED] via-[#06B6D4] to-[#3B82F6] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {workProcess.map((step, i) => {
              const isLeft = i % 2 === 0;
              const IconComponent = iconMap[step.icon] || Search;
              const engConfig = engagementConfig[step.engagement];

              return (
                <div key={step.step} className="relative">
                  {/* Desktop layout: alternating sides */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-0">
                    {/* Left side */}
                    <div className={`${isLeft ? "" : "order-2"}`}>
                      {isLeft ? (
                        <StepCard step={step} index={i} IconComponent={IconComponent} engConfig={engConfig} align="right" />
                      ) : (
                        <div className="flex justify-end">
                          <div className="text-right space-y-1">
                            <div className="flex items-center justify-end gap-2">
                              <Clock size={12} className="text-[#94A3B8]" />
                              <span className="text-[11px] text-[#94A3B8]">{step.duration}</span>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                              <User size={12} style={{ color: engConfig.color }} />
                              <span className="text-[11px]" style={{ color: engConfig.color }}>{step.clientAction}</span>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                              <Users size={12} className="text-[#94A3B8]" />
                              <span className="text-[11px] text-[#94A3B8]">{step.teamAction}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right side */}
                    <div className={`${isLeft ? "" : "order-1"}`}>
                      {isLeft ? (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Clock size={12} className="text-[#94A3B8]" />
                            <span className="text-[11px] text-[#94A3B8]">{step.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User size={12} style={{ color: engConfig.color }} />
                            <span className="text-[11px]" style={{ color: engConfig.color }}>{step.clientAction}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={12} className="text-[#94A3B8]" />
                            <span className="text-[11px] text-[#94A3B8]">{step.teamAction}</span>
                          </div>
                        </div>
                      ) : (
                        <StepCard step={step} index={i} IconComponent={IconComponent} engConfig={engConfig} align="left" />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.08 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${engConfig.dotPulse ? "animate-pulse-glow" : ""}`}
                        style={{
                          backgroundColor: `${step.color}15`,
                          borderColor: `${step.color}40`,
                          boxShadow: engConfig.dotPulse ? `0 0 20px ${step.color}30` : "none",
                        }}
                      >
                        <IconComponent size={18} style={{ color: step.color }} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="lg:hidden flex gap-5">
                    {/* Left dot */}
                    <div className="flex flex-col items-center shrink-0 pt-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.06 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${engConfig.dotPulse ? "animate-pulse-glow" : ""}`}
                        style={{
                          backgroundColor: `${step.color}15`,
                          borderColor: `${step.color}40`,
                          boxShadow: engConfig.dotPulse ? `0 0 16px ${step.color}30` : "none",
                        }}
                      >
                        <IconComponent size={15} style={{ color: step.color }} />
                      </motion.div>
                    </div>

                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex-1 rounded-2xl glass p-5 mb-2 group hover:border-[#7C3AED]/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-md"
                          style={{ backgroundColor: `${step.color}20`, color: step.color }}
                        >
                          Step {step.step}
                        </span>
                        <EngagementBar level={step.engagement} color={engConfig.color} />
                      </div>

                      <h4 className="text-white font-semibold mb-1.5">{step.title}</h4>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-3">{step.description}</p>

                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Clock size={11} className="text-[#94A3B8] shrink-0" />
                          <span className="text-[11px] text-[#94A3B8]">{step.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User size={11} style={{ color: engConfig.color }} className="shrink-0" />
                          <span className="text-[11px]" style={{ color: engConfig.color }}>{step.clientAction}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={11} className="text-[#94A3B8] shrink-0" />
                          <span className="text-[11px] text-[#94A3B8]">{step.teamAction}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Step Card (Desktop) ─── */
function StepCard({
  step,
  index,
  IconComponent,
  engConfig,
  align,
}: {
  step: typeof workProcess[number];
  index: number;
  IconComponent: React.ComponentType<{ size?: number; className?: string }>;
  engConfig: typeof engagementConfig.high;
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`rounded-2xl glass p-6 group hover:border-[step.color]/30 transition-all duration-300 ${engConfig.glowColor}`}
      style={{
        // @ts-expect-error CSS custom property
        "--step-color": step.color,
      }}
      data-cursor-hover
    >
      <div className={`flex items-center gap-3 mb-3 ${align === "right" ? "flex-row-reverse" : ""}`}>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-md"
          style={{ backgroundColor: `${step.color}20`, color: step.color }}
        >
          Step {step.step}
        </span>
        <EngagementBar level={step.engagement} color={engConfig.color} />
      </div>

      <h4 className={`text-white font-semibold text-lg mb-2 ${align === "right" ? "text-right" : ""}`}>
        {step.title}
      </h4>
      <p className={`text-[#94A3B8] text-sm leading-relaxed ${align === "right" ? "text-right" : ""}`}>
        {step.description}
      </p>

      {/* Animated progress line at bottom */}
      <motion.div
        className="mt-4 h-1 rounded-full overflow-hidden bg-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.3 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: step.color }}
          initial={{ width: "0%" }}
          whileInView={{ width: `${(step.step / 7) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.08 + 0.4, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
