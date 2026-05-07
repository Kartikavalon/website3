// Consolidated Product List
import { LIGHT_RARE_EARTHS } from "./light-rare-earths";
import { HEAVY_RARE_EARTHS } from "./heavy-rare-earths";
import { STRATEGIC_METALS } from "./strategic-metals";

export const ALL_PRODUCTS = [
  ...LIGHT_RARE_EARTHS,
  ...HEAVY_RARE_EARTHS,
  ...STRATEGIC_METALS,
];

export const getProductById = (id: string) => {
  return ALL_PRODUCTS.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string) => {
  return ALL_PRODUCTS.filter((product) => product.category === category);
};

export const INDUSTRIES_SERVED = [
  {
    id: "electric-vehicles",
    name: "Electric Vehicles",
    description: "Rare earth magnets and strategic metals for EV motors and battery systems",
    materials: ["Neodymium", "Dysprosium", "Lithium", "Cobalt"],
  },
  {
    id: "aerospace",
    name: "Aerospace",
    description: "High-performance materials for aircraft engines and structural components",
    materials: ["Tungsten", "Molybdenum", "Scandium", "Zirconium"],
  },
  {
    id: "defense",
    name: "Defense",
    description: "Strategic materials for defense systems and advanced technologies",
    materials: ["Tungsten", "Rare Earth Elements", "Tantalum"],
  },
  {
    id: "semiconductor",
    name: "Semiconductor",
    description: "Ultra-pure materials for semiconductor device manufacturing",
    materials: ["Gallium", "Germanium", "Indium", "Antimony"],
  },
  {
    id: "optoelectronics",
    name: "Optoelectronics",
    description: "Materials for optical systems, lasers, and display technologies",
    materials: ["Erbium", "Terbium", "Europium", "Gallium"],
  },
  {
    id: "permanent-magnets",
    name: "Permanent Magnets",
    description: "Rare earth elements for high-strength magnet manufacturing",
    materials: ["Neodymium", "Dysprosium", "Praseodymium", "Samarium"],
  },
  {
    id: "renewable-energy",
    name: "Renewable Energy",
    description: "Materials for wind turbines, solar systems, and energy storage",
    materials: ["Neodymium", "Lithium", "Vanadium", "Cerium"],
  },
  {
    id: "catalysts",
    name: "Catalysts",
    description: "Chemical catalysts for petroleum refining and environmental control",
    materials: ["Cerium", "Lanthanum", "Gadolinium"],
  },
];

export const SERVICES = [
  "Refining & Purification",
  "Custom Material Processing",
  "High-Purity Manufacturing",
  "Quality Assurance & Testing",
  "Metallurgical Consultation",
  "Export Packaging & Logistics",
  "Technical Support",
  "Specification Development",
];

export const CERTIFICATIONS = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    description: "Quality Management System certification",
  },
  {
    id: "rohs",
    name: "RoHS Compliant",
    description: "Restriction of Hazardous Substances compliance",
  },
  {
    id: "reach",
    name: "REACH Compliant",
    description: "Registration, Evaluation, Authorization and Restriction of Chemicals",
  },
  {
    id: "export-grade",
    name: "Export Grade Certified",
    description: "International export standards compliance",
  },
];
