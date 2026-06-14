"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CustomCursor from "@/components/common/CustomCursor";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUs from "@/components/home/WhyUs";
import TeamPreview from "@/components/home/TeamPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ProcessSection from "@/components/home/ProcessSection";
import ContactCTA from "@/components/home/ContactCTA";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070A13]">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesPreview />
        <WhyUs />
        <TeamPreview />
        <PortfolioPreview />
        <ProcessSection />
        <ContactCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
