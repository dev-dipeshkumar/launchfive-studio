"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Position is written directly to the DOM via refs so mousemove never
    // triggers a React re-render (keeps scrolling/animation at 60fps).
    let raf = 0;
    let pendingX = 0;
    let pendingY = 0;

    const apply = () => {
      raf = 0;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pendingX - 4}px, ${pendingY - 4}px, 0) scale(${isClicking ? 0.8 : 1})`;
      }
      if (ringRef.current) {
        const size = isHovering ? 48 : 32;
        const offset = isHovering ? 24 : 16;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate3d(${pendingX - offset}px, ${pendingY - offset}px, 0) scale(${isClicking ? 0.9 : 1})`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      setIsVisible(true);
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const handleMouseUp = () => {
      setIsClicking(false);
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverDetect = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true);
          if (!raf) raf = requestAnimationFrame(apply);
        });
        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
          if (!raf) raf = requestAnimationFrame(apply);
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Set up hover detection with a small delay to ensure DOM is ready
    const timer = setTimeout(handleHoverDetect, 1000);
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      setTimeout(handleHoverDetect, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isMobile, isHovering, isClicking]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        aria-hidden="true"
      >
        <div
          className={`w-full h-full rounded-full border transition-colors duration-200 ${
            isHovering
              ? "border-primary bg-primary/10"
              : "border-foreground/40 bg-transparent"
          }`}
        />
      </div>
    </>
  );
}
