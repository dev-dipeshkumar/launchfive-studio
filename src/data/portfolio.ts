export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  problem: string;
  solution: string;
  tools: string[];
  result: string;
  color: string;
}

export const portfolioCategories = [
  "All",
  "Websites",
  "Mobile Apps",
  "UI/UX",
  "Branding",
  "Logos",
  "Ad Creatives",
  "Templates",
  "Campaign Designs",
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "FinTrack Pro Dashboard",
    category: "Websites",
    thumbnail: "",
    problem: "A fintech startup needed a comprehensive dashboard to help users track investments, analyze market trends, and manage portfolios in real-time.",
    solution: "We built a full-stack web application using Next.js with real-time data visualization, responsive charts, and an intuitive dashboard interface with dark mode support.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "PostgreSQL"],
    result: "45% increase in user engagement and 3x faster data loading compared to the previous platform.",
    color: "#7C3AED",
  },
  {
    id: "proj-2",
    title: "HealthBuddy Mobile App",
    category: "Mobile Apps",
    thumbnail: "",
    problem: "A health-tech company wanted a cross-platform app for patients to book appointments, access medical records, and receive health reminders.",
    solution: "Developed a React Native mobile app with Firebase backend, push notifications, offline mode, and seamless integration with hospital management systems.",
    tools: ["React Native", "Firebase", "Node.js", "TypeScript", "Push Notifications"],
    result: "20K+ downloads in the first month with a 4.8-star rating on both app stores.",
    color: "#06B6D4",
  },
  {
    id: "proj-3",
    title: "Zenith SaaS Platform UI",
    category: "UI/UX",
    thumbnail: "",
    problem: "A SaaS company needed a complete UI overhaul to improve user onboarding, reduce churn, and modernize their outdated interface.",
    solution: "Redesigned the entire product experience from user research to high-fidelity prototypes, creating a cohesive design system with 200+ reusable components.",
    tools: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design System"],
    result: "60% reduction in onboarding time and 35% decrease in user churn rate within 3 months.",
    color: "#10B981",
  },
  {
    id: "proj-4",
    title: "NovaTech Brand Identity",
    category: "Branding",
    thumbnail: "",
    problem: "An AI startup needed a complete brand identity from scratch to establish credibility and stand out in a competitive market.",
    solution: "Created a comprehensive brand identity including logo, color system, typography, iconography, stationery, and a detailed brand style guide for consistent application.",
    tools: ["Illustrator", "Photoshop", "Figma", "Brand Strategy", "Typography"],
    result: "Brand recognition improved by 70% and the new identity was featured in two design publications.",
    color: "#F97316",
  },
  {
    id: "proj-5",
    title: "EcoWear E-commerce Logo",
    category: "Logos",
    thumbnail: "",
    problem: "A sustainable fashion brand needed a logo that communicated eco-friendliness while maintaining a premium, modern aesthetic.",
    solution: "Designed a minimal yet meaningful logo combining leaf motifs with clean typography, delivered in multiple variations with a complete usage guideline.",
    tools: ["Illustrator", "Figma", "Color Theory", "Typography"],
    result: "The logo became instantly recognizable, contributing to a 50% increase in brand recall among target customers.",
    color: "#F43F5E",
  },
  {
    id: "proj-6",
    title: "FitPro Social Ad Campaign",
    category: "Ad Creatives",
    thumbnail: "",
    problem: "A fitness app launch needed high-converting ad creatives across Instagram, Facebook, and Google to drive app installs at scale.",
    solution: "Produced a complete ad creative package with 20+ variations, A/B test designs, animated formats, and platform-optimized sizing for maximum reach.",
    tools: ["Photoshop", "After Effects", "Canva", "Copywriting", "Analytics"],
    result: "2.5x improvement in click-through rate and 40% lower cost per acquisition versus previous campaigns.",
    color: "#EC4899",
  },
  {
    id: "proj-7",
    title: "Cafe Delight Social Templates",
    category: "Templates",
    thumbnail: "",
    problem: "A cafe chain wanted on-brand social media templates their marketing team could use daily without needing a designer every time.",
    solution: "Created a library of 30+ customizable Instagram, Facebook, and story templates in Canva and Figma with brand-consistent styling and easy editing workflows.",
    tools: ["Canva", "Figma", "Brand Design", "Template Architecture"],
    result: "Content creation time reduced by 80% and social media posting frequency increased from 3x to 7x per week.",
    color: "#F59E0B",
  },
  {
    id: "proj-8",
    title: "TechSummit 2025 Campaign",
    category: "Campaign Designs",
    thumbnail: "",
    problem: "A major tech conference needed a cohesive visual campaign spanning digital ads, event branding, speaker decks, and merchandise.",
    solution: "Designed a full campaign identity with bold geometric visuals, consistent across web banners, social media, event signage, lanyards, and promotional materials.",
    tools: ["Illustrator", "Photoshop", "After Effects", "InDesign", "Print Design"],
    result: "Registration increased by 55% year-over-year and sponsor satisfaction scores reached an all-time high.",
    color: "#14B8A6",
  },
];
