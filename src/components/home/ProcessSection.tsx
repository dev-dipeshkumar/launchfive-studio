"use client";

import { motion } from "framer-motion";
import { workProcess } from "@/data/team";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Our Workflow"
          title="How We Deliver Results"
          description="Our structured 7-step process is designed to keep every project on track from initial concept to final delivery, with clear communication at every step."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workProcess.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative rounded-2xl glass p-6 group hover:border-[#7C3AED]/30 transition-all duration-300"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {step.step}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
              </div>

              <h4 className="text-white font-semibold mb-2">{step.title}</h4>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Step connector line for desktop */}
              {i < workProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
