"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Direction = "up" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  none: { x: 0, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  /** Animation direction. "up" = fade + move up (default). "left"/"right" = alternate slide. */
  direction?: Direction;
  /** Stagger delay in seconds (100–150ms between siblings). */
  delay?: number;
  /** Duration in seconds (0.5–0.7). */
  duration?: number;
  /** Render as a different element (e.g. "li", "span"). */
  as?: "div" | "li" | "span" | "section";
  className?: string;
  once?: boolean;
  margin?: string;
}

/**
 * Shared scroll-reveal primitive — the single source of truth for the
 * LaunchFive "Workflow" motion language used across every section.
 * Respects prefers-reduced-motion via the global CSS rule.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  as = "div",
  className,
  once = true,
  margin = "-80px",
}: RevealProps) {
  const { x, y } = offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: EASE },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Container that staggers its <Reveal>/motion children using Framer's
 * parent/child variant propagation. Wrap a grid of items in this.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  once = true,
  margin = "-80px",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  margin?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}
