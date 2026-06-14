import {
  Users,
  MessageSquare,
  Cpu,
  ShieldCheck,
  ListChecks,
  Handshake,
  Zap,
  Heart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface WhyUsReason {
  id: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  description: string;
  color: string;
  gradient: string;
  stat: {
    value: string;
    label: string;
  };
  features: string[];
  badge: string;
}

export interface WhyUsStat {
  value: string;
  suffix: string;
  label: string;
  color: string;
}

export const reasons: WhyUsReason[] = [
  {
    id: "focused-team",
    icon: Users,
    title: "Focused Team Structure",
    headline: "5 members. Zero waste.",
    description:
      "A tight-knit team means every project gets dedicated attention across development, design, branding, and campaign visuals. No bloated workflows — just focused execution with clear accountability and direct ownership from start to finish.",
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#3B82F6]",
    stat: {
      value: "5",
      label: "Core Members",
    },
    features: [
      "Dedicated specialist per domain",
      "No handoffs or account managers",
      "Direct access to the builder",
      "Faster decision-making",
    ],
    badge: "Core Strength",
  },
  {
    id: "clear-communication",
    icon: MessageSquare,
    title: "Clear Communication",
    headline: "Always in the loop.",
    description:
      "You always know what stage the project is in, what is being worked on, and what comes next. We keep the process transparent with regular updates, clear timelines, and honest feedback — no surprises, no gaps, just straightforward conversation.",
    color: "#06B6D4",
    gradient: "from-[#06B6D4] to-[#10B981]",
    stat: {
      value: "24h",
      label: "Response Time",
    },
    features: [
      "Daily progress visibility",
      "Honest timeline estimates",
      "Proactive status updates",
      "No ghosting or delays",
    ],
    badge: "Client Favorite",
  },
  {
    id: "modern-execution",
    icon: Cpu,
    title: "Modern Execution",
    headline: "Built with today's tools.",
    description:
      "We use the latest design and development tools to create websites, apps, visuals, and digital assets that feel clean and relevant. Every output reflects modern standards — from responsive layouts and smooth interactions to optimized performance.",
    color: "#10B981",
    gradient: "from-[#10B981] to-[#06B6D4]",
    stat: {
      value: "2025",
      label: "Tech Stack",
    },
    features: [
      "React & Next.js ecosystems",
      "Modern design tools & workflows",
      "Performance-first approach",
      "Mobile-responsive by default",
    ],
    badge: "Tech Forward",
  },
  {
    id: "ownership-mindset",
    icon: ShieldCheck,
    title: "Ownership Mindset",
    headline: "We ship it like it's ours.",
    description:
      "We treat every project like a serious responsibility, not just a task list. The goal is to deliver work we are proud to show — and that you are confident to use. We stand behind our output and iterate until it meets the standard we would set for ourselves.",
    color: "#F97316",
    gradient: "from-[#F97316] to-[#F59E0B]",
    stat: {
      value: "100%",
      label: "Commitment",
    },
    features: [
      "Personal accountability on every task",
      "Quality-first delivery mindset",
      "Proactive problem-solving",
      "Proud-to-show output",
    ],
    badge: "Promise",
  },
  {
    id: "process-driven",
    icon: ListChecks,
    title: "Process-Driven Delivery",
    headline: "Structured. Reliable. Repeatable.",
    description:
      "Our workflow is built around understanding, planning, creating, reviewing, and improving before final delivery. Structure keeps quality consistent and timelines reliable. Every step has a purpose and every deliverable passes through quality checkpoints.",
    color: "#F43F5E",
    gradient: "from-[#F43F5E] to-[#EC4899]",
    stat: {
      value: "7",
      label: "Step Process",
    },
    features: [
      "Defined workflow for every project",
      "Milestone-based checkpoints",
      "Revision rounds built in",
      "Quality gates before delivery",
    ],
    badge: "Method",
  },
  {
    id: "direct-collaboration",
    icon: Handshake,
    title: "Direct Collaboration",
    headline: "Talk to the builder. Directly.",
    description:
      "You work closely with the people building your project, which keeps communication simple and decisions faster. No account managers, no handoffs, no lost context — just direct, productive conversation with the team that creates your product.",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    stat: {
      value: "0",
      label: "Middlemen",
    },
    features: [
      "Direct access to the creator",
      "Faster feedback loops",
      "No miscommunication layers",
      "Collaborative decision-making",
    ],
    badge: "Transparent",
  },
];

export const whyUsStats: WhyUsStat[] = [
  {
    value: "20",
    suffix: "+",
    label: "Projects Delivered",
    color: "#7C3AED",
  },
  {
    value: "5",
    suffix: "",
    label: "Team Specialists",
    color: "#06B6D4",
  },
  {
    value: "100",
    suffix: "%",
    label: "Client Communication",
    color: "#10B981",
  },
  {
    value: "24",
    suffix: "h",
    label: "Avg. Response Time",
    color: "#F97316",
  },
];

export const trustSignals = [
  {
    icon: Zap,
    text: "Fast Turnaround",
    color: "#F59E0B",
  },
  {
    icon: Heart,
    text: "Quality Obsessed",
    color: "#F43F5E",
  },
  {
    icon: TrendingUp,
    text: "Growth Focused",
    color: "#10B981",
  },
];
