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
  deliverables: string[];
}

export const workProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description:
      "The client shares their vision, business goals, target audience, inspiration, and project requirements. This stage ensures we understand the problem before proposing solutions.",
    icon: "Compass",
    engagement: "high",
    clientAction: "Share your vision, goals & requirements",
    teamAction: "Listen, research & define project scope",
    duration: "1-2 days",
    color: "#7C3AED",
    deliverables: ["Goals & audience brief", "Project requirements doc", "Inspiration board"],
  },
  {
    step: 2,
    title: "Plan",
    description:
      "We prepare the technical roadmap, timeline, and project scope. The client reviews and approves the plan before development begins.",
    icon: "Map",
    engagement: "medium",
    clientAction: "Approve scope & timeline",
    teamAction: "Create roadmap & content plan",
    duration: "1-2 days",
    color: "#8B5CF6",
    deliverables: ["Technical roadmap", "Timeline & milestones", "Scope of work"],
  },
  {
    step: 3,
    title: "Design",
    description:
      "The client reviews wireframes, UI concepts, visual direction, and branding. Feedback is incorporated before moving into development.",
    icon: "PenTool",
    engagement: "high",
    clientAction: "Review designs & share feedback",
    teamAction: "Create wireframes, mockups & UI",
    duration: "3-5 days",
    color: "#06B6D4",
    deliverables: ["Wireframes", "UI mockups", "Brand & visual direction"],
  },
  {
    step: 4,
    title: "Build",
    description:
      "Our team handles development and implementation. The client receives progress updates while we focus on execution.",
    icon: "Braces",
    engagement: "low",
    clientAction: "Receive progress updates",
    teamAction: "Develop, code & assemble the project",
    duration: "5-10 days",
    color: "#10B981",
    deliverables: ["Working build", "Source code", "Progress demos"],
  },
  {
    step: 5,
    title: "Review",
    description:
      "The client explores the staging version, tests functionality, and shares feedback to ensure everything meets expectations.",
    icon: "MonitorCheck",
    engagement: "high",
    clientAction: "Explore staging & test features",
    teamAction: "Test, QA & polish everything",
    duration: "1-2 days",
    color: "#F97316",
    deliverables: ["Staging environment", "QA report", "Feedback summary"],
  },
  {
    step: 6,
    title: "Refine",
    description:
      "We polish the product based on feedback. The client verifies the final adjustments before launch.",
    icon: "Wand2",
    engagement: "medium",
    clientAction: "Verify final adjustments",
    teamAction: "Implement changes & fine-tune",
    duration: "2-3 days",
    color: "#EC4899",
    deliverables: ["Refined product", "Final revisions", "Polish pass"],
  },
  {
    step: 7,
    title: "Deliver",
    description:
      "Our team manages deployment, optimization, final handoff, and launch while keeping the client informed.",
    icon: "Rocket",
    engagement: "low",
    clientAction: "Receive launch & handover",
    teamAction: "Deploy, document & deliver",
    duration: "1 day",
    color: "#3B82F6",
    deliverables: ["Live deployment", "Docs & files", "Launch handover"],
  },
];
