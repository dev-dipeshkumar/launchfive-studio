"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import BackToTop from "@/components/common/BackToTop";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUs from "@/components/home/WhyUs";
import TeamPreview from "@/components/home/TeamPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ProcessSection from "@/components/home/ProcessSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070A13] overflow-x-hidden max-w-full">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <ServicesPreview />
        <WhyUs />
        <TeamPreview />
        <PortfolioPreview />
        <ProcessSection />
        <FAQSection />
        <ContactCTA />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
