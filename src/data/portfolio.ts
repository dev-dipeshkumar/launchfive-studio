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
  isSample?: boolean;
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
    title: "Expense Tracker Dashboard",
    category: "Websites",
    thumbnail: "",
    problem: "Built as a personal project to practice full-stack development — a dashboard for tracking daily expenses, setting budgets, and visualizing spending habits over time.",
    solution: "Developed using Next.js with a REST API backend, interactive Chart.js visualizations, user authentication, and a responsive dark-mode UI. Deployed on Vercel for easy access.",
    tools: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL", "Tailwind CSS"],
    result: "A fully functional expense tracking app built from scratch — good practice for real-world SaaS dashboards.",
    color: "#7C3AED",
    isSample: true,
  },
  {
    id: "proj-2",
    title: "Campus Event Finder App",
    category: "Mobile Apps",
    thumbnail: "",
    problem: "A university project to design and prototype a mobile app that helps students discover campus events, RSVP, and get reminders — no existing solution was student-friendly enough.",
    solution: "Built a React Native prototype with Firebase for real-time event data, push notifications, and an offline-first approach. Designed the UI around student feedback gathered during usability testing.",
    tools: ["React Native", "Firebase", "TypeScript", "Push Notifications", "Figma"],
    result: "A working prototype demonstrated at a university showcase — received positive feedback from 50+ student testers.",
    color: "#06B6D4",
    isSample: true,
  },
  {
    id: "proj-3",
    title: "Task Management UI Concept",
    category: "UI/UX",
    thumbnail: "",
    problem: "As a design exercise, explored how a modern task management tool could look and feel — focusing on reducing cognitive load and making project navigation intuitive.",
    solution: "Created a complete design system in Figma with 80+ components, covering task boards, calendar views, team collaboration, and notifications. Built an interactive prototype for user testing.",
    tools: ["Figma", "Prototyping", "User Research", "Design System", "Adobe XD"],
    result: "A polished UI concept with documented design tokens and interaction patterns — ready to hand off to developers.",
    color: "#10B981",
    isSample: true,
  },
  {
    id: "proj-4",
    title: "Tech Startup Brand Concept",
    category: "Branding",
    thumbnail: "",
    problem: "Designed a fictional brand identity for a tech startup concept, exploring how a modern AI-driven company might present itself visually from scratch.",
    solution: "Created a complete brand identity including logo, color system, typography, iconography, stationery mockups, and a detailed brand style guide — all conceived as a portfolio exercise.",
    tools: ["Illustrator", "Photoshop", "Figma", "Brand Strategy", "Typography"],
    result: "A cohesive brand concept showcased in our portfolio — demonstrates our ability to think holistically about visual identity.",
    color: "#F97316",
    isSample: true,
  },
  {
    id: "proj-5",
    title: "Eco-Friendly Brand Logo Concepts",
    category: "Logos",
    thumbnail: "",
    problem: "As a practice exercise, explored logo design for a sustainable lifestyle brand — experimenting with how eco-conscious values can be communicated through minimal, memorable marks.",
    solution: "Developed three distinct logo directions combining leaf motifs with clean typography, each with its own rationale. Delivered vector files and a mini usage guide for each concept.",
    tools: ["Illustrator", "Figma", "Color Theory", "Typography"],
    result: "Three polished logo concepts that show our range in brand mark design — from organic to geometric approaches.",
    color: "#F43F5E",
    isSample: true,
  },
  {
    id: "proj-6",
    title: "Fitness App Ad Creative Concepts",
    category: "Ad Creatives",
    thumbnail: "",
    problem: "Created ad creative concepts for a fictional fitness app launch — exploring how to grab attention on social feeds with bold visuals and clear messaging.",
    solution: "Designed a set of ad variations for Instagram, Facebook, and Google Display, including static and animated formats. Each concept includes A/B copy variations and platform-optimized sizing.",
    tools: ["Photoshop", "After Effects", "Canva", "Copywriting", "Figma"],
    result: "A complete ad creative package ready for a real campaign — shows our understanding of platform-specific design requirements.",
    color: "#EC4899",
    isSample: true,
  },
  {
    id: "proj-7",
    title: "Cafe Social Media Template Kit",
    category: "Templates",
    thumbnail: "",
    problem: "Built a template kit for a fictional local cafe — designing reusable social media posts that the team could customize daily without needing a designer each time.",
    solution: "Created 25+ customizable Instagram, Facebook, and story templates in both Canva and Figma, with brand-consistent color palettes, typography, and placeholder layouts for easy editing.",
    tools: ["Canva", "Figma", "Brand Design", "Template Architecture"],
    result: "A practical template kit that demonstrates our ability to create scalable, on-brand design systems for social media.",
    color: "#F59E0B",
    isSample: true,
  },
  {
    id: "proj-8",
    title: "Tech Conference Campaign Concept",
    category: "Campaign Designs",
    thumbnail: "",
    problem: "As a concept project, designed a visual campaign for a fictional developer conference — from web banners and social media to event signage and merchandise.",
    solution: "Created a full campaign identity with bold geometric visuals, consistent across digital ads, social posts, speaker deck templates, lanyard designs, and promotional material mockups.",
    tools: ["Illustrator", "Photoshop", "After Effects", "InDesign", "Figma"],
    result: "A cohesive multi-channel campaign concept that shows our ability to maintain visual consistency across diverse formats and platforms.",
    color: "#14B8A6",
    isSample: true,
  },
];
