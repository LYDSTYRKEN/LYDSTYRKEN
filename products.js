// ════════════════════════════════════════════════════════════════
//   LYDSTYRKEN — Produktdata (delt mellem lagersalg.html & produkt.html)
// ════════════════════════════════════════════════════════════════
//
//   ⚠️  PRISER ER GÆT — RET DEM FØR PUBLICERING
//   --------------------------------------------------------------
//   minPrice (mindstepris) er baseret på den "Købspris" du angav.
//   newPrice (vejl. nypris) er gætted ud fra typiske markedspriser.
//   Gennemgå hver produkt og juster efter hvad du faktisk vil have.
//
//   Felter pr. produkt:
//   --------------------------------------------------------------
//   id, name, category, type ("private"/"business"), description,
//   details, condition, specs, newPrice, minPrice, currentBid, bidder,
//   image, images, sold
//
//   Se README.md for fuld dokumentation.
//
// ════════════════════════════════════════════════════════════════

const END_DATE = new Date('2026-05-15T22:00:00');

const PRODUCTS = [

  // ──────────────────── HØJTTALERE — TOP ────────────────────
 {
    id: 1,
    name: "Yamaha DXR15 (par)",
    category: "Højttaler",
    type: "business",
    description: "Aktive 15\" fuldspektrums-PA-højttalere, 1100W class-D. Sælges som par.",
    details: "Et par Yamaha DXR15 — workhorse-PA-højttalere der har siddet i vores rig til mellemstore events. Pålidelige kasser med klar diskant og tilstrækkeligt bund til de fleste sammenhænge. Sælges som par så du kan få et komplet stereo-setup.",
    condition: "Velholdt — har lette brugsspor på cabinet, lyder upåklageligt",
    specs: [
      { label: "Driver", value: "15\" woofer + 1.4\" HF compression driver" },
      { label: "Forstærker", value: "1100W class-D peak / 700W program" },
      { label: "Max SPL", value: "132 dB" },
      { label: "Frekvensrespons", value: "50 Hz – 20 kHz (-10 dB)" },
      { label: "Spredning", value: "90° x 60°" },
      { label: "Vægt", value: "21 kg pr. enhed" }
    ],
    newPrice: 16000,
    minPrice: 2000,
    currentBid: 2200,
    bidder: "PT",
    image: "",
    images: []
  },
{
    id: 2,
    name: "Yamaha DXR15 (par)",
    category: "Højttaler",
    type: "business",
    description: "Aktive 15\" fuldspektrums-PA-højttalere, 1100W class-D. Sælges som par.",
    details: "Et par Yamaha DXR15 — workhorse-PA-højttalere der har siddet i vores rig til mellemstore events. Pålidelige kasser med klar diskant og tilstrækkeligt bund til de fleste sammenhænge. Sælges som par så du kan få et komplet stereo-setup.",
    condition: "Velholdt — har lette brugsspor på cabinet, lyder upåklageligt",
    specs: [
      { label: "Driver", value: "15\" woofer + 1.4\" HF compression driver" },
      { label: "Forstærker", value: "1100W class-D peak / 700W program" },
      { label: "Max SPL", value: "132 dB" },
      { label: "Frekvensrespons", value: "50 Hz – 20 kHz (-10 dB)" },
      { label: "Spredning", value: "90° x 60°" },
      { label: "Vægt", value: "21 kg pr. enhed" }
    ],
    newPrice: 16000,
    minPrice: 2000,
    currentBid: 2200,
    bidder: "PT",
    image: "",
    images: []
  },
];

// Hjælpefunktion brugt på begge sider
const formatKr = n => n.toLocaleString('da-DK') + ' kr.';

// Find produkt ud fra id (bruges på produkt.html)
function findProductById(id) {
  return PRODUCTS.find(p => String(p.id) === String(id));
}