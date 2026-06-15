export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "pricing",
    question: "How much does a typical project cost?",
    answer:
      "Our projects start from ₹15,000 for basic landing pages and go up to ₹2,00,000+ for full-stack web applications with custom features. Every project is different, so we provide a detailed quote after understanding your requirements during the free discovery call. We believe in transparent pricing — no hidden fees, no surprise charges. You'll know the exact cost before we begin.",
    category: "Pricing",
  },
  {
    id: "timeline",
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary by project scope. A landing page takes 1-2 weeks, a full website 2-4 weeks, a mobile app MVP 3-6 weeks, and branding packages 1-2 weeks. We follow our 7-step process (Discover → Plan → Design → Build → Review → Refine → Deliver) which keeps everything on track. You'll receive a detailed timeline during the planning phase with milestones and delivery dates.",
    category: "Process",
  },
  {
    id: "revisions",
    question: "How many revisions are included?",
    answer:
      "Every project includes 2 rounds of revisions built into our process — one during the Design phase and one during the Refine phase. This is usually more than enough for most projects. Additional revisions beyond the included rounds are charged at an hourly rate, which we discuss upfront so there are no surprises.",
    category: "Process",
  },
  {
    id: "payment",
    question: "What is your payment structure?",
    answer:
      "We typically work with a 50% upfront payment to begin the project, and the remaining 50% upon delivery. For larger projects (over ₹1,00,000), we offer milestone-based payments tied to project phases. We accept bank transfers (NEFT/IMPS), UPI, and international payments via Wise or PayPal for overseas clients.",
    category: "Pricing",
  },
  {
    id: "communication",
    question: "How do we communicate during the project?",
    answer:
      "You communicate directly with the team members working on your project — no account managers or middlemen. We use WhatsApp for quick updates, Google Meet for review calls, and shared docs for feedback tracking. You'll receive progress updates at every milestone, and you can reach out anytime with questions. Most inquiries get a response within 24 hours.",
    category: "Process",
  },
  {
    id: "technologies",
    question: "What technologies do you work with?",
    answer:
      "We build with modern, production-grade tech stacks. For web development, we use Next.js 16, React 19, TypeScript, and Tailwind CSS 4. For mobile apps, we use React Native and Flutter. Design work happens in Figma and Adobe Creative Suite. We deploy on Firebase, Vercel, or AWS depending on project needs. All our code is clean, well-documented, and future-proof.",
    category: "Technical",
  },
  {
    id: "after-delivery",
    question: "Do you provide support after project delivery?",
    answer:
      "Yes! Every project comes with 2 weeks of free bug-fix support after delivery. For ongoing maintenance, we offer monthly retainer plans starting at ₹5,000/month that cover updates, performance monitoring, security patches, and minor feature additions. We also provide detailed handover documentation so your own team can manage the project if preferred.",
    category: "Support",
  },
  {
    id: "source-code",
    question: "Do I own the source code and design files?",
    answer:
      "Absolutely. Upon full payment, you receive complete ownership of all source code, design files (Figma), and assets created for your project. We also provide deployment documentation and a handover guide. The only exception is third-party libraries or stock assets, which are governed by their respective licenses.",
    category: "Technical",
  },
];
