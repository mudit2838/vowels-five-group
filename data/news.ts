export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Announcement" | "Press Release" | "Insight";
  publishedAt: string; // ISO format (YYYY-MM-DD)
  readTime: string;
  slug: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "group-launch",
    title: "Vowels Five Group Officially Establishes Corporate Structure",
    excerpt: "Formally establishing our holding company structure, Vowels Five Group is launching a multi-brand ecosystem focused on long-term value, premium design, and deep technical execution.",
    content: "Today, Vowels Five Group formally announces its corporate structure as a multi-sector parent company. Rooted in the philosophy of longevity and design excellence, the group is designed to serve as a platform for a collection of category-defining brands. Our portfolio begins with QRAM, a premium clothing label set to launch in late 2026, and will systematically expand to house distinct ventures in Technology, Healthcare, Education, Finance, AI, and Consumer Products over the next decade. By building on a shared foundation of operational excellence and design-centric guidelines, Vowels Five Group aims to deliver generational value for our partners, our teams, and the consumers we serve.",
    category: "Announcement",
    publishedAt: "2026-07-01",
    readTime: "3 min read",
    slug: "group-launch",
  },
  {
    id: "qram-philosophy",
    title: "Flagship Brand QRAM Unveils First Philosophy Teaser",
    excerpt: "An inside look at the craftsmanship, organic material scale, and structural engineering guidelines behind QRAM's upcoming premium apparel release.",
    content: "Ahead of its official late 2026 launch, QRAM has released its inaugural brand philosophy teaser. Highlighting our commitment to 'uncompromised structure,' QRAM details its sourcing of heavy-gram GOTS-certified organic cotton, custom-cast matte zippers, and an iterative tailoring cycle that tests each garment under everyday stressors for over 300 hours. This release outlines our core methodology: treating apparel design not as seasonal trends, but as structural products. QRAM will launch with a core collection of daily essentials designed to endure, setting the standard for all future physical consumer brands built under the Vowels Five Group umbrella.",
    category: "Insight",
    publishedAt: "2026-07-03",
    readTime: "4 min read",
    slug: "qram-philosophy",
  },
  {
    id: "roadmap-announcement",
    title: "Outlining the Next Decade: V5 Group Roadmap Released",
    excerpt: "Vowels Five Group releases its 2026–2030 roadmap, committing to a slow, deliberate expansion into technology hubs, international markets, and localized AI models.",
    content: "In contrast to modern trends favoring rapid growth at the expense of stability, Vowels Five Group has released a long-term development roadmap spanning 2026 through 2030. Beginning with the physical launch of luxury label QRAM in 2026, the roadmap details a gradual, deliberate expansion. By 2027, the group will incubate a second consumer vertical, followed by the public launch of developer-focused cloud systems and local AI infrastructure in 2028. International expansion into Tokyo and London, alongside healthcare research pilots, will follow in 2029, leading to a fully unified seven-pillar ecosystem by 2030. Founder message confirms the company is capitalized and structured to support this slow-compounding growth.",
    category: "Press Release",
    publishedAt: "2026-07-04",
    readTime: "5 min read",
    slug: "roadmap-announcement",
  }
];
