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
      "We build responsive web applications with clean frontend, backend logic, databases, dashboards, and deployment-ready structure.",
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
      "We create mobile app interfaces and cross-platform app experiences focused on usability, performance, and smooth user flow.",
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
      "We design modern, responsive websites that communicate your offer clearly and guide visitors toward action.",
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
      "We create user-friendly screens, wireframes, prototypes, and design systems that make digital products easier to use.",
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
      "We design social posts, banners, presentation visuals, brand assets, and marketing graphics for digital platforms.",
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
    title: "Branding & Logo Design",
    icon: PenTool,
    description:
      "We create logo concepts, color palettes, typography styles, and visual identity directions that make your brand look consistent.",
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
    title: "Ad Creatives & Campaign Design",
    icon: Image,
    description:
      "We design attention-focused ad creatives, campaign visuals, and social media templates for launches, offers, and promotions.",
    features: [
      "Facebook & Instagram ads",
      "Google Display ads",
      "Video thumbnails",
      "A/B test variations",
      "Platform-specific sizing",
      "Animated creatives",
    ],
    bestFor: "Small businesses running ad campaigns and growing brands",
    color: "#EC4899",
  },
  {
    id: "ad-campaign-design",
    title: "Campaign Strategy & Design",
    icon: Megaphone,
    description:
      "Complete ad campaign visual concepts from strategy to execution, ensuring consistency across all channels and platforms.",
    features: [
      "Campaign visual strategy",
      "Multi-platform assets",
      "Copywriting support",
      "Audience-targeted variants",
      "Performance tracking setup",
      "Iterative optimization",
    ],
    bestFor: "Product launches, seasonal promotions, and campaign rollouts",
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
      "Comprehensive brand identity packages that define your visual language with logo, color, typography, and usage guidelines for consistent brand presence.",
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
      "Well-structured landing pages designed to present your offer clearly and encourage action with clean layouts and focused messaging.",
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
