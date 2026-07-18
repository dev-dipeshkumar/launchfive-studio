export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  specialty: string;
  bio: string;
  skills: string[];
  highlight: string;
  socials: {
    linkedin?: string;
    portfolio?: string;
  };
  avatarInitials: string;
  /** Profile photo path served from /public/team/. Falls back to initials if missing. */
  image?: string;
  color: string;
  gradient: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Dipesh Kumar",
    role: "Full-Stack Developer",
    tagline: "Builds it. Ships it. Owns it.",
    specialty: "Web apps, dashboards & deployment-ready builds",
    bio: "Builds responsive web apps, dashboards, backend logic, and deployment-ready web experiences. Dipesh specializes in React, Next.js, and Node.js, delivering clean architecture and maintainable code across full-stack projects.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Git"],
    highlight: "3+ years building production web apps",
    socials: {
      linkedin: "https://www.linkedin.com/in/dipeshkumar-dev/",
      portfolio: "https://portfolio-dipeshkumar.vercel.app/",
    },
    avatarInitials: "DB",
    image: "/team/dipesh.jpg",
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#3B82F6]",
  },
  {
    id: "member-2",
    name: "Ronak Jain",
    role: "App Developer",
    tagline: "Cross-platform. Smooth. Ready.",
    specialty: "Mobile interfaces & cross-platform apps",
    bio: "Works on mobile app interfaces, user flows, Firebase integrations, and cross-platform app structures. Ronak builds with React Native and Flutter, creating app experiences that are smooth, functional, and platform-ready.",
    skills: ["React Native", "Flutter", "Firebase", "iOS", "Android", "REST APIs"],
    highlight: "Published apps on Play Store & App Store",
    socials: {
      linkedin: "https://www.linkedin.com/in/ronak-jain-b49955289/",
      portfolio: "https://ronak-jain-ai-ml-por-7mcu.bolt.host/",
    },
    avatarInitials: "RJ",
    image: "/team/ronak.jpg",
    color: "#06B6D4",
    gradient: "from-[#06B6D4] to-[#10B981]",
  },
  {
    id: "member-3",
    name: "Prince Chauhan",
    role: "UI/UX Designer",
    tagline: "Designs for humans first.",
    specialty: "User journeys, wireframes & product interfaces",
    bio: "Designs clean user journeys, wireframes, prototypes, and product interfaces focused on clarity. Prince creates design systems and interaction patterns that make digital products intuitive and visually coherent.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems", "Accessibility"],
    highlight: "Designed interfaces for 10+ product concepts",
    socials: {
      linkedin: "https://www.linkedin.com/in/prince-chouhan06/",
      portfolio: "https://princechouhan.netlify.app/",
    },
    avatarInitials: "PC",
    image: "/team/prince.jpg",
    color: "#10B981",
    gradient: "from-[#10B981] to-[#06B6D4]",
  },
  {
    id: "member-4",
    name: "Pooja Kumawat",
    role: "Graphic Designer",
    tagline: "Visuals that speak before words.",
    specialty: "Brand visuals, social designs & digital assets",
    bio: "Creates brand visuals, social media designs, templates, banners, and digital creative assets. Pooja works across Illustrator, Photoshop, and InDesign to produce consistent, on-brand graphics for digital and print platforms.",
    skills: ["Illustrator", "Photoshop", "InDesign", "Brand Identity", "Typography", "Print Design"],
    highlight: "Created brand identities for 8+ businesses",
    socials: {
      linkedin: "https://www.linkedin.com/in/pooja-kumavat-139b21302/",
      portfolio: "https://www.mycvcreator.com/site/poojakumavatresume",
    },
    avatarInitials: "PK",
    image: "/team/pooja.jpg",
    color: "#F43F5E",
    gradient: "from-[#F43F5E] to-[#EC4899]",
  },
  {
    id: "member-5",
    name: "Mehul Kumar",
    role: "Ads & Campaign Designer",
    tagline: "Stops the scroll. Drives the click.",
    specialty: "Campaign visuals, ad creatives & launch graphics",
    bio: "Designs campaign visuals, ad creatives, launch graphics, and promotional content for digital platforms. Mehul creates attention-focused creatives sized and styled for social, display, and paid media channels.",
    skills: ["Ad Design", "Campaign Strategy", "Motion Graphics", "After Effects", "Copywriting", "Analytics"],
    highlight: "Designed ad campaigns with 2M+ impressions",
    socials: {
      linkedin: "https://www.linkedin.com/in/mehul-kumar-195939289/",
      portfolio: "https://ai-ml-portfolio2.vercel.app/",
    },
    avatarInitials: "MK",
    image: "/team/mehul.jpg",
    color: "#F97316",
    gradient: "from-[#F97316] to-[#F59E0B]",
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  engagement: "low" | "medium" | "high";
  clientAction: string;
  teamAction: string;
  duration: string;
  color: string;
}

export const workProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description: "We understand your goals, audience, offer, requirements, and expected outcome. This stage sets the direction for everything that follows.",
    icon: "Search",
    engagement: "high",
    clientAction: "Share your vision, goals & requirements",
    teamAction: "Listen, research & define project scope",
    duration: "1-2 days",
    color: "#7C3AED",
  },
  {
    step: 2,
    title: "Plan",
    description: "We define the structure, scope, timeline, content needs, and creative direction. A clear plan keeps the project organized and expectations aligned.",
    icon: "ClipboardList",
    engagement: "medium",
    clientAction: "Approve scope & timeline",
    teamAction: "Create roadmap & content plan",
    duration: "1-2 days",
    color: "#8B5CF6",
  },
  {
    step: 3,
    title: "Design",
    description: "We create layouts, visuals, user flows, and brand-aligned interface directions. Every design decision is intentional and tied to the project goals.",
    icon: "Palette",
    engagement: "high",
    clientAction: "Review designs & share feedback",
    teamAction: "Create wireframes, mockups & UI",
    duration: "3-5 days",
    color: "#06B6D4",
  },
  {
    step: 4,
    title: "Build",
    description: "We develop the website, app, creative assets, or campaign materials using modern tools and clean implementation practices.",
    icon: "Code2",
    engagement: "low",
    clientAction: "Sit back — we handle the build",
    teamAction: "Develop, code & assemble the project",
    duration: "5-10 days",
    color: "#10B981",
  },
  {
    step: 5,
    title: "Review",
    description: "We check design, responsiveness, content clarity, usability, and project completeness. Internal review ensures quality before anything reaches the client.",
    icon: "CheckCircle2",
    engagement: "low",
    clientAction: "Wait for quality check completion",
    teamAction: "Test, QA & polish everything",
    duration: "1-2 days",
    color: "#F97316",
  },
  {
    step: 6,
    title: "Refine",
    description: "We collect your feedback and make improvements based on the agreed project scope. Revisions are focused, purposeful, and aligned with the original direction.",
    icon: "GitBranch",
    engagement: "high",
    clientAction: "Share revisions & final feedback",
    teamAction: "Implement changes & fine-tune",
    duration: "2-3 days",
    color: "#EC4899",
  },
  {
    step: 7,
    title: "Deliver",
    description: "We hand over the final work with the required files, links, documentation, or deployment support. You receive everything needed to move forward confidently.",
    icon: "Rocket",
    engagement: "medium",
    clientAction: "Receive files & project handover",
    teamAction: "Deploy, document & deliver",
    duration: "1 day",
    color: "#3B82F6",
  },
];