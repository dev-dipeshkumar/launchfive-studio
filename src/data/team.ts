export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  skills: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
  avatarInitials: string;
  color: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Dipesh Borana",
    role: "Full-Stack Developer",
    specialty: "Web apps, dashboards & deployment-ready builds",
    bio: "Builds responsive web apps, dashboards, backend logic, and deployment-ready web experiences. Dipesh specializes in React, Next.js, and Node.js, delivering clean architecture and maintainable code across full-stack projects.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Git"],
    socials: {
      linkedin: "https://www.linkedin.com/in/dipeshkumar-dev/",
      twitter: "#",
      portfolio: "#",
    },
    avatarInitials: "DB",
    color: "#7C3AED",
  },
  {
    id: "member-2",
    name: "Ronak Jain",
    role: "App Developer",
    specialty: "Mobile interfaces & cross-platform apps",
    bio: "Works on mobile app interfaces, user flows, Firebase integrations, and cross-platform app structures. Ronak builds with React Native and Flutter, creating app experiences that are smooth, functional, and platform-ready.",
    skills: ["React Native", "Flutter", "Firebase", "iOS", "Android", "REST APIs"],
    socials: {
      linkedin: "https://www.linkedin.com/in/ronak-jain-b49955289/",
      twitter: "#",
      portfolio: "#",
    },
    avatarInitials: "RJ",
    color: "#06B6D4",
  },
  {
    id: "member-3",
    name: "Prince Chauhan",
    role: "UI/UX Designer",
    specialty: "User journeys, wireframes & product interfaces",
    bio: "Designs clean user journeys, wireframes, prototypes, and product interfaces focused on clarity. Prince creates design systems and interaction patterns that make digital products intuitive and visually coherent.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems", "Accessibility"],
    socials: {
      linkedin: "https://www.linkedin.com/in/prince-chouhan06/",
      twitter: "#",
      portfolio: "#",
    },
    avatarInitials: "PC",
    color: "#10B981",
  },
  {
    id: "member-4",
    name: "Pooja Kumawat",
    role: "Graphic Designer",
    specialty: "Brand visuals, social designs & digital assets",
    bio: "Creates brand visuals, social media designs, templates, banners, and digital creative assets. Pooja works across Illustrator, Photoshop, and InDesign to produce consistent, on-brand graphics for digital and print platforms.",
    skills: ["Illustrator", "Photoshop", "InDesign", "Brand Identity", "Typography", "Print Design"],
    socials: {
      linkedin: "https://www.linkedin.com/in/pooja-kumavat-139b21302/",
      twitter: "#",
      portfolio: "#",
    },
    avatarInitials: "PK",
    color: "#F43F5E",
  },
  {
    id: "member-5",
    name: "Mehul Kumar",
    role: "Ads & Campaign Designer",
    specialty: "Campaign visuals, ad creatives & launch graphics",
    bio: "Designs campaign visuals, ad creatives, launch graphics, and promotional content for digital platforms. Mehul creates attention-focused creatives sized and styled for social, display, and paid media channels.",
    skills: ["Ad Design", "Campaign Strategy", "Motion Graphics", "After Effects", "Copywriting", "Analytics"],
    socials: {
      linkedin: "https://www.linkedin.com/in/mehul-kumar-195939289/",
      twitter: "#",
      portfolio: "#",
    },
    avatarInitials: "MK",
    color: "#F97316",
  },
];

export const workProcess = [
  {
    step: 1,
    title: "Discover",
    description: "We understand your goals, audience, offer, requirements, and expected outcome. This stage sets the direction for everything that follows.",
  },
  {
    step: 2,
    title: "Plan",
    description: "We define the structure, scope, timeline, content needs, and creative direction. A clear plan keeps the project organized and expectations aligned.",
  },
  {
    step: 3,
    title: "Design",
    description: "We create layouts, visuals, user flows, and brand-aligned interface directions. Every design decision is intentional and tied to the project goals.",
  },
  {
    step: 4,
    title: "Build",
    description: "We develop the website, app structure, creative assets, or campaign materials using modern tools and clean implementation practices.",
  },
  {
    step: 5,
    title: "Review",
    description: "We check design, responsiveness, content clarity, usability, and project completeness. Internal review ensures quality before anything reaches the client.",
  },
  {
    step: 6,
    title: "Refine",
    description: "We collect your feedback and make improvements based on the agreed project scope. Revisions are focused, purposeful, and aligned with the original direction.",
  },
  {
    step: 7,
    title: "Deliver",
    description: "We hand over the final work with the required files, links, documentation, or deployment support. You receive everything needed to move forward confidently.",
  },
];
