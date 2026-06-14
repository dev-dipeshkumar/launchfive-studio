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
      "We build complete web applications from frontend to backend, delivering scalable, high-performance solutions that grow with your business.",
    features: [
      "Frontend UI with React & Next.js",
      "Backend APIs & microservices",
      "Database design & setup",
      "Authentication & authorization",
      "Admin dashboards",
      "Deployment & DevOps",
    ],
    bestFor: "Startups, SaaS products, and businesses needing complete web platforms",
    color: "#7C3AED",
  },
  {
    id: "mobile-app-dev",
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Cross-platform mobile applications built with React Native that deliver native-like experiences on both iOS and Android devices.",
    features: [
      "React Native development",
      "iOS & Android deployment",
      "Push notifications",
      "Offline capabilities",
      "App Store optimization",
      "Maintenance & updates",
    ],
    bestFor: "Businesses reaching mobile users, on-demand apps, and MVPs",
    color: "#06B6D4",
  },
  {
    id: "website-design",
    title: "Website Design",
    icon: Globe,
    description:
      "Beautiful, responsive websites that capture your brand essence and convert visitors into loyal customers with modern design principles.",
    features: [
      "Responsive layouts",
      "Landing page design",
      "CMS integration",
      "SEO optimization",
      "Performance tuning",
      "Analytics setup",
    ],
    bestFor: "Small businesses, portfolios, and corporate websites",
    color: "#F97316",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    description:
      "User-centered design that combines aesthetics with functionality, creating intuitive interfaces that delight users and drive engagement.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design systems",
      "Interaction design",
      "Usability testing",
      "Design documentation",
    ],
    bestFor: "Product teams, app redesigns, and digital transformation projects",
    color: "#10B981",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: PenTool,
    description:
      "Eye-catching visual designs for both digital and print media that communicate your message with clarity and creative flair.",
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
      "Memorable, versatile logos that embody your brand identity and make a lasting impression across every touchpoint.",
    features: [
      "Concept exploration",
      "Multiple design directions",
      "Vector file delivery",
      "Brand guideline sheet",
      "Color palette definition",
      "Usage guidelines",
    ],
    bestFor: "New businesses, rebrands, and startups establishing identity",
    color: "#8B5CF6",
  },
  {
    id: "ad-creatives",
    title: "Ad Creatives",
    icon: Image,
    description:
      "High-converting ad visuals for social media, display networks, and paid campaigns that stop the scroll and drive clicks.",
    features: [
      "Facebook & Instagram ads",
      "Google Display ads",
      "Video thumbnails",
      "A/B test variations",
      "Platform-specific sizing",
      "Animated creatives",
    ],
    bestFor: "E-commerce, performance marketers, and growth teams",
    color: "#EC4899",
  },
  {
    id: "ad-campaign-design",
    title: "Ad Campaign Design",
    icon: Megaphone,
    description:
      "Complete ad campaign visual strategies from concept to execution, ensuring consistency and impact across all channels.",
    features: [
      "Campaign visual strategy",
      "Multi-platform assets",
      "Copywriting support",
      "Audience-targeted variants",
      "Performance tracking setup",
      "Iterative optimization",
    ],
    bestFor: "Agencies, product launches, and seasonal promotions",
    color: "#14B8A6",
  },
  {
    id: "social-media-templates",
    title: "Social Media Templates",
    icon: LayoutTemplate,
    description:
      "Ready-to-use, on-brand social media templates that streamline your content creation and maintain visual consistency.",
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
      "Comprehensive brand identity packages that define your visual language and ensure consistency across every medium and platform.",
    features: [
      "Logo & variations",
      "Color system & typography",
      "Iconography & patterns",
      "Brand style guide",
      "Stationery & business cards",
      "Digital brand assets",
    ],
    bestFor: "New brands, startups, and businesses going through rebranding",
    color: "#6366F1",
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    icon: Rocket,
    description:
      "Conversion-optimized landing pages designed to capture leads, drive sign-ups, and maximize your campaign ROI with data-driven layouts.",
    features: [
      "Conversion-optimized layout",
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
