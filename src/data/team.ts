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
    specialty: "Building web platforms with modern frameworks",
    bio: "A passionate full-stack developer who has been coding since university, building personal projects and contributing to open-source along the way. Arjun specializes in React, Next.js, and Node.js — and is eager to apply these skills to his first professional client projects.",
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
    specialty: "Cross-platform mobile apps with React Native",
    bio: "An app developer who discovered mobile development during coursework and has been building prototypes ever since. Priya works with React Native and Flutter, and has published a campus event app as a university project — now she is ready to build for real clients.",
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
    specialty: "Creating intuitive, user-centered interfaces",
    bio: "A design thinker who brings aesthetics and usability together. Kabir has designed UI concepts for personal projects and hackathons, with a focus on user research, interaction design, and building design systems from scratch. He is excited to design for real users and learn from real feedback.",
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
    bio: "A versatile graphic designer with an eye for detail and a passion for visual storytelling. Sara has created brand concepts, social media content, and print layouts as personal projects — and is now looking forward to applying her skills to real brand identities and marketing materials.",
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
    specialty: "Compelling ad creatives and campaign visuals",
    bio: "A creative strategist who has been designing ad concepts and campaign visuals for practice projects and university assignments. Rohan studies platform best practices and current trends closely — and is keen to apply that knowledge to real campaigns and learn from actual performance data.",
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
    description: "Our developers and designers work in parallel, building the frontend, backend, and creative assets with clean code and pixel-perfect designs.",
  },
  {
    step: 4,
    title: "Internal Review",
    description: "Every project goes through internal review including code checks, design critiques, and quality testing before we present anything to you.",
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
    description: "Our relationship does not end at delivery. We provide ongoing support, maintenance, and feature upgrades to keep your product running smoothly.",
  },
];
