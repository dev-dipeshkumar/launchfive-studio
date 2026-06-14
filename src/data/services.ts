import {
  Code2,
  Smartphone,
  Globe,
  Palette,
  PenTool,
  Megaphone,
  Image,
  LayoutTemplate,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  bestFor: string;
  color: string;
}

export const services: Service[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Development",
    icon: Code2,
    description:
      "We build complete web applications from frontend to backend. Trained in modern frameworks and focused on writing clean, maintainable code — eager to apply our skills on real client projects.",
    features: [
      "Frontend UI with React & Next.js",
      "Backend APIs & microservices",
      "Database design & setup",
      "Authentication & authorization",
      "Admin dashboards",
      "Deployment & DevOps",
    ],
    bestFor: "Startups, small businesses, and anyone needing a complete web platform",
    color: "#7C3AED",
  },
  {
    id: "mobile-app-dev",
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Cross-platform mobile applications built with React Native. We have built app prototypes in coursework and personal projects, and we are excited to bring that experience to real clients.",
    features: [
      "React Native development",
      "iOS & Android deployment",
      "Push notifications",
      "Offline capabilities",
      "App Store preparation",
      "Maintenance & updates",
    ],
    bestFor: "Businesses reaching mobile users, MVPs, and app prototypes",
    color: "#06B6D4",
  },
  {
    id: "website-design",
    title: "Website Design",
    icon: Globe,
    description:
      "Clean, responsive websites that present your brand clearly and professionally. We focus on modern layouts, fast performance, and clear messaging.",
    features: [
      "Responsive layouts",
      "Landing page design",
      "CMS integration",
      "SEO fundamentals",
      "Performance optimization",
      "Analytics setup",
    ],
    bestFor: "Small businesses, portfolios, and personal brands",
    color: "#F97316",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Simple, clean, and user-friendly interface design. We have practiced creating intuitive interfaces through academic and personal projects, and we bring fresh ideas to every design challenge.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design systems",
      "Interaction design",
      "Usability testing",
      "Design documentation",
    ],
    bestFor: "App redesigns, product concepts, and digital design projects",
    color: "#10B981",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: PenTool,
    description:
      "Visual designs, brand elements, social posts, and creative assets that communicate your message clearly. We are constantly exploring new styles and techniques to expand our creative range.",
    features: [
      "Social media graphics",
      "Print materials",
      "Infographics",
      "Presentation design",
      "Marketing collateral",
      "Illustration",
    ],
    bestFor: "Marketing teams, content creators, and brand launches",
    color: "#F43F5E",
  },
  {
    id: "logo-design",
    title: "Logo Design",
    icon: PenTool,
    description:
      "Modern, minimal, and memorable logo concepts. We have developed logo directions as practice projects and coursework, and we approach every new brief with fresh thinking and attention to detail.",
    features: [
      "Concept exploration",
      "Multiple design directions",
      "Vector file delivery",
      "Brand guideline sheet",
      "Color palette definition",
      "Usage guidelines",
    ],
    bestFor: "New businesses, startups, and anyone establishing a visual identity",
    color: "#8B5CF6",
  },
  {
    id: "ad-creatives",
    title: "Ad Creatives",
    icon: Image,
    description:
      "Scroll-stopping ad visuals for social media, display networks, and paid campaigns. We study platform best practices and current trends to craft creatives that stand out.",
    features: [
      "Facebook & Instagram ads",
      "Google Display ads",
      "Video thumbnails",
      "A/B test variations",
      "Platform-specific sizing",
      "Animated creatives",
    ],
    bestFor: "Small businesses running their first ad campaigns and growing brands",
    color: "#EC4899",
  },
  {
    id: "ad-campaign-design",
    title: "Ad Campaign Design",
    icon: Megaphone,
    description:
      "Complete ad campaign visual concepts from concept to execution, ensuring consistency across all channels. We bring a fresh eye to campaign design and are eager to learn from real performance data.",
    features: [
      "Campaign visual strategy",
      "Multi-platform assets",
      "Copywriting support",
      "Audience-targeted variants",
      "Performance tracking setup",
      "Iterative optimization",
    ],
    bestFor: "Product launches, seasonal promotions, and first-time advertisers",
    color: "#14B8A6",
  },
  {
    id: "social-media-templates",
    title: "Social Media Templates",
    icon: LayoutTemplate,
    description:
      "Ready-to-use, on-brand social media templates that streamline your content creation and maintain visual consistency across every post.",
    features: [
      "Instagram post & story templates",
      "LinkedIn banners",
      "Twitter/X headers",
      "TikTok overlays",
      "Canva/Figma source files",
      "Brand-consistent styling",
    ],
    bestFor: "Social media managers, influencers, and content teams",
    color: "#F59E0B",
  },
  {
    id: "branding-kits",
    title: "Branding Kits",
    icon: Layers,
    description:
      "Comprehensive brand identity packages that define your visual language. We have built branding kits as concept projects and understand what goes into a cohesive, professional identity system.",
    features: [
      "Logo & variations",
      "Color system & typography",
      "Iconography & patterns",
      "Brand style guide",
      "Stationery & business cards",
      "Digital brand assets",
    ],
    bestFor: "New brands, startups, and businesses building their first identity",
    color: "#6366F1",
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    icon: Rocket,
    description:
      "Well-structured landing pages designed to present your offer clearly and encourage action. We apply best practices for layout, speed, and usability — and we are eager to test and refine with real data.",
    features: [
      "Clear, focused layout",
      "A/B testing design",
      "Responsive implementation",
      "Fast loading speed",
      "Form & CTA integration",
      "Analytics & tracking",
    ],
    bestFor: "Product launches, lead generation, and marketing campaigns",
    color: "#0EA5E9",
  },
];
