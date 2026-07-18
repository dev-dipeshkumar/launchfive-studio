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
import { Button } from "@/components/ui/button";

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
        backgroundColor: `${color}1A`,
        color: `${color}ff`,
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
      className="section-padding relative overflow-hidden bg-section-light-bg text-section-light-foreground"
    >
      {/* Background accent */}
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full pointer-events-none">
        <div className="w-full h-full bg-primary/[0.04] dark:bg-primary/[0.02] rounded-full blur-[120px]" />
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
                  className="rounded-xl bg-section-light-card border border-section-light-border overflow-hidden data-[state=open]:border-primary/30 transition-all duration-300 px-4 sm:px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4 sm:py-5 text-section-light-foreground text-sm sm:text-base font-medium text-left gap-3">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <HelpCircle
                        size={16}
                        className="text-primary shrink-0 sm:!w-[18px] sm:!h-[18px]"
                      />
                      <span className="text-left">{faq.question}</span>
                    </div>
                    <CategoryBadge category={faq.category} />
                  </AccordionTrigger>
                  <AccordionContent className="text-section-light-foreground/60 text-xs sm:text-sm leading-relaxed pb-4 sm:pb-5">
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
          <p className="text-section-light-foreground/60 text-sm">
            Still have questions?
          </p>
          <Button asChild>
            <a href="#contact">
              Ask Us Anything
              <ArrowRight size={14} className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
