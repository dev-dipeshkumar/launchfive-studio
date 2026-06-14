"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
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

      // Track active section
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

  // Lock body scroll when mobile menu is open
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
          ? "rgba(7, 10, 19, 0.8)"
          : "rgba(7, 10, 19, 0)",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottomColor: isScrolled
          ? "rgba(255, 255, 255, 0.08)"
          : "transparent",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[76px] lg:px-8">
        {/* ─── Left: Logo ─── */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="shrink-0"
        >
          <Logo
            iconSize={36}
            wordmarkLayout="horizontal"
            wordmarkSize="default"
            showWordmark={true}
            wordmarkClassName="hidden sm:flex"
            animate={true}
          />
        </a>

        {/* ─── Center: Navigation Links ─── */}
        <nav className="hidden lg:flex items-center gap-9">
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
                {/* Active indicator */}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] transition-all duration-300",
                    isActive ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-3"
                  )}
                />
              </motion.a>
            );
          })}
        </nav>

        {/* ─── Right: CTA Button ─── */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-[14px] font-semibold text-white rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/20 hover:shadow-[0_0_28px_rgba(124,58,237,0.4)] transition-shadow duration-300 relative overflow-hidden"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span className="absolute inset-0 -translate-x-full hover-shimmer pointer-events-none" />
            Start a Project
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* ─── Mobile: Hamburger Button ─── */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
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

      {/* ─── Mobile Menu Dropdown ─── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(7, 10, 19, 0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 space-y-1 overflow-x-hidden">
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
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-colors",
                      isActive
                        ? "text-white bg-white/5"
                        : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]" />
                    )}
                  </motion.a>
                );
              })}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04, duration: 0.25 }}
                className="flex items-center justify-center gap-2 mt-3 px-6 py-3 text-[15px] font-semibold text-white rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/20 hover:shadow-[0_0_28px_rgba(124,58,237,0.4)] transition-shadow duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="absolute inset-0 -translate-x-full hover-shimmer pointer-events-none" />
                Start a Project
                <ArrowRight size={15} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
