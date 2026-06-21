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
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 22 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 2500,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false
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
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 22 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 2500,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false
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
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 22 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 2500,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false
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
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 22 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 2500,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false
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
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 22 kg"
      }
    ],
    "newPrice": 5000,
    "minPrice": 300,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false
  },
  {
    "id": 106,
    "name": "Yamaha DXR15 — 2-pak",
    "category": "Højttaler",
    "type": "private",
    "description": "To fungerende Yamaha DXR15 som samlet pakke — lidt billigere end at byde på dem hver for sig.",
    "details": "2x aktiv 15\" tophøjttaler. Pakkepris beregnes automatisk ud fra de enkelte opslag og er en smule billigere end at købe to enkeltvis. Foto følger.",
    "condition": "Velholdt — fungerende (2 stk.)",
    "specs": [
      {
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "134 dB"
      },
      {
        "label": "Driver",
        "value": "15\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "49 Hz – 20 kHz"
      },
      {
        "label": "Indgange",
        "value": "2x XLR/jack combo + RCA, link-out"
      },
      {
        "label": "Vægt",
        "value": "ca. 22 kg"
      }
    ],
    "newPrice": 0,
    "minPrice": 0,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false,
    "bundle": true,
    "bundleQty": 2,
    "bundleOf": [
      101,
      102
    ]
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
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "132 dB"
      },
      {
        "label": "Driver",
        "value": "12\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "52 Hz – 20 kHz"
      },
      {
        "label": "Horn",
        "value": "90° × 60°"
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
    "currentBid": 3500,
    "bidder": "MJ",
    "image": "images/products/dxr12-1.jpg",
    "images": [
      "images/products/dxr12-4.jpg"
    ],
    "sold": false
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
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "132 dB"
      },
      {
        "label": "Driver",
        "value": "12\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "52 Hz – 20 kHz"
      },
      {
        "label": "Horn",
        "value": "90° × 60°"
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
    "bidder": "PT",
    "image": "images/products/dxr12-2.jpg",
    "images": [
      "images/products/dxr12-3.jpg"
    ],
    "sold": false
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
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "132 dB"
      },
      {
        "label": "Driver",
        "value": "12\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "52 Hz – 20 kHz"
      },
      {
        "label": "Horn",
        "value": "90° × 60°"
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
    "currentBid": 3200,
    "bidder": "LK",
    "image": "images/products/dxr12-3.jpg",
    "images": [
      "images/products/dxr12-4.jpg"
    ],
    "sold": false
  },
  {
    "id": 113,
    "name": "Yamaha DXR12 — 2-pak",
    "category": "Højttaler",
    "type": "business",
    "description": "To Yamaha DXR12 som samlet pakke — lidt billigere end at byde på dem hver for sig. Et komplet stereo-toppar.",
    "details": "2x aktiv 12\" tophøjttaler. Pakkeprisen beregnes automatisk ud fra de enkelte opslag og er en smule billigere end to enkeltvis. Billeder viser parret.",
    "condition": "Velholdt — fungerende (2 stk.)",
    "specs": [
      {
        "label": "Effekt",
        "value": "1100 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "132 dB"
      },
      {
        "label": "Driver",
        "value": "12\" woofer + 1,4\" comp"
      },
      {
        "label": "Frekvens",
        "value": "52 Hz – 20 kHz"
      },
      {
        "label": "Horn",
        "value": "90° × 60°"
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
    "newPrice": 0,
    "minPrice": 0,
    "currentBid": null,
    "bidder": null,
    "image": "images/products/dxr12-5.jpg",
    "images": [
      "images/products/dxr12-6.jpg",
      "images/products/dxr12-7.jpg"
    ],
    "sold": false,
    "bundle": true,
    "bundleQty": 2,
    "bundleOf": [
      110,
      111
    ]
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
        "label": "Effekt",
        "value": "400 W RMS / 800 W peak"
      },
      {
        "label": "Max SPL",
        "value": "~126 dB"
      },
      {
        "label": "Driver",
        "value": "12\" + 1\""
      },
      {
        "label": "Frekvens",
        "value": "~60 Hz – 20 kHz"
      },
      {
        "label": "Mixer",
        "value": "Indbygget 2-kanal / DSP"
      },
      {
        "label": "Vægt",
        "value": "ca. 13–14 kg"
      }
    ],
    "newPrice": 1800,
    "minPrice": 1000,
    "currentBid": 1200,
    "bidder": "TL",
    "image": "images/products/bhype12-1.jpg",
    "images": [
      "images/products/bhype12-3.jpg",
      "images/products/bhype12-5.jpg"
    ],
    "sold": false
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
        "label": "Effekt",
        "value": "400 W RMS / 800 W peak"
      },
      {
        "label": "Max SPL",
        "value": "~126 dB"
      },
      {
        "label": "Driver",
        "value": "12\" + 1\""
      },
      {
        "label": "Frekvens",
        "value": "~60 Hz – 20 kHz"
      },
      {
        "label": "Mixer",
        "value": "Indbygget 2-kanal / DSP"
      },
      {
        "label": "Vægt",
        "value": "ca. 13–14 kg"
      }
    ],
    "newPrice": 1800,
    "minPrice": 1000,
    "currentBid": 1100,
    "bidder": "HN",
    "image": "images/products/bhype12-2.jpg",
    "images": [
      "images/products/bhype12-4.jpg",
      "images/products/bhype12-7.jpg"
    ],
    "sold": false
  },
  {
    "id": 122,
    "name": "dB Technologies B-Hype 12 — 2-pak",
    "category": "Højttaler",
    "type": "private",
    "description": "Begge B-Hype 12 som samlet pakke — lidt billigere end hver for sig. Perfekt lille stereo-sæt.",
    "details": "2x aktiv 12\" højttaler. Pakkeprisen beregnes automatisk ud fra de enkelte opslag og er en smule billigere end to enkeltvis.",
    "condition": "Velholdt — fungerende (2 stk.)",
    "specs": [
      {
        "label": "Effekt",
        "value": "400 W RMS / 800 W peak"
      },
      {
        "label": "Max SPL",
        "value": "~126 dB"
      },
      {
        "label": "Driver",
        "value": "12\" + 1\""
      },
      {
        "label": "Frekvens",
        "value": "~60 Hz – 20 kHz"
      },
      {
        "label": "Mixer",
        "value": "Indbygget 2-kanal / DSP"
      },
      {
        "label": "Vægt",
        "value": "ca. 13–14 kg"
      }
    ],
    "newPrice": 0,
    "minPrice": 0,
    "currentBid": null,
    "bidder": null,
    "image": "images/products/bhype12-6.jpg",
    "images": [
      "images/products/bhype12-1.jpg"
    ],
    "sold": false,
    "bundle": true,
    "bundleQty": 2,
    "bundleOf": [
      120,
      121
    ]
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
        "label": "Effekt",
        "value": "1020 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "136 dB"
      },
      {
        "label": "Driver",
        "value": "18\" bass-reflex, 4\" svingspole"
      },
      {
        "label": "Funktioner",
        "value": "D-XSUB, cardioid-mode"
      },
      {
        "label": "Indgange",
        "value": "2x XLR, dual pole-sockets"
      },
      {
        "label": "Vægt",
        "value": "ca. 47 kg (m. hjul)"
      }
    ],
    "newPrice": 11000,
    "minPrice": 7000,
    "currentBid": 7500,
    "bidder": "KH",
    "image": "images/products/dxs18-1.jpg",
    "images": [
      "images/products/dxs18-2.jpg"
    ],
    "sold": false
  },
  {
    "id": 5,
    "name": "Yamaha DXS12",
    "category": "Subwoofer",
    "type": "private",
    "description": "Kompakt aktiv 12\" subwoofer der matcher DXR-toppene. Cardioid-mode og DSP.",
    "details": "Aktiv 12\" bass-reflex sub, ca. 1020 W klasse-D, max ~133 dB. D-XSUB og cardioid-mode, M20 pole-socket. Bekræft modelnavn på typeskilt (DXS12 / DXR12 MKII).",
    "condition": "Velholdt — fungerende",
    "specs": [
      {
        "label": "Effekt",
        "value": "~1020 W klasse-D"
      },
      {
        "label": "Max SPL",
        "value": "~133 dB"
      },
      {
        "label": "Driver",
        "value": "12\" bass-reflex"
      },
      {
        "label": "Frekvens",
        "value": "40 – 150 Hz"
      },
      {
        "label": "Funktioner",
        "value": "D-XSUB, cardioid-mode"
      },
      {
        "label": "Vægt",
        "value": "ca. 28 kg"
      }
    ],
    "newPrice": 8000,
    "minPrice": 5000,
    "currentBid": 5200,
    "bidder": "RA",
    "image": "images/products/dxs12-1.jpg",
    "images": [
      "images/products/dxs12-2.jpg",
      "images/products/dxs12-3.jpg",
      "images/products/dxs12-4.jpg",
      "images/products/dxs12-5.jpg"
    ],
    "sold": false
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
        "label": "Kanaler",
        "value": "48 processering"
      },
      {
        "label": "Fadere",
        "value": "24 motorfaders"
      },
      {
        "label": "Busser",
        "value": "24 mix-busser"
      },
      {
        "label": "I/O",
        "value": "48 in, AES50, USB/SD, AoIP"
      },
      {
        "label": "Skærm",
        "value": "Touch + channel-strip"
      },
      {
        "label": "Format",
        "value": "19\" / rackbar"
      }
    ],
    "newPrice": 19000,
    "minPrice": 15000,
    "currentBid": 16000,
    "bidder": "PN",
    "image": "",
    "images": [],
    "sold": false
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
        "label": "Inputs",
        "value": "8 (2 mic/kombi)"
      },
      {
        "label": "Fadere",
        "value": "60 mm"
      },
      {
        "label": "Effekter",
        "value": "2 FX-processorer"
      },
      {
        "label": "EQ",
        "value": "4-bånds"
      },
      {
        "label": "Styring",
        "value": "Bluetooth + app"
      },
      {
        "label": "USB-audio",
        "value": "Ja"
      }
    ],
    "newPrice": 1300,
    "minPrice": 800,
    "currentBid": 900,
    "bidder": "SM",
    "image": "",
    "images": [],
    "sold": false
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
        "label": "Kanaler",
        "value": "6 (2 mono + 2 stereo)"
      },
      {
        "label": "Preamps",
        "value": "D-PRE"
      },
      {
        "label": "Phantom",
        "value": "+48 V (kanal 1–2)"
      },
      {
        "label": "EQ",
        "value": "3-bånds + HPF"
      },
      {
        "label": "Ud",
        "value": "Stereo XLR + phones"
      },
      {
        "label": "Vægt",
        "value": "ca. 1 kg"
      }
    ],
    "newPrice": 1300,
    "minPrice": 800,
    "currentBid": 850,
    "bidder": "JC",
    "image": "images/products/mg06-1.jpg",
    "images": [
      "images/products/mg06-2.jpg",
      "images/products/mg06-3.jpg"
    ],
    "sold": false
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
        "label": "Forbindelse",
        "value": "Bluetooth (aptX)"
      },
      {
        "label": "Udgange",
        "value": "RCA + digital optisk"
      },
      {
        "label": "Strøm",
        "value": "Ekstern adapter"
      }
    ],
    "newPrice": 1000,
    "minPrice": 500,
    "currentBid": 600,
    "bidder": "LH",
    "image": "",
    "images": [],
    "sold": false
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
        "label": "Synth-spor",
        "value": "2 polyfoniske"
      },
      {
        "label": "Drum-spor",
        "value": "4 sample"
      },
      {
        "label": "MIDI-spor",
        "value": "2"
      },
      {
        "label": "Pads",
        "value": "32 velocity"
      },
      {
        "label": "Strøm",
        "value": "Genopladeligt batteri + USB"
      },
      {
        "label": "I/O",
        "value": "MIDI ind/ud, audio ud"
      }
    ],
    "newPrice": 3051,
    "minPrice": 1500,
    "currentBid": 1800,
    "bidder": "MK",
    "image": "",
    "images": [],
    "sold": false
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
        "value": "UHF trådløst"
      },
      {
        "label": "Sendere",
        "value": "2x HT420 (dynamisk kapsel)"
      },
      {
        "label": "Modtagere",
        "value": "2x SR420 (halv-rack)"
      },
      {
        "label": "Ud",
        "value": "XLR/jack"
      }
    ],
    "newPrice": 1000,
    "minPrice": 1000,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": true
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
        "label": "Antal",
        "value": "8 stk. + flightcase"
      },
      {
        "label": "Type",
        "value": "LED wash moving head"
      },
      {
        "label": "LED",
        "value": "ca. 36x RGBW (4-i-1)"
      },
      {
        "label": "Styring",
        "value": "DMX-512 + lyd"
      },
      {
        "label": "Funktioner",
        "value": "Pan/tilt, dæmper, strobe"
      },
      {
        "label": "Tilbehør",
        "value": "Flightcase medfølger"
      }
    ],
    "newPrice": 20000,
    "minPrice": 6400,
    "currentBid": 7000,
    "bidder": "DJ",
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
    "sold": false
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
        "value": "Quad beam-effekt"
      },
      {
        "label": "Lampe",
        "value": "5R-type"
      },
      {
        "label": "Styring",
        "value": "DMX + lyd"
      },
      {
        "label": "Programmer",
        "value": "Indbyggede"
      }
    ],
    "newPrice": 5600,
    "minPrice": 2500,
    "currentBid": 2800,
    "bidder": "BT",
    "image": "",
    "images": [],
    "sold": false
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
        "label": "Kanaler",
        "value": "54 DMX (6 × 9)"
      },
      {
        "label": "Fadere",
        "value": "6 + Speed/Fade master"
      },
      {
        "label": "Funktioner",
        "value": "Strobe, Blackout, sound-to-light"
      },
      {
        "label": "Ud",
        "value": "DMX 3-pol XLR"
      },
      {
        "label": "Format",
        "value": "19\" / 3 HE"
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
    "sold": false
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
        "label": "Fixtures",
        "value": "Op til 12"
      },
      {
        "label": "Funktioner",
        "value": "Scener/chases, fadere"
      },
      {
        "label": "Styring",
        "value": "Sound-to-light"
      }
    ],
    "newPrice": 317,
    "minPrice": 150,
    "currentBid": null,
    "bidder": null,
    "image": "",
    "images": [],
    "sold": false
  }
];

// ── PAKKE-PRISER beregnes automatisk ud fra de enkelte opslag ──
//    Ret en enkelt-pris, og pakken opdaterer sig selv ved reload.
//    Pakken er BUNDLE_DISCOUNT billigere end at byde på enhederne hver for sig.
const BUNDLE_DISCOUNT = 0.10;                       // 10 % pakkerabat
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

// Hjælpefunktion brugt på begge sider
const formatKr = n => n.toLocaleString('da-DK') + ' kr.';

// Find produkt ud fra id (bruges på produkt.html)
function findProductById(id) {
  return PRODUCTS.find(p => String(p.id) === String(id));
}
