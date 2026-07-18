"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, WHATSAPP_ARIA } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const contactDetails = [
  { icon: Mail, text: "launchfive.studio@gmail.com", href: "mailto:launchfive.studio@gmail.com" },
  { icon: Phone, text: "+919783569106", href: "tel:+919783569106" },
  { icon: MapPin, text: "Remote-first, based in India" },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firebase
      await addDoc(collection(db, "contacts"), formData);

      // Show notification
      toast({
        title: "Message Sent Successfully!",
        description: "Your message has been sent and stored in our database. We'll get back to you within 24 hours.",
        variant: "default",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Firebase error:", error);
      // Show more detailed error for debugging
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      toast({
        title: "Error",
        description: `Failed to send message: ${errorMessage}. Please try again later.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-section-light-bg text-section-light-foreground">
      {/* Calm static aura */}
      <div className="absolute inset-0 bg-aura pointer-events-none" />
      <div className="absolute -top-20 right-1/4 w-[34rem] h-[34rem] bg-primary/[0.07] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Contact Us"
          title="Let's Build Together"
          description="Have a project in mind, or just want to say hello? We'd love to hear from you. Fill out the form or use the contact details below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Reveal direction="up" delay={0.05} className="lg:col-span-2">
            <div className="card-premium p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Reveal direction="up" delay={0.05}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Reveal>
                  <Reveal direction="up" delay={0.1}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Reveal>
                </div>
                <Reveal direction="up" delay={0.15}>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Reveal>
                <Reveal direction="up" delay={0.2}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Reveal>
                <Reveal direction="up" delay={0.25}>
                  <div className="text-right">
                    <Button type="submit" className="btn-primary">
                      Send Message
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </Reveal>
              </form>
            </div>
          </Reveal>

          {/* Contact Details */}
          <Reveal direction="right" delay={0.15} className="space-y-5">
            {contactDetails.map((item, index) => (
              <Reveal
                key={index}
                direction="right"
                delay={0.1 + index * 0.1}
                className="flex items-start gap-4 p-4 rounded-xl bg-section-light-card border border-section-light-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/20">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="pt-1.5">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-section-light-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-section-light-foreground/80">{item.text}</span>
                  )}
                </div>
              </Reveal>
            ))}

            {/* Premium WhatsApp communication card */}
            <Reveal direction="right" delay={0.2} className="mt-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={WHATSAPP_ARIA}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md border border-[#25D366]/30 hover:border-[#25D366]/60 hover:shadow-[0_0_28px_rgba(37,211,102,0.3)] transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366]">
                  <MessageCircle size={22} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-section-light-foreground font-semibold text-sm">
                    Prefer WhatsApp?
                  </p>
                  <p className="text-section-light-foreground/70 text-xs leading-relaxed mb-1">
                    Need a quick discussion before filling out the project form? Chat directly with our team.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#25D366] text-xs font-semibold group-hover:gap-2.5 transition-all">
                    Open WhatsApp
                    <span className="tabular-nums">{WHATSAPP_DISPLAY}</span>
                  </span>
                </div>
              </a>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
