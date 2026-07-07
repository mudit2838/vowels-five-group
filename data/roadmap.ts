export interface RoadmapMilestone {
  year: string;
  title: string;
  description: string;
  details: string[];
  status: "current" | "upcoming" | "completed";
}

export const roadmapMilestones: RoadmapMilestone[] = [
  {
    year: "2026",
    title: "Launch QRAM & Group Foundation",
    description: "Launch the QRAM luxury fashion line as the physical flagship of the group, and build our initial operational foundation.",
    details: [
      "Unveiling QRAM's online experience and physical showroom.",
      "Establishing parent company corporate operations in New York.",
      "Initiating foundational research for V5 Tech and AI pipelines."
    ],
    status: "current",
  },
  {
    year: "2027",
    title: "Launch Second Brand vertical",
    description: "Introduce the next ecosystem pillar, focusing on physical-digital consumer products or foundational AI integrations.",
    details: [
      "Evaluating proprietary technology platforms built during 2026.",
      "Hiring sector-specialist teams for V5 consumer vertical.",
      "Expanding apparel presence to premium wholesale partners."
    ],
    status: "upcoming",
  },
  {
    year: "2028",
    title: "Technology & Infrastructure Expansion",
    description: "Formally launch V5 Technology and V5 AI verticals to the enterprise market.",
    details: [
      "Releasing internal tooling as a public-facing developer cloud.",
      "Integrating V5 AI solutions directly into QRAM and V5 Consumer services.",
      "Attracting top-tier engineering talent in cloud networks and ML."
    ],
    status: "upcoming",
  },
  {
    year: "2029",
    title: "International Presence & Healthcare",
    description: "Expand Group footprint into Europe and Asia, and introduce V5 Healthcare pilot initiatives.",
    details: [
      "Establishing secondary regional headquarters in London and Tokyo.",
      "Initiating clinical trials and user beta programs for V5 Healthcare products.",
      "Cross-linking health and consumer sensor systems securely."
    ],
    status: "upcoming",
  },
  {
    year: "2030",
    title: "Global Unified Ecosystem",
    description: "Complete initial expansion of the seven core verticals (Apparel, Tech, AI, Health, Finance, Education, Consumer).",
    details: [
      "Launching V5 Finance and V5 Education hubs globally.",
      "Achieving full digital-physical integration across all holding sectors.",
      "Delivering the initial Vowels Five Group decade-retrospective proof-of-concept."
    ],
    status: "upcoming",
  }
];
