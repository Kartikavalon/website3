import { Product } from "@/lib/types";

export const INDUSTRIAL_CHEMICALS: Product[] = [
  {
    id: "chromium-trioxide",
    name: "Chromium Trioxide (CrO₃)",
    symbol: "CrO₃",
    atomicNumber: 0,
    atomicWeight: "52.00 (Cr) / 16.00 (O) × 3",
    casNumber: "1333-82-0",
    category: "industrial-chemicals",
    shortDescription: "High-purity chromium trioxide for electroplating and chemical synthesis",
    fullDescription:
      "Premium-grade chromium trioxide for electroplating, metal treatment, and chemical manufacturing. Our ultra-pure CrO₃ provides superior consistency and reliability for precision coating applications and chromium-based chemistry. Available in laboratory and industrial quantities.",
    purityGrades: ["98%", "99%", "99.5%"],
    availableForms: ["Powder", "Crystals", "Granules", "Solutions"],
    applications: {
      magnets: ["Metal coating processes"],
      metallurgy: [
        "Electroplating",
        "Surface treatment",
        "Corrosion resistance",
      ],
      catalysts: ["Chemical synthesis", "Oxidation reactions"],
    },
    specifications: [
      { label: "Appearance", value: "Dark red-brown crystals" },
      { label: "Density", value: "2.70 g/cm³" },
      { label: "Melting Point", value: "196.5°C" },
      { label: "Solubility", value: "Soluble in water and alcohols" },
      { label: "Oxidizing Power", value: "Strong oxidizer" },
    ],
    packasingOptions: [
      "500g bottles",
      "1 kg sealed containers",
      "5 kg drums",
      "25 kg containers",
    ],
    storageRequirements:
      "Store in cool, dry place away from combustible materials. Keep container tightly sealed. Store away from bases and reducing agents.",
  },
  {
    id: "manganese-dioxide",
    name: "Manganese Dioxide (MnO₂)",
    symbol: "MnO₂",
    atomicNumber: 0,
    atomicWeight: "54.94 (Mn) / 16.00 (O) × 2",
    casNumber: "1313-13-9",
    category: "industrial-chemicals",
    shortDescription: "Industrial-grade manganese dioxide for catalytic and electrochemical applications",
    fullDescription:
      "High-purity manganese dioxide serving as a versatile catalyst and oxidizing agent in chemical manufacturing. Our MnO₂ is used in battery production, water treatment, pigment manufacturing, and various industrial chemical processes. Consistent quality and performance across all batches.",
    purityGrades: ["95%", "98%", "99%", "99.5%"],
    availableForms: ["Powder", "Granules", "Pellets", "Solutions"],
    applications: {
      catalysts: [
        "Oxidation reactions",
        "Decomposition reactions",
        "Water purification",
      ],
      magnets: ["Secondary applications"],
      metallurgy: ["Alloy additions", "Surface treatment"],
    },
    specifications: [
      { label: "Appearance", value: "Black powder" },
      { label: "Density", value: "5.03 g/cm³" },
      { label: "Melting Point", value: "535°C (decomposes)" },
      { label: "BET Surface Area", value: "10-50 m²/g" },
      { label: "pH (as 5% suspension)", value: "3.5-4.5" },
    ],
    packasingOptions: [
      "1 kg bags",
      "5 kg sealed bags",
      "25 kg drums",
      "Bulk containers",
    ],
    storageRequirements:
      "Store in cool, dry conditions in sealed containers. Protect from moisture and acidic environments. Compatible with standard storage facilities.",
  },
  {
    id: "vanadium-pentoxide",
    name: "Vanadium Pentoxide (V₂O₅)",
    symbol: "V₂O₅",
    atomicNumber: 0,
    atomicWeight: "50.94 (V) × 2 / 16.00 (O) × 5",
    casNumber: "1314-62-1",
    category: "industrial-chemicals",
    shortDescription: "Premium vanadium pentoxide for catalysis and specialty applications",
    fullDescription:
      "Ultra-pure vanadium pentoxide serving as a critical catalyst in sulfuric acid production, petroleum refining, and specialty chemical synthesis. Our V₂O₅ meets exacting standards for industrial catalytic applications and research purposes.",
    purityGrades: ["99%", "99.5%", "99.9%"],
    availableForms: ["Powder", "Crystals", "Granules"],
    applications: {
      catalysts: [
        "Sulfuric acid synthesis",
        "Oxidation catalysis",
        "Environmental remediation",
      ],
      optical: ["Advanced materials research"],
      metallurgy: ["Alloy additions"],
    },
    specifications: [
      { label: "Appearance", value: "Yellow-orange powder" },
      { label: "Density", value: "3.36 g/cm³" },
      { label: "Melting Point", value: "690°C" },
      { label: "Boiling Point", value: "1430°C" },
      { label: "Particle Size", value: "0.5-10 µm (adjustable)" },
    ],
    packasingOptions: [
      "1 kg bottles",
      "5 kg sealed containers",
      "25 kg drums",
      "Custom bulk quantities",
    ],
    storageRequirements:
      "Store in sealed containers in cool, dry location. Protect from moisture and incompatible materials. Shelf life: 3+ years when properly stored.",
  },
];
