"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/common/CTAButton";
import { ArrowRight, MessageCircle, Zap } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
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
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

          <div className="relative z-10 py-16 md:py-20 px-8 md:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6"
            >
              <Zap size={14} />
              Looking for Our First Client
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Be Part of Our
              <br />
              <span className="text-white/80">First Success Story</span>
            </h2>

            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-3 leading-relaxed">
              We are looking for our first clients! If you have an idea for a website, app,
              brand identity, or ad campaign, let&apos;s work together.
            </p>

            <p className="text-white/70 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Reach out and be part of the journey. We will bring the same energy, dedication,
              and care to your project that we would bring to our own — because your success
              is how we build our reputation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton
                href="#contact"
                size="lg"
                className="bg-white text-[#7C3AED] hover:shadow-xl hover:shadow-black/20"
              >
                <Zap size={18} />
                Start a Project
                <ArrowRight size={18} />
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 border-white/20"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
