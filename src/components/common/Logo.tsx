"use client";

import { useId } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Logo Icon — "Five-Segment Launch Arrow"
   5 ascending bars + chevron tip forming an
   upward-pointing arrow. Each segment = one
   team member. Gradient: purple → cyan.
   ───────────────────────────────────────────── */

interface LogoIconProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function LogoIcon({
  size = 44,
  className = "",
  animate = false,
}: LogoIconProps) {
  const uid = useId();
  const gradId = `logo-grad-${uid}`;

  const segments = [
    // Segment 1: Base (widest, most purple)
    { type: "rect" as const, x: 3, y: 34, w: 34, h: 3.5, opacity: 0.5, delay: 0 },
    // Segment 2
    { type: "rect" as const, x: 6.5, y: 27.5, w: 27, h: 3.5, opacity: 0.65, delay: 0.06 },
    // Segment 3
    { type: "rect" as const, x: 10, y: 21, w: 20, h: 3.5, opacity: 0.8, delay: 0.12 },
    // Segment 4
    { type: "rect" as const, x: 13.5, y: 14.5, w: 13, h: 3.5, opacity: 0.93, delay: 0.18 },
    // Segment 5: Chevron tip (brightest, most cyan)
    {
      type: "path" as const,
      d: "M20 3 L27.5 12.5 L12.5 12.5 Z",
      opacity: 1,
      delay: 0.24,
    },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="20"
          y1="40"
          x2="20"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="45%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      <g>
        {segments.map((seg, i) => {
          if (seg.type === "rect") {
            return (
              <motion.rect
                key={i}
                x={seg.x}
                y={seg.y}
                width={seg.w}
                height={seg.h}
                rx={1.75}
                fill={`url(#${gradId})`}
                opacity={seg.opacity}
                initial={animate ? { scaleY: 0, opacity: 0 } : false}
                animate={
                  animate
                    ? { scaleY: 1, opacity: seg.opacity }
                    : undefined
                }
                transition={
                  animate
                    ? { delay: 0.5 + seg.delay, duration: 0.35, ease: "easeOut" }
                    : undefined
                }
                style={{ transformOrigin: "20px center" }}
              />
            );
          }
          return (
            <motion.path
              key={i}
              d={seg.d!}
              fill={`url(#${gradId})`}
              opacity={seg.opacity}
              initial={animate ? { scale: 0, opacity: 0 } : false}
              animate={animate ? { scale: 1, opacity: seg.opacity } : undefined}
              transition={
                animate
                  ? { delay: 0.5 + seg.delay, duration: 0.4, ease: "easeOut" }
                  : undefined
              }
              style={{ transformOrigin: "20px 8px" }}
            />
          );
        })}
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Wordmark — "LaunchFive Studio"
   "Launch" in gradient (purple→cyan)
   "Five" in solid white
   "Studio" in muted, smaller, tracked out
   ───────────────────────────────────────────── */

interface WordmarkProps {
  className?: string;
  layout?: "horizontal" | "stacked";
  size?: "default" | "small";
}

export function Wordmark({
  className = "",
  layout = "horizontal",
  size = "default",
}: WordmarkProps) {
  const nameSize = size === "default" ? "text-[17px]" : "text-[15px]";
  const studioSize = size === "default" ? "text-[11px]" : "text-[10px]";

  if (layout === "stacked") {
    return (
      <div className={`flex flex-col ${className}`}>
        <span
          className={`${nameSize} font-bold tracking-tight leading-none`}
        >
          <span className="gradient-text">Launch</span>
          <span className="text-white">Five</span>
        </span>
        <span
          className={`${studioSize} font-medium text-[#94A3B8] tracking-[0.2em] uppercase leading-none mt-1`}
        >
          Studio
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-baseline ${className}`}>
      <span className={`${nameSize} font-bold tracking-tight leading-none`}>
        <span className="gradient-text">Launch</span>
        <span className="text-white">Five</span>
      </span>
      <span
        className={`${studioSize} font-medium text-[#94A3B8] tracking-[0.18em] ml-1.5 leading-none`}
      >
        Studio
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Full Logo — Icon + Wordmark combined
   ───────────────────────────────────────────── */

interface LogoProps {
  iconSize?: number;
  className?: string;
  wordmarkLayout?: "horizontal" | "stacked";
  wordmarkSize?: "default" | "small";
  showWordmark?: boolean;
  wordmarkClassName?: string;
  animate?: boolean;
}

export default function Logo({
  iconSize = 44,
  className = "",
  wordmarkLayout = "horizontal",
  wordmarkSize = "default",
  showWordmark = true,
  wordmarkClassName = "",
  animate = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="transition-[filter] duration-300 hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.4)]"
      >
        <LogoIcon size={iconSize} animate={animate} />
      </motion.div>
      {showWordmark && (
        <Wordmark layout={wordmarkLayout} size={wordmarkSize} className={wordmarkClassName} />
      )}
    </div>
  );
}
