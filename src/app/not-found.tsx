"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_ARIA } from "@/lib/whatsapp";

/**
 * Branded enterprise 404 page.
 * Dark-themed, matches the LaunchFive Studio design language, with a
 * smooth fade/scale entrance and clear recovery actions.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-section-dark-bg text-section-dark-foreground px-4 relative overflow-hidden">
      {/* Calm aura */}
      <div className="absolute inset-0 bg-aura pointer-events-none" />
      <div className="absolute -top-32 -right-20 w-[36rem] h-[36rem] rounded-full bg-primary/[0.08] blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[32rem] h-[32rem] rounded-full bg-secondary/[0.08] blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* Animated 404 illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 w-40 h-40 sm:w-48 sm:h-48 rounded-3xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="text-6xl sm:text-7xl font-bold gradient-text">404</span>
        </motion.div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          This page took a different route
        </h1>
        <p className="text-section-dark-foreground/70 text-sm sm:text-base leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have moved.
          Let's get you back to building something great.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-shadow"
          >
            <Home size={18} />
            Return Home
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={WHATSAPP_ARIA}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 border-[#25D366]/40 text-[#25D366] bg-white/5 backdrop-blur-sm hover:bg-[#25D366]/10 hover:border-[#25D366]/70 transition-all"
          >
            <MessageCircle size={18} />
            Contact Us
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </main>
  );
}
