"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/common/SectionHeading";

/* ───────────── Star Rating ───────────── */
function StarRating({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? "fill-current" : "text-white/10"}
          style={{ color: i < rating ? color : undefined }}
        />
      ))}
    </div>
  );
}

/* ───────────── Testimonial Card ───────────── */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative rounded-2xl glass overflow-hidden hover:border-white/[0.15] transition-all duration-300 h-full flex flex-col"
        data-cursor-hover
      >
        {/* Top accent line */}
        <div
          className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, ${testimonial.color}, transparent)`,
          }}
        />

        <div className="p-4 sm:p-6 flex flex-col flex-1">
          {/* Quote icon + Rating */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <Quote
              size={24}
              className="opacity-15"
              style={{ color: testimonial.color }}
            />
            <StarRating rating={testimonial.rating} color={testimonial.color} />
          </div>

          {/* Content */}
          <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-1">
            &ldquo;{testimonial.content}&rdquo;
          </p>

          {/* Bottom: Avatar + Info */}
          <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-white/[0.06]">
            {/* Avatar with initials */}
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 text-xs sm:text-sm font-bold text-white"
              style={{
                backgroundColor: `${testimonial.color}20`,
                border: `1px solid ${testimonial.color}30`,
              }}
            >
              {testimonial.initials}
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="text-white font-semibold text-sm leading-tight">
                {testimonial.name}
              </h4>
              <p className="text-[#94A3B8] text-[11px] sm:text-xs truncate">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>

            {/* Project type pill */}
            <span
              className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-semibold rounded uppercase tracking-wider shrink-0"
              style={{
                backgroundColor: `${testimonial.color}0A`,
                color: `${testimonial.color}BB`,
                border: `1px solid ${testimonial.color}15`,
              }}
            >
              {testimonial.projectType}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────────── Main Component ───────────── */
export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full pointer-events-none">
        <div className="w-full h-full bg-[#06B6D4]/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped build, design, and grow. Every project is a partnership — here's what our partners have to say."
        />

        {/* Testimonial Grid — 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center mt-8 sm:mt-12"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/15 transition-shadow duration-300"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Start Your Project
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
