export interface CareerOpportunity {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Operations" | "Product";
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  requirements: string[];
  responsibilities: string[];
  slug: string;
}

export const careersList: CareerOpportunity[] = [
  {
    id: "senior-frontend-engineer",
    title: "Senior Frontend Engineer (Next.js / TS)",
    department: "Engineering",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    description: "We are seeking a senior frontend engineer with expert knowledge of Next.js, React, TypeScript, and styling architectures to lead development on Vowels Five Group digital platforms and upcoming SaaS ventures.",
    requirements: [
      "5+ years of software engineering experience focusing on modern client-side architectures.",
      "Expertise in Next.js (App Router), React 19, TypeScript, and Tailwind CSS.",
      "Deep understanding of web performance, Largest Contentful Paint (LCP) optimization, and accessibility (WCAG 2.1 AA).",
      "Experience setting up build systems, CI/CD pipelines, and writing comprehensive test suites."
    ],
    responsibilities: [
      "Own the architecture, development, and delivery of Vowels Five Group corporate website and brand portals.",
      "Collaborate closely with designers to implement pixel-perfect, highly-performant interactive elements and fluid animations.",
      "Ensure all applications achieve Lighthouse scores of 90+ across all metrics and meet strict accessibility standards.",
      "Help establish frontend engineering guidelines, code reviews, and tooling for future brand tech rollouts."
    ],
    slug: "senior-frontend",
  },
  {
    id: "lead-product-designer",
    title: "Lead Digital Product Designer",
    department: "Design",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    description: "Seeking a senior designer with deep aesthetic sensitivity to craft premium digital experiences across the Vowels Five Group brand portfolio.",
    requirements: [
      "5+ years designing responsive web applications, design systems, and consumer-facing digital portals.",
      "A stunning portfolio showcasing minimal, typography-focused, and premium layout designs.",
      "Fluency with Figma, design prototyping, and visual asset generation.",
      "Strong understanding of modern CSS constraints, grid layouts, and interactive design limits."
    ],
    responsibilities: [
      "Own the UX/UI design and visual assets for Vowels Five Group parent and brand digital interfaces.",
      "Define and scale a unified corporate design system (colors, typography, grid spacing, visual guidelines).",
      "Collaborate with developers to ensure motion principles and interaction designs are implemented accurately.",
      "Create high-quality visual prototypes and assets for new brand launches and investor decks."
    ],
    slug: "lead-designer",
  },
  {
    id: "fashion-product-intern",
    title: "Apparel Development Intern (QRAM)",
    department: "Design",
    location: "New York, NY (On-site)",
    type: "Internship",
    description: "A hands-on opportunity to join the flagship fashion brand QRAM during its pre-launch execution phase, working alongside seasoned patternmakers and product developers.",
    requirements: [
      "Enrolled in or recently graduated from a Fashion Design, Textile Science, or related program.",
      "Basic understanding of pattern drafting, garment construction, and organic material handling.",
      "Rigorous attention to detail and ability to work in a high-precision, physical studio environment.",
      "Strong organizational skills and ability to manage multiple production samples."
    ],
    responsibilities: [
      "Assist in sampling quality control, fabric testing, and measuring spec sheets.",
      "Coordinate trim and hardware inventory and interact directly with premium textile mills.",
      "Organize garment fittings and document construction revisions.",
      "Support the development team with pre-launch warehouse organization and logistics setup."
    ],
    slug: "apparel-intern",
  }
];
