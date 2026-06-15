"use client";

import { motion } from "framer-motion";
import { X, Clock, Package, Users, ArrowRight, IndianRupee } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl glass-strong"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Top accent */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${service.color}, transparent)`,
          }}
        />

        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div
              className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: `linear-gradient(135deg, ${service.color}20, ${service.color}08)`,
                border: `1px solid ${service.color}30`,
              }}
            >
              <service.icon size={22} style={{ color: service.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-foreground text-lg sm:text-xl font-bold mb-0.5">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium" style={{ color: service.color }}>
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
            <div
              className="rounded-xl p-3 text-center"
              style={{
                backgroundColor: `${service.color}08`,
                border: `1px solid ${service.color}15`,
              }}
            >
              <IndianRupee size={14} className="mx-auto mb-1" style={{ color: service.color }} />
              <div className="text-foreground text-xs sm:text-sm font-bold">{service.priceRange}</div>
              <div className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-wider">Starting from</div>
            </div>
            <div
              className="rounded-xl p-3 text-center"
              style={{
                backgroundColor: `${service.color}08`,
                border: `1px solid ${service.color}15`,
              }}
            >
              <Clock size={14} className="mx-auto mb-1" style={{ color: service.color }} />
              <div className="text-foreground text-xs sm:text-sm font-bold">{service.timeline}</div>
              <div className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-wider">Timeline</div>
            </div>
            <div
              className="rounded-xl p-3 text-center"
              style={{
                backgroundColor: `${service.color}08`,
                border: `1px solid ${service.color}15`,
              }}
            >
              <Package size={14} className="mx-auto mb-1" style={{ color: service.color }} />
              <div className="text-foreground text-xs sm:text-sm font-bold">{service.deliverables.length}</div>
              <div className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-wider">Deliverables</div>
            </div>
          </div>

          {/* What You Get */}
          <div className="mb-4">
            <h4 className="text-muted-foreground/60 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
              What&apos;s Included
            </h4>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: service.color }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="mb-4">
            <h4 className="text-muted-foreground/60 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
              Deliverables
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.deliverables.map((d) => (
                <span
                  key={d}
                  className="px-2.5 py-1 text-xs rounded-lg bg-muted text-muted-foreground border border-border"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Best For */}
          <div className="mb-5 p-3 rounded-xl bg-muted/50 border border-border">
            <div className="flex items-center gap-2 mb-1">
              <Users size={12} style={{ color: service.color }} />
              <h4 className="text-muted-foreground/60 text-[10px] font-semibold uppercase tracking-wider">
                Best For
              </h4>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {service.bestFor}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Quote
              <ArrowRight size={14} />
            </motion.a>
            <motion.button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              whileTap={{ scale: 0.97 }}
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
