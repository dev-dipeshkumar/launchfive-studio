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
    description:
      "A clean landing page concept designed for early-stage startups that need a clear offer, strong visuals, and a conversion-focused layout.",
    tools: ["Next.js", "Tailwind CSS", "Figma"],
    takeaway:
      "Demonstrates our approach to building modern, responsive landing pages with clear structure and focused messaging.",
    color: "#7C3AED",
  },
  {
    id: "proj-2",
    title: "Task Manager App Interface",
    category: "UI/UX",
    thumbnail: "",
    description:
      "A mobile app UI concept focused on simple navigation, clear task organization, and smooth user experience.",
    tools: ["Figma", "Prototyping", "UI Design"],
    takeaway:
      "Shows our approach to clean, user-centered mobile interface design with clear navigation and logical flow.",
    color: "#06B6D4",
  },
  {
    id: "proj-3",
    title: "Local Business Website Build",
    category: "Web Development",
    thumbnail: "",
    description:
      "A responsive website concept for service-based local businesses that need credibility, service clarity, and easy contact options.",
    tools: ["React", "Tailwind CSS", "Responsive Design"],
    takeaway:
      "A practical website concept that shows our ability to build functional, professional business sites with clear service presentation.",
    color: "#F97316",
  },
  {
    id: "proj-4",
    title: "Brand Identity Direction",
    category: "Branding",
    thumbnail: "",
    description:
      "A visual identity concept including logo direction, color palette, typography, and social media brand style.",
    tools: ["Illustrator", "Figma", "Canva"],
    takeaway:
      "Demonstrates our understanding of brand consistency across logo, colors, type, and social assets.",
    color: "#10B981",
  },
  {
    id: "proj-5",
    title: "Social Ad Creative System",
    category: "Ad Creatives",
    thumbnail: "",
    description:
      "A set of campaign visuals designed for product launches, offers, promotions, and social media awareness.",
    tools: ["Canva", "Photoshop", "Campaign Design"],
    takeaway:
      "Shows our ability to create platform-ready ad visuals that follow current design trends and platform specifications.",
    color: "#EC4899",
  },
  {
    id: "proj-6",
    title: "Logo Concept Collection",
    category: "Logo Design",
    thumbnail: "",
    description:
      "A collection of modern logo directions exploring minimal, bold, and memorable visual identities.",
    tools: ["Illustrator", "Figma"],
    takeaway:
      "Demonstrates our range in logo design — from wordmarks to symbols to combination marks — with consistent visual thinking.",
    color: "#8B5CF6",
  },
];
