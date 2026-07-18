"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import SectionHeading from "@/components/common/SectionHeading";
import { Linkedin, Twitter, Globe, Star } from "lucide-react";

const socialIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  linkedin: Linkedin,
  twitter: Twitter,
  portfolio: Globe,
};

export default function TeamPreview() {
  return (
    <section id="team" className="section-padding relative overflow-hidden bg-section-light-bg text-section-light-foreground">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.07] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Our Team"
          title="Meet the LaunchFive Team"
          description="A compact creative-tech team combining development, product design, visual design, branding, and campaign creative skills."
        />

        {/* Mobile: 1-col, Tablet: 2-col, Desktop: 3-col with last 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl bg-section-light-card border border-section-light-border p-5 sm:p-6 text-center hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                /* Center the last 2 cards on desktop (3-col) */
                i >= 3 ? "lg:col-span-1 lg:[&:nth-child(4)]:lg:col-start-1 lg:[&:nth-child(4)]:lg:col-end-2" : ""
              }`}
              data-cursor-hover
            >
              {/* Gradient top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${member.color}, transparent)`,
                }}
              />

              {/* Avatar with gradient ring */}
              <div className="relative mx-auto mb-3 sm:mb-4 w-14 h-14 sm:w-16 sm:h-16">
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  style={{ backgroundColor: `${member.color}40` }}
                />
                <div
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-base sm:text-lg font-bold transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${member.color}20`,
                    color: member.color,
                    border: `2px solid ${member.color}40`,
                  }}
                >
                  {member.avatarInitials}
                </div>
              </div>

              <h3 className="text-section-light-foreground font-semibold text-sm sm:text-base mb-0.5">
                {member.name}
              </h3>
              <p
                className="text-xs sm:text-sm font-medium mb-1"
                style={{ color: member.color }}
              >
                {member.role}
              </p>
              <p className="text-section-light-foreground/70 text-[10px] sm:text-xs font-medium mb-2 italic">
                &ldquo;{member.tagline}&rdquo;
              </p>
              <p className="text-section-light-foreground/60 text-xs leading-relaxed mb-3">
                {member.specialty}
              </p>

              {/* Highlight badge */}
              <div className="flex items-center justify-center gap-1 mb-3 px-2 py-1 rounded-md bg-section-light-muted border border-section-light-border">
                <Star size={10} style={{ color: member.color }} aria-hidden="true" />
                <span className="text-[10px] text-section-light-foreground/60">{member.highlight}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {member.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] rounded-full text-section-light-foreground/70"
                    style={{
                      backgroundColor: `${member.color}20`,
                    }}
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
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-md bg-section-light-muted flex items-center justify-center text-section-light-foreground/60 hover:text-section-light-foreground hover:bg-section-light-border transition-colors"
                      whileHover={{ y: -3, scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      aria-label={`${member.name} ${platform}`}
                    >
                      <IconComponent size={14} />
                    </motion.a>
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
