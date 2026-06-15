"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, portfolioCategories } from "@/data/portfolio";
import SectionHeading from "@/components/common/SectionHeading";
import { ProjectModal } from "@/components/home/ProjectModal";
import { ExternalLink, Layers, ArrowRight, Calendar } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

        {/* Concept work notice */}
        {hasConcepts && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-muted border border-border max-w-xl mx-auto"
          >
            <Layers size={13} className="text-muted-foreground shrink-0" />
            <span className="text-[10px] sm:text-xs text-muted-foreground/70 text-center">
              Items marked CONCEPT are internal explorations. Client case studies will be added as we complete live projects.
            </span>
          </motion.div>
        )}

        {/* Category filter — scrollable on mobile */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 lg:mb-10">
          {portfolioCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-medium rounded-full transition-all duration-300 min-h-[44px] sm:min-h-0 ${
                activeCategory === cat
                  ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
              whileHover={activeCategory === cat ? {} : { scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects grid — 1 col mobile → 2 col tablet → 3 col desktop */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
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
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl glass overflow-hidden hover:border-[#7C3AED]/30 transition-all duration-300 cursor-pointer"
                data-cursor-hover
              >
                {/* Project thumbnail */}
                <div className="h-40 sm:h-48 md:h-52 relative overflow-hidden">
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
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${project.color}25`,
                          border: `1px solid ${project.color}40`,
                        }}
                      >
                        <span className="text-xl sm:text-2xl font-bold" style={{ color: project.color }}>
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* "View Details" overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 text-xs font-semibold text-white rounded-xl bg-[#7C3AED]/80 backdrop-blur-sm">
                      View Details
                    </span>
                  </div>

                  {/* Top badges */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center gap-1 sm:gap-1.5">
                    <span
                      className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full backdrop-blur-sm"
                      style={{
                        backgroundColor: `${project.color}25`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {project.category}
                    </span>
                    {project.isConcept && (
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] font-semibold rounded-full bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/25 backdrop-blur-sm">
                        CONCEPT
                      </span>
                    )}
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                    <span className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] font-medium rounded-full bg-black/30 text-white/70 backdrop-blur-sm">
                      <Calendar size={8} className="sm:!w-[9px] sm:!h-[9px]" />
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom gradient line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${project.color}, transparent)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-foreground font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-1.5 py-0.5 text-[9px] sm:text-[10px] rounded-md bg-muted text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] rounded-md bg-muted text-muted-foreground">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-primary group-hover:text-secondary transition-colors">
                    View Details
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
