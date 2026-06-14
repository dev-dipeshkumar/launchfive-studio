"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

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
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Get in Touch"
          title="Start Your Project"
          description="Tell us what you want to build. We'll review your idea, understand your requirements, and suggest the best direction with clarity."
        />

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl glass p-6 md:p-8 space-y-6"
          >
            {/* Success message */}
            <AnimatePresence>
              {formSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981]"
                >
                  <CheckCircle2 size={20} />
                  <div>
                    <p className="font-medium text-sm">Thanks for reaching out.</p>
                    <p className="text-xs opacity-80">
                      We'll review your project details and get back to you with the next steps.
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
                  className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive"
                >
                  <AlertCircle size={20} />
                  <p className="text-sm">{formError}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                  <User size={14} />
                  Full Name <span className="text-[#F43F5E]">*</span>
                </label>
                <input
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-xs text-[#F43F5E] mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                  <Mail size={14} />
                  Email <span className="text-[#F43F5E]">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="text-xs text-[#F43F5E] mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                  <Phone size={14} />
                  Phone / WhatsApp
                </label>
                <input
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                  <Building2 size={14} />
                  Company Name
                </label>
                <input
                  {...register("company")}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Row 3: Service & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                  <FileText size={14} />
                  Service Needed <span className="text-[#F43F5E]">*</span>
                </label>
                <select
                  {...register("service")}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#0F1629]">
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#0F1629]">
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-xs text-[#F43F5E] mt-1">{errors.service.message}</p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                  <DollarSign size={14} />
                  Budget Range <span className="text-[#F43F5E]">*</span>
                </label>
                <select
                  {...register("budget")}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#0F1629]">
                    Select budget range
                  </option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b} className="bg-[#0F1629]">
                      {b}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-xs text-[#F43F5E] mt-1">{errors.budget.message}</p>
                )}
              </div>
            </div>

            {/* Row 4: Timeline & Reference Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                  <Clock size={14} />
                  Timeline <span className="text-[#F43F5E]">*</span>
                </label>
                <select
                  {...register("timeline")}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#0F1629]">
                    Select timeline
                  </option>
                  {timelines.map((t) => (
                    <option key={t} value={t} className="bg-[#0F1629]">
                      {t}
                    </option>
                  ))}
                </select>
                {errors.timeline && (
                  <p className="text-xs text-[#F43F5E] mt-1">{errors.timeline.message}</p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                  <LinkIcon size={14} />
                  Reference Link
                </label>
                <input
                  {...register("referenceLink")}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                  placeholder="https://example.com"
                />
                {errors.referenceLink && (
                  <p className="text-xs text-[#F43F5E] mt-1">{errors.referenceLink.message}</p>
                )}
              </div>
            </div>

            {/* Row 5: Description */}
            <div>
              <label className="flex items-center gap-1.5 text-sm text-[#94A3B8] mb-2">
                <FileText size={14} />
                Project Description <span className="text-[#F43F5E]">*</span>
              </label>
              <textarea
                {...register("description")}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all resize-none"
                placeholder="Describe your project, goals, and any specific requirements..."
              />
              {errors.description && (
                <p className="text-xs text-[#F43F5E] mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#7C3AED]/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Project Inquiry
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-[#94A3B8]">
              We'll respond within 24 hours. Your information is safe and will never be shared.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
