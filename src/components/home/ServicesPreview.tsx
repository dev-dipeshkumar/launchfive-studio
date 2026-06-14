"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import SectionHeading from "@/components/common/SectionHeading";
import CTAButton from "@/components/common/CTAButton";
import { ArrowRight, Clock, Package, Sparkles } from "lucide-react";

export default function ServicesPreview() {
  const previewServices = services.slice(0, 6);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Our Services"
          title="What We Build"
          description="From development to design and campaign creatives, we cover the core digital needs of modern businesses with a coordinated team approach."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {previewServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl glass p-6 hover:border-[#7C3AED]/30 transition-all duration-300 min-h-0"
              data-cursor-hover
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-2.5 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white shadow-lg shadow-[#7C3AED]/30">
                    <Sparkles size={10} />
                    Popular
                  </span>
                </div>
              )}

              {/* Icon + Gradient background */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}08)`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <service.icon size={22} style={{ color: service.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg mb-0.5 group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium" style={{ color: service.color }}>
                    {service.tagline}
                  </p>
                </div>
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-1.5 mb-4">
                {service.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-[#94A3B8] flex items-center gap-2"
                  >
                    <span
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: service.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom meta: Timeline + Deliverables */}
              <div className="flex items-center gap-3 mb-4 text-[11px]">
                <div className="flex items-center gap-1 text-[#94A3B8]">
                  <Clock size={11} />
                  <span>{service.timeline}</span>
                </div>
                <div className="flex items-center gap-1" style={{ color: service.color }}>
                  <Package size={11} />
                  <span>{service.deliverables.length} deliverables</span>
                </div>
              </div>

              {/* Gradient divider */}
              <div
                className="h-px mb-4 opacity-20"
                style={{
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                }}
              />

              {/* CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors min-h-[44px] py-2"
                style={{ color: service.color }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label={`Discuss ${service.title} project`}
              >
                Discuss Project
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 30px ${service.color}15, 0 0 60px ${service.color}08`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Show all services link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <CTAButton href="#contact" variant="outline" className="w-full sm:w-auto justify-center">
            Explore All Services
            <ArrowRight size={16} />
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
