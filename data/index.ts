// Consolidated Product List
import { LIGHT_RARE_EARTHS } from "./light-rare-earths";
import { HEAVY_RARE_EARTHS } from "./heavy-rare-earths";
import { STRATEGIC_METALS } from "./strategic-metals";
import { ADVANCED_MATERIALS } from "./advanced-materials";
import { INDUSTRIAL_CHEMICALS } from "./industrial-chemicals";
import { PRECISION_SUBSTRATES } from "./precision-substrates";
import { MAGNETIC_MATERIALS } from "./magnetic-materials";
import { DEFENSE_MATERIALS } from "./defense-materials";
import { NANOTECH_MATERIALS } from "./nanotech-materials";
import { RARE_EARTH_OXIDES } from "./rare-earth-oxides";
import { SPECIALTY_METALS } from "./specialty-metals";
import { ENERGY_MATERIALS } from "./energy-materials";
import { CHEMICAL_CATALYSTS } from "./chemical-catalysts";
import { INDUSTRIAL_GASES } from "./industrial-gases";
import { ADVANCED_FIBRES } from "./advanced-fibres";
import { MINERAL_SALTS } from "./mineral-salts";
import { PHARMACEUTICAL_PRECURSORS } from "./pharmaceutical-precursors";
import { REFRACTORY_MATERIALS } from "./refractory-materials";
import { POLYMERS_COMPOSITES } from "./polymers-composites";
import { PRECIOUS_COMPOUNDS } from "./precious-compounds";
import { PRODUCT_CATEGORIES } from "@/lib/types";

export { PRODUCT_CATEGORIES };

export const ALL_PRODUCTS = [
  ...LIGHT_RARE_EARTHS,
  ...HEAVY_RARE_EARTHS,
  ...STRATEGIC_METALS,
  ...ADVANCED_MATERIALS,
  ...INDUSTRIAL_CHEMICALS,
  ...PRECISION_SUBSTRATES,
  ...MAGNETIC_MATERIALS,
  ...DEFENSE_MATERIALS,
  ...NANOTECH_MATERIALS,
  ...RARE_EARTH_OXIDES,
  ...SPECIALTY_METALS,
  ...ENERGY_MATERIALS,
  ...CHEMICAL_CATALYSTS,
  ...INDUSTRIAL_GASES,
  ...ADVANCED_FIBRES,
  ...MINERAL_SALTS,
  ...PHARMACEUTICAL_PRECURSORS,
  ...REFRACTORY_MATERIALS,
  ...POLYMERS_COMPOSITES,
  ...PRECIOUS_COMPOUNDS,
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
