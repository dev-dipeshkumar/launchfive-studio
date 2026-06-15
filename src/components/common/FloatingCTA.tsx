"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden"
        >
          <motion.button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-shadow relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 -translate-x-full hover-shimmer pointer-events-none" />
            <MessageCircle size={16} />
            Start a Project
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
