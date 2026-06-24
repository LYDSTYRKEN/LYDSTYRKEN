// ════════════════════════════════════════════════════════════════
//   LYDSTYRKEN — Produktdata (delt mellem lagersalg.html & produkt.html)
// ════════════════════════════════════════════════════════════════
//
//   Felter pr. produkt:
//   id, name, category, type ("private"/"business"), description,
//   details, condition, specs, newPrice, minPrice, currentBid, bidder,
//   image, images, sold
//   Pakker: bundle:true, bundleQty, bundleOf:[ids] — pris beregnes auto.
//
//   minPrice = "Byd fra" (smertegrænse) · newPrice = vejl. nypris.
//   currentBid = aktivt højeste bud (vises hvor sat).
// ════════════════════════════════════════════════════════════════

// Budrunden slutter — dato for køb
const END_DATE = new Date('2026-07-05T22:00:00');

const PRODUCTS = [
  {
    "id": 101,
    "name": "Yamaha DXR15 #1",
    "category": "Højttaler",
    "type": "private",
    "description": "Aktiv 15\" fuldspektrums-tophøjttaler — mere bund og output end DXR12. God som main-PA til mindre og mellemstore events.",
    "details": "1100 W klasse-D, max 134 dB SPL, 90°×60° horn, FIR-X tuning, D-CONTOUR og 3-kanals indbygget mixer. Foto følger.",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR multiband"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Kabinet",
        "value": "ABS, dual-angle stativfod"
      },
      {
        "label": "Vægt",
        "value": "ca. 22,5 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 2500,
    "currentBid": 2950,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "group": "Yamaha DXR15",
    "pitch": "Yamaha DXR-serien er en af de mest udbredte og driftssikre aktive PA-kasser i klassen — anmeldere fremhæver et enormt, rent output uden forvrængning selv ved fuld gas. 15\"-modellen giver mere bund og tryk end 12\"-versionen og kan trække en hel bandkoncert alene. D-CONTOUR holder lyden ensartet ved alle niveauer, og den dobbelt-vinklede stativfod gør den lige så god som gulvmonitor. Til mobil-DJ's, små-til-mellemstore koncerter og som kraftig main-PA der bare virker."
  },
  {
    "id": 102,
    "name": "Yamaha DXR15 #2",
    "category": "Højttaler",
    "type": "private",
    "description": "Aktiv 15\" fuldspektrums-tophøjttaler — mere bund og output end DXR12. God som main-PA til mindre og mellemstore events.",
    "details": "1100 W klasse-D, max 134 dB SPL, 90°×60° horn, FIR-X tuning, D-CONTOUR og 3-kanals indbygget mixer. Foto følger.",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR multiband"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Kabinet",
        "value": "ABS, dual-angle stativfod"
      },
      {
        "label": "Vægt",
        "value": "ca. 22,5 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 2500,
    "currentBid": 2900,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "group": "Yamaha DXR15",
    "pitch": "Yamaha DXR-serien er en af de mest udbredte og driftssikre aktive PA-kasser i klassen — anmeldere fremhæver et enormt, rent output uden forvrængning selv ved fuld gas. 15\"-modellen giver mere bund og tryk end 12\"-versionen og kan trække en hel bandkoncert alene. D-CONTOUR holder lyden ensartet ved alle niveauer, og den dobbelt-vinklede stativfod gør den lige så god som gulvmonitor. Til mobil-DJ's, små-til-mellemstore koncerter og som kraftig main-PA der bare virker."
  },
  {
    "id": 103,
    "name": "Yamaha DXR15 #3",
    "category": "Højttaler",
    "type": "private",
    "description": "Aktiv 15\" fuldspektrums-tophøjttaler — mere bund og output end DXR12. God som main-PA til mindre og mellemstore events.",
    "details": "1100 W klasse-D, max 134 dB SPL, 90°×60° horn, FIR-X tuning, D-CONTOUR og 3-kanals indbygget mixer. Foto følger.",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR multiband"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Kabinet",
        "value": "ABS, dual-angle stativfod"
      },
      {
        "label": "Vægt",
        "value": "ca. 22,5 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 2500,
    "currentBid": 2900,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "group": "Yamaha DXR15",
    "pitch": "Yamaha DXR-serien er en af de mest udbredte og driftssikre aktive PA-kasser i klassen — anmeldere fremhæver et enormt, rent output uden forvrængning selv ved fuld gas. 15\"-modellen giver mere bund og tryk end 12\"-versionen og kan trække en hel bandkoncert alene. D-CONTOUR holder lyden ensartet ved alle niveauer, og den dobbelt-vinklede stativfod gør den lige så god som gulvmonitor. Til mobil-DJ's, små-til-mellemstore koncerter og som kraftig main-PA der bare virker."
  },
  {
    "id": 104,
    "name": "Yamaha DXR15 #4",
    "category": "Højttaler",
    "type": "private",
    "description": "Aktiv 15\" fuldspektrums-tophøjttaler — mere bund og output end DXR12. God som main-PA til mindre og mellemstore events.",
    "details": "1100 W klasse-D, max 134 dB SPL, 90°×60° horn, FIR-X tuning, D-CONTOUR og 3-kanals indbygget mixer. Foto følger.",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR multiband"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Kabinet",
        "value": "ABS, dual-angle stativfod"
      },
      {
        "label": "Vægt",
        "value": "ca. 22,5 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 2500,
    "currentBid": 3000,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "group": "Yamaha DXR15",
    "pitch": "Yamaha DXR-serien er en af de mest udbredte og driftssikre aktive PA-kasser i klassen — anmeldere fremhæver et enormt, rent output uden forvrængning selv ved fuld gas. 15\"-modellen giver mere bund og tryk end 12\"-versionen og kan trække en hel bandkoncert alene. D-CONTOUR holder lyden ensartet ved alle niveauer, og den dobbelt-vinklede stativfod gør den lige så god som gulvmonitor. Til mobil-DJ's, små-til-mellemstore koncerter og som kraftig main-PA der bare virker."
  },
  {
    "id": 105,
    "name": "Yamaha DXR15 — defekt (reservedele)",
    "category": "Højttaler",
    "type": "private",
    "description": "Defekt DXR15 — sælges billigt som reservedele. Kabinet, woofer, horn og dele kan genbruges.",
    "details": "Enheden virker ikke og sælges som den er/forefindes til reservedele. Resten af DXR15-parken er fungerende — se de øvrige opslag.",
    "condition": "Defekt — sælges som reservedele",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR multiband"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Kabinet",
        "value": "ABS, dual-angle stativfod"
      },
      {
        "label": "Vægt",
        "value": "ca. 22,5 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 300,
    "currentBid": 300,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "group": "Yamaha DXR15",
    "pitch": "Yamaha DXR-serien er en af de mest udbredte og driftssikre aktive PA-kasser i klassen — anmeldere fremhæver et enormt, rent output uden forvrængning selv ved fuld gas. 15\"-modellen giver mere bund og tryk end 12\"-versionen og kan trække en hel bandkoncert alene. D-CONTOUR holder lyden ensartet ved alle niveauer, og den dobbelt-vinklede stativfod gør den lige så god som gulvmonitor. Til mobil-DJ's, små-til-mellemstore koncerter og som kraftig main-PA der bare virker."
  },
  {
    "id": 110,
    "name": "Yamaha DXR12 #1",
    "category": "Højttaler",
    "type": "business",
    "description": "Aktiv 12\" fuldspektrums-tophøjttaler — en af de mest driftssikre aktive kasser i klassen. Velegnet til FOH og som monitor.",
    "details": "1100 W klasse-D, max 132 dB SPL, 90°×60° horn, FIR-X tuning, D-CONTOUR og 3-kanals indbygget mixer. Erhvervsaktiv (CVR) — faktura mulig.",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "12\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "132 dB"
      },
      {
        "label": "Frekvens",
        "value": "52 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 19,5 kg"
      }
    ],
    "newPrice": 4500,
    "minPrice": 3000,
    "currentBid": 3400,
    "bidder": null,
    "image": "images/products/dxr12-1.jpg",
    "images": [
      "images/products/dxr12-2.jpg",
      "images/products/dxr12-3.jpg",
      "images/products/dxr12-4.jpg",
      "images/products/dxr12-5.jpg",
      "images/products/dxr12-6.jpg",
      "images/products/dxr12-7.jpg"
    ],
    "sold": false,
    "group": "Yamaha DXR12",
    "pitch": "DXR12 er arbejdshesten i Yamaha DXR-serien — let nok til at én person flytter den, kraftig nok til FOH. Anmeldere beskriver en glat, varm og velbalanceret lyd med masser af headroom (målt ~132 dB SPL). Det skrå kabinet gør den lige så anvendelig som scenemonitor. Perfekt til DJ-sets, taler, mindre koncerter og fester — et sikkert valg der holder værdien godt."
  },
  {
    "id": 111,
    "name": "Yamaha DXR12 #2",
    "category": "Højttaler",
    "type": "business",
    "description": "Aktiv 12\" fuldspektrums-tophøjttaler — en af de mest driftssikre aktive kasser i klassen. Velegnet til FOH og som monitor.",
    "details": "1100 W klasse-D, max 132 dB SPL, 90°×60° horn, FIR-X tuning, D-CONTOUR og 3-kanals indbygget mixer. Erhvervsaktiv (CVR) — faktura mulig.",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "12\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "132 dB"
      },
      {
        "label": "Frekvens",
        "value": "52 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 19,5 kg"
      }
    ],
    "newPrice": 4500,
    "minPrice": 3000,
    "currentBid": 3250,
    "bidder": null,
    "image": "images/products/dxr12-2.jpg",
    "images": [
      "images/products/dxr12-3.jpg",
      "images/products/dxr12-4.jpg",
      "images/products/dxr12-5.jpg",
      "images/products/dxr12-6.jpg",
      "images/products/dxr12-7.jpg",
      "images/products/dxr12-1.jpg"
    ],
    "sold": false,
    "group": "Yamaha DXR12",
    "pitch": "DXR12 er arbejdshesten i Yamaha DXR-serien — let nok til at én person flytter den, kraftig nok til FOH. Anmeldere beskriver en glat, varm og velbalanceret lyd med masser af headroom (målt ~132 dB SPL). Det skrå kabinet gør den lige så anvendelig som scenemonitor. Perfekt til DJ-sets, taler, mindre koncerter og fester — et sikkert valg der holder værdien godt."
  },
  {
    "id": 112,
    "name": "Yamaha DXR12 #3",
    "category": "Højttaler",
    "type": "private",
    "description": "Aktiv 12\" fuldspektrums-tophøjttaler — en af de mest driftssikre aktive kasser i klassen. Velegnet til FOH og som monitor.",
    "details": "1100 W klasse-D, max 132 dB SPL, 90°×60° horn, FIR-X tuning, D-CONTOUR og 3-kanals indbygget mixer. Privat enhed (sælges momsfrit).",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "12\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "132 dB"
      },
      {
        "label": "Frekvens",
        "value": "52 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 19,5 kg"
      }
    ],
    "newPrice": 4500,
    "minPrice": 3000,
    "currentBid": 3300,
    "bidder": null,
    "image": "images/products/dxr12-3.jpg",
    "images": [
      "images/products/dxr12-4.jpg",
      "images/products/dxr12-5.jpg",
      "images/products/dxr12-6.jpg",
      "images/products/dxr12-7.jpg",
      "images/products/dxr12-1.jpg",
      "images/products/dxr12-2.jpg"
    ],
    "sold": false,
    "group": "Yamaha DXR12",
    "pitch": "DXR12 er arbejdshesten i Yamaha DXR-serien — let nok til at én person flytter den, kraftig nok til FOH. Anmeldere beskriver en glat, varm og velbalanceret lyd med masser af headroom (målt ~132 dB SPL). Det skrå kabinet gør den lige så anvendelig som scenemonitor. Perfekt til DJ-sets, taler, mindre koncerter og fester — et sikkert valg der holder værdien godt."
  },
  {
    "id": 114,
    "name": "Yamaha DXR12 #4",
    "category": "Højttaler",
    "type": "private",
    "description": "Aktiv 12\" fuldspektrums-tophøjttaler — en af de mest driftssikre aktive kasser i klassen. Velegnet til FOH og som monitor.",
    "details": "Privat enhed — denne er solgt. De øvrige DXR12 er fortsat til salg, se gruppen.",
    "condition": "Solgt",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv tophøjttaler"
      },
      {
        "label": "Forstærker",
        "value": "1100 W klasse-D (bi-amp)"
      },
      {
        "label": "Driver",
        "value": "12\" woofer + 1,4\" comp-driver"
      },
      {
        "label": "Max SPL",
        "value": "132 dB"
      },
      {
        "label": "Frekvens",
        "value": "52 Hz – 20 kHz"
      },
      {
        "label": "Spredning",
        "value": "90° × 60°"
      },
      {
        "label": "DSP",
        "value": "FIR-X tuning + D-CONTOUR"
      },
      {
        "label": "Onboard-mixer",
        "value": "3-kanals (mic/line)"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 19,5 kg"
      }
    ],
    "newPrice": 4500,
    "minPrice": 3000,
    "currentBid": null,
    "bidder": null,
    "image": "images/products/dxr12-4.jpg",
    "images": [
      "images/products/dxr12-5.jpg",
      "images/products/dxr12-6.jpg",
      "images/products/dxr12-7.jpg",
      "images/products/dxr12-1.jpg",
      "images/products/dxr12-2.jpg",
      "images/products/dxr12-3.jpg"
    ],
    "sold": true,
    "soldPrice": 4000,
    "group": "Yamaha DXR12",
    "pitch": "DXR12 er arbejdshesten i Yamaha DXR-serien — let nok til at én person flytter den, kraftig nok til FOH. Anmeldere beskriver en glat, varm og velbalanceret lyd med masser af headroom (målt ~132 dB SPL). Det skrå kabinet gør den lige så anvendelig som scenemonitor. Perfekt til DJ-sets, taler, mindre koncerter og fester — et sikkert valg der holder værdien godt."
  },
  {
    "id": 120,
    "name": "dB Technologies B-Hype 12 #1",
    "category": "Højttaler",
    "type": "private",
    "description": "Letvægts aktiv 12\" højttaler med indbygget DSP og lille onboard-mixer. Fleksibel til mindre jobs, fill eller monitor.",
    "details": "2-vejs aktiv (12\" woofer + 1\" driver). Klasse-D 400 W RMS / 800 W peak, max ~126 dB. Indbygget 2-kanals mixer/DSP, pole-socket + flyvepunkter.",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv højttaler"
      },
      {
        "label": "Forstærker",
        "value": "400 W klasse-D"
      },
      {
        "label": "Driver",
        "value": "12\" woofer (2\" svingspole) + 1\" neodym comp"
      },
      {
        "label": "Max SPL",
        "value": "126 dB"
      },
      {
        "label": "Frekvens",
        "value": "55 – 20.000 Hz (-10 dB)"
      },
      {
        "label": "DSP",
        "value": "24-bit, FLAT/BOOST preset-EQ"
      },
      {
        "label": "Kabinet",
        "value": "polypropylen, 3 håndtag, 45° monitorvinkel"
      },
      {
        "label": "Indgange",
        "value": "2x combo (mic/line) + mix-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 13–14 kg"
      }
    ],
    "newPrice": 1800,
    "minPrice": 1000,
    "currentBid": 1000,
    "bidder": null,
    "image": "images/products/bhype12-1.jpg",
    "images": [
      "images/products/bhype12-2.jpg",
      "images/products/bhype12-3.jpg",
      "images/products/bhype12-4.jpg",
      "images/products/bhype12-5.jpg",
      "images/products/bhype12-6.jpg",
      "images/products/bhype12-7.jpg"
    ],
    "sold": false,
    "group": "dB Technologies B-Hype 12",
    "pitch": "B-Hype 12 er dB Technologies' ultralette budget-kasse — polypropylen-kabinet på kun ~13 kg med tre håndtag, så den er hurtig at sætte op. Brugere fremhæver at et par stykker med en sub uden problemer fylder en klub på 100 personer, og at vokal og akustiske instrumenter gengives naturligt uden hård EQ. Et oplagt let fill-/monitor-sæt eller en komplet lille PA til singer-songwriter-gigs, foredrag og mindre fester."
  },
  {
    "id": 121,
    "name": "dB Technologies B-Hype 12 #2",
    "category": "Højttaler",
    "type": "private",
    "description": "Letvægts aktiv 12\" højttaler med indbygget DSP og lille onboard-mixer. Fleksibel til mindre jobs, fill eller monitor.",
    "details": "2-vejs aktiv (12\" woofer + 1\" driver). Klasse-D 400 W RMS / 800 W peak, max ~126 dB. Indbygget 2-kanals mixer/DSP, pole-socket + flyvepunkter.",
    "condition": "Velholdt — fungerende (enkelt enhed)",
    "specs": [
      {
        "label": "Type",
        "value": "2-vejs aktiv højttaler"
      },
      {
        "label": "Forstærker",
        "value": "400 W klasse-D"
      },
      {
        "label": "Driver",
        "value": "12\" woofer (2\" svingspole) + 1\" neodym comp"
      },
      {
        "label": "Max SPL",
        "value": "126 dB"
      },
      {
        "label": "Frekvens",
        "value": "55 – 20.000 Hz (-10 dB)"
      },
      {
        "label": "DSP",
        "value": "24-bit, FLAT/BOOST preset-EQ"
      },
      {
        "label": "Kabinet",
        "value": "polypropylen, 3 håndtag, 45° monitorvinkel"
      },
      {
        "label": "Indgange",
        "value": "2x combo (mic/line) + mix-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 13–14 kg"
      }
    ],
    "newPrice": 1800,
    "minPrice": 1000,
    "currentBid": 1100,
    "bidder": null,
    "image": "images/products/bhype12-4.jpg",
    "images": [
      "images/products/bhype12-5.jpg",
      "images/products/bhype12-6.jpg",
      "images/products/bhype12-7.jpg",
      "images/products/bhype12-1.jpg",
      "images/products/bhype12-2.jpg",
      "images/products/bhype12-3.jpg"
    ],
    "sold": false,
    "group": "dB Technologies B-Hype 12",
    "pitch": "B-Hype 12 er dB Technologies' ultralette budget-kasse — polypropylen-kabinet på kun ~13 kg med tre håndtag, så den er hurtig at sætte op. Brugere fremhæver at et par stykker med en sub uden problemer fylder en klub på 100 personer, og at vokal og akustiske instrumenter gengives naturligt uden hård EQ. Et oplagt let fill-/monitor-sæt eller en komplet lille PA til singer-songwriter-gigs, foredrag og mindre fester."
  },
  {
    "id": 4,
    "name": "Yamaha DXS18",
    "category": "Subwoofer",
    "type": "private",
    "description": "Stor 18\" aktiv subwoofer med dyb, kraftig bas og indbyggede hjul. Det tunge skyts i sætuppet.",
    "details": "1020 W klasse-D, max 136 dB SPL, 4\" svingspole. D-XSUB og cardioid-mode, justerbart x-over, dual pole-sockets og indbyggede hjul.",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "aktiv 18\" subwoofer (band-pass)"
      },
      {
        "label": "Forstærker",
        "value": "1020 W klasse-D"
      },
      {
        "label": "Driver",
        "value": "18\" woofer, 4\" svingspole"
      },
      {
        "label": "Max SPL",
        "value": "136 dB"
      },
      {
        "label": "Frekvens",
        "value": "ned til 32 Hz"
      },
      {
        "label": "DSP",
        "value": "D-XSUB (Normal/Boost/Xtended LF) + cardioid"
      },
      {
        "label": "Crossover",
        "value": "justerbart op til 120 Hz"
      },
      {
        "label": "Indgange",
        "value": "2x XLR, dual pole-sockets, hjul"
      },
      {
        "label": "Vægt",
        "value": "ca. 47 kg"
      }
    ],
    "newPrice": 11000,
    "minPrice": 7000,
    "currentBid": 7500,
    "bidder": null,
    "image": "images/products/dxs18-1.jpg",
    "images": [
      "images/products/dxs18-2.jpg"
    ],
    "sold": false,
    "pitch": "DXS18 er det tunge skyts: en 18\" aktiv sub med 4\"-svingspole, 1020 W og best-in-class 136 dB SPL helt ned til 32 Hz. Thomann-brugere roser den dybe, vidtrækkende bas både inde og ude og en velafstemt forstærker der kører stabilt selv ved høj lyd. Med indbyggede hjul og cardioid-mode er den lavet til DJ- og koncertbrug hvor der skal være rigtig tryk i maven. Hjørnestenen i et fest-rig."
  },
  {
    "id": 5,
    "name": "Yamaha DXS12 MKII",
    "category": "Subwoofer",
    "type": "private",
    "description": "Kompakt aktiv 12\" subwoofer (MKII) der matcher DXR-toppene. Cardioid-mode og opgraderet 1020 W forstærker.",
    "details": "Aktiv 12\" band-pass subwoofer (MKII). 1020 W klasse-D, max 134 dB SPL og ned til 42 Hz. D-XSUB-processing og cardioid-mode, M20 pole-socket.",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "aktiv 12\" subwoofer (band-pass), MKII"
      },
      {
        "label": "Forstærker",
        "value": "1020 W klasse-D"
      },
      {
        "label": "Driver",
        "value": "12\" high-output woofer"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Frekvens",
        "value": "ned til 42 Hz"
      },
      {
        "label": "DSP",
        "value": "D-XSUB + cardioid-mode"
      },
      {
        "label": "Kabinet",
        "value": "akustisk optimeret, M20 pole-socket"
      },
      {
        "label": "Indgange",
        "value": "2x XLR link/through"
      },
      {
        "label": "Vægt",
        "value": "ca. 27 kg"
      }
    ],
    "newPrice": 8000,
    "minPrice": 5000,
    "currentBid": 5500,
    "bidder": null,
    "image": "images/products/dxs12-1.jpg",
    "images": [
      "images/products/dxs12-2.jpg",
      "images/products/dxs12-3.jpg",
      "images/products/dxs12-4.jpg",
      "images/products/dxs12-5.jpg"
    ],
    "sold": false,
    "pitch": "DXS12 MKII giver kompakt, kontant bas der matcher DXR-toppene perfekt — træ-kabinet, D-XSUB-processing og en forstærker der ikke kræver aktiv køling, så den kan køre højt i timevis uden thermal-shutdown. Lavet til gigging-musikere, skole-anlæg og kirker. Oplagt når du vil have ekstra bund uden at slæbe på en 18\"."
  },
  {
    "id": 6,
    "name": "Behringer WING (fullsize)",
    "category": "Mixer",
    "type": "business",
    "description": "Stor 48-kanals digital mixer — flagskibet i det gamle setup. Holder værdien godt på brugtmarkedet.",
    "details": "48 processeringskanaler, 24 motorfaders, stor touchskærm + channel-strip. 48 inputs / 24 mix-busser, AES50, USB/SD-optagelse og AoIP-kort. Erhvervsaktiv (CVR).",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "48-kanals digital mixer"
      },
      {
        "label": "Kanaler",
        "value": "48 stereo, 24 motorfaders (100 mm)"
      },
      {
        "label": "Preamps",
        "value": "8x Midas PRO mic"
      },
      {
        "label": "Lyd",
        "value": "24-bit / 192 kHz"
      },
      {
        "label": "I/O",
        "value": "374 ind/ud, 3x AES50 SuperMAC"
      },
      {
        "label": "FX",
        "value": "8 true-stereo premium (Lexicon/EMT/TC)"
      },
      {
        "label": "Skærm",
        "value": "10\" kapacitiv touch + touch-encodere"
      },
      {
        "label": "Optagelse",
        "value": "USB/SD multitrack, AoIP-kort"
      },
      {
        "label": "Format",
        "value": "19\" rackbar"
      }
    ],
    "newPrice": 19000,
    "minPrice": 15000,
    "currentBid": 15000,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "pitch": "WING er flagskibet — 48 stereo-kanaler, 24 motorfaders, 10\" touchskærm og 8 Midas PRO-preamps i 24-bit/192 kHz. På Sweetwater ligger den 4,5/5: anmeldere kalder routing-systemet utroligt intuitivt og konsollen ekstremt kraftfuld men nem at lære. Lavet til den professionelle live-tekniker eller studie der skal mixe alt fra store koncerter til teater og broadcast. Holder værdien godt på brugtmarkedet."
  },
  {
    "id": 7,
    "name": "Behringer Flow 8",
    "category": "Mixer",
    "type": "private",
    "description": "Kompakt digital mixer med app-styring (Bluetooth), effekter og fadere. God lille mixer til mindre opgaver.",
    "details": "8 inputs (2 mic, kombi), 60 mm fadere, Bluetooth + app-kontrol, 2 FX-processorer, 4-bånds EQ og USB-audio.",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "8-kanals digital mixer m. Bluetooth"
      },
      {
        "label": "Indgange",
        "value": "2x XLR mic + 2x combo (8 inputs)"
      },
      {
        "label": "Preamps",
        "value": "2x Midas"
      },
      {
        "label": "Fadere",
        "value": "6x 60 mm"
      },
      {
        "label": "EQ/dynamik",
        "value": "4-bånds EQ + komp pr. kanal, 9-bånds output-EQ"
      },
      {
        "label": "FX",
        "value": "2 motorer (16 presets, 12 reverbs)"
      },
      {
        "label": "Styring",
        "value": "Bluetooth-app (iOS/Android), EZ-Gain, snapshots"
      },
      {
        "label": "USB",
        "value": "USB-lydinterface"
      }
    ],
    "newPrice": 1300,
    "minPrice": 800,
    "currentBid": 900,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "pitch": "Flow 8 lukker hullet for små digitale mixere: Midas-preamps, X32-konvertere og fuld trådløs app-styring i et lommeformat. Anmeldere fremhæver overraskende ren lyd uden hiss selv ved høj gain, og EZ-Gain der selv sætter optimal headroom. Perfekt til den mobile musiker, lille band eller café-gig der vil have digital fleksibilitet og fjernstyring til prisen af en analog mixer. (Bemærk: strømstik er micro-USB — behandl det nænsomt.)"
  },
  {
    "id": 8,
    "name": "Yamaha MG06",
    "category": "Mixer",
    "type": "private",
    "description": "Kompakt, driftssikker analog 6-kanals mixer. God lille submixer eller talermixer.",
    "details": "6 kanaler (2 mono mic/line med D-PRE + 2 stereo), +48 V phantom på kanal 1–2, 3-bånds EQ, HPF, stereo XLR-ud og phones. Ekstern adapter, ca. 1 kg.",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "6-kanals analog mixer"
      },
      {
        "label": "Kanaler",
        "value": "2 mono mic/line (D-PRE) + 2 stereo"
      },
      {
        "label": "Preamps",
        "value": "D-PRE klasse-A (inverteret Darlington)"
      },
      {
        "label": "EQ/filter",
        "value": "±15 dB high/low shelf, 80 Hz HPF, 26 dB pad"
      },
      {
        "label": "Phantom",
        "value": "+48 V (kanal 1–2)"
      },
      {
        "label": "Ud",
        "value": "stereo XLR + phones"
      },
      {
        "label": "Kabinet",
        "value": "metal-chassis, EMI-skærmet"
      },
      {
        "label": "Vægt",
        "value": "ca. 0,9 kg"
      }
    ],
    "newPrice": 1300,
    "minPrice": 800,
    "currentBid": 800,
    "bidder": null,
    "image": "images/products/mg06-1.jpg",
    "images": [
      "images/products/mg06-2.jpg",
      "images/products/mg06-3.jpg"
    ],
    "sold": false,
    "pitch": "Lille men ægte Yamaha-kvalitet: MG06 har de roste D-PRE klasse-A-preamps der giver fed, naturlig bund og bløde diskanter med meget lav støj. Metal-chassis, kun 0,9 kg og driftssikker. Musikere, podcastere og mindre spillesteder bruger den fordi den bare lyder rent og virker — uden at fylde. Perfekt som submixer eller talermixer."
  },
  {
    "id": 9,
    "name": "Argon Audio BT3",
    "category": "Lyd",
    "type": "private",
    "description": "Bluetooth-modtager der streamer trådløst til et anlæg (RCA/optisk). Praktisk til baggrundsmusik fra telefon.",
    "details": "Bluetooth (aptX), analog RCA + digital ud, ekstern strøm.",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "Bluetooth 5.0 modtager/sender + DAC"
      },
      {
        "label": "Codecs",
        "value": "aptX HD, AAC"
      },
      {
        "label": "DAC",
        "value": "ESS Sabre (op til 24-bit/96 kHz)"
      },
      {
        "label": "Indgange",
        "value": "RCA + optisk"
      },
      {
        "label": "Udgange",
        "value": "RCA + optisk"
      },
      {
        "label": "Funktioner",
        "value": "receiver / transmitter / D/A"
      },
      {
        "label": "Vægt",
        "value": "ca. 0,35 kg"
      }
    ],
    "newPrice": 1000,
    "minPrice": 500,
    "currentBid": 600,
    "bidder": "LH",
    "image": "",
    "images": [],
    "sold": false,
    "pitch": "Argon Audio BT3 streamer trådløst i høj kvalitet — Bluetooth 5.0 med aptX HD/AAC og en ESS Sabre high-end DAC. Den kan både modtage (telefon → anlæg), sende (TV → trådløse hovedtelefoner) og fungere som ren DAC. En praktisk lille boks når du hurtigt vil spille baggrundsmusik fra telefonen til et anlæg i god kvalitet."
  },
  {
    "id": 10,
    "name": "Novation Circuit Tracks",
    "category": "Lyd",
    "type": "private",
    "description": "Standalone groovebox med 2 synth-spor, 4 drum-spor og 2 MIDI-spor. Batteridrevet — godt til beats og live-jam.",
    "details": "2 polyfoniske synth-spor, 4 sample/drum-spor, 2 MIDI-spor. 32 velocity-pads, sequencer, genopladeligt batteri, USB, MIDI ind/ud og audio ud.",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "standalone groovebox / sequencer"
      },
      {
        "label": "Synth",
        "value": "2 polyfoniske digitale synth-spor"
      },
      {
        "label": "Trommer",
        "value": "4 sample-spor (microSD)"
      },
      {
        "label": "MIDI",
        "value": "2 MIDI-spor til eksternt grej"
      },
      {
        "label": "Pads",
        "value": "4×8 velocity-/RGB-pads, 32-step sequencer"
      },
      {
        "label": "FX",
        "value": "delay + reverb pr. spor, sidechain, mix-bus-komp"
      },
      {
        "label": "Strøm",
        "value": "genopladeligt batteri (op til 4 t), USB"
      },
      {
        "label": "I/O",
        "value": "MIDI ind/ud, audio ud, hovedtelefon"
      }
    ],
    "newPrice": 3051,
    "minPrice": 1500,
    "currentBid": 1800,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "pitch": "Circuit Tracks er en af markedets bedste value-grooveboxe: to polyfoniske synth-spor, fire sample-trommespor, to MIDI-spor og indbygget batteri — ingen computer eller skærm nødvendig. Anmeldere kalder workflowet måske det mest intuitive nogensinde, og scale-systemet gør at alt automatisk klinger harmonisk. Lavet til beatmageren der vil jamme væk fra laptoppen — på sofaen eller til en live-optræden."
  },
  {
    "id": 11,
    "name": "AKG trådløst vokalsæt — 2x HT420 + 2x SR420",
    "category": "Mikrofon",
    "type": "private",
    "description": "Trådløst UHF-vokalsæt: 2 håndsendere (HT420) og 2 modtagere (SR420).",
    "details": "UHF trådløst med op til 8 frekvenser pr. bånd. HT420 håndsender med dynamisk kapsel og SR420 halv-rack modtager, XLR/jack ud. Reserveret — handel aftalt.",
    "condition": "Reserveret — aftalt (afventer afhentning)",
    "specs": [
      {
        "label": "Type",
        "value": "UHF trådløst vokalsystem (WMS420)"
      },
      {
        "label": "Sæt",
        "value": "2x HT420 håndsender + 2x SR420 modtager"
      },
      {
        "label": "Kapsel",
        "value": "dynamisk (D5-akustik)"
      },
      {
        "label": "Kanaler",
        "value": "op til 8 samtidige"
      },
      {
        "label": "Rækkevidde",
        "value": "op til 30 m (fri sigtelinje)"
      },
      {
        "label": "Frekvens",
        "value": "40 Hz – 20 kHz"
      },
      {
        "label": "Batteri",
        "value": "op til 8 t på 1x AA"
      },
      {
        "label": "Ud",
        "value": "balanceret XLR + 6,3 mm jack, diversity"
      }
    ],
    "newPrice": 1000,
    "minPrice": 1000,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": true,
    "pitch": "AKG WMS420 er et professionelt trådløst vokalsystem med den roste D5-kapsel — maksimal feedback-modstand og den klassiske AKG-lyd. Diversity-modtager, op til 8 kanaler samtidig og 8 timers batteri på ét AA. Et solidt arbejdshest-sæt til foredrag, vokal og events. (Reserveret — handel aftalt.)"
  },
  {
    "id": 12,
    "name": "Venturelite Alina — 8 stk. + flightcase",
    "category": "Lys",
    "type": "private",
    "description": "Sæt på 8 ens LED wash moving heads med RGBW-farveblanding og DMX-styring. Leveres i flightcase. Sælges samlet som pakke.",
    "details": "8 stk. LED wash moving head (ca. 36x RGBW 4-i-1 LED) med motoriseret pan/tilt, DMX-512, indbyggede programmer og lyd-styring. Inkl. flightcase. Passer med Cameo Control 54. Budget-brand — sælges bedst samlet. Pris gælder hele sættet.",
    "condition": "Fungerende — sælges samlet (8 stk. + flightcase)",
    "specs": [
      {
        "label": "Type",
        "value": "8x LED wash moving head + flightcase"
      },
      {
        "label": "LED",
        "value": "ca. 36x RGBW (4-i-1) pr. lampe"
      },
      {
        "label": "Bevægelse",
        "value": "motoriseret pan/tilt"
      },
      {
        "label": "Styring",
        "value": "DMX-512 + lyd, indbyggede programmer"
      },
      {
        "label": "Effekter",
        "value": "dæmper, strobe, farveblanding"
      },
      {
        "label": "Tilbehør",
        "value": "flightcase medfølger"
      }
    ],
    "newPrice": 20000,
    "minPrice": 6400,
    "currentBid": 7000,
    "bidder": null,
    "image": "images/products/alina-1.jpg",
    "images": [
      "images/products/alina-2.jpg",
      "images/products/alina-3.jpg",
      "images/products/alina-4.jpg",
      "images/products/alina-5.jpg",
      "images/products/alina-6.jpg",
      "images/products/alina-7.jpg",
      "images/products/alina-8.jpg",
      "images/products/alina-9.jpg"
    ],
    "sold": false,
    "pitch": "8 ens LED wash moving heads med RGBW-farveblanding i én samlet flightcase — et komplet lyssæt klar til at rykke ud. Budget-brand, men som samlet pakke får du et helt gulvshow til prisen af nogle få mærkevare-lamper. Oplagt for den mobile DJ eller arrangør der vil have farver og bevægelse på dansegulvet uden at investere i dyrt moving-head-grej. Styres nemt sammen med Cameo Control 54."
  },
  {
    "id": 13,
    "name": "Showtec Airstrike 5R",
    "category": "Lys",
    "type": "private",
    "description": "Beam-effektlys (quad beam) med skarpe, hurtige stråler til dancefloor. DMX-styret.",
    "details": "1 fungerende + 1 defekt (brændt sammen — sælges billigt som reservedele). Quad beam-effekt, 5R-type skarpe stråler, DMX-styret med indbyggede programmer og lyd-styring.",
    "condition": "1 stk. fungerende · 1 stk. defekt (reservedele)",
    "specs": [
      {
        "label": "Type",
        "value": "Quad beam-effekt (4 spejle)"
      },
      {
        "label": "Lampe",
        "value": "5R skarp beam"
      },
      {
        "label": "Farver",
        "value": "farvehjul 7 + hvid"
      },
      {
        "label": "Gobo",
        "value": "14 metal-gobos + hvid"
      },
      {
        "label": "Strobe",
        "value": "1–5 Hz / puls"
      },
      {
        "label": "Styring",
        "value": "DMX-512 (16 kanaler), Sound, Auto, Master/Slave"
      },
      {
        "label": "Effekt",
        "value": "230 W, 90–250 V"
      },
      {
        "label": "Mål/vægt",
        "value": "352×231×298 mm, ca. 10,9 kg"
      }
    ],
    "newPrice": 5600,
    "minPrice": 2500,
    "currentBid": 3500,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "pitch": "Airstrike 5R er et helt lysshow i én kasse — fire spejle kaster knivskarpe 5R-beams ud over lokalet, med farvehjul, 14 gobos og strobe. Designet til klubber og krævende mobile DJ's der vil have stort visuelt udtryk fra én enhed. (1 stk. virker; 1 stk. sælges som reservedele.)"
  },
  {
    "id": 14,
    "name": "Cameo Control 54",
    "category": "Lys",
    "type": "private",
    "description": "Kompakt 54-kanals DMX-controller til moving heads/LED-fixtures. Passer til Alina-sættet.",
    "details": "54 DMX-kanaler (6 fixtures × 9 kanaler), 6 faders (RGBW/A/UV) + Speed/Fade master, Auto/Manual, Colour Fade/Jump, Strobe, Blackout og sound-to-light. DMX-out (3-pol XLR), 9–12 V DC, 19\"/3 HE.",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "54-kanals DMX-controller"
      },
      {
        "label": "Fixtures",
        "value": "op til 9 fixtures/grupper"
      },
      {
        "label": "Fadere",
        "value": "6 (R/G/B/W/A/UV) + master"
      },
      {
        "label": "Presets",
        "value": "9 farve-presets/genveje"
      },
      {
        "label": "Funktioner",
        "value": "sound-to-light (justerbar), strobe, blackout, colour fade/jump, LC-display"
      },
      {
        "label": "Ud",
        "value": "DMX 3-pol XLR"
      },
      {
        "label": "Strøm",
        "value": "9–12 V DC + 9 V batteri (valgfri)"
      }
    ],
    "newPrice": 959,
    "minPrice": 500,
    "currentBid": null,
    "bidder": null,
    "image": "images/products/cameo-1.jpg",
    "images": [
      "images/products/cameo-2.jpg",
      "images/products/cameo-3.jpg",
      "images/products/cameo-4.jpg"
    ],
    "sold": false,
    "pitch": "Cameo Control 54 er en solid, kompakt DMX-pult til op til 9 fixtures — seks fadere til direkte RGBWA+UV-styring, ni farve-presets og sound-to-light med justerbar følsomhed. Anmeldere kalder den et godt entry-level-bord med fin kvalitet. Ideel til DJ's, barer og mindre scener der vil have manuel kontrol over deres LED-lys. Passer perfekt til Alina-sættet."
  },
  {
    "id": 15,
    "name": "Ebiza Light LC12DMX",
    "category": "Lys",
    "type": "private",
    "description": "Simpel, billig DMX-controller til mindre lysopsætninger. Sælges evt. med lyspakken.",
    "details": "DMX-controller til op til 12 fixtures, med scener/chases, fadere og sound-to-light.",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Type",
        "value": "DMX-lyscontroller"
      },
      {
        "label": "Fixtures",
        "value": "op til 12 fixtures"
      },
      {
        "label": "Funktioner",
        "value": "scener/chases, fadere, sound-to-light"
      },
      {
        "label": "Ud",
        "value": "DMX"
      }
    ],
    "newPrice": 317,
    "minPrice": 150,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "pitch": "Simpel og billig DMX-controller til op til 12 fixtures — scener, chases og sound-to-light. Et nemt indstigningsbord eller backup til den mindre lysopsætning. Sælges fint sammen med lyspakken."
  }
];

// ── PAKKE-PRISER beregnes automatisk ud fra de enkelte opslag ──
//    Ret en enkelt-pris, og pakken opdaterer sig selv ved reload.
//    Pakken koster summen af enhederne (ingen rabat).
const BUNDLE_DISCOUNT = 0;                          // ingen pakkerabat — pakke = summen af enhederne
const _roundTo = (n, step) => Math.round(n / step) * step;
PRODUCTS.forEach(p => {
  if (Array.isArray(p.bundleOf) && p.bundleOf.length) {
    const m = p.bundleOf.map(id => PRODUCTS.find(x => x.id === id)).filter(Boolean);
    const sumNew = m.reduce((s, x) => s + (x.newPrice || 0), 0);
    const sumMin = m.reduce((s, x) => s + (x.minPrice || 0), 0);
    p.newPrice   = sumNew;                          // anker: fuld nyværdi
    p.sepPrice   = sumMin;                          // 2 enkelte byd-fra tilsammen
    p.minPrice   = _roundTo(sumMin * (1 - BUNDLE_DISCOUNT), 50); // pakke byd-fra
    p.bundleSavings = p.sepPrice - p.minPrice;      // hvad man sparer
  }
});

// Gruppe-boks billede (foto med flere enheder) — bruges på lagersalg + gruppeside
const GROUP_IMAGES = {
  "Yamaha DXR12": "images/products/dxr12-5.jpg",
  "dB Technologies B-Hype 12": "images/products/bhype12-6.jpg"
};

// Hjælpefunktion brugt på begge sider
const formatKr = n => n.toLocaleString('da-DK') + ' kr.';

// Find produkt ud fra id (bruges på produkt.html)
function findProductById(id) {
  return PRODUCTS.find(p => String(p.id) === String(id));
}
