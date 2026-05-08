// News and Blog Posts

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  featured: boolean;
  image?: string;
}

export const NEWS_POSTS: NewsPost[] = [
  {
    id: "global-rare-earth-demand",
    title: "Global Rare Earth Demand Reaches Record Highs in 2026",
    slug: "global-rare-earth-demand-2026",
    date: "2026-05-08",
    category: "Market Trends",
    excerpt:
      "The global rare earth elements market continues to expand with unprecedented demand from renewable energy and electric vehicle sectors.",
    content: `The rare earth elements market is experiencing unprecedented growth in 2026. According to recent industry reports, global demand for rare earth elements has increased by 23% compared to 2025, driven primarily by the rapid expansion of renewable energy projects and electric vehicle manufacturing.

Key drivers include:
• Electric vehicle production reaching 45 million units annually
• Wind turbine manufacturing requiring increased neodymium and dysprosium
• Semiconductor industry expansion demanding high-purity rare earth materials
• Green energy initiatives worldwide

Kaytherix Industries has ramped up production capacity to meet this surging demand, with new processing facilities coming online in Q3 2026.`,
    author: "Dr. Sarah Chen",
    featured: true,
    image: "/images/news/market-trends.jpg",
  },
  {
    id: "sustainable-extraction",
    title: "Kaytherix Announces Sustainable Extraction Methods",
    slug: "sustainable-extraction-methods",
    date: "2026-04-15",
    category: "Technology",
    excerpt:
      "Our new environmentally-friendly extraction process reduces waste byproducts by 40% while maintaining premium purity standards.",
    content: `Kaytherix Industries is proud to announce the deployment of our advanced sustainable extraction technology across all manufacturing facilities.

Our breakthrough innovation delivers:
• 40% reduction in processing waste
• 60% lower water consumption
• Certified carbon-neutral operations
• ISO 14001 environmental management compliance

This technological advancement positions Kaytherix as an industry leader in responsible rare earth element production. The new methods maintain our signature high-purity standards while significantly reducing environmental impact.

The technology will be fully operational across all facilities by Q2 2026.`,
    author: "Prof. James Mitchell",
    featured: true,
    image: "/images/news/sustainability.jpg",
  },
  {
    id: "aerospace-partnership",
    title: "Strategic Partnership with Leading Aerospace Manufacturer",
    slug: "aerospace-partnership-2026",
    date: "2026-03-22",
    category: "Partnerships",
    excerpt:
      "Kaytherix secures multi-year contract to supply premium tungsten and molybdenum for next-generation aircraft engines.",
    content: `In a significant development for the aerospace industry, Kaytherix Industries has entered into a strategic partnership with a leading global aerospace manufacturer to supply premium tungsten and molybdenum alloys.

Partnership highlights:
• Multi-year supply contract valued at $50M
• Guaranteed delivery of 500 tons annually
• Custom alloy development for advanced aircraft engines
• Quality assurance with aerospace-grade certifications

This partnership underscores the critical importance of reliable rare earth and strategic metal suppliers in modern aerospace engineering.`,
    author: "Michael Torres",
    featured: false,
    image: "/images/news/aerospace.jpg",
  },
  {
    id: "ev-battery-innovation",
    title: "Electric Vehicle Battery Performance Enhanced with Rare Earth Magnets",
    slug: "ev-battery-rare-earth",
    date: "2026-02-10",
    category: "Innovation",
    excerpt:
      "New research shows that high-purity neodymium-based magnets improve EV motor efficiency by up to 18%.",
    content: `Recent studies have demonstrated that premium-grade rare earth magnets can significantly enhance electric vehicle performance and efficiency.

Key findings:
• Motor efficiency improvements of 15-18%
• Extended battery range by 12%
• Reduced thermal losses in power conversion
• Lower manufacturing costs due to improved efficiency

Kaytherix's ultra-pure neodymium and dysprosium products are specifically engineered for these demanding EV applications, providing manufacturers with the competitive edge needed in the rapidly growing electric vehicle market.`,
    author: "Dr. Emily Zhang",
    featured: false,
    image: "/images/news/ev-battery.jpg",
  },
  {
    id: "semiconductor-advancement",
    title: "Semiconductor Industry Advances with Ultra-Pure Gallium and Germanium",
    slug: "semiconductor-ultra-pure",
    date: "2026-01-20",
    category: "Technology",
    excerpt:
      "Next-generation semiconductor fabrication requires ever-higher purity standards. Kaytherix delivers 99.99999% pure materials.",
    content: `The semiconductor industry continues to push the boundaries of what's possible with advanced fabrication techniques that demand ultra-pure raw materials.

Kaytherix capabilities:
• 99.99999% purity gallium and germanium
• Custom doping profiles for specific applications
• Real-time quality monitoring and certification
• Consistent supply chain reliability

Our commitment to excellence in material purity ensures that semiconductor manufacturers can continue innovating without material constraints.`,
    author: "Dr. Robert Kim",
    featured: false,
    image: "/images/news/semiconductor.jpg",
  },
];

export const getFeaturedPosts = () => {
  return NEWS_POSTS.filter((post) => post.featured).slice(0, 3);
};

export const getPostBySlug = (slug: string) => {
  return NEWS_POSTS.find((post) => post.slug === slug);
};

export const getPostsByCategory = (category: string) => {
  return NEWS_POSTS.filter((post) => post.category === category);
};

export const getAllCategories = () => {
  return Array.from(new Set(NEWS_POSTS.map((post) => post.category)));
};
