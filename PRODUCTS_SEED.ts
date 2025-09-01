export type Product = {
  id: string;
  name: string;
  type: "speaker" | "subwoofer";
  dayPrice: number;
  coverage: {
    hDeg: number; vDeg: number;
    refSPLdB: number;     // Max SPL @1m (datablad)
    refDistM: number;     // 1.0
    targetSPLdB: number;  // mål for “god dækning”
  };
  frequencyRange?: string;
  power?: { continuous?: string; peak?: string };
  weightKg?: number;
  dimensionsMm?: { w: number; h: number; d: number };
  maxAudience?: number;
  suggestedRadiusM?: number;
  image?: string;
};

export const PRODUCTS_SEED: Product[] = [
  {
    id: "yamaha-dxr12",
    name: "Yamaha DXR12",
    type: "speaker",
    dayPrice: 349,
    coverage: { hDeg: 90, vDeg: 60, refSPLdB: 132, refDistM: 1, targetSPLdB: 94 },
    frequencyRange: "52–20 kHz",
    power: { continuous: "700 W", peak: "1100 W" },
    weightKg: 19.3,
    dimensionsMm: { w: 362, h: 601, d: 350 },
    maxAudience: 80,
    suggestedRadiusM: 12,
    image: "/img/products/yamaha-dxr12.png"
  },
  {
    id: "yamaha-dxs12mkii",
    name: "Yamaha DXS12 MKII",
    type: "subwoofer",
    dayPrice: 399,
    coverage: { hDeg: 360, vDeg: 360, refSPLdB: 134, refDistM: 1, targetSPLdB: 90 },
    frequencyRange: "42–150 Hz",
    power: { continuous: "800 W", peak: "1020 W" },
    weightKg: 30,
    dimensionsMm: { w: 400, h: 567, d: 570 },
    maxAudience: 120,
    suggestedRadiusM: 8,
    image: "/img/products/yamaha-dxs12mkii.png"
  },
  {
    id: "dbtech-bhype12",
    name: "dB Technologies B-Hype 12",
    type: "speaker",
    dayPrice: 299,
    coverage: { hDeg: 85, vDeg: 85, refSPLdB: 126, refDistM: 1, targetSPLdB: 92 },
    frequencyRange: "55–20 kHz",
    power: { peak: "400 W" },
    weightKg: 13.9,
    dimensionsMm: { w: 350, h: 645, d: 330 },
    maxAudience: 60,
    suggestedRadiusM: 10,
    image: "/img/products/dbtech-bhype12.png"
  }
];
