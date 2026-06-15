"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white hover:shadow-[0_0_24px_rgba(124,58,237,0.35)]",
    secondary:
      "bg-muted text-foreground hover:bg-muted/80 border border-border hover:shadow-[0_0_20px_rgba(124,58,237,0.08)]",
    outline:
      "bg-transparent text-foreground border border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]",
  };

  const combinedClasses = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 relative overflow-hidden",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const handleClick = () => {
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClick?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      className={combinedClasses}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 -translate-x-full hover-shimmer pointer-events-none" />
      {children}
    </motion.button>
  );
}
