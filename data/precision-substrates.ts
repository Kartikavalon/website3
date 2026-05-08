import { Product } from "@/lib/types";

export const PRECISION_SUBSTRATES: Product[] = [
  {
    id: "gallium-nitride-substrate",
    name: "Gallium Nitride (GaN) Substrate",
    symbol: "GaN",
    atomicNumber: 0,
    atomicWeight: "69.72 (Ga) / 14.01 (N)",
    casNumber: "25617-97-4",
    category: "precision-substrates",
    shortDescription: "High-quality GaN wafers for high-power and RF semiconductor devices",
    fullDescription:
      "Ultra-pure gallium nitride substrates engineered for advanced semiconductor fabrication. Our GaN wafers feature exceptional crystalline quality, low defect density, and superior electrical properties. Essential for next-generation power electronics and 5G/6G RF applications.",
    purityGrades: ["99.99%", "99.999%", "Research Grade"],
    availableForms: [
      "2-inch wafers",
      "4-inch wafers",
      "6-inch wafers",
      "Custom sizes",
    ],
    applications: {
      semiconductor: [
        "Power conversion devices",
        "RF transistors",
        "5G/6G infrastructure",
      ],
      optical: ["UV LEDs", "Laser diodes"],
      magnets: ["Permanent device substrates"],
    },
    specifications: [
      { label: "Crystal Structure", value: "Hexagonal (Wurtzite)" },
      { label: "Bandgap Energy", value: "3.44 eV (direct)" },
      { label: "Dislocation Density", value: "<10⁸ cm⁻² (HVPE-grown)" },
      { label: "Sheet Resistance", value: "Adjustable per specification" },
      { label: "Thermal Conductivity", value: "130 W/m·K (parallel to c-axis)" },
    ],
    packasingOptions: [
      "ESD-safe wafer cases",
      "Ultra-clean packaging",
      "Nitrogen-purged containers",
      "Custom protective packaging",
    ],
    storageRequirements:
      "Store in cleanroom environment or sealed ESD-safe containers. Maintain room temperature and low humidity (<30% RH). Handle with care to avoid mechanical damage.",
  },
  {
    id: "sapphire-wafer",
    name: "Sapphire Wafer (Al₂O₃)",
    symbol: "Al₂O₃",
    atomicNumber: 0,
    atomicWeight: "101.96",
    casNumber: "1344-28-1",
    category: "precision-substrates",
    shortDescription: "Optical-grade sapphire wafers for semiconductor and optical applications",
    fullDescription:
      "High-transparency sapphire wafers featuring excellent optical properties and mechanical strength. Our sapphire substrates are ideal for LED manufacturing, integrated photonics, and optical systems. Available in C-plane, A-plane, and R-plane orientations.",
    purityGrades: ["99.99%", "99.999%", "Optical Grade"],
    availableForms: [
      "2-inch wafers",
      "4-inch wafers",
      "6-inch wafers",
      "Custom dimensions",
    ],
    applications: {
      semiconductor: ["LED substrates", "Integrated circuits"],
      optical: [
        "Optical windows",
        "Laser components",
        "Photonic circuits",
      ],
      magnets: ["Substrate support structures"],
    },
    specifications: [
      { label: "Transparency Range", value: "0.15-5.5 µm" },
      { label: "Hardness (Vickers)", value: "1900-2300 HV" },
      { label: "Density", value: "3.98 g/cm³" },
      { label: "Thermal Conductivity", value: "46 W/m·K" },
      { label: "Refractive Index", value: "1.76 @ 589 nm" },
    ],
    packasingOptions: [
      "Cleanroom wafer boxes",
      "Vacuum-sealed containers",
      "Individual protective cases",
      "Bulk carrier trays",
    ],
    storageRequirements:
      "Store in cleanroom environment or sealed containers at room temperature. Protect from thermal shock and mechanical stress. Standard shelf life: indefinite.",
  },
  {
    id: "silicon-carbide-wafer",
    name: "Silicon Carbide (SiC) Wafer",
    symbol: "SiC",
    atomicNumber: 0,
    atomicWeight: "40.10",
    casNumber: "409-21-2",
    category: "precision-substrates",
    shortDescription: "High-quality SiC wafers for high-temperature and high-power electronics",
    fullDescription:
      "Premium silicon carbide wafers engineered for extreme-environment semiconductor applications. Our SiC substrates feature low defect density and superior thermal properties. Ideal for high-temperature sensors, power electronics, and RF devices operating beyond silicon capabilities.",
    purityGrades: ["99.5%", "99.9%", "99.99%"],
    availableForms: [
      "2-inch wafers",
      "3-inch wafers",
      "4-inch wafers",
      "6-inch wafers",
    ],
    applications: {
      semiconductor: [
        "Power devices (MOSFETs)",
        "Schottky diodes",
        "JFETs",
      ],
      optical: ["UV detectors", "Thermal management"],
      aerospace: ["High-temperature electronics"],
    },
    specifications: [
      { label: "Crystal Structure", value: "3C, 4H, or 6H (specified)" },
      { label: "Bandgap Energy", value: "3.26 eV (4H-SiC)" },
      { label: "Defect Density", value: "<10⁵ cm⁻² (best grades)" },
      { label: "Breakdown Field Strength", value: "3.2 MV/cm" },
      { label: "Thermal Conductivity", value: "490 W/m·K (4H) @ 300K" },
    ],
    packasingOptions: [
      "ESD wafer cases",
      "Vacuum sealed containers",
      "Ultra-clean packaging",
      "Custom protective handling",
    ],
    storageRequirements:
      "Store in dry, inert atmosphere when possible. Room temperature storage in sealed, cleanroom-compatible containers. Avoid thermal cycling and mechanical shock.",
  },
];
