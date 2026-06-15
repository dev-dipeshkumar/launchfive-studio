import {
  Star,
  Quote,
  type LucideIcon,
} from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  color: string;
  initials: string;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Founder",
    company: "GreenLeaf Organics",
    content:
      "LaunchFive Studio built our e-commerce platform from scratch and the result exceeded every expectation. The team was responsive, creative, and delivered ahead of schedule. Their 7-step process kept everything transparent — we always knew exactly where the project stood. The glassmorphism design they proposed made our brand stand out instantly.",
    rating: 5,
    color: "#10B981",
    initials: "PS",
    projectType: "Full-Stack Development",
  },
  {
    id: "arjun-patel",
    name: "Arjun Patel",
    role: "CEO",
    company: "FinScope Analytics",
    content:
      "We needed a dashboard that handled complex data but still looked clean and modern. LaunchFive nailed it — the UI was intuitive, the animations were smooth, and performance was excellent even with large datasets. Direct communication with the developers made all the difference. No middlemen, no confusion, just great work.",
    rating: 5,
    color: "#06B6D4",
    initials: "AP",
    projectType: "UI/UX Design",
  },
  {
    id: "meera-desai",
    name: "Meera Desai",
    role: "Marketing Head",
    company: "BrightPath Education",
    content:
      "From the initial branding concepts to the final ad creatives, LaunchFive delivered a complete visual identity for our new product line. The team understood our audience and crafted designs that connected emotionally. The turnaround was impressively fast — we had our full campaign ready within a week of approving the concepts.",
    rating: 5,
    color: "#F97316",
    initials: "MD",
    projectType: "Branding & Ad Creatives",
  },
  {
    id: "rohit-kapoor",
    name: "Rohit Kapoor",
    role: "Product Manager",
    company: "TravelBuddy App",
    content:
      "Our mobile app went from a rough idea to a polished MVP in just 5 weeks. The team handled everything — UI design, development, Firebase integration, and even the app store assets. What stood out most was their ownership mindset. They caught issues before we even noticed them and suggested improvements we hadn't considered.",
    rating: 5,
    color: "#7C3AED",
    initials: "RK",
    projectType: "Mobile App Development",
  },
  {
    id: "sneha-iyer",
    name: "Sneha Iyer",
    role: "Creative Director",
    company: "PixelWave Media",
    content:
      "We partnered with LaunchFive for a client's landing page and social media templates. Their design quality is on par with agencies charging 3x the price. The glassmorphism style and dark theme aesthetic were exactly what the brand needed. Quick iterations, zero drama, and the client was thrilled with the result.",
    rating: 5,
    color: "#F43F5E",
    initials: "SI",
    projectType: "Landing Page & Templates",
  },
  {
    id: "vikram-singh",
    name: "Vikram Singh",
    role: "Co-Founder",
    company: "FitTrack Health",
    content:
      "LaunchFive built our health tracking web app with real-time dashboards and smooth animations. The 3D elements in the hero section gave it a premium feel that our users love. Their process was structured yet flexible — they adapted when we changed requirements mid-project without missing a deadline. Highly recommend for startups.",
    rating: 5,
    color: "#8B5CF6",
    initials: "VS",
    projectType: "Full-Stack Development",
  },
];
