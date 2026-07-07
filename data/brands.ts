export interface Brand {
  id: string;
  name: string;
  category: string;
  description: string;
  status: "live" | "coming-soon";
  url?: string;
  slug: string;
  longDescription?: string;
  details?: {
    established: string;
    focus: string;
    stage: string;
  };
}

export const brands: Brand[] = [
  {
    id: "qram",
    name: "QRAM",
    category: "Premium Clothing",
    description: "Our flagship luxury apparel label merging timeless craftsmanship with modern technical execution. Launching late 2026.",
    status: "live",
    url: "https://qram-clothing.com", // external link
    slug: "qram",
    longDescription: "QRAM represents the physical manifestation of Vowels Five Group's core philosophy: uncompromising quality, premium presentation, and detail-oriented craftsmanship. Positioned as a luxury fashion label, QRAM blends heavy-gram organic fabrics, custom hardware, and ergonomic tailoring to create garment structures built to last a lifetime.",
    details: {
      established: "2026",
      focus: "Luxury Apparel & Accessories",
      stage: "Product Launch Approaching",
    }
  },
  {
    id: "technology",
    name: "V5 Technology",
    category: "Software & Digital Infrastructure",
    description: "Developing robust cloud ecosystems, developer-first tooling, and high-performance digital architectures.",
    status: "coming-soon",
    slug: "technology",
  },
  {
    id: "ai",
    name: "V5 AI & Intelligence",
    category: "Artificial Intelligence",
    description: "Creating context-aware, private, and localized machine learning models designed for enterprise applications.",
    status: "coming-soon",
    slug: "ai",
  },
  {
    id: "healthcare",
    name: "V5 Healthcare",
    category: "Health & Biotechnology",
    description: "Pioneering preventive health technologies and patient-centric software to optimize wellness outcomes.",
    status: "coming-soon",
    slug: "healthcare",
  },
  {
    id: "finance",
    name: "V5 Finance",
    category: "Financial Technology",
    description: "Re-imagining treasury systems, cross-border settlement, and high-security capital management tools.",
    status: "coming-soon",
    slug: "finance",
  },
  {
    id: "education",
    name: "V5 Education",
    category: "Learning & Pedagogy",
    description: "Building adaptive learning systems and specialized curricula designed to bridge academic output with technical practice.",
    status: "coming-soon",
    slug: "education",
  },
  {
    id: "consumer",
    name: "V5 Consumer Products",
    category: "Lifestyle & Hardware",
    description: "Designing tactile, high-durability physical goods that bring simplicity and premium aesthetics into everyday life.",
    status: "coming-soon",
    slug: "consumer",
  }
];
