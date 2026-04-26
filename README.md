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
├── lagersalg.html    — Budrunde over udstyr (privat + business)
├── README.md         — Denne fil
├── CNAME             — Cloudflare Pages domæne (www.lydstyrken.com)
├── .gitignore        — Standard git-ignore
└── images/
    └── logo.png      — Favicon (selve wordmark-logoet er ren tekst)
```

Alle sider er **standalone HTML** — ingen build-step, ingen dependencies. Kan åbnes direkte i en browser.

---

## Sidernes formål

### `index.html` — Forside
Visitkortet. Hero med tagline, kort intro til de 3 ydelses-typer (live-koncerter, events, festivaler), team-preview og lagersalg-CTA. Linker videre til `ydelser.html` for konkrete pakker og `om.html` for hele teamet.

### `ydelser.html` — Pakker & estimat-bygger
Hjernen i siden. 4 trin:
1. **Vælg pakke** — 5 forudbyggede pakker eller "Byg selv"
2. **Tilvalg** — 21 tilvalg fordelt på 5 kategorier (Mikrofoner, Højttalere, Lys, Mixer & Backline, Personale)
3. **Event-info** — Navn, telefon, type, gæster, dato, sted, beskrivelse
4. **Send forespørgsel** — Bygger en `mailto:` med alt forudfyldt der åbner kundens mail-klient

Estimat-prisen opdateres live i bunden mens kunden bygger pakken. Mailen lander på `marius@lydstyrken.com` med en struktureret oversigt så I har alt I skal bruge for at svare med et tilbud.

**Sådan opdateres priser/pakker:** Find `PACKAGES` og `ADDONS` i bunden af `ydelser.html` i `<script>`-blokken. Begge er JS-arrays med tydelige felter. Ændr direkte i koden.

### `om.html` — Holdet
Separat side for hele teamet. Hver person har:
- Initial-placeholder (bogstavet) indtil rigtige fotos er på plads
- Navn, rolle, kort bio, 3 tags
- Kort intro-historie og 3 værdier (personlig kontakt, ærlige priser, lyd der virker)

**Sådan tilføjes fotos:** Læg billeder i `images/team/marius.jpg` osv. og erstat `<span class="member-photo-placeholder">M</span>` med `<img src="images/team/marius.jpg" alt="Marius">` for hver person.

### `lagersalg.html` — Budrunde
Uændret funktionalitet (åben budrunde med bud-via-mail, søgning, filtrering, fælles slutdato). Opdateret med samme nav-system og burger-menu som de andre sider.

**Sådan opdateres bud:** Find `PRODUCTS`-arrayet i `<script>`-blokken og opdatér `currentBid` og `bidder` for de relevante items. Push til GitHub.

---

## Burger-menu (mobil)

Aktiveres automatisk under 900px skærmbredde. Fuldskærms-overlay med 5 nummererede links og kontakt-info i bunden. Lukker ved klik på link, Escape-tast eller hvis vinduet bliver bredere igen.

Implementeret konsistent på alle 4 sider.

---

## Design system

- **Fonte:** Montserrat (display + body), JetBrains Mono (tekniske labels)
- **Farver:** Mørk baggrund (#0a0a0b), accent-orange (#ff4d2e), grøn (#4ad7a5) til "tilgængelig"-signaler på lagersalg
- **Logo:** Tekst-wordmark `[LYDSTYRKEN]` (Montserrat 900) — ingen billed-logo nødvendig
- **Effekter:** Sticky blur-nav med scroll-progress-bar, subtilt grid-baggrund, reveal-on-scroll, hover-glow på brackets

---

## Deployment til Cloudflare Pages

1. Push repo til GitHub
2. På Cloudflare Pages: connect til GitHub-repoet
3. Build settings: **none** (statisk HTML, ingen build)
4. Output directory: **/** (rod)
5. Custom domain: `www.lydstyrken.com` (CNAME-filen sørger for det)

---

## Vedligeholdelse — typiske opgaver

| Opgave | Fil | Hvor i koden |
|---|---|---|
| Justér pakke-pris | `ydelser.html` | `PACKAGES`-array i `<script>` |
| Tilføj nyt tilvalg | `ydelser.html` | `ADDONS`-array i `<script>` |
| Opdatér team-rolle eller bio | `om.html` | Sektionen `<!-- TEAM SECTION -->` |
| Tilføj/redigér produkt på lagersalg | `lagersalg.html` | `PRODUCTS`-array i `<script>` |
| Opdatér bud | `lagersalg.html` | `currentBid` + `bidder` i `PRODUCTS` |
| Skift slutdato på budrunden | `lagersalg.html` | `END_DATE` i `<script>` |
| Skift mail-modtager | Alle sider | Søg & erstat `marius@lydstyrken.com` |

---

## Kontakt

**Marius — LYDSTYRKEN**
[marius@lydstyrken.com](mailto:marius@lydstyrken.com)
[@lydstyrken](https://instagram.com/lydstyrken) på Instagram

CVR 45880419 — Odense, Danmark