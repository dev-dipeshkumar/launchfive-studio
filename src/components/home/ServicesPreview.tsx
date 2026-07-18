import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import type { Service } from "@/data/services";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { RevealGroup } from "@/components/common/Reveal";
import ServiceModal from "@/components/home/ServiceModal";
import { ArrowRight, Clock, Package, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPreview() {
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-section-light-bg text-section-light-foreground">
      {/* Calm static aura */}
      <div className="absolute inset-0 bg-aura pointer-events-none" />
      <div className="absolute -top-20 right-1/4 w-[34rem] h-[34rem] bg-primary/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Our Services"
          title="What We Build"
          description="From development to design and campaign creatives, we cover the core digital needs of modern businesses with a coordinated team approach."
        />

        {/* Responsive grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, i) => (
              <Reveal key={service.id} direction="up" duration={0.6}>
                <motion.div
                  layout
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedService(service)}
                  className="group relative rounded-2xl p-5 sm:p-6 bg-section-light-card border border-section-light-border hover:border-primary/30 transition-all duration-300 min-h-0 flex flex-col cursor-pointer h-full"
                  data-cursor-hover
                >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-2.5 right-3 sm:right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30">
                      <Sparkles size={9} />
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon + Title */}
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}08)` 
                    }}
                  >
                    <service.icon size={18} style={{ color: service.color }} className="sm:!w-[22px] sm:!h-[22px]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-section-light-foreground font-semibold text-base sm:text-lg mb-0.5 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all">
                      {service.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-medium" style={{ color: service.color }}>
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-section-light-foreground/60 text-sm leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4 flex-1">
                  {service.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-section-light-foreground/60 flex items-center gap-2"
                    >
                      <span
                        className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs" style={{ color: service.color }}>+
                      {service.features.length - 4}
                    </li>
                  )}
                </ul>

                {/* Bottom meta: Price + Timeline + Deliverables */}
                <div className="flex items-center gap-3 mb-3 sm:mb-4 text-[10px] sm:text-[11px]">
                  <div className="flex items-center gap-1 font-semibold" style={{ color: service.color }}>
                    {service.priceRange}
                  </div>
                  <div className="flex items-center gap-1 text-section-light-foreground/60">
                     <Clock size={10} className="sm:!w-[11px] sm:!h-[11px]" />
                     <span>{service.timeline}</span>
                   </div>
                   <div className="flex items-center gap-1 text-section-light-foreground/60">
                     <Package size={10} className="sm:!w-[11px] sm:!h-[11px]" />
                     <span>{service.deliverables.length} deliverables</span>
                   </div>
                </div>

                {/* Gradient divider */}
                <div
                  className="h-px mb-3 sm:mb-4 opacity-20"
                  style={{ 
                    background: `linear-gradient(90deg, ${service.color}, transparent)` 
                  }}
                />

                {/* CTA */}
                 <div className="flex items-center gap-1.5 text-sm font-medium transition-colors min-h-[44px] py-2 text-section-light-foreground">
                   View Details
                   <ArrowRight
                     size={14}
                     className="transition-transform group-hover:translate-x-1"
                   />
                 </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 30px ${service.color}15, 0 0 60px ${service.color}08` 
                  }}
                />
              </motion.div>
              </Reveal>
            ))}
          </AnimatePresence>
        </RevealGroup>

        {/* Show all / Show less toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10"
        >
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="w-full sm:w-auto justify-center"
          >
            {showAll ? "Show Less" : `Explore All ${services.length} Services`}
            <ArrowRight size={16} className={`ml-2 transition-transform ${showAll ? "rotate-[-90deg]" : "rotate-90"}`} />
          </Button>
        </motion.div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>
      </section>
  );
}
