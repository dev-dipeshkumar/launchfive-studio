export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tools: string[];
  takeaway: string;
  color: string;
  gradient: string;
  tags: string[];
  year: string;
  projectUrl?: string;
  projectUrlLabel?: string;
  isConcept: boolean;
}

export const portfolioCategories = [
  "All",
  "Website Design",
  "UI/UX",
  "Web Development",
  "Branding",
  "Logo Design",
  "Ad Creatives",
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "PulseBoard — SaaS Analytics Dashboard",
    category: "Web Development",
    thumbnail: "/portfolio/saas-dashboard.webp",
    description:
      "A full-stack analytics dashboard for SaaS teams with real-time data visualization, custom chart widgets, role-based access, and a responsive dark UI built with Next.js and Tailwind CSS.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    takeaway:
      "Demonstrates our ability to build complex, data-heavy web applications with clean architecture, real-time rendering, and a polished dark-themed interface.",
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#3B82F6]",
    tags: ["Dashboard", "Full-Stack", "Dark UI", "Real-time"],
    year: "2025",
    projectUrl: "https://pulseboard-demo.vercel.app",
    projectUrlLabel: "View Live",
    isConcept: false,
  },
  {
    id: "proj-2",
    title: "FinWise — Mobile Banking App UI",
    category: "UI/UX",
    thumbnail: "/portfolio/fintech-app.webp",
    description:
      "A mobile banking app UI kit featuring a dashboard, transaction history, fund transfers, and card management screens. Designed with a focus on clarity, trust, and smooth navigation for fintech users.",
    tools: ["Figma", "Prototyping", "Design System", "Micro-Interactions"],
    takeaway:
      "Shows our approach to designing secure, user-friendly financial interfaces with clear hierarchy, accessible touch targets, and platform-native interaction patterns.",
    color: "#06B6D4",
    gradient: "from-[#06B6D4] to-[#10B981]",
    tags: ["Fintech", "Mobile", "UI Kit", "Prototyping"],
    year: "2025",
    projectUrl: "https://figma.com/community/file/finwise-app-ui",
    projectUrlLabel: "View Design",
    isConcept: false,
  },
  {
    id: "proj-3",
    title: "SpiceRoot — Restaurant Brand Identity",
    category: "Branding",
    thumbnail: "/portfolio/brand-identity.webp",
    description:
      "A complete brand identity for a modern Indian restaurant including logo design, color palette, typography system, menu card layout, business card, and social media brand guidelines.",
    tools: ["Illustrator", "Figma", "Canva", "Typography"],
    takeaway:
      "Demonstrates our ability to create cohesive, memorable brand identities that work across digital and print — from logo to packaging to social templates.",
    color: "#F97316",
    gradient: "from-[#F97316] to-[#F59E0B]",
    tags: ["Restaurant", "Brand Identity", "Print + Digital", "Logo"],
    year: "2025",
    projectUrl: "https://behance.net/gallery/spiceroot-brand",
    projectUrlLabel: "View Design",
    isConcept: false,
  },
  {
    id: "proj-4",
    title: "ShopNova — E-Commerce Landing Page",
    category: "Website Design",
    thumbnail: "/portfolio/ecommerce-landing.webp",
    description:
      "A conversion-focused e-commerce landing page built with a dark gradient hero, product showcase grid, trust indicators, and a streamlined checkout flow. Fully responsive and performance-optimized.",
    tools: ["Next.js", "Tailwind CSS", "Figma", "Framer Motion"],
    takeaway:
      "Highlights our ability to design and build landing pages that balance visual impact with conversion strategy — fast loading, mobile-first, and structured for clarity.",
    color: "#10B981",
    gradient: "from-[#10B981] to-[#06B6D4]",
    tags: ["E-Commerce", "Landing Page", "Conversion", "Responsive"],
    year: "2025",
    projectUrl: "https://shopnova-landing.vercel.app",
    projectUrlLabel: "View Live",
    isConcept: false,
  },
  {
    id: "proj-5",
    title: "Social Ad Creative System",
    category: "Ad Creatives",
    thumbnail: "/portfolio/ad-creatives.webp",
    description:
      "A structured set of campaign visuals designed for product launches, seasonal offers, and social media brand awareness across Instagram, Facebook, and LinkedIn formats.",
    tools: ["Canva", "Photoshop", "Campaign Design", "Ad Copy"],
    takeaway:
      "Shows our ability to create platform-ready ad visuals that follow current design trends, platform specifications, and attention-focused layout principles.",
    color: "#EC4899",
    gradient: "from-[#EC4899] to-[#F43F5E]",
    tags: ["Social Ads", "Campaign", "Multi-platform", "Creatives"],
    year: "2025",
    isConcept: true,
  },
  {
    id: "proj-6",
    title: "Logo Concept Collection",
    category: "Logo Design",
    thumbnail: "/portfolio/logo-concepts.webp",
    description:
      "A collection of modern logo directions exploring minimal, bold, and memorable visual identities across different industry verticals — from tech startups to lifestyle brands.",
    tools: ["Illustrator", "Figma", "Brand Strategy"],
    takeaway:
      "Demonstrates our range in logo design — from wordmarks to symbols to combination marks — with consistent visual thinking and scalable output.",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    tags: ["Logo", "Brand Marks", "Wordmarks", "Identity"],
    year: "2025",
    isConcept: true,
  },
];
