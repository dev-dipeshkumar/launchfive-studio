"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/common/Logo";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "border-b border-transparent"
      )}
      style={{
        backgroundColor: isScrolled
          ? "rgba(7, 10, 19, 0.85)"
          : "rgba(7, 10, 19, 0)",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottomColor: isScrolled
          ? "rgba(255, 255, 255, 0.08)"
          : "transparent",
      }}
    >
      <div className="mx-auto flex h-[64px] sm:h-[72px] lg:h-[80px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo — Always show wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="shrink-0"
          aria-label="LaunchFive Studio — Home"
        >
          <Logo
            iconSize={32}
            wordmarkLayout="horizontal"
            wordmarkSize="small"
            showWordmark={true}
            animate={true}
          />
        </a>

        {/* Center: Nav Links — Desktop */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "relative text-[15px] font-medium transition-colors duration-300 py-1",
                  isActive
                    ? "text-white"
                    : "text-[#94A3B8] hover:text-white"
                )}
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] transition-all duration-300",
                    isActive ? "w-5 opacity-100" : "w-0 opacity-0"
                  )}
                />
              </motion.a>
            );
          })}
        </nav>

        {/* Right: CTA — Desktop */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/20 hover:shadow-[0_0_28px_rgba(124,58,237,0.4)] transition-shadow duration-300 relative overflow-hidden"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span className="absolute inset-0 -translate-x-full hover-shimmer pointer-events-none" />
            Start a Project
            <ArrowRight size={15} />
          </motion.a>
        </div>

        {/* Mobile: Hamburger */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-[60] flex items-center justify-center w-11 h-11 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu — Full-screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-0 z-[55] lg:hidden"
            style={{
              backgroundColor: "rgba(7, 10, 19, 0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="flex flex-col h-full max-w-lg mx-auto px-6 pt-20 pb-8 overflow-y-auto">
              {/* Logo at top of mobile menu */}
              <div className="flex items-center justify-between mb-8">
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#hero");
                  }}
                  className="shrink-0"
                  aria-label="LaunchFive Studio — Home"
                >
                  <Logo
                    iconSize={32}
                    wordmarkLayout="horizontal"
                    wordmarkSize="small"
                    showWordmark={true}
                  />
                </a>
              </div>

              {/* Navigation links */}
              <nav className="flex-1" aria-label="Mobile navigation">
                <div className="space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-medium transition-all min-h-[52px]",
                          isActive
                            ? "text-white bg-white/[0.06] border border-white/[0.08]"
                            : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronRight
                          size={18}
                          className={cn(
                            "transition-colors",
                            isActive ? "text-[#7C3AED]" : "text-white/20"
                          )}
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </nav>

              {/* Bottom section */}
              <div className="mt-auto space-y-4">
                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="space-y-3"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/20 min-h-[52px] relative overflow-hidden"
                  >
                    Start a Project
                    <ArrowRight size={16} />
                  </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                  className="grid grid-cols-4 gap-2 pt-4 border-t border-white/[0.06]"
                >
                  {[
                    { value: "5", label: "Specialists" },
                    { value: "7", label: "Steps" },
                    { value: "24h", label: "Response" },
                    { value: "0", label: "Middlemen" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-sm font-bold text-white/80">{stat.value}</div>
                      <div className="text-[9px] text-[#94A3B8]/60 font-medium uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Copyright */}
                <p className="text-center text-[10px] text-[#94A3B8]/40 pt-2">
                  &copy; {new Date().getFullYear()} LaunchFive Studio
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
