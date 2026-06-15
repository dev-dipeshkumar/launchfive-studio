"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";

const COOKIE_KEY = "launchfive-cookie-consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Show banner after a short delay so the page loads first
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[55] p-3 sm:p-4"
        >
          <div className="max-w-4xl mx-auto rounded-2xl glass-strong p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Shield size={18} className="text-primary" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-foreground text-sm font-medium mb-0.5">
                  We use cookies
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  We use essential cookies to make our site work and analytics cookies to understand how you use our website. By clicking &quot;Accept&quot;, you consent to our use of cookies.{" "}
                  <a href="#" className="text-primary hover:underline">
                    Learn more
                  </a>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <motion.button
                  onClick={decline}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg bg-muted hover:bg-muted/80 transition-colors min-h-[40px]"
                  whileTap={{ scale: 0.97 }}
                >
                  Decline
                </motion.button>
                <motion.button
                  onClick={accept}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-shadow min-h-[40px]"
                  whileTap={{ scale: 0.97 }}
                >
                  Accept
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
