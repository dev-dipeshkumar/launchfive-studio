"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Calendar, ArrowRight, Layers } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";

/* ───────────── Project Modal ───────────── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
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

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl glass-strong"
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
            background: `linear-gradient(90deg, ${project.color}, transparent)`,
          }}
        />

        {/* Thumbnail */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
              }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: `${project.color}25`,
                  border: `1px solid ${project.color}40`,
                }}
              >
                <span className="text-3xl font-bold" style={{ color: project.color }}>
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span
              className="px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: `${project.color}25`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              {project.category}
            </span>
            {project.isConcept && (
              <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/25 backdrop-blur-sm">
                CONCEPT
              </span>
            )}
          </div>

          {/* Year */}
          <div className="absolute top-3 right-12">
            <span className="flex items-center gap-1 px-2 py-1 text-[10px] font-medium rounded-full bg-background/40 text-foreground/70 backdrop-blur-sm">
              <Calendar size={9} />
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h2 className="text-foreground text-lg sm:text-xl font-bold mb-2">
            {project.title}
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tools */}
          <div className="mb-4">
            <h4 className="text-muted-foreground/60 text-[10px] font-semibold uppercase tracking-wider mb-2">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs rounded-lg bg-muted text-muted-foreground border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <h4 className="text-muted-foreground/60 text-[10px] font-semibold uppercase tracking-wider mb-2">
              Tags
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] rounded-md font-medium"
                  style={{
                    backgroundColor: `${project.color}12`,
                    color: `${project.color}CC`,
                    border: `1px solid ${project.color}20`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="mb-5 p-3 sm:p-4 rounded-xl bg-muted/50 border border-border">
            <h4 className="text-muted-foreground/60 text-[10px] font-semibold uppercase tracking-wider mb-1.5">
              Key Takeaway
            </h4>
            <div className="flex items-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: project.color }}
              />
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {project.takeaway}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            {project.projectUrl ? (
              <motion.a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {project.projectUrlLabel || "View Project"}
                <ExternalLink size={14} />
              </motion.a>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#06B6D4] rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                <Layers size={14} />
                Internal Concept
              </div>
            )}
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

/* ───────────── Main Component (exports modal state only) ───────────── */
export { ProjectModal };
