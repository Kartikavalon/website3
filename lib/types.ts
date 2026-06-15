// Product Types and Interfaces

export interface Product {
  id: string;
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicWeight: string;
  casNumber: string;
  category: "light-rare-earth" | "heavy-rare-earth" | "strategic-metals" | "advanced-materials" | "industrial-chemicals" | "precision-substrates" | "magnetic-materials" | "defense-materials" | "nanotech-materials" | "rare-earth-oxides" | "specialty-metals" | "energy-materials" | "chemical-catalysts" | "industrial-gases" | "advanced-fibres" | "mineral-salts" | "pharmaceutical-precursors" | "refractory-materials" | "polymers-composites" | "precious-compounds";
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
    optoelectronics?: string[];
    energy?: string[];
    medical?: string[];
    defense?: string[];
    research?: string[];
    ceramics?: string[];
    automotive?: string[];
    industrial?: string[];
    pharmaceutical?: string[];
    food?: string[];
    cosmetic?: string[];
    thermal?: string[];
    electrical?: string[];
    marine?: string[];
    rf?: string[];
    polymer?: string[];
    solar?: string[];
    petroleum?: string[];
    chemical?: string[];
    electronics?: string[];
    packaging?: string[];
    refractory?: string[];
    construction?: string[];
    consumer?: string[];
    environmental?: string[];
    plating?: string[];
    microscopy?: string[];
    photographic?: string[];
    sustainability?: string[];
    batteries?: string[];
    filtration?: string[];
    instrumentation?: string[];
    preservation?: string[];
    textile?: string[];
    fertilizers?: string[];
    thermal_energy_storage?: string[];
    laboratory?: string[];
    thermal_management?: string[];
    conductivity?: string[];
    battery_manufacturing?: string[];
    agricultural?: string[];
    soil?: string[];
    drug_synthesis?: string[];
    catalytic?: string[];
    emission_control?: string[];
    fuel_cells?: string[];
    hydrogen_production?: string[];
    fuel_processing?: string[];
    catalytic_research?: string[];
    hydrogenation?: string[];
    reforming?: string[];
    methanation?: string[];
    fine_chemicals?: string[];
    cross_coupling?: string[];
    dehydrogenation?: string[];
    organic_synthesis?: string[];
    telecommunications?: string[];
    structural?: string[];
    adhesives?: string[];
    optical_components?: string[];
    coating?: string[];
    encapsulation?: string[];
    potting?: string[];
    sealing?: string[];
    insulation?: string[];
    vibration_damping?: string[];
    high_temperature?: string[];
    cmc_materials?: string[];
    jet_engines?: string[];
    steelmaking?: string[];
    glass_fibers?: string[];
    furnace_linings?: string[];
    crucibles?: string[];
    kiln_linings?: string[];
    exothermic?: string[];
    endothermic?: string[];
    self_healing?: string[];
    biodegradable?: string[];
    wind_turbines?: string[];
    emission?: string[];
    casting?: string[];
    molten_metal?: string[];
    extreme_temperature?: string[];
    abrasive?: string[];
    corrosion_resistant?: string[];
    biomedical?: string[];
    surgical?: string[];
    materials?: string[];
    analysis?: string[];
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
  "advanced-materials": "Advanced Materials & Semiconductors",
  "industrial-chemicals": "Industrial Chemicals",
  "precision-substrates": "Precision Substrates",
  "magnetic-materials": "Magnetic Materials",
  "defense-materials": "Defense & Strategic Materials",
  "nanotech-materials": "Nanotechnology Materials",
  "rare-earth-oxides": "Rare Earth Oxides",
  "specialty-metals": "Precious & Specialty Metals",
  "energy-materials": "Energy & Battery Materials",
  "chemical-catalysts": "Chemical Catalysts",
  "industrial-gases": "Industrial & Specialty Gases",
  "advanced-fibres": "Advanced Fibers & Composites",
  "mineral-salts": "Mineral Salts",
  "pharmaceutical-precursors": "Pharmaceutical Precursors",
  "refractory-materials": "Refractory Materials",
  "polymers-composites": "Polymers & Composites",
  "precious-compounds": "Precious Metal Compounds",
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
