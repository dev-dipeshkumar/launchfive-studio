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

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
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
    dotPulse: true,
  },
  medium: {
    label: "Medium",
    bars: 2,
    color: "#06B6D4",
    dotPulse: false,
  },
  low: {
    label: "Low",
    bars: 1,
    color: "#10B981",
    dotPulse: false,
  },
};

function EngagementBar({ level, color }: { level: "low" | "medium" | "high"; color: string }) {
  const config = engagementConfig[level];
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((bar) => (
        <motion.div
          key={bar}
          className="h-1.5 rounded-full w-2.5 sm:w-3"
          style={{
            backgroundColor: bar <= config.bars ? color : "var(--border)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: bar * 0.1 }}
        />
      ))}
      <span className="text-[9px] sm:text-[10px] font-medium ml-1" style={{ color }}>
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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/[0.07] dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary/[0.07] dark:bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

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
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground">
            <User size={12} className="text-[#7C3AED] sm:!w-[14px] sm:!h-[14px]" />
            <span>Your involvement:</span>
          </div>
          {(["high", "medium", "low"] as const).map((level) => {
            const config = engagementConfig[level];
            return (
              <div key={level} className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((bar) => (
                    <div
                      key={bar}
                      className="w-1.5 h-1.5 sm:w-2 sm:h-1.5 rounded-full"
                      style={{
                        backgroundColor: bar <= config.bars ? config.color : "var(--border)",
                      }}
                    />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px]" style={{ color: config.color }}>{config.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* ─── Desktop Timeline: Alternating Left/Right ─── */}
        <div className="hidden lg:block relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-border" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-[#3B82F6] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {workProcess.map((step, i) => {
              const isLeft = i % 2 === 0;
              const IconComponent = iconMap[step.icon] || Search;
              const engConfig = engagementConfig[step.engagement];

              return (
                <div key={step.step} className="relative flex items-center">
                  {/* ─── LEFT COLUMN ─── */}
                  <div className="w-[calc(50%-32px)] pr-8">
                    {isLeft ? (
                      <StepCard step={step} index={i} IconComponent={IconComponent} engConfig={engConfig} align="right" />
                    ) : (
                      <StepMeta step={step} engConfig={engConfig} align="right" />
                    )}
                  </div>

                  {/* ─── CENTER DOT ─── */}
                  <div className="w-16 flex justify-center shrink-0 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.06 }}
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

                  {/* ─── RIGHT COLUMN ─── */}
                  <div className="w-[calc(50%-32px)] pl-8">
                    {isLeft ? (
                      <StepMeta step={step} engConfig={engConfig} align="left" />
                    ) : (
                      <StepCard step={step} index={i} IconComponent={IconComponent} engConfig={engConfig} align="left" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile/Tablet Timeline: Left dots + cards ─── */}
        <div className="lg:hidden relative">
          {/* Left vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-4 sm:space-y-6">
            {workProcess.map((step, i) => {
              const IconComponent = iconMap[step.icon] || Search;
              const engConfig = engagementConfig[step.engagement];

              return (
                <div key={step.step} className="flex gap-3 sm:gap-4">
                  {/* Dot */}
                  <div className="flex flex-col items-center shrink-0 pt-3 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.06 }}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 ${engConfig.dotPulse ? "animate-pulse-glow" : ""}`}
                      style={{
                        backgroundColor: `${step.color}15`,
                        borderColor: `${step.color}40`,
                        boxShadow: engConfig.dotPulse ? `0 0 16px ${step.color}30` : "none",
                      }}
                    >
                      <IconComponent size={14} style={{ color: step.color }} className="sm:!w-[15px] sm:!h-[15px]" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex-1 rounded-2xl glass p-4 sm:p-5 group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span
                        className="text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md"
                        style={{ backgroundColor: `${step.color}20`, color: step.color }}
                      >
                        Step {step.step}
                      </span>
                      <EngagementBar level={step.engagement} color={engConfig.color} />
                    </div>

                    <h4 className="text-foreground font-semibold text-sm sm:text-base mb-1 sm:mb-1.5">{step.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">{step.description}</p>

                    <div className="space-y-1 sm:space-y-1.5">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Clock size={10} className="text-muted-foreground shrink-0 sm:!w-[11px] sm:!h-[11px]" />
                        <span className="text-[10px] sm:text-[11px] text-muted-foreground">{step.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <User size={10} style={{ color: engConfig.color }} className="shrink-0 sm:!w-[11px] sm:!h-[11px]" />
                        <span className="text-[10px] sm:text-[11px]" style={{ color: engConfig.color }}>{step.clientAction}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Users size={10} className="text-muted-foreground shrink-0 sm:!w-[11px] sm:!h-[11px]" />
                        <span className="text-[10px] sm:text-[11px] text-muted-foreground">{step.teamAction}</span>
                      </div>
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

/* ─── Step Card (Desktop — the main content card) ─── */
function StepCard({
  step,
  index,
  IconComponent,
  engConfig,
  align,
}: {
  step: typeof workProcess[number];
  index: number;
  IconComponent: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  engConfig: typeof engagementConfig.high;
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`rounded-2xl glass p-6 group hover:border-primary/30 transition-all duration-300 ${engConfig.dotPulse ? "shadow-[0_0_12px_rgba(124,58,237,0.15)]" : ""}`}
      data-cursor-hover
    >
      <div className={`flex items-center gap-3 mb-3 ${isRight ? "justify-end" : ""}`}>
        <EngagementBar level={step.engagement} color={engConfig.color} />
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-md"
          style={{ backgroundColor: `${step.color}20`, color: step.color }}
        >
          Step {step.step}
        </span>
      </div>

      <h4 className={`text-foreground font-semibold text-lg mb-2 ${isRight ? "text-right" : ""}`}>
        {step.title}
      </h4>
      <p className={`text-muted-foreground text-sm leading-relaxed ${isRight ? "text-right" : ""}`}>
        {step.description}
      </p>

      {/* Progress bar */}
      <motion.div
        className="mt-4 h-1 rounded-full overflow-hidden bg-muted"
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

/* ─── Step Meta (Desktop — the small details on the opposite side) ─── */
function StepMeta({
  step,
  engConfig,
  align,
}: {
  step: typeof workProcess[number];
  engConfig: typeof engagementConfig.high;
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`space-y-2.5 py-4 ${isRight ? "text-right" : ""}`}
    >
      <div className={`flex items-center gap-2 ${isRight ? "justify-end" : ""}`}>
        <Clock size={13} className="text-muted-foreground shrink-0" />
        <span className="text-[12px] text-muted-foreground">{step.duration}</span>
      </div>
      <div className={`flex items-center gap-2 ${isRight ? "justify-end" : ""}`}>
        <User size={13} style={{ color: engConfig.color }} className="shrink-0" />
        <span className="text-[12px] font-medium" style={{ color: engConfig.color }}>
          {step.clientAction}
        </span>
      </div>
      <div className={`flex items-center gap-2 ${isRight ? "justify-end" : ""}`}>
        <Users size={13} className="text-muted-foreground shrink-0" />
        <span className="text-[12px] text-muted-foreground">{step.teamAction}</span>
      </div>
    </motion.div>
  );
}
