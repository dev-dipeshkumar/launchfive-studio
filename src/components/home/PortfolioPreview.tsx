"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, portfolioCategories } from "@/data/portfolio";
import SectionHeading from "@/components/common/SectionHeading";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";

export default function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const hasConcepts = filteredProjects.some((p) => p.isConcept);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F97316]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Our Work"
          title="Selected Work"
          description="Real projects, design systems, and creative builds — along with internal concepts that show our thinking and execution style."
        />

        {/* Concept work notice — only shown when filtered list includes concepts */}
        {hasConcepts && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-8 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 max-w-xl mx-auto"
          >
            <Layers size={14} className="text-[#94A3B8] shrink-0" />
            <span className="text-xs text-[#94A3B8]/70 text-center">
              Items marked CONCEPT are internal explorations. Client case studies will be added as we complete live projects.
            </span>
          </motion.div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {portfolioCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25"
                  : "bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white"
              }`}
              whileHover={activeCategory === cat ? {} : { scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl glass overflow-hidden hover:border-[#7C3AED]/30 transition-all duration-300"
                data-cursor-hover
              >
                {/* Project thumbnail */}
                <div className="h-52 relative overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${project.color}25`,
                          border: `1px solid ${project.color}40`,
                        }}
                      >
                        <span className="text-2xl font-bold" style={{ color: project.color }}>
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category + badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span
                      className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm"
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
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 text-[#94A3B8]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Takeaway */}
                  <div className="flex items-start gap-2 mb-4">
                    <div
                      className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-xs text-[#94A3B8] leading-relaxed">
                      {project.takeaway}
                    </span>
                  </div>

                  {/* CTA — View Live / View Design / View Concept */}
                  {project.projectUrl ? (
                    <motion.a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7C3AED] hover:text-[#06B6D4] transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {project.projectUrlLabel || "View Project"}
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </motion.a>
                  ) : (
                    <motion.button
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7C3AED] hover:text-[#06B6D4] transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      View Concept
                      <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
