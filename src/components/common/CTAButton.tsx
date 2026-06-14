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
      "bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white hover:shadow-lg hover:shadow-[#7C3AED]/25",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 border border-white/10",
    outline:
      "bg-transparent text-white border border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]",
  };

  const combinedClasses = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300",
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
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
