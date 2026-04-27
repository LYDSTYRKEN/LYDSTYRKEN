# LYDSTYRKEN — Hjemmeside

Statisk hjemmeside for LYDSTYRKEN (CVR 45880419, Odense). Hostes på Cloudflare Pages via dette GitHub-repo.

**Domæne:** [www.lydstyrken.com](https://www.lydstyrken.com)

---

## Filstruktur

```
lydstyrken-web/
├── index.html        — Forsiden (hero, ydelser-preview, om-preview, kontakt)
├── ydelser.html      — Pakker, tilvalg, prisberegner, mailto-udkast
├── om.html           — Hele teamet (Marius, Pernille, Liam, Rasmus, Kasper)
├── lagersalg.html    — Budrunde-oversigt (4-kolonne grid med klikbare kort)
├── produkt.html      — Detalje-side for hvert produkt (?id=X i URL)
├── products.js       — Delt produkt-data brugt af lagersalg.html + produkt.html
├── README.md         — Denne fil
├── CNAME             — Cloudflare Pages domæne (www.lydstyrken.com)
├── .gitignore        — Standard git-ignore
└── images/
    ├── logo.png      — Favicon
    ├── team/         — Team-billeder (kun marius.png pt.)
    └── products/     — (Opret ved behov — produktbilleder lægges her)
```

Alle sider er **standalone HTML** — ingen build-step, ingen dependencies.

---

## Sidernes formål

### `index.html` — Forside
Visitkortet. Hero med tagline, kort intro til de 3 ydelses-typer, team-preview og lagersalg-CTA. Linker videre til `ydelser.html` og `om.html`.

### `ydelser.html` — Pakker & estimat-bygger
4-trins bygger: Vælg pakke → Tilvalg → Event-info → Send forespørgsel som mailto med struktureret indhold.

**Redigér priser/pakker:** `PACKAGES` og `ADDONS`-arrays i `<script>` på `ydelser.html`.

### `om.html` — Holdet
Separat side med 5 team-medlemmer. Marius har sit billede; resten har initial-placeholders.

**Tilføj fotos:** Læg billeder i `images/team/pernille.png` osv. og erstat `<span class="member-photo-placeholder">P</span>` med `<img src="images/team/pernille.png" alt="Pernille">`.

### `lagersalg.html` — Budrunde-oversigt
**Nyt 4-kolonne layout** med kompakte produktkort. Hvert kort har:
- Klikbart billede der leder til `produkt.html?id=X`
- Badge (Privat/LYDSTYRKEN-salg) som overlay
- Live-bud "pille" (top-højre) hvis der er aktivt bud
- Kategori + navn som gradient-overlay nederst på billedet
- Pris + "Byd via mail"-knap under billedet

Responsive breakpoints: 4 kolonner (>1100px) → 3 (>800px) → 2 (>480px) → 1 (mobile).

### `produkt.html` — Detaljeside (NY)
Indlæses med `?id=X` i URL'en (fx `produkt.html?id=1`). Henter produktet fra `products.js` og viser:
- **Stort billede + thumbnails** (hvis flere billeder findes i `images`-arrayet)
- **Fuld beskrivelse** (`details` hvis sat, ellers `description`)
- **Stand** (`condition`)
- **Tekniske specifikationer** (`specs` array)
- **Pris-info** (vejl. nypris, mindstepris, højeste bud)
- **Stor "Byd via mail"-knap**
- Tilbage-link til lagersalget

Hvis `?id` ikke matcher noget produkt vises en pæn "ikke fundet"-besked.

---

## `products.js` — Sådan redigeres produkter

Alle produktdata ligger ét sted. Hvert produkt har følgende felter:

| Felt | Type | Beskrivelse |
|---|---|---|
| `id` | tal | Unik — bruges i URL (`?id=`) |
| `name` | tekst | Produktnavn |
| `category` | tekst | "Mixer" / "Højttaler" / "Mikrofon" / "Kabel" / "Lys" / "Andet" |
| `type` | tekst | `"private"` eller `"business"` |
| `description` | tekst | Kort beskrivelse til kortet på lagersalg |
| `details` | tekst | (valgfri) Længere beskrivelse på produktsiden |
| `condition` | tekst | (valgfri) Stand, fx "Velholdt — uden skader" |
| `specs` | array | (valgfri) `[{label, value}, ...]` til specs-tabellen |
| `newPrice` | tal | Vejledende nypris i kr. |
| `minPrice` | tal | Mindstepris (laveste accepterede bud) |
| `currentBid` | tal/null | Aktuelt højeste bud — opdatér ved nye bud |
| `bidder` | tekst/null | Initialer på højeste byder, fx `"MJ"` |
| `image` | tekst | Sti til primær billede (vises på kort + i toppen af produktsiden) |
| `images` | array | (valgfri) Ekstra billeder til galleri på produktsiden |
| `sold` | bool | (valgfri) `true` når produktet er solgt |

**Eksempel med fuld info** (se de første 2 produkter i `products.js`):
```javascript
{
  id: 1,
  name: "Yamaha MG10XU Mixer",
  category: "Mixer",
  type: "business",
  description: "10-kanals mixerpult med USB...",
  details: "Længere beskrivelse...",
  condition: "Velholdt — ingen synlige skrammer",
  specs: [
    { label: "Kanaler", value: "10 (4 mono + 3 stereo)" },
    { label: "Effekter", value: "SPX integreret" }
  ],
  newPrice: 2999,
  minPrice: 1500,
  currentBid: 1650,
  bidder: "MJ",
  image: "images/products/yamaha-mg10xu-1.jpg",
  images: [
    "images/products/yamaha-mg10xu-2.jpg",
    "images/products/yamaha-mg10xu-3.jpg"
  ]
}
```

**Minimum eksempel** (uden detaljer):
```javascript
{
  id: 5,
  name: "DMX-styret LED PAR (sæt af 4)",
  category: "Lys",
  type: "private",
  description: "RGBW LED PAR-spots med DMX-styring.",
  newPrice: 4800,
  minPrice: 1800,
  currentBid: 2100,
  bidder: "LH",
  image: "",
  images: []
}
```

Når `details`/`condition`/`specs` ikke er sat falder produktsiden tilbage til `description` og viser ikke specs-sektionen.

---

## Burger-menu (mobil)

Aktiveres automatisk under 900px. Fuldskærms-overlay med 5 nummererede links og kontakt-info.

---

## Aktiv side-indikator

Den side du er på vises tydeligt i navigationen:
- **Desktop:** Orange tekst + animeret under-streg ved det aktive link
- **Mobile menu:** Orange tekst + glødende lodret bjælke til venstre
- **Lagersalg-knap** (`btn-nav`): Orange ramme + glow når aktiv

---

## Design system

- **Fonte:** Montserrat (display + body), JetBrains Mono (tekniske labels)
- **Farver:** Mørk #0a0a0b, accent-orange #ff4d2e, grøn #4ad7a5 (privat-salg)
- **Logo:** Tekst-wordmark `[LYDSTYRKEN]` (Montserrat 900)
- **Effekter:** Sticky blur-nav, scroll-progress-bjælke, subtilt grid-baggrund, bg-glow, reveal-on-scroll

---

## Deployment til Cloudflare Pages

1. Push repo til GitHub
2. På Cloudflare Pages: connect til GitHub-repoet
3. Build settings: **none** (statisk HTML)
4. Output directory: **/** (rod)
5. Custom domain: `www.lydstyrken.com` (CNAME-filen sørger for det)

---

## Vedligeholdelse — typiske opgaver

| Opgave | Fil | Hvor |
|---|---|---|
| Justér pakke-pris | `ydelser.html` | `PACKAGES`-array i `<script>` |
| Tilføj nyt tilvalg | `ydelser.html` | `ADDONS`-array i `<script>` |
| Opdatér team-rolle eller bio | `om.html` | `<!-- TEAM SECTION -->` |
| Tilføj fotos af team | `images/team/` | Læg fil og opdatér `<img src=...>` i `om.html` |
| Tilføj/redigér produkt | `products.js` | `PRODUCTS`-array |
| Opdatér bud | `products.js` | `currentBid` + `bidder` for relevante produkter |
| Tilføj produktbilleder | `images/products/` + `products.js` | Læg fil, opdatér `image` og `images: []` |
| Skift slutdato på budrunden | `products.js` | `END_DATE` |
| Skift mail-modtager | Alle sider | Søg & erstat `marius@lydstyrken.com` |

---

## Kontakt

**Marius Blæsbjerg — LYDSTYRKEN**
[marius@lydstyrken.com](mailto:marius@lydstyrken.com)
[@lydstyrken](https://instagram.com/lydstyrken) på Instagram

CVR 45880419 — Odense, Danmark