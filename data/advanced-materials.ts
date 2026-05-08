import { Product } from "@/lib/types";

export const ADVANCED_MATERIALS: Product[] = [
  {
    id: "tungsten-carbide",
    name: "Tungsten Carbide",
    symbol: "WC",
    atomicNumber: 0,
    atomicWeight: "195.85 (W) / 12.01 (C)",
    casNumber: "12070-12-1",
    category: "advanced-materials",
    shortDescription: "Ultra-hard ceramic composite for extreme-durability applications",
    fullDescription:
      "Tungsten carbide is one of the hardest materials available, with exceptional wear resistance and thermal stability. Our premium-grade WC provides unmatched durability for cutting tools, drilling equipment, and demanding industrial applications. Available as fine-grain powders for superior performance characteristics.",
    purityGrades: ["99.5%", "99.9%", "99.95%"],
    availableForms: ["Powder", "Granules", "Pellets", "Compacts", "Rods"],
    applications: {
      aerospace: ["Cutting tools", "Bearing components", "Wear-resistant parts"],
      metallurgy: ["Tool inserts", "Dies", "Wear surfaces"],
      magnets: ["Permanent fixture components"],
    },
    specifications: [
      { label: "Density", value: "14.95 g/cm³" },
      { label: "Hardness (Vickers)", value: "1000-2000 HV" },
      { label: "Melting Point", value: "2870°C" },
      { label: "Thermal Conductivity", value: "84 W/m·K" },
      { label: "Thermal Expansion", value: "5.2 × 10⁻⁶/K" },
    ],
    packasingOptions: [
      "25 kg bags",
      "Vacuum-sealed 50 kg drums",
      "1 metric ton containers",
      "Custom packaging available",
    ],
    storageRequirements:
      "Store in dry environment at room temperature. Protect from moisture. Shelf life: indefinite when stored properly.",
  },
  {
    id: "silicon-carbide",
    name: "Silicon Carbide",
    symbol: "SiC",
    atomicNumber: 0,
    atomicWeight: "28.09 (Si) / 12.01 (C)",
    casNumber: "409-21-2",
    category: "advanced-materials",
    shortDescription: "Wide-bandgap semiconductor and high-temperature ceramic material",
    fullDescription:
      "Silicon carbide is a compound semiconductor with excellent thermal properties and high breakdown field strength. Our high-purity SiC serves advanced semiconductor applications, high-temperature electronics, and abrasive applications. Available in multiple crystal structures (α-SiC and β-SiC).",
    purityGrades: ["99.5%", "99.9%", "99.99%"],
    availableForms: ["Powder", "Wafers", "Crystals", "Granules", "Nanoparticles"],
    applications: {
      semiconductor: [
        "Wide-bandgap power devices",
        "High-frequency RF semiconductors",
        "UV detectors",
      ],
      optical: ["Substrate material", "Optical windows", "Thermal management"],
      magnets: ["Permanent fixture substrates"],
    },
    specifications: [
      { label: "Density", value: "3.21 g/cm³" },
      { label: "Bandgap Energy", value: "3.26 eV (indirect), 3.33 eV (direct)" },
      { label: "Melting Point", value: "2700°C (decomposes)" },
      { label: "Thermal Conductivity", value: "120 W/m·K @ 300K" },
      { label: "Hardness (Mohs)", value: "9.5" },
    ],
    packasingOptions: [
      "25 kg bags",
      "50 kg vacuum drums",
      "Specialty wafer cases",
      "Custom specifications",
    ],
    storageRequirements:
      "Room temperature storage in sealed containers. Protect from moisture and contamination. Shelf life: indefinite.",
  },
  {
    id: "aluminum-oxide",
    name: "Aluminum Oxide (Alumina)",
    symbol: "Al₂O₃",
    atomicNumber: 0,
    atomicWeight: "26.98 (Al) × 2 / 16.00 (O) × 3",
    casNumber: "1344-28-1",
    category: "advanced-materials",
    shortDescription: "Premium ceramic material for optical and thermal applications",
    fullDescription:
      "High-purity aluminum oxide (alumina) is essential for advanced ceramics, optical components, and thermal applications. Our 99.99% pure alumina offers exceptional hardness, thermal conductivity, and optical transparency. Ideal for substrates, insulators, and specialized optical systems.",
    purityGrades: ["99.5%", "99.9%", "99.99%", "99.999%"],
    availableForms: ["Powder", "Pellets", "Rods", "Wafers", "Custom shapes"],
    applications: {
      optical: [
        "Optical windows",
        "Laser components",
        "Transparent ceramics",
      ],
      semiconductor: ["Substrate material", "Insulating layers"],
      aerospace: ["Thermal protection", "Insulation systems"],
    },
    specifications: [
      { label: "Density", value: "3.98 g/cm³" },
      { label: "Hardness (Vickers)", value: "1900-2300 HV" },
      { label: "Melting Point", value: "2072°C" },
      { label: "Thermal Conductivity", value: "46 W/m·K @ 100°C" },
      { label: "Dielectric Strength", value: "13.4 kV/mm" },
    ],
    packasingOptions: [
      "25 kg bags",
      "50 kg drums",
      "Vacuum sealed containers",
      "Specialty packaging for optical grades",
    ],
    storageRequirements:
      "Store in clean, dry environment at room temperature. Seal containers to prevent moisture absorption. Shelf life: indefinite.",
  },
];
