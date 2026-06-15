"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { services } from "@/data/services";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Phone,
  Building2,
  FileText,
  DollarSign,
  Clock,
  Link as LinkIcon,
  MapPin,
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
} from "lucide-react";

const budgetRanges = [
  "Starter Project",
  "Website / Design Project",
  "App or Full-Stack Project",
  "Branding Package",
  "Campaign Creative Package",
  "Not Sure Yet",
];

const timelines = [
  "Less than 1 month",
  "1 - 2 months",
  "2 - 3 months",
  "3 - 6 months",
  "6+ months",
  "Flexible",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@launchfivestudio.com",
    href: "mailto:hello@launchfivestudio.com",
    color: "#7C3AED",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "#10B981",
  },
  {
    icon: MapPin,
    label: "Working Hours",
    value: "Mon - Sat, 10AM - 7PM IST",
    href: null,
    color: "#06B6D4",
  },
];

const assurances = [
  {
    icon: Zap,
    text: "Response within 24 hours",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    text: "Your information is never shared",
    color: "#10B981",
  },
  {
    icon: MessageSquare,
    text: "Free initial consultation",
    color: "#7C3AED",
  },
];

/* ─── Animated field wrapper ─── */
function FormField({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Shared input class ─── */
const inputBaseClass =
  "w-full px-3 sm:px-4 py-3 min-h-[48px] rounded-lg bg-muted/50 border border-border text-foreground text-sm placeholder-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all";

const selectBaseClass =
  "w-full px-3 sm:px-4 py-3 min-h-[48px] rounded-lg bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none";

/* ─── Main Component ─── */
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      description: "",
      referenceLink: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFormError("");

    try {
      // Save inquiry directly to Firebase Firestore
      // No server/API route needed — Firestore writes from the client
      await addDoc(collection(db, "contacts"), {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        service: data.service,
        budget: data.budget,
        timeline: data.timeline,
        description: data.description,
        referenceLink: data.referenceLink || null,
        status: "new",
        createdAt: new Date().toISOString(),
      });

      setFormSuccess(true);
      reset();
      setTimeout(() => setFormSuccess(false), 5000);
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#06B6D4]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Get in Touch"
          title="Start Your Project"
          description="Tell us what you want to build. We'll review your idea, understand your requirements, and suggest the best direction with clarity."
        />

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* ─── Left: Contact Info Panel ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-4 sm:space-y-6"
          >
            {/* Contact cards - stacked on mobile, 2-col on tablet, 1-col on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3 lg:gap-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2.5 sm:gap-3 p-3 lg:p-4 rounded-xl glass hover:border-white/[0.15] transition-all duration-300"
                    >
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${info.color}12`,
                          border: `1px solid ${info.color}20`,
                        }}
                      >
                        <info.icon size={16} style={{ color: info.color }} className="sm:!w-[18px] sm:!h-[18px]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-muted-foreground text-[10px] sm:text-xs mb-0.5">{info.label}</p>
                        <p className="text-foreground text-xs sm:text-sm font-medium group-hover:gradient-text transition-all truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2.5 sm:gap-3 p-3 lg:p-4 rounded-xl glass">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${info.color}12`,
                          border: `1px solid ${info.color}20`,
                        }}
                      >
                        <info.icon size={16} style={{ color: info.color }} className="sm:!w-[18px] sm:!h-[18px]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-muted-foreground text-[10px] sm:text-xs mb-0.5">{info.label}</p>
                        <p className="text-foreground text-xs sm:text-sm font-medium truncate">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Assurances */}
            <div className="pt-2 sm:pt-4 space-y-2 sm:space-y-3">
              {assurances.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2 sm:gap-2.5"
                >
                  <div
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${item.color}10`,
                      border: `1px solid ${item.color}15`,
                    }}
                  >
                    <item.icon size={10} style={{ color: item.color }} className="sm:!w-[11px] sm:!h-[11px]" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl glass p-4 sm:p-6 md:p-8">
              {/* Success message */}
              <AnimatePresence>
                {formSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] mb-4 sm:mb-6"
                  >
                    <CheckCircle2 size={18} className="shrink-0 sm:!w-[20px] sm:!h-[20px]" />
                    <div>
                      <p className="font-medium text-xs sm:text-sm">Thanks for reaching out.</p>
                      <p className="text-[10px] sm:text-xs opacity-80">
                        We&apos;ll review your project details and get back to you with the next steps.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error message */}
              <AnimatePresence>
                {formError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive mb-4 sm:mb-6"
                  >
                    <AlertCircle size={18} className="shrink-0 sm:!w-[20px] sm:!h-[20px]" />
                    <p className="text-xs sm:text-sm">{formError}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <FormField delay={0.05}>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                      <User size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                      Full Name <span className="text-[#F43F5E]">*</span>
                    </label>
                    <input
                      {...register("name")}
                      aria-label="Full name"
                      className={inputBaseClass}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-[10px] sm:text-xs text-[#F43F5E] mt-1">{errors.name.message}</p>
                    )}
                  </FormField>
                  <FormField delay={0.1}>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                      <Mail size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                      Email <span className="text-[#F43F5E]">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      aria-label="Email address"
                      className={inputBaseClass}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="text-[10px] sm:text-xs text-[#F43F5E] mt-1">{errors.email.message}</p>
                    )}
                  </FormField>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <FormField delay={0.15}>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                      <Phone size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                      Phone / WhatsApp
                    </label>
                    <input
                      {...register("phone")}
                      aria-label="Phone or WhatsApp number"
                      className={inputBaseClass}
                      placeholder="+91 98765 43210"
                    />
                  </FormField>
                  <FormField delay={0.2}>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                      <Building2 size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                      Company Name
                    </label>
                    <input
                      {...register("company")}
                      aria-label="Company name"
                      className={inputBaseClass}
                      placeholder="Your company name"
                    />
                  </FormField>
                </div>

                {/* Row 3: Service & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <FormField delay={0.25}>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                      <FileText size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                      Service Needed <span className="text-[#F43F5E]">*</span>
                    </label>
                    <select
                      {...register("service")}
                      aria-label="Service needed"
                      className={selectBaseClass}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-popover">
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title} className="bg-popover">
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-[10px] sm:text-xs text-[#F43F5E] mt-1">{errors.service.message}</p>
                    )}
                  </FormField>
                  <FormField delay={0.3}>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                      <DollarSign size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                      Budget Range <span className="text-[#F43F5E]">*</span>
                    </label>
                    <select
                      {...register("budget")}
                      aria-label="Budget range"
                      className={selectBaseClass}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-popover">
                        Select budget range
                      </option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-popover">
                          {b}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="text-[10px] sm:text-xs text-[#F43F5E] mt-1">{errors.budget.message}</p>
                    )}
                  </FormField>
                </div>

                {/* Row 4: Timeline & Reference */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <FormField delay={0.35}>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                      <Clock size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                      Timeline <span className="text-[#F43F5E]">*</span>
                    </label>
                    <select
                      {...register("timeline")}
                      aria-label="Project timeline"
                      className={selectBaseClass}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-popover">
                        Select timeline
                      </option>
                      {timelines.map((t) => (
                        <option key={t} value={t} className="bg-popover">
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="text-[10px] sm:text-xs text-[#F43F5E] mt-1">{errors.timeline.message}</p>
                    )}
                  </FormField>
                  <FormField delay={0.4}>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                      <LinkIcon size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                      Reference Link
                    </label>
                    <input
                      {...register("referenceLink")}
                      aria-label="Reference link"
                      className={inputBaseClass}
                      placeholder="https://example.com"
                    />
                    {errors.referenceLink && (
                      <p className="text-[10px] sm:text-xs text-[#F43F5E] mt-1">{errors.referenceLink.message}</p>
                    )}
                  </FormField>
                </div>

                {/* Row 5: Description */}
                <FormField delay={0.45}>
                  <label className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                    <FileText size={12} className="sm:!w-[13px] sm:!h-[13px]" />
                    Project Description <span className="text-[#F43F5E]">*</span>
                  </label>
                  <textarea
                    {...register("description")}
                    aria-label="Project description"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-3 min-h-[48px] rounded-lg bg-muted/50 border border-border text-foreground text-sm placeholder-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                  {errors.description && (
                    <p className="text-[10px] sm:text-xs text-[#F43F5E] mt-1">{errors.description.message}</p>
                  )}
                </FormField>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit project inquiry"
                  className="w-full py-3.5 sm:py-4 min-h-[48px] bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#7C3AED]/15 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden text-sm sm:text-base"
                  whileHover={{ scale: isSubmitting ? 1 : 1.01, y: isSubmitting ? 0 : -1 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span className="absolute inset-0 -translate-x-full hover-shimmer pointer-events-none" />
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin sm:!w-[18px] sm:!h-[18px]" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:!w-[18px] sm:!h-[18px]" />
                      Send Project Inquiry
                      <ArrowRight size={13} className="ml-1 sm:!w-[14px] sm:!h-[14px]" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
