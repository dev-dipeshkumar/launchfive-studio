"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, MessageSquareHeart, Flame, Wrench, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const reasons = [
  {
    icon: Lightbulb,
    title: "Fresh Perspective",
    description:
      "We are new, curious, and ready to approach every project with fresh ideas and full attention. No recycled templates or autopilot thinking — every brief gets our genuine creative effort.",
    color: "#7C3AED",
  },
  {
    icon: Users,
    title: "A Coordinated 5-Member Team",
    description:
      "Our team brings together development, app building, UI/UX, graphics, branding, and campaign design. Instead of juggling multiple freelancers, you get one team that works together seamlessly.",
    color: "#06B6D4",
  },
  {
    icon: MessageSquareHeart,
    title: "Honest Communication",
    description:
      "We will clearly explain what we can do, what we are learning, and how we will deliver the project. No over-promising, no vague timelines — just straightforward, respectful dialogue.",
    color: "#10B981",
  },
  {
    icon: Flame,
    title: "Dedicated Effort",
    description:
      "Since we are looking for our first client success story, every project matters deeply to us. Your project is not just another job — it is the foundation of our reputation, and we will treat it that way.",
    color: "#F97316",
  },
  {
    icon: Wrench,
    title: "Skill-Based Execution",
    description:
      "Even though we are starting professionally, we are trained in modern tools and ready to apply our skills to real client work. We practice daily, learn continuously, and deliver with care.",
    color: "#F43F5E",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth Mindset",
    description:
      "We want to build trust, improve with every project, and grow through real client results. When you work with us, you are not just getting a one-time service — you are helping launch a team that will keep getting better.",
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
          title="Why Work With LaunchFive Studio"
          description="We may be new, but we are dedicated, skilled, and genuinely excited about every project. Here is why taking a chance on a fresh team could be the best decision for your business."
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
