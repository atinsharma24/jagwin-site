export type ServiceId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const FALLBACK_IMAGES = {
  lightning:
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80",
  surge:
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80",
  earthing:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
  ups:
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
  stabilizer:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80",
  battery:
    "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80",
  solar:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
  audit:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
} as const;

export type FallbackKey = keyof typeof FALLBACK_IMAGES;

export type Service = {
  id: ServiceId;
  title: string;
  image: string;
  fallbackKey: FallbackKey;
  description: string;
  overview: string;
  highlights: string[];
  deliverables: string[];
  typicalApplications: string[];
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Lightning Protection System (LPS)",
    image: "/images/service-lps.png",
    fallbackKey: "lightning",
    description: "Advanced lightning protection for complete facility safety",
    overview:
      "End-to-end protection against direct strikes with engineered air terminals, down conductors, and bonding aligned to site risk.",
    highlights: [
      "Risk assessment and protection-level recommendation",
      "High-quality components with reliable current carrying capacity",
      "Integration with earthing and bonding network",
      "Documentation for handover and maintenance",
    ],
    typicalApplications: [
      "Manufacturing plants and warehouses",
      "Commercial buildings and campuses",
      "Telecom / data facilities",
      "Critical utility areas",
    ],
    deliverables: [
      "Site survey and layout proposal",
      "Installation and commissioning",
      "Earth continuity verification",
      "As-built drawings and checklist",
    ],
  },
  {
    id: 2,
    title: "Surge Protection Devices (SPD)",
    image: "/images/service-spd.png",
    fallbackKey: "surge",
    description: "Protect your equipment from voltage surges and spikes",
    overview:
      "Layered surge protection at incomer, DB, and sensitive loads to mitigate transients caused by lightning and switching events.",
    highlights: [
      "Coordinated Type 1/2/3 protection strategy",
      "Low let-through voltage selection for sensitive equipment",
      "Proper earthing and bonding recommendations",
      "Clear labeling and maintenance guidance",
    ],
    typicalApplications: [
      "PLC panels and automation systems",
      "Server rooms and networking",
      "CCTV and access control",
      "Medical and lab equipment",
    ],
    deliverables: [
      "SPD selection and placement plan",
      "Installation and integration",
      "Coordination verification",
      "Commissioning checklist",
    ],
  },
  {
    id: 3,
    title: "Chemical Earthing Solutions",
    image: "/images/service-chemical-earthing.png",
    fallbackKey: "earthing",
    description: "Low resistance earthing systems for optimal safety",
    overview:
      "Stable and long-life earthing with optimized backfill material for consistent resistance across soil conditions.",
    highlights: [
      "Designed for low and stable earth resistance",
      "Suitable for difficult soil conditions",
      "Improves safety and reduces equipment stress",
      "Supports lightning and SPD performance",
    ],
    typicalApplications: [
      "Industrial panels and transformers",
      "Lightning earthing grids",
      "Sensitive electronic systems",
      "Solar plant earthing",
    ],
    deliverables: [
      "Soil inspection and earthing plan",
      "Earthing pit installation",
      "Earth resistance test report",
      "Maintenance recommendations",
    ],
  },
  {
    id: 4,
    title: "Online UPS & SMF Batteries",
    image: "/images/service-ups-smf.png",
    fallbackKey: "ups",
    description: "Reliable backup power and battery solutions for critical loads",
    overview:
      "Power continuity for critical operations with right-sized UPS and battery autonomy aligned to load profile and runtime needs.",
    highlights: [
      "Sizing based on load study and autonomy",
      "Clean power output for sensitive electronics",
      "Battery health and replacement planning",
      "Professional installation and testing",
    ],
    typicalApplications: [
      "IT rooms and networking",
      "Security and surveillance",
      "Control rooms",
      "Industrial automation",
    ],
    deliverables: [
      "Load assessment and sizing",
      "UPS + battery supply and installation",
      "Runtime verification",
      "Handover documentation",
    ],
  },
  {
    id: 5,
    title: "Servo Stabilizers",
    image: "/images/service-servo-stabilizers.png",
    fallbackKey: "stabilizer",
    description: "Voltage regulation for sensitive equipment protection",
    overview:
      "Maintains stable output voltage to protect equipment, reduce downtime, and improve efficiency under fluctuating mains conditions.",
    highlights: [
      "Fast correction and stable regulation",
      "Improves equipment lifespan",
      "Custom ranges based on site conditions",
      "Reliable protection and monitoring",
    ],
    typicalApplications: [
      "CNC machines and industrial loads",
      "Printing and packaging",
      "Hospitals and diagnostics",
      "Commercial installations",
    ],
    deliverables: [
      "Input fluctuation study",
      "Stabilizer sizing and installation",
      "Functional testing",
      "Operation guidance",
    ],
  },
  {
    id: 6,
    title: "Lithium Ion Batteries",
    image: "/images/service-lithium-ion-batteries.png",
    fallbackKey: "battery",
    description: "High-efficiency energy storage solutions",
    overview:
      "High cycle-life storage options for backup and energy optimization, with focus on safety, performance, and lifecycle value.",
    highlights: [
      "Higher usable capacity and efficiency",
      "Compact footprint and modular scalability",
      "BMS-backed safety and monitoring",
      "Optimized for long-term TCO",
    ],
    typicalApplications: [
      "Backup power systems",
      "Solar + storage",
      "Critical infrastructure",
      "Commercial energy optimization",
    ],
    deliverables: [
      "Sizing and configuration recommendation",
      "Supply and integration guidance",
      "Safety and usage checklist",
      "Handover documentation",
    ],
  },
  {
    id: 7,
    title: "Solar EPC & BOS Kit",
    image: "/images/service-solar-epc.png",
    fallbackKey: "solar",
    description: "Complete solar engineering, procurement & construction",
    overview:
      "Turnkey solar delivery with engineered design, quality BOS selection, and professional commissioning for dependable generation.",
    highlights: [
      "Site feasibility and performance planning",
      "Quality BOS + installation practices",
      "Safety-first execution and compliance",
      "Commissioning and performance checks",
    ],
    typicalApplications: [
      "Rooftop commercial and industrial",
      "Institutional campuses",
      "Warehouses and logistics",
      "Open access applications",
    ],
    deliverables: [
      "Design + BOM/BOS kit",
      "Installation and commissioning",
      "Testing and performance validation",
      "As-built handover",
    ],
  },
  {
    id: 8,
    title: "Power Quality Audit (PQA)",
    image: "/images/service-pqa.png",
    fallbackKey: "audit",
    description: "Comprehensive power system analysis and optimization",
    overview:
      "Measurement-led audit to identify harmonics, imbalance, PF issues, and transient problems, with recommendations for corrective action.",
    highlights: [
      "Data-driven diagnosis with clear findings",
      "Recommendations prioritized by impact",
      "Improves reliability and energy efficiency",
      "Supports compliance and reporting",
    ],
    typicalApplications: [
      "Factories with VFD/drive-heavy loads",
      "Commercial buildings",
      "Data centers and critical loads",
      "Facilities with frequent tripping",
    ],
    deliverables: [
      "Measurements and trend analysis",
      "Audit report with recommendations",
      "Mitigation strategy (APFC/filters/etc.)",
      "Follow-up verification plan",
    ],
  },
];
