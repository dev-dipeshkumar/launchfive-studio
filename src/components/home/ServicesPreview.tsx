"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import SectionHeading from "@/components/common/SectionHeading";
import CTAButton from "@/components/common/CTAButton";
import { ArrowRight } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl glass p-6 hover:border-[#7C3AED]/30 transition-all duration-300"
              data-cursor-hover
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${service.color}15`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-1.5 mb-4">
                {service.features.slice(3).map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-[#94A3B8] flex items-center gap-2"
                  >
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: service.color }}
              >
                Discuss Project
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

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
          <CTAButton href="#contact" variant="outline">
            Explore All Services
            <ArrowRight size={16} />
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
