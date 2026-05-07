// Product Database - Light Rare Earth Elements

export const LIGHT_RARE_EARTHS = [
  {
    id: "lanthanum",
    name: "Lanthanum",
    symbol: "La",
    atomicNumber: 57,
    atomicWeight: "138.905",
    casNumber: "7439-91-0",
    category: "light-rare-earth" as const,
    shortDescription:
      "Highly reactive light rare earth element used in catalyst systems and optical applications.",
    fullDescription:
      "Lanthanum is the first element in the lanthanide series and one of the most reactive rare earth elements. It exhibits excellent catalytic properties and is extensively used in petroleum refining, automotive catalytic converters, and advanced optical systems.",
    purityGrades: ["99.0%", "99.5%", "99.9%", "99.99%"],
    availableForms: [
      "Oxide",
      "Powder",
      "Ingot",
      "Granules",
      "Nanoparticles",
      "Chloride",
      "Fluoride",
    ],
    applications: {
      catalysts: [
        "Petroleum refining catalysts",
        "FluidFluidized catalytic cracking",
        "Emission control systems",
      ],
      optical: ["Camera lenses", "Telescope optics", "Optical coatings"],
      metallurgy: ["Hydrogen storage alloys", "Metal alloying"],
    },
    specifications: [
      { label: "Appearance", value: "Gray-white metal" },
      { label: "Melting Point", value: "918°C" },
      { label: "Boiling Point", value: "3464°C" },
      { label: "Density", value: "6.194 g/cm³" },
    ],
    packasingOptions: ["1kg bottles", "5kg bottles", "25kg bags", "Bulk drums"],
    storageRequirements:
      "Store in dry environment, away from moisture and oxygen exposure. Inert atmosphere recommended.",
  },
  {
    id: "cerium",
    name: "Cerium",
    symbol: "Ce",
    atomicNumber: 58,
    atomicWeight: "140.116",
    casNumber: "7440-45-1",
    category: "light-rare-earth" as const,
    shortDescription:
      "Most abundant rare earth element, essential for catalytic converters and polishing applications.",
    fullDescription:
      "Cerium is the most abundant rare earth element in the Earth's crust. Its versatility in oxidation states makes it invaluable in catalysis, polishing compounds, and advanced ceramic applications. It is critical for automotive emissions control and glass manufacturing.",
    purityGrades: ["99.0%", "99.5%", "99.9%", "99.99%"],
    availableForms: [
      "Oxide",
      "Powder",
      "Ingot",
      "Foil",
      "Nanoparticles",
      "Chloride",
      "Fluoride",
    ],
    applications: {
      catalysts: [
        "Catalytic converter materials",
        "Oxidation catalysts",
        "Three-way catalysts",
      ],
      optical: ["Glass polishing", "Precision polishing compounds"],
      metallurgy: ["Alloy additives", "Thermal barrier coatings"],
    },
    specifications: [
      { label: "Appearance", value: "Silvery-white metal" },
      { label: "Melting Point", value: "798°C" },
      { label: "Boiling Point", value: "3257°C" },
      { label: "Density", value: "6.77 g/cm³" },
    ],
    packasingOptions: ["1kg bottles", "5kg bottles", "25kg bags", "Bulk drums"],
    storageRequirements:
      "Store in sealed containers in dry environment. Protect from moisture and reactive gases.",
  },
  {
    id: "praseodymium",
    name: "Praseodymium",
    symbol: "Pr",
    atomicNumber: 59,
    atomicWeight: "140.908",
    casNumber: "7440-10-0",
    category: "light-rare-earth" as const,
    shortDescription:
      "Soft, silvery-white metal valued for magnetic and optical properties in advanced applications.",
    fullDescription:
      "Praseodymium is a soft light rare earth metal with exceptional magnetic and optical properties. It is essential for high-strength permanent magnet manufacturing and advanced ceramic applications, particularly in automotive and renewable energy sectors.",
    purityGrades: ["99.0%", "99.5%", "99.9%", "99.99%"],
    availableForms: [
      "Oxide",
      "Powder",
      "Ingot",
      "Master alloy",
      "Nanoparticles",
      "Chloride",
    ],
    applications: {
      magnets: ["High-strength magnets", "Permanent magnet alloys"],
      optical: ["Yellow pigments", "Glass manufacturing"],
      metallurgy: ["Aircraft engine components", "Alloy strengthening"],
    },
    specifications: [
      { label: "Appearance", value: "Silvery-white metal" },
      { label: "Melting Point", value: "931°C" },
      { label: "Boiling Point", value: "3512°C" },
      { label: "Density", value: "6.77 g/cm³" },
    ],
    packasingOptions: ["1kg bottles", "5kg bottles", "25kg bags", "Bulk drums"],
    storageRequirements:
      "Store under mineral oil or inert atmosphere. Highly reactive; avoid contact with moisture and oxygen.",
  },
  {
    id: "neodymium",
    name: "Neodymium",
    symbol: "Nd",
    atomicNumber: 60,
    atomicWeight: "144.242",
    casNumber: "7440-00-8",
    category: "light-rare-earth" as const,
    shortDescription:
      "Most commercially significant rare earth element, essential for high-performance permanent magnets.",
    fullDescription:
      "Neodymium is perhaps the most important rare earth element today. It is the primary component in NdFeB (Neodymium-Iron-Boron) permanent magnets, which are essential for electric motors, renewable energy systems, and advanced electronics. Its importance in the green energy transition makes it strategically critical.",
    purityGrades: ["99.0%", "99.5%", "99.9%", "99.99%"],
    availableForms: [
      "Oxide",
      "Powder",
      "Ingot",
      "Master alloy",
      "Nanoparticles",
      "Chloride",
      "Fluoride",
    ],
    applications: {
      magnets: [
        "Permanent magnets",
        "NdFeB magnets",
        "Wind turbine generators",
        "EV motors",
      ],
      semiconductor: ["Laser materials", "Amplifiers"],
      metallurgy: ["Alloy strengthening", "Heat-resistant alloys"],
    },
    specifications: [
      { label: "Appearance", value: "Silvery-white metal" },
      { label: "Melting Point", value: "1024°C" },
      { label: "Boiling Point", value: "3074°C" },
      { label: "Density", value: "7.01 g/cm³" },
    ],
    packasingOptions: ["1kg bottles", "5kg bottles", "25kg bags", "Bulk drums"],
    storageRequirements:
      "Store under inert atmosphere or mineral oil. Highly reactive metal; protect from moisture and air.",
  },
  {
    id: "samarium",
    name: "Samarium",
    symbol: "Sm",
    atomicNumber: 62,
    atomicWeight: "150.36",
    casNumber: "7440-19-9",
    category: "light-rare-earth" as const,
    shortDescription:
      "Known for high-temperature magnet applications, maintaining magnetic properties up to extreme temperatures.",
    fullDescription:
      "Samarium is particularly valued for samarium-cobalt (SmCo) magnets, which maintain their magnetic properties at high temperatures. These magnets are essential for aerospace applications, military systems, and specialized industrial equipment operating in extreme environments.",
    purityGrades: ["99.0%", "99.5%", "99.9%"],
    availableForms: [
      "Oxide",
      "Powder",
      "Ingot",
      "Master alloy",
      "Chloride",
      "Fluoride",
    ],
    applications: {
      magnets: ["SmCo permanent magnets", "High-temperature magnets"],
      aerospace: ["Aircraft engine components", "Aerospace systems"],
      catalysts: ["Nuclear reactor control"],
    },
    specifications: [
      { label: "Appearance", value: "Silvery-white metal" },
      { label: "Melting Point", value: "1072°C" },
      { label: "Boiling Point", value: "1794°C" },
      { label: "Density", value: "7.52 g/cm³" },
    ],
    packasingOptions: ["1kg bottles", "5kg bottles", "Custom packaging"],
    storageRequirements:
      "Store in sealed containers with inert atmosphere. Protect from oxidation and moisture.",
  },
  {
    id: "europium",
    name: "Europium",
    symbol: "Eu",
    atomicNumber: 63,
    atomicWeight: "151.964",
    casNumber: "7440-53-1",
    category: "light-rare-earth" as const,
    shortDescription:
      "One of the rarest and most reactive rare earth elements, essential for color displays and security applications.",
    fullDescription:
      "Europium is one of the rarest and most reactive rare earth elements. It is critical for producing red and blue phosphors in television and display technologies. Its fluorescent properties also make it valuable for anti-counterfeiting applications and advanced lighting.",
    purityGrades: ["99.0%", "99.5%", "99.9%"],
    availableForms: ["Oxide", "Powder", "Chloride", "Fluoride", "Phosphor"],
    applications: {
      optical: [
        "Red phosphors in displays",
        "CRT color televisions",
        "Fluorescent lamps",
      ],
      metallurgy: ["Anti-counterfeiting in banknotes"],
      semiconductor: ["Optical coatings"],
    },
    specifications: [
      { label: "Appearance", value: "Silvery-white metal" },
      { label: "Melting Point", value: "822°C" },
      { label: "Boiling Point", value: "1597°C" },
      { label: "Density", value: "5.264 g/cm³" },
    ],
    packasingOptions: ["500g bottles", "1kg bottles", "5kg bottles"],
    storageRequirements:
      "Store in inert atmosphere. Extremely reactive; handle with extreme care and keep sealed.",
  },
  {
    id: "gadolinium",
    name: "Gadolinium",
    symbol: "Gd",
    atomicNumber: 64,
    atomicWeight: "157.25",
    casNumber: "7440-54-2",
    category: "light-rare-earth" as const,
    shortDescription:
      "Possesses unusual metallurgic properties with high neutron absorption capabilities for medical and reactor applications.",
    fullDescription:
      "Gadolinium has remarkable magnetic properties and extraordinary neutron absorption capabilities. It is essential for MRI contrast agents in medical imaging and for nuclear reactor shielding and control. Its unique combination of properties makes it invaluable in both medical and industrial sectors.",
    purityGrades: ["99.0%", "99.5%", "99.9%"],
    availableForms: ["Oxide", "Powder", "Ingot", "Chloride", "Nanoparticles"],
    applications: {
      optical: ["MRI contrast agents", "Medical imaging"],
      catalysts: ["Nuclear reactor shielding", "Control rods"],
      metallurgy: ["Alloy additives", "Thermal barrier coatings"],
    },
    specifications: [
      { label: "Appearance", value: "Silvery-white metal" },
      { label: "Melting Point", value: "1313°C" },
      { label: "Boiling Point", value: "3273°C" },
      { label: "Density", value: "7.90 g/cm³" },
    ],
    packasingOptions: ["1kg bottles", "5kg bottles", "25kg bags"],
    storageRequirements:
      "Store in dry inert atmosphere. Protect from moisture; stable under normal conditions.",
  },
];
