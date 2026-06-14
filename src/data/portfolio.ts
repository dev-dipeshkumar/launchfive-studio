export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tools: string[];
  takeaway: string;
  color: string;
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
    title: "Startup Landing Page Concept",
    category: "Website Design",
    thumbnail: "",
    description: "A modern landing page concept for startups that need a clean, responsive, and conversion-focused web presence. Designed with clear sections, smooth scrolling, and mobile-first layout.",
    tools: ["Next.js", "Tailwind CSS", "Figma"],
    takeaway: "Demonstrates our ability to design and build modern, responsive landing pages from scratch.",
    color: "#7C3AED",
  },
  {
    id: "proj-2",
    title: "Task Manager App UI",
    category: "UI/UX",
    thumbnail: "",
    description: "A mobile app interface concept focused on simple task organization, clean screens, and beginner-friendly user flow. Includes wireframes, high-fidelity mockups, and an interactive prototype.",
    tools: ["Figma", "Prototyping", "UI Design"],
    takeaway: "Shows our approach to clean, user-centered mobile interface design with clear navigation.",
    color: "#06B6D4",
  },
  {
    id: "proj-3",
    title: "Local Business Website Demo",
    category: "Web Development",
    thumbnail: "",
    description: "A sample responsive website layout for local businesses such as cafes, gyms, salons, or service providers. Features a hero section, service cards, contact form, and map integration.",
    tools: ["React", "Tailwind CSS", "Responsive Design"],
    takeaway: "A practical website template that shows we can build functional, good-looking business sites.",
    color: "#F97316",
  },
  {
    id: "proj-4",
    title: "Brand Identity Practice Kit",
    category: "Branding",
    thumbnail: "",
    description: "A practice branding kit including logo direction, color palette, typography style, and social media usage examples. Created as a concept project to explore cohesive brand system design.",
    tools: ["Illustrator", "Figma", "Canva"],
    takeaway: "Demonstrates our understanding of brand consistency across logo, colors, type, and social assets.",
    color: "#10B981",
  },
  {
    id: "proj-5",
    title: "Social Media Ad Creative Set",
    category: "Ad Creatives",
    thumbnail: "",
    description: "A concept set of social media ad designs for product launches, offers, and awareness campaigns. Includes static and animated formats sized for Instagram, Facebook, and Google Display.",
    tools: ["Canva", "Photoshop", "Campaign Design"],
    takeaway: "Shows our ability to create platform-ready ad visuals that follow current design trends.",
    color: "#EC4899",
  },
  {
    id: "proj-6",
    title: "Logo Exploration Collection",
    category: "Logo Design",
    thumbnail: "",
    description: "A collection of logo concepts created to explore modern, minimal, and memorable visual identities. Each concept includes multiple directions, color variations, and usage mockups.",
    tools: ["Illustrator", "Figma"],
    takeaway: "Demonstrates our range in logo design — from wordmarks to symbols to combination marks.",
    color: "#8B5CF6",
  },
];
