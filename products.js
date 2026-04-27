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
    name: "Yamaha DXR15 (enkelt)",
    category: "Højttaler",
    type: "private",
    description: "Aktiv 15\" fuldspektrums-PA-højttaler, 1100W class-D. Sælges enkeltvis.",
    details: "Enkelt Yamaha DXR15 — kan bruges som extra-fyld, monitor på scenen eller som start på et nyt setup. Samme specs som DXR15 i par-tilbuddet ovenfor.",
    condition: "Velholdt",
    specs: [
      { label: "Driver", value: "15\" woofer + 1.4\" HF compression driver" },
      { label: "Forstærker", value: "1100W class-D peak" },
      { label: "Max SPL", value: "132 dB" },
      { label: "Frekvensrespons", value: "50 Hz – 20 kHz (-10 dB)" }
    ],
    newPrice: 8000,
    minPrice: 1000,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 3,
    name: "Yamaha DXR12 (par)",
    category: "Højttaler",
    type: "private",
    description: "Aktive 12\" fuldspektrums-PA-højttalere. Lettere og mere portable end 15\"-versionen.",
    details: "Et par Yamaha DXR12 — den lette søster til DXR15. Perfekt til mellemstore events hvor man har brug for klar lyd uden at slæbe 15\"-kasser. Velegnet som top-PA eller som monitor til mindre scener.",
    condition: "Velholdt",
    specs: [
      { label: "Driver", value: "12\" woofer + 1.4\" HF compression driver" },
      { label: "Forstærker", value: "1100W class-D peak" },
      { label: "Max SPL", value: "131 dB" },
      { label: "Frekvensrespons", value: "52 Hz – 20 kHz (-10 dB)" },
      { label: "Spredning", value: "90° x 60°" },
      { label: "Vægt", value: "18 kg pr. enhed" }
    ],
    newPrice: 14000,
    minPrice: 6500,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 4,
    name: "dB Technologies B-Hype 12 (par)",
    category: "Højttaler",
    type: "private",
    description: "Aktive 12\" fuldfrekvens-højttalere fra italienske dB Technologies. Sælges som par.",
    details: "Et par dB Technologies B-Hype 12 — italiensk-bygget alternativ til de tunge brands. Lette, portable og overraskende kraftige til prisen. Egnede til mindre events, taler og baggrundsmusik.",
    condition: "Velholdt",
    specs: [
      { label: "Driver", value: "12\" woofer + 1\" HF" },
      { label: "Forstærker", value: "400W RMS class-D" },
      { label: "Frekvensrespons", value: "55 Hz – 20 kHz" },
      { label: "Vægt", value: "13.5 kg pr. enhed" }
    ],
    newPrice: 8000,
    minPrice: 1000,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 5,
    name: "Yamaha DXR10 (par)",
    category: "Højttaler",
    type: "private",
    description: "Aktive 10\" fuldspektrums-PA-højttalere. Kompakte og kraftfulde til mindre rum.",
    details: "Et par Yamaha DXR10 — kompakte og lette. Perfekte til foredrag, mindre fester og baggrundsmusik. Kan også bruges som scenefyld eller monitorer i et større setup.",
    condition: "Velholdt",
    specs: [
      { label: "Driver", value: "10\" woofer + 1.4\" HF compression driver" },
      { label: "Forstærker", value: "1100W class-D peak" },
      { label: "Max SPL", value: "129 dB" },
      { label: "Frekvensrespons", value: "56 Hz – 20 kHz (-10 dB)" },
      { label: "Vægt", value: "15 kg pr. enhed" }
    ],
    newPrice: 10000,
    minPrice: 3000,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },

  // ──────────────────── HØJTTALERE — SUB ────────────────────

  {
    id: 6,
    name: "Yamaha DXS18 Subwoofer",
    category: "Højttaler",
    type: "private",
    description: "Aktiv 18\" subwoofer, 1020W class-D. Giver det nødvendige bund i lyden til større events.",
    details: "Yamaha DXS18 — den store sub. Når du skal have rigtigt fundament under musikken til større fester, koncerter eller udendørs events. Crossover og delay-justering indbygget for nem integration med top-PA.",
    condition: "Velholdt",
    specs: [
      { label: "Driver", value: "18\" woofer" },
      { label: "Forstærker", value: "1020W class-D peak" },
      { label: "Max SPL", value: "136 dB" },
      { label: "Frekvensrespons", value: "32 Hz – 150 Hz (-10 dB)" },
      { label: "Vægt", value: "40 kg" }
    ],
    newPrice: 13000,
    minPrice: 7000,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 7,
    name: "Yamaha DXS12 mkII Subwoofer",
    category: "Højttaler",
    type: "private",
    description: "Aktiv 12\" subwoofer i kompakt format. God supplerer til DXR-serien.",
    details: "Yamaha DXS12 mkII — den lette subwoofer der passer godt til mindre setups. Når DXS18 er for stor og DXR-toppene mangler bund, så er denne perfekt. Nem at transportere.",
    condition: "Velholdt",
    specs: [
      { label: "Driver", value: "12\" woofer" },
      { label: "Forstærker", value: "950W class-D peak" },
      { label: "Max SPL", value: "132 dB" },
      { label: "Frekvensrespons", value: "41 Hz – 100 Hz (-10 dB)" },
      { label: "Vægt", value: "21 kg" }
    ],
    newPrice: 9000,
    minPrice: 3000,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },

  // ──────────────────── MIXERE ────────────────────

  {
    id: 8,
    name: "Behringer WING — 48-kanals Digital Mixer",
    category: "Mixer",
    type: "business",
    description: "48-kanals fuld-features digital mixerpult med touchscreen. Stor pro-pult til live og studie.",
    details: "Behringer WING — flagskib-pulten. 48 input-kanaler, 28 buses, 24 effects, fuld touchscreen-interface og StageConnect for nem stagebox-integration. Har siddet i vores rig til større jobs og fungerer perfekt. Fuldfunktionel professionel digital mixer som lader dig tackle alle fra mellemstore til store events.",
    condition: "Velholdt — fungerer fejlfrit, lette brugsspor",
    specs: [
      { label: "Kanaler", value: "48 input / 28 output buses" },
      { label: "Effekter", value: "24 stereo / 8 plug-in slots" },
      { label: "Touchscreen", value: "10.1\" full-color" },
      { label: "Konnektivitet", value: "AES50, StageConnect, USB-recording, Wi-Fi" },
      { label: "Faders", value: "16 motoriserede" },
      { label: "Sampling rate", value: "48 / 44.1 kHz" }
    ],
    newPrice: 28000,
    minPrice: 14000,
    currentBid: 14500,
    bidder: "MJ",
    image: "",
    images: []
  },
  {
    id: 9,
    name: "Behringer Flow 8 — Digital Mixer",
    category: "Mixer",
    type: "private",
    description: "8-kanals digital mixer med Bluetooth og app-kontrol. Kompakt og perfekt til mindre jobs.",
    details: "Behringer Flow 8 — den lille digitale pult med bevidst minimalt fysisk interface og fuld app-kontrol via Bluetooth. Perfekt til mindre events, taler eller hjemme-studie hvor man vil have alle fordelene ved digital uden den store form-faktor.",
    condition: "Som ny",
    specs: [
      { label: "Kanaler", value: "8 (2 mono mic/line + 4 stereo)" },
      { label: "Effekter", value: "Indbyggede effekter + 4-bånds EQ pr. kanal" },
      { label: "Konnektivitet", value: "Bluetooth audio, USB recording, app-kontrol" },
      { label: "Faders", value: "Motoriserede" }
    ],
    newPrice: 2200,
    minPrice: 800,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 10,
    name: "Yamaha MG06 — 6-kanals Analog Mixer",
    category: "Mixer",
    type: "private",
    description: "Lille 6-kanals analog mixerpult. Perfekt som kompakt løsning til foredrag eller mindre jobs.",
    details: "Yamaha MG06 — den klassiske analog-mixer i lille format. To mic-preamps (D-PRE), kompressorknap pr. kanal og en stereo-kanal. Pålidelig og enkel — der er ingen menuer at navigere igennem.",
    condition: "Velholdt",
    specs: [
      { label: "Kanaler", value: "6 (2 mono mic/line + 2 stereo)" },
      { label: "Mic preamps", value: "D-PRE (Class-A discrete)" },
      { label: "EQ", value: "3-bånds pr. mono-kanal" },
      { label: "Phantom power", value: "+48V" }
    ],
    newPrice: 1200,
    minPrice: 400,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },

  // ──────────────────── STAGEBOX ────────────────────

  {
    id: 11,
    name: "Behringer SD8 — Digital Stagebox",
    category: "Andet",
    type: "private",
    description: "Digital stagebox med 8 mic-inputs og 8 line-outputs via AES50.",
    details: "Behringer SD8 — kompakt digital stagebox til at flytte mic-input fra scenen til mixerpulten via ét enkelt CAT5-kabel. Kompatibel med Behringer X32, WING og Midas-pulte. Sparer dig for at trække en multikabel.",
    condition: "Velholdt",
    specs: [
      { label: "Mic-inputs", value: "8 (XLR, +48V phantom)" },
      { label: "Line-outputs", value: "8 (XLR)" },
      { label: "Connector", value: "AES50 (cat5e/cat6 op til 100m)" },
      { label: "Sampling rate", value: "44.1 / 48 kHz" }
    ],
    newPrice: 2800,
    minPrice: 1000,
    currentBid: 1100,
    bidder: "AK",
    image: "",
    images: []
  },

  // ──────────────────── BLUETOOTH RECEIVER ────────────────────

  {
    id: 12,
    name: "Argon Audio BT3 Bluetooth Receiver",
    category: "Andet",
    type: "private",
    description: "Bluetooth-modtager med aptX HD og optisk udgang. Til at sende musik trådløst til PA-anlægget.",
    details: "Argon Audio BT3 — lille bluetooth-receiver der lader dig streame fra mobil eller laptop direkte ind i mixerpulten eller PA-anlægget. Understøtter aptX HD for høj lydkvalitet.",
    condition: "Som ny",
    specs: [
      { label: "Bluetooth", value: "5.0 m/aptX HD" },
      { label: "Udgange", value: "Analog RCA + optisk (Toslink)" },
      { label: "Rækkevidde", value: "Op til 10 m" }
    ],
    newPrice: 800,
    minPrice: 500,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },

  // ──────────────────── TRÅDLØSE MIKROFONER ────────────────────

  {
    id: 13,
    name: "AKG WMS420 trådløst mikrofon-sæt (HT420 + SR420)",
    category: "Mikrofon",
    type: "private",
    description: "Komplet trådløst håndholdt mikrofon-system. HT420 håndmikrofon + SR420 stationær receiver.",
    details: "AKG WMS420 — pålideligt analogt UHF trådløst system. Inkluderer HT420 håndmikrofon-sender og SR420 receiver til montering ved mixerpulten. Velegnet til foredrag, ceremonier og mindre koncerter.",
    condition: "Velholdt — fungerer fejlfrit",
    specs: [
      { label: "Frekvens", value: "UHF (analog)" },
      { label: "Rækkevidde", value: "Op til 100 m fri sigt" },
      { label: "Battery life", value: "Ca. 8 timer (HT420)" },
      { label: "Kapsel", value: "D5-kapsel (dynamisk)" },
      { label: "Modtagelse", value: "Diversity (2 antenner)" }
    ],
    newPrice: 3500,
    minPrice: 1500,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 14,
    name: "AKG WMS420 trådløst mikrofon-sæt (HT420 + SR420) — sæt #2",
    category: "Mikrofon",
    type: "private",
    description: "Andet sæt — komplet AKG trådløst håndholdt system. Identisk med ovenstående.",
    details: "Andet sæt af samme model — kan kombineres med det første sæt for to-mikrofon-setup ved foredrag eller ceremonier.",
    condition: "Velholdt — fungerer fejlfrit",
    specs: [
      { label: "Frekvens", value: "UHF (analog)" },
      { label: "Battery life", value: "Ca. 8 timer (HT420)" },
      { label: "Kapsel", value: "D5-kapsel (dynamisk)" }
    ],
    newPrice: 3500,
    minPrice: 1500,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },

  // ──────────────────── SYNTHESIZER ────────────────────

  {
    id: 15,
    name: "Novation Circuit Tracks",
    category: "Andet",
    type: "private",
    description: "Standalone groovebox med 2 synth-spor og 4 drum-spor. Battery-powered.",
    details: "Novation Circuit Tracks — kompakt groovebox med indbygget sequencer, perfekt til at bygge electronic-tracks fra bunden eller medbringe som live-instrument. Kan køre på batteri.",
    condition: "Velholdt",
    specs: [
      { label: "Spor", value: "2 synth + 4 drum + MIDI" },
      { label: "Stemmer", value: "6-stemmig polyfoni pr. synth" },
      { label: "Konnektivitet", value: "USB MIDI, MIDI in/out, audio out, hovedtelefon" },
      { label: "Strøm", value: "USB eller 6x AA batterier" }
    ],
    newPrice: 3500,
    minPrice: 750,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },

  // ──────────────────── LYS ────────────────────

  {
    id: 16,
    name: "Venturelite Alina Washhead (sæt af 4 + flightcase)",
    category: "Lys",
    type: "private",
    description: "Fire LED moving washheads + flightcase til transport. DMX-styrede farve-effekter.",
    details: "Et komplet sæt af 4 Venturelite Alina LED moving washheads med tilhørende flightcase. Wash-effekter giver bløde, brede farvestråler — perfekte til at fylde scenen med stemning. Kan styres via DMX fra controller eller mixerpult.",
    condition: "Velholdt — alle 4 fungerer, flightcase i god stand",
    specs: [
      { label: "Type", value: "LED moving head wash" },
      { label: "Antal", value: "4 stk + flightcase" },
      { label: "Styring", value: "DMX-512" },
      { label: "Strøm", value: "100-240V AC" }
    ],
    newPrice: 12000,
    minPrice: 3000,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 17,
    name: "Venturelite Alina Washhead (sæt af 4 + flightcase) — sæt #2",
    category: "Lys",
    type: "private",
    description: "Andet sæt af 4 LED moving washheads + flightcase. Identisk med sæt #1 — kan kombineres til 8-lys rig.",
    details: "Samme model som sæt #1 — sælges separat eller sammen for et komplet 8-lys rig. Begge sæt sælges med flightcases.",
    condition: "Velholdt — alle 4 fungerer, flightcase i god stand",
    specs: [
      { label: "Type", value: "LED moving head wash" },
      { label: "Antal", value: "4 stk + flightcase" },
      { label: "Styring", value: "DMX-512" }
    ],
    newPrice: 12000,
    minPrice: 3000,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 18,
    name: "Cameo Control 54 DMX-controller",
    category: "Lys",
    type: "private",
    description: "DMX-controller til styring af lys-fixtures. Op til 192 kanaler.",
    details: "Cameo Control 54 — solid DMX-controller til at styre op til 12 fixtures à 16 kanaler hver. Indbyggede chases og programmer. God som start-controller til mindre lyssætninger.",
    condition: "Velholdt",
    specs: [
      { label: "Kanaler", value: "192 DMX-kanaler" },
      { label: "Fixtures", value: "Op til 12 fixtures × 16 kanaler" },
      { label: "Programmer", value: "Indbyggede chases + custom scenes" },
      { label: "Output", value: "DMX-512 (3-pin XLR)" }
    ],
    newPrice: 2000,
    minPrice: 500,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  },
  {
    id: 19,
    name: "Ebiza Light LC12DMX",
    category: "Lys",
    type: "private",
    description: "Kompakt DMX-controller til mindre lyssætninger.",
    details: "Lille, simpel DMX-controller — perfekt som backup-pult eller til mindre lyssætninger hvor man kun har få fixtures.",
    condition: "Velholdt",
    specs: [
      { label: "Kanaler", value: "12 fixtures × 16 kanaler" },
      { label: "Output", value: "DMX-512" }
    ],
    newPrice: 800,
    minPrice: 300,
    currentBid: null,
    bidder: null,
    image: "",
    images: []
  }

];

// Hjælpefunktion brugt på begge sider
const formatKr = n => n.toLocaleString('da-DK') + ' kr.';

// Find produkt ud fra id (bruges på produkt.html)
function findProductById(id) {
  return PRODUCTS.find(p => String(p.id) === String(id));
}