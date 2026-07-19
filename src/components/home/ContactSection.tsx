"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Loader2, Check } from "lucide-react";
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
import { trackEvent } from "@/lib/analytics";

/** Subtle confetti burst — max 12 particles, GPU transform/opacity only. */
const CONFETTI_COLORS = ["#7C3AED", "#06B6D4", "#F97316", "#10B981", "#EC4899"];
function useConfetti() {
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const particles = useMemo(() => {
    if (prefersReduced) return [];
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 160,
      y: -40 - Math.random() * 80,
      rotate: Math.random() * 360,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: Math.random() * 0.08,
    }));
  }, [prefersReduced]);

  return { particles, prefersReduced };
}

const contactDetails = [
  { icon: Mail, text: "launchfive.studio@gmail.com", href: "mailto:launchfive.studio@gmail.com" },
  { icon: Phone, text: "+919783569106", href: "tel:+919783569106" },
  { icon: MapPin, text: "Remote-first, based in India" },
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<SubmitState>("idle");
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
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      // Save to Firebase
      await addDoc(collection(db, "contacts"), formData);
      trackEvent("contact_submit", { subject: formData.subject });

      setStatus("success");
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Firebase error:", error);
      setStatus("error");
      toast({
        title: "Couldn't send your message",
        description: "Something went wrong on our end. Please try again.",
        variant: "destructive",
      });
    }
  };

  const isSubmitting = status === "submitting";
  const { particles } = useConfetti();

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
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex flex-col items-center justify-center text-center py-10"
                    role="status"
                    aria-live="polite"
                  >
                    {/* Subtle confetti burst — max 12 particles, transform/opacity only */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible" aria-hidden="true">
                      {particles.map((p) => (
                        <motion.span
                          key={p.id}
                          initial={{ opacity: 0, x: 0, y: 0, scale: 0.6, rotate: 0 }}
                          animate={{ opacity: [0, 1, 1, 0], x: p.x, y: p.y, scale: 1, rotate: p.rotate }}
                          transition={{ duration: 0.9, delay: p.delay, ease: "easeOut" }}
                          className="absolute w-2 h-2 rounded-[2px]"
                          style={{ backgroundColor: p.color }}
                        />
                      ))}
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] mb-4"
                    >
                      <Check size={32} strokeWidth={3} />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-section-light-foreground mb-1">
                      Your message is on its way!
                    </h3>
                    <p className="text-section-light-foreground/70 text-sm max-w-sm">
                      We&apos;ve received your message and a real human from our team will reply within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-5 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Reveal direction="up" delay={0.05}>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-label="Your Name"
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
                          aria-label="Your Email"
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
                        aria-label="Subject"
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
                    aria-label="Your Message"
                  />
                </Reveal>
                <Reveal direction="up" delay={0.25}>
                  <div className="text-right">
                    <Button
                      type="submit"
                      className="btn-primary"
                      disabled={isSubmitting}
                      aria-disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={16} className="ml-2" />
                        </>
                      )}
                    </Button>
                    {status === "error" && (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="ml-4 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      >
                        Retry
                      </button>
                    )}
                  </div>
                </Reveal>
                  </motion.form>
                )}
              </AnimatePresence>
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
