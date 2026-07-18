"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] lg:hidden bg-background/80 backdrop-blur-xl"
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
              <Button asChild size="lg" className="w-full">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick("#contact");
                  }}
                >
                  Start a Project
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>

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
        </motion.div>
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "shadow-md" : ""
        )}
        style={{
          backgroundColor: isScrolled ? "hsla(0, 0%, 100%, 0.05)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
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
          <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
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
                    "relative text-sm font-medium transition-colors duration-300 py-2 px-4 rounded-lg",
                    isActive
                      ? "text-white bg-white/10"
                      : "text-slate-400 hover:text-white"
                  )}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </nav>

          {/* Right: Theme Toggle + CTA — Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}>
                Start a Project
                <ArrowRight size={15} className="ml-2" />
              </a>
            </Button>
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
