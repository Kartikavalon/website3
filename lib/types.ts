// Product Types and Interfaces

export interface Product {
  id: string;
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicWeight: string;
  casNumber: string;
  category: "light-rare-earth" | "heavy-rare-earth" | "strategic-metals" | "advanced-materials" | "industrial-chemicals" | "precision-substrates";
  shortDescription: string;
  fullDescription: string;
  purityGrades: string[];
  availableForms: string[];
  applications: {
    ev?: string[];
    semiconductor?: string[];
    aerospace?: string[];
    magnets?: string[];
    optical?: string[];
    catalysts?: string[];
    metallurgy?: string[];
  };
  specifications: {
    label: string;
    value: string;
  }[];
  packasingOptions: string[];
  storageRequirements: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  materials: string[];
  caseStudies?: string[];
  icon?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  badge: string;
  description: string;
}

export type ProductCategory =
  | "light-rare-earth"
  | "heavy-rare-earth"
  | "strategic-metals"
  | "advanced-materials"
  | "industrial-chemicals"
  | "precision-substrates";

export const FORM_TYPES = {
  general: "General Contact",
  rfq: "Request a Quote (RFQ)",
  technical: "Technical Consultation",
  export: "Export Inquiry",
} as const;

export const PRODUCT_FORMS = [
  "Oxide",
  "Powder",
  "Ingot",
  "Foil",
  "Pellets",
  "Nanoparticles",
  "Sputtering Targets",
  "Wire",
  "Granules",
  "Flakes",
  "Rods",
  "Evaporation Material",
] as const;

export const PRODUCT_CATEGORIES = {
  "light-rare-earth": "Light Rare Earth Elements",
  "heavy-rare-earth": "Heavy Rare Earth Elements",
  "strategic-metals": "Strategic & Specialty Metals",
  "advanced-materials": "Advanced Materials",
  "industrial-chemicals": "Industrial Chemicals",
  "precision-substrates": "Precision Substrates",
} as const;

export const INDUSTRIES = [
  "Electric Vehicles",
  "Aerospace",
  "Defense",
  "Semiconductor",
  "Optoelectronics",
  "Permanent Magnets",
  "Renewable Energy",
  "Metallurgy",
  "Catalysts",
  "Battery Manufacturing",
  "Research Institutions",
  "Precision Ceramics",
  "Thermal Coatings",
  "Electronics",
  "Thin Film Deposition",
] as const;
