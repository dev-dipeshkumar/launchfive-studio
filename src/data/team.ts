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
    specialty: "Building clean, responsive web apps with modern tools",
    bio: "Focused on building clean, responsive web apps with modern frontend and backend tools. Arjun has been coding since university, working on personal projects and open-source contributions. He is trained in React, Next.js, and Node.js — and ready to apply these skills to real client work.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Git"],
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
    specialty: "Creating smooth mobile app experiences",
    bio: "Passionate about creating smooth mobile app experiences and learning scalable app development. Priya works with React Native and Flutter, and built a campus event app as a university project. She is eager to take on her first professional mobile project.",
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
    specialty: "Simple, clean, and user-friendly interface design",
    bio: "Focused on simple, clean, and user-friendly interface design. Kabir has designed UI concepts for personal projects and hackathons, practicing user research, interaction design, and building design systems from scratch. He is excited to design for real users and learn from real feedback.",
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
    specialty: "Visual designs, brand elements, and creative assets",
    bio: "Creates visual designs, brand elements, social posts, and creative assets. Sara has built brand concepts, social media content, and print layouts as personal projects — and is now looking forward to applying her skills to real brand identities and marketing materials.",
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
    specialty: "Ad creatives, campaign visuals, and social media design concepts",
    bio: "Works on ad creatives, campaign visuals, and social media design concepts. Rohan has been designing ad concepts and campaign visuals for practice projects and university assignments. He studies platform best practices and current trends — and is keen to apply that knowledge to real campaigns.",
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
    title: "Understand Your Idea",
    description: "We first listen carefully to your goals, needs, audience, and project expectations. Understanding your vision is the foundation of everything we build.",
  },
  {
    step: 2,
    title: "Plan the Direction",
    description: "We prepare a simple plan for design, development, timeline, and deliverables. No jargon, no confusion — just a clear roadmap for your project.",
  },
  {
    step: 3,
    title: "Design & Build",
    description: "Our team works together on the visuals, user flow, development, and creative assets. We collaborate closely so everything stays consistent and on track.",
  },
  {
    step: 4,
    title: "Review Internally",
    description: "Before sharing the work, we review it as a team and improve details. Multiple eyes on every project means fewer mistakes and better quality.",
  },
  {
    step: 5,
    title: "Take Your Feedback",
    description: "We share progress, listen to your suggestions, and make required changes. Your input shapes the final result — we want it to feel right for you.",
  },
  {
    step: 6,
    title: "Deliver Clearly",
    description: "We deliver the final files, website, app, or design assets with proper explanation. You will know exactly what was built and how to use it.",
  },
  {
    step: 7,
    title: "Learn & Support",
    description: "We stay available for basic support and use every project to improve our work. Each client helps us grow — and we want to grow with you.",
  },
];
