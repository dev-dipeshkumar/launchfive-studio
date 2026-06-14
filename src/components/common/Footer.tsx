"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import Logo from "@/components/common/Logo";

const footerLinks = {
  services: [
    "Full-Stack Development",
    "Mobile App Development",
    "Website Design",
    "UI/UX Design",
    "Graphic Design",
    "Branding Kits",
  ],
  company: [
    { label: "About Us", href: "#team" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Our Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@launchfivestudio.com", label: "Email" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo
              iconSize={36}
              wordmarkLayout="stacked"
              wordmarkSize="default"
              className="mb-4"
            />
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              LaunchFive Studio is a focused 5-member creative-tech studio helping
              businesses build websites, apps, UI/UX, branding, graphics, logos,
              templates, and ad creatives with clean execution and clear communication.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#7C3AED]/50 transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-[#94A3B8] text-sm hover:text-white transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-[#94A3B8] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-[#94A3B8] text-sm">
                <span className="text-white">Email:</span> hello@launchfivestudio.com
              </p>
              <p className="text-[#94A3B8] text-sm">
                <span className="text-white">Phone:</span> +91 98765 43210
              </p>
              <p className="text-[#94A3B8] text-sm">
                <span className="text-white">WhatsApp:</span> +91 98765 43210
              </p>
              <p className="text-[#94A3B8] text-sm">
                <span className="text-white">Hours:</span> Mon - Sat, 10AM - 7PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm">
            &copy; {new Date().getFullYear()} LaunchFive Studio. All rights reserved.
          </p>
          <p className="text-[#94A3B8] text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-[#F43F5E] fill-[#F43F5E]" /> by LaunchFive Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
