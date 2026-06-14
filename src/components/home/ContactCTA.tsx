"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CTAButton from "@/components/common/CTAButton";
import { ArrowRight, MessageCircle, Rocket, Sparkles } from "lucide-react";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] opacity-90" />

          {/* Subtle grid overlay */}
          <motion.div
            style={{ y: overlayY }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="w-full h-full opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </motion.div>

          {/* Floating accent orbs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 py-16 md:py-20 px-8 md:px-16 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles size={14} />
              LaunchFive Studio
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Ready to Launch Something
              <br />
              <span className="text-white/70">Clear, Modern & Useful?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
            >
              Whether you need a website, app interface, brand identity, logo, ad
              creative, or design system, LaunchFive Studio can help you shape the
              idea and turn it into a polished digital outcome.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <CTAButton
                href="#contact"
                size="lg"
                className="bg-white text-[#7C3AED] hover:shadow-xl hover:shadow-black/20"
              >
                <Rocket size={18} />
                Discuss Your Project
                <ArrowRight size={18} />
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 border-white/20"
              >
                <MessageCircle size={18} />
                Contact the Team
              </CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
