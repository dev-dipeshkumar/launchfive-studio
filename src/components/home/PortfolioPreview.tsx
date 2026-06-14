"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, portfolioCategories } from "@/data/portfolio";
import SectionHeading from "@/components/common/SectionHeading";
import { ExternalLink, FlaskConical } from "lucide-react";

export default function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F97316]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Our Work"
          title="Sample Work & Practice Projects"
          description="We are currently building our first client portfolio. Until then, this section shows sample projects, concept designs, practice builds, and creative experiments that demonstrate what we can create."
        />

        {/* Sample projects notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-8 px-4 py-2.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 max-w-lg mx-auto"
        >
          <FlaskConical size={14} className="text-[#F97316] shrink-0" />
          <span className="text-xs text-[#F97316] font-medium text-center">
            These are practice & concept projects — not client work (yet!)
          </span>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25"
                  : "bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
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
                {/* Project image placeholder */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
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

                  {/* Category + Sample badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: `${project.color}25`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/25">
                      SAMPLE
                    </span>
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

                  {/* CTA */}
                  <button className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7C3AED] hover:text-[#06B6D4] transition-colors">
                    View Sample
                    <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
