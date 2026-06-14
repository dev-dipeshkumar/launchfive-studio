export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
    behance?: string;
  };
  avatarInitials: string;
  color: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Arjun Mehta",
    role: "Full-Stack Developer",
    specialty: "Building scalable web platforms with modern frameworks",
    bio: "A passionate full-stack developer with 6+ years of experience crafting high-performance web applications. Specializes in React, Next.js, Node.js, and cloud architecture. Arjun transforms complex requirements into clean, maintainable code that scales effortlessly.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    avatarInitials: "AM",
    color: "#7C3AED",
  },
  {
    id: "member-2",
    name: "Priya Sharma",
    role: "App Developer",
    specialty: "Cross-platform mobile apps with native performance",
    bio: "An expert mobile developer who brings ideas to life on iOS and Android using React Native and Flutter. With 5+ years of experience, Priya builds smooth, responsive mobile experiences that users love, from MVPs to enterprise-scale applications.",
    skills: ["React Native", "Flutter", "Firebase", "iOS", "Android", "REST APIs"],
    socials: {
      github: "#",
      linkedin: "#",
    },
    avatarInitials: "PS",
    color: "#06B6D4",
  },
  {
    id: "member-3",
    name: "Kabir Verma",
    role: "UI/UX Designer",
    specialty: "Creating intuitive interfaces that delight users",
    bio: "A design thinker who bridges the gap between aesthetics and usability. Kabir has 7+ years of experience designing digital products for startups and Fortune 500 companies alike, with a focus on user research, interaction design, and design systems.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems", "Accessibility"],
    socials: {
      dribbble: "#",
      linkedin: "#",
      behance: "#",
    },
    avatarInitials: "KV",
    color: "#10B981",
  },
  {
    id: "member-4",
    name: "Sara Khan",
    role: "Graphic Designer",
    specialty: "Visual storytelling through creative design",
    bio: "A versatile graphic designer with an eye for detail and a passion for visual storytelling. Sara creates stunning brand identities, marketing materials, and digital assets that capture attention and communicate messages with clarity and impact.",
    skills: ["Illustrator", "Photoshop", "InDesign", "Brand Identity", "Typography", "Print Design"],
    socials: {
      behance: "#",
      dribbble: "#",
      linkedin: "#",
    },
    avatarInitials: "SK",
    color: "#F43F5E",
  },
  {
    id: "member-5",
    name: "Rohan Das",
    role: "Ads & Campaign Designer",
    specialty: "High-converting ad creatives and campaign visuals",
    bio: "A creative strategist who designs ad campaigns that convert. Rohan combines data-driven insights with compelling visuals to create ads that stop the scroll and drive action, managing end-to-end campaign design across all major platforms.",
    skills: ["Ad Design", "Campaign Strategy", "Motion Graphics", "After Effects", "Copywriting", "Analytics"],
    socials: {
      linkedin: "#",
      twitter: "#",
      behance: "#",
    },
    avatarInitials: "RD",
    color: "#F97316",
  },
];

export const workProcess = [
  {
    step: 1,
    title: "Requirement Discussion",
    description: "We start with a detailed conversation to understand your goals, vision, target audience, and project scope before writing a single line of code.",
  },
  {
    step: 2,
    title: "Design Planning",
    description: "Our designers create wireframes, mockups, and prototypes that align with your brand and ensure an optimal user experience across all devices.",
  },
  {
    step: 3,
    title: "Development & Production",
    description: "Our developers and designers work in parallel, building the frontend, backend, and creative assets with clean, scalable code and pixel-perfect designs.",
  },
  {
    step: 4,
    title: "Internal Review",
    description: "Every project goes through rigorous internal review including code audits, design critiques, and quality assurance testing before client presentation.",
  },
  {
    step: 5,
    title: "Client Feedback",
    description: "We present the work to you, gather feedback, and iterate until every detail meets your expectations. Your satisfaction is our priority.",
  },
  {
    step: 6,
    title: "Final Delivery",
    description: "After approval, we deliver the final product with complete documentation, source files, and deployment support for a smooth handover.",
  },
  {
    step: 7,
    title: "Support & Upgrades",
    description: "Our relationship does not end at delivery. We provide ongoing support, maintenance, and feature upgrades to keep your product ahead of the curve.",
  },
];
