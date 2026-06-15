"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ─── Mobile Overlay — rendered via Portal for reliable full-screen coverage ─── */
function MobileMenuOverlay({
  isOpen,
  onClose,
  activeSection,
  onNavClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavClick: (href: string) => void;
}) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  if (!mounted) return null;

  const content = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] lg:hidden"
          style={{
            backgroundColor: "var(--background)",
            opacity: 0.98,
            WebkitBackdropFilter: "blur(12px)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Close button — always visible at top-right */}
          <div className="fixed top-0 right-0 z-[10001] flex items-center gap-2 h-[64px] px-4 sm:px-6">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="flex items-center justify-center w-11 h-11 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Menu content — instant, no delay */}
          <div
            className="flex flex-col h-full max-w-lg mx-auto px-6 pt-20 pb-8 overflow-y-auto"
          >
            {/* Logo at top */}
            <div className="flex items-center mb-6">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick("#hero");
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

            {/* Navigation links — instant appearance, no motion delay */}
            <nav className="flex-1" aria-label="Mobile navigation">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick(link.href);
                      }}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-medium transition-colors min-h-[52px]",
                        isActive
                          ? "text-foreground bg-muted border border-border"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        size={18}
                        className={cn(
                          "transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground/30"
                        )}
                      />
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Bottom section */}
            <div className="mt-auto space-y-4">
              {/* CTA button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick("#contact");
                }}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20 min-h-[52px] relative overflow-hidden"
              >
                Start a Project
                <ArrowRight size={16} />
              </a>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-border">
                {[
                  { value: "5", label: "Specialists" },
                  { value: "7", label: "Steps" },
                  { value: "24h", label: "Response" },
                  { value: "0", label: "Middlemen" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-sm font-bold text-foreground/80">{stat.value}</div>
                    <div className="text-[9px] text-muted-foreground/60 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-center text-[10px] text-muted-foreground/40 pt-2">
                &copy; {new Date().getFullYear()} LaunchFive Studio
              </p>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}

/* ─── Main Navbar ─── */
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
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "border-b shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "border-b border-transparent"
        )}
        style={{
          backgroundColor: isScrolled
            ? "var(--navbar-bg)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottomColor: isScrolled
            ? "var(--navbar-border)"
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
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300",
                      isActive ? "w-5 opacity-100" : "w-0 opacity-0"
                    )}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Right: Theme Toggle + CTA — Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20 hover:shadow-[0_0_28px_rgba(124,58,237,0.4)] transition-shadow duration-300 relative overflow-hidden"
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="absolute inset-0 -translate-x-full hover-shimmer pointer-events-none" />
              Start a Project
              <ArrowRight size={15} />
            </motion.a>
          </div>

          {/* Mobile: Hamburger + Theme — always on top */}
          <div className="lg:hidden flex items-center gap-1.5">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[10000] flex items-center justify-center w-11 h-11 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay — rendered via Portal at document.body level */}
      <MobileMenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
}
