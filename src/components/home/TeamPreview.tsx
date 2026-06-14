"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import SectionHeading from "@/components/common/SectionHeading";
import { Github, Linkedin, Twitter, Dribbble, Globe } from "lucide-react";

const socialIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
  behance: Globe,
};

export default function TeamPreview() {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06B6D4]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Our Team"
          title="Meet the LaunchFive Team"
          description="Five fresh creative minds working together to learn, build, design, improve, and deliver meaningful digital work for our first clients."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl glass p-5 text-center hover:border-[#7C3AED]/30 transition-all duration-300"
              data-cursor-hover
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${member.color}20`,
                  color: member.color,
                  border: `2px solid ${member.color}40`,
                }}
              >
                {member.avatarInitials}
              </div>

              <h3 className="text-white font-semibold text-sm mb-1">
                {member.name}
              </h3>
              <p
                className="text-xs font-medium mb-2"
                style={{ color: member.color }}
              >
                {member.role}
              </p>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">
                {member.specialty}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {member.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-[#94A3B8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-2">
                {Object.entries(member.socials).map(([platform, url]) => {
                  const IconComponent = socialIconMap[platform];
                  if (!IconComponent) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-all"
                      aria-label={platform}
                    >
                      <IconComponent size={12} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
