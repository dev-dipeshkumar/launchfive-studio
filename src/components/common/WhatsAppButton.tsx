"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_ARIA,
} from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

/**
 * Premium floating WhatsApp button — part of the LaunchFive design system.
 * - Glassmorphism circle with a soft green glow
 * - Very subtle floating (no continuous bounce)
 * - Hides when the footer is on screen (no overlap)
 * - Opens wa.me in a new tab
 */
export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Reveal after a little scroll
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide when footer enters the viewport
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px", threshold: 0.05 }
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  const visible = show && !footerVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={WHATSAPP_ARIA}
          onClick={() => trackEvent("whatsapp_click")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed z-50 flex items-center justify-center rounded-full
            bg-white/70 dark:bg-white/10 backdrop-blur-md
            border border-[#25D366]/30 hover:border-[#25D366]/60
            text-[#25D366] shadow-[0_8px_30px_-8px_rgba(37,211,102,0.45)]
            hover:shadow-[0_12px_40px_-6px_rgba(37,211,102,0.6)]
            transition-shadow
            bottom-4 right-4 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6
            w-14 h-14 sm:w-[58px] sm:h-[58px] lg:w-16 lg:h-16
            [bottom:max(1rem,env(safe-area-inset-bottom))] [right:max(1rem,env(safe-area-inset-right))]
            sm:[bottom:max(1.25rem,env(safe-area-inset-bottom))] sm:[right:max(1.25rem,env(safe-area-inset-right))]"
          style={{ willChange: "transform" }}
        >
          {/* Soft green glow ring */}
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: "0 0 24px 4px rgba(37,211,102,0.35)" }}
          />
          {/* Very subtle float */}
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <MessageCircle
              size={24}
              className="sm:!w-[26px] sm:!h-[26px] lg:!w-7 lg:!h-7"
              strokeWidth={2}
            />
          </motion.span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
