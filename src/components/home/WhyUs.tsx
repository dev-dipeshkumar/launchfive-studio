"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Cpu, ShieldCheck, ListChecks, Handshake } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const reasons = [
  {
    icon: Users,
    title: "Focused Team Structure",
    description:
      "A 5-member team means every project gets attention across development, design, branding, and campaign visuals without unnecessary complexity.",
    color: "#7C3AED",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "You always know what is being worked on, what stage the project is in, and what comes next. No surprises, no gaps — just straightforward, transparent updates throughout.",
    color: "#06B6D4",
  },
  {
    icon: Cpu,
    title: "Modern Execution",
    description:
      "We use current design and development tools to create websites, apps, visuals, and digital assets that feel clean and relevant. Every output reflects modern standards and practices.",
    color: "#10B981",
  },
  {
    icon: ShieldCheck,
    title: "Ownership Mindset",
    description:
      "We treat every project like a serious responsibility, not just a task list. The goal is to deliver work we are proud to show — and that you are confident to use.",
    color: "#F97316",
  },
  {
    icon: ListChecks,
    title: "Process-Driven Delivery",
    description:
      "Our workflow is built around understanding, planning, creating, reviewing, and improving before final delivery. Structure keeps quality consistent and timelines reliable.",
    color: "#F43F5E",
  },
  {
    icon: Handshake,
    title: "Direct Collaboration",
    description:
      "You work closely with the people building your project, which keeps communication simple and decisions faster. No account managers, no handoffs — just direct, productive conversation.",
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
          title="Why Clients Can Trust LaunchFive Studio"
          description="We combine focused execution, clear communication, and modern creative skills to make the project experience simple, transparent, and reliable."
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
