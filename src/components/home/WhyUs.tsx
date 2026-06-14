"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, Rocket, Headphones, Award } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const reasons = [
  {
    icon: Users,
    title: "Complete Team Under One Roof",
    description:
      "No need to hire and coordinate separate freelancers. Our 5-member team covers development, design, branding, and marketing, working together seamlessly on every project.",
    color: "#7C3AED",
  },
  {
    icon: Rocket,
    title: "Fast Turnaround Times",
    description:
      "With a dedicated team working in parallel, we deliver projects significantly faster than individual freelancers. Development and design happen simultaneously, not sequentially.",
    color: "#06B6D4",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "Every project goes through internal review before delivery. Multiple team members review code, designs, and creative assets to ensure the highest quality standards are met.",
    color: "#10B981",
  },
  {
    icon: Clock,
    title: "Reliable & Transparent",
    description:
      "We provide clear timelines, regular progress updates, and honest communication throughout the project. No surprises, no ghosting, no hidden costs. What we agree is what we deliver.",
    color: "#F97316",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Our relationship does not end at delivery. We provide post-launch support, maintenance, and feature upgrades to ensure your product continues to perform at its best.",
    color: "#F43F5E",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "With 50+ projects delivered and 30+ happy clients, our results speak for themselves. We bring years of collective experience across industries and project types.",
    color: "#8B5CF6",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Why Choose Us"
          title="Why Work With Our Team"
          description="We are not just individual freelancers — we are a coordinated team that combines diverse skills with a shared commitment to delivering outstanding results for every client."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl glass p-6 hover:border-[#7C3AED]/30 transition-all duration-300"
              data-cursor-hover
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${reason.color}15`,
                  border: `1px solid ${reason.color}30`,
                }}
              >
                <reason.icon size={22} style={{ color: reason.color }} />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {reason.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
