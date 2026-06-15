"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import SectionHeading from "@/components/common/SectionHeading";

/* ───────────── Category Badge ───────────── */
function CategoryBadge({ category }: { category: string }) {
  const colorMap: Record<string, string> = {
    Pricing: "#F97316",
    Process: "#7C3AED",
    Technical: "#06B6D4",
    Support: "#10B981",
  };
  const color = colorMap[category] || "#94A3B8";

  return (
    <span
      className="px-1.5 py-0.5 text-[8px] sm:text-[9px] font-semibold rounded uppercase tracking-wider shrink-0"
      style={{
        backgroundColor: `${color}0A`,
        color: `${color}BB`,
        border: `1px solid ${color}15`,
      }}
    >
      {category}
    </span>
  );
}

/* ───────────── Main Component ───────────── */
export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full pointer-events-none">
        <div className="w-full h-full bg-accent/[0.04] dark:bg-accent/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to the questions we hear most. Can't find what you're looking for? Reach out and we'll get back to you within 24 hours."
        />

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-2 sm:space-y-3"
          >
            {faqItems.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="rounded-xl glass border-0 overflow-hidden data-[state=open]:border-border transition-all duration-300 px-4 sm:px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5 text-foreground text-sm sm:text-base font-medium text-left gap-3">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <HelpCircle
                        size={16}
                        className="text-primary shrink-0 sm:!w-[18px] sm:!h-[18px]"
                      />
                      <span className="text-left">{faq.question}</span>
                    </div>
                    <CategoryBadge category={faq.category} />
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Still have questions?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-primary/15 transition-shadow duration-300"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Ask Us Anything
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
