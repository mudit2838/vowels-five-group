export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: string; // references Lucide icon name dynamically
}

export const values: CoreValue[] = [
  {
    id: "innovation",
    title: "Innovation",
    description: "Rejecting industry standard defaults. We build solutions that fundamentally improve efficiency and elevate user experience.",
    iconName: "Zap",
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "Aligning action with truth. We operate with radical transparency and build lasting relationships based on absolute trust.",
    iconName: "ShieldCheck",
  },
  {
    id: "quality",
    title: "Quality",
    description: "Unyielding commitment to craftsmanship. From a clothing seam to a line of system code, our output is built to endure.",
    iconName: "Gem",
  },
  {
    id: "customer",
    title: "Customer First",
    description: "Delivering real, tangible value. We design products and systems around the actual, long-term needs of the people we serve.",
    iconName: "Heart",
  },
  {
    id: "longterm",
    title: "Long-Term Thinking",
    description: "Investing in generational timelines. We prioritize sustainable compound growth over quick wins and hype cycles.",
    iconName: "Hourglass",
  },
  {
    id: "learning",
    title: "Continuous Learning",
    description: "Cultivating constant intellectual curiosity. We treat feedback as data and continuously refine our knowledge base.",
    iconName: "BookOpen",
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Taking responsibility for outcomes. We empower our teams to act autonomously and set new benchmarks in our industries.",
    iconName: "Compass",
  }
];
