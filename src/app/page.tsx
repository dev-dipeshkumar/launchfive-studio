import dynamic from "next/dynamic";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import BackToTop from "@/components/common/BackToTop";
import PageLoader from "@/components/common/PageLoader";
import CookieConsent from "@/components/common/CookieConsent";
import FloatingCTA from "@/components/common/FloatingCTA";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import IdleReady from "@/components/common/IdleReady";
import PWARegister from "@/components/common/PWARegister";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import SectionSkeleton from "@/components/common/SectionSkeleton";

/* ───────────── Lazy-loaded below-the-fold sections ─────────────
   These are client components with heavy deps (framer-motion, modals,
   charts). They are code-split and only fetched when needed, keeping the
   initial bundle to Navbar + Hero for the fastest LCP. */

const Navbar = dynamic(() => import("@/components/common/Navbar"), {
  loading: () => <div className="h-[64px] sm:h-[72px] lg:h-[80px]" aria-hidden="true" />,
});

const sectionFallback = <SectionSkeleton variant="grid" />;
const contactFallback = <SectionSkeleton variant="contact" />;

const ServicesPreview = dynamic(
  () => import("@/components/home/ServicesPreview"),
  { loading: () => sectionFallback }
);
const WhyUs = dynamic(() => import("@/components/home/WhyUs"), {
  loading: () => sectionFallback,
});
const TeamPreview = dynamic(() => import("@/components/home/TeamPreview"), {
  loading: () => sectionFallback,
});
const PortfolioPreview = dynamic(
  () => import("@/components/home/PortfolioPreview"),
  { loading: () => sectionFallback }
);
const ProcessSection = dynamic(
  () => import("@/components/home/ProcessSection"),
  { loading: () => sectionFallback }
);
const FAQSection = dynamic(() => import("@/components/home/FAQSection"), {
  loading: () => sectionFallback,
});
const ContactSection = dynamic(
  () => import("@/components/home/ContactSection"),
  { loading: () => contactFallback }
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden max-w-full">
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      {/* Skip link — first focusable element for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[10000] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <main id="main-content" className="flex-1 overflow-x-hidden">
        <HeroSection />
        <ErrorBoundary>
          <ServicesPreview />
        </ErrorBoundary>
        <ErrorBoundary>
          <WhyUs />
        </ErrorBoundary>
        <ErrorBoundary>
          <TeamPreview />
        </ErrorBoundary>
        <ErrorBoundary>
          <PortfolioPreview />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProcessSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <FAQSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <ContactSection />
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
      <FloatingCTA />
      <WhatsAppButton />
      <CookieConsent />
      <IdleReady />
      <PWARegister />
    </div>
  );
}
