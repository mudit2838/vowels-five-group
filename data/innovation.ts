export interface InnovationItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic Lucide Icon
}

export const innovationItems: InnovationItem[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Developing context-aware, localized machine learning pipelines to solve heavy computational challenges and optimize corporate decisions.",
    iconName: "Cpu",
  },
  {
    id: "software",
    title: "Enterprise Software",
    description: "Engineering secure, modular cloud infrastructure and high-performance databases built for global compliance.",
    iconName: "Layers",
  },
  {
    id: "research",
    title: "Research & Development",
    description: "Funding fundamental research in materials science and biotechnology to discover sustainable product foundations.",
    iconName: "Binary",
  },
  {
    id: "automation",
    title: "Systems Automation",
    description: "Structuring intelligent workflow automation matrices to reduce waste and coordinate logistics across all vertical holdings.",
    iconName: "Workflow",
  },
  {
    id: "future",
    title: "Future Technologies",
    description: "Incubating early-stage experiments in quantum encryption and decentralized consensus mechanisms to protect group assets.",
    iconName: "Atom",
  }
];
