/* ════════════════════════════════════════════════════════════════
   LYDSTYRKEN — Band-data
   ════════════════════════════════════════════════════════════════
   Tilføj ét objekt per band. URL'en for bandet styres af `id`-
   feltet og skal matche den linje du tilføjer i `_redirects`.

   Eksempel — sådan tilføjer du et nyt band:
   1. Kopiér et eksisterende objekt herunder
   2. Tilret alle felter
   3. Tilføj én linje i _redirects:  /bandets-id  /band.html?id=bandets-id  200
   4. Upload billeder til images/bands/bandets-id/
   5. Commit + push → Cloudflare deployer automatisk

   Billeder:
   - mainImage  → bruges til OG-tags og hero
   - images[]   → galleri på siden (1-6 stk, anbefaler 3-5)
   - Anbefalet størrelse: min. 1200px bred, landscape (3:2 eller 4:3)
   ════════════════════════════════════════════════════════════════ */

const BANDS = [

  // ─────────────────────────────────────────────────────────────
  //   EKSEMPEL-BAND — erstat med rigtige data
  // ─────────────────────────────────────────────────────────────
  {
    id: 'eksempel-band',

    // Visningsnavn og genre-tag (vises i header og meta-tags)
    name: 'Eksempel Band',
    genre: 'Rock / Alternativ',

    // Kort sætning under bandnavnet (tagline / beskrivelse)
    tagline: 'Odenses skarpeste live-band siden 2019.',

    // Biografi — 2-3 afsnit. Skriv som array af strings (ét afsnit pr. element).
    bio: [
      'Eksempel Band er et fire-mands rockband fra Odense der siden 2019 har spillet sig vej til en fast plads på den fynske livescene. Med en lyd der trækker på klassisk alternativ rock men med en moderne kant, leverer de shows der sidder i kroppen.',
      'LYDSTYRKEN har afviklet lyd for bandet siden 2022 — fra intime klubshows til større udendørs scener. Vi kender bandets rider, ønsker og præferencer, og sikrer at de lyder bedst muligt uanset venue.'
    ],

    // Hvad LYDSTYRKEN konkret håndterer for dette band
    tech: [
      'FOH-mix (front-of-house)',
      'Monitor-mix til samtlige musikere',
      'Stage setup og patch',
      'Trådløse systemer (vokal + guitar)',
      'Multitrack-optagelse ved udvalgte shows',
    ],

    // Billeder — relative paths fra rod
    mainImage: 'images/bands/eksempel-band/main.jpg',
    images: [
      'images/bands/eksempel-band/live-1.jpg',
      'images/bands/eksempel-band/live-2.jpg',
      'images/bands/eksempel-band/backstage.jpg',
    ],

    // Kommende events — sæt link til '' hvis der ikke er ekstern billet-link
    events: [
      {
        date: '2026-05-31',
        venue: 'Spillestedet Posten',
        city: 'Odense',
        description: 'Koncert',
        link: 'https://posten.dk'
      },
      {
        date: '2026-06-21',
        venue: 'Byens Pladsen',
        city: 'Odense',
        description: 'Sommerfest (gratis entre)',
        link: ''
      },
    ],

    // Sociale medier — sæt til null eller '' hvis de ikke har den platform
    social: {
      instagram: 'https://instagram.com/eksempel-band',
      facebook: 'https://facebook.com/eksempel-band',
      spotify: null,
      website: null,
    },

    // Vises som "Book dette band" CTA — mailto til dig
    // Lad denne stå — bookingen går igennem LYDSTYRKEN
    bookingEmail: 'marius@lydstyrken.com',
    bookingSubject: 'Booking-forespørgsel: Eksempel Band',
  },

  // ─────────────────────────────────────────────────────────────
  //   PROMTE
  //   @prompteprompte — Odense-baseret hiphop/pop duo
  //   Interview udgivet 2026, uddybninger fra YouTube-video
  // ─────────────────────────────────────────────────────────────
  {
    id: 'promte',

    name: 'PROMTE',
    genre: 'Hiphop / Pop',

    tagline: 'Dansk rap med sjov og personlighed.',

    bio: [
      'PROMTE er et duoband fra Odense bestående af Storm (producer, keyboards) og Asker (rapper, sangskriver, klaver). De mødte hinanden på en musikworkshop i Holstrup i 2024, hvor Storm producerede beats og Asker skrev rap- og tekstskrivning. Hurtigt blev de klar over at deres stilarter passede perfekt sammen — de blander hård hiphop med poppet musik, med fokus på danske tekster, sjove linier og håndværk inden for rimning og semantik. Deres musik er en blanding af klassisk 90\'er hiphop, psykedelisk produktion og pop-elementos, helt uden at blive monotom. PROMTE spiller på dansk fordi sproget giver dem mere plads til kreativitet og personlighed end engelsk ville.',
      'LYDSTYRKEN er PROMs tekniske afvikler på deres kommende turnéen efter sommeren 2026. Marius håndterer lyd, mixing og sceneopstilling, og sikrer at duoets detaljerede produktion og energi kommer perfekt til udtryk på hver scene. Med Storms bror på bas og elektronisk backing fra computeren, skabes der en komplet livearvelse fra minimalt elektronisk setup.'
    ],

    tech: [
      'FOH-mix (front-of-house)',
      'Monitor-mix og in-ear opsætning',
      'Stage setup og patch',
      'Trådløse systemer (vokal + instrumenter)',
      'Live elektronisk backing fra DJbord',
    ],

    mainImage: 'images/bands/promte/main.jpg',
    images: [
      // 'images/bands/promte/live-1.jpg',
      // 'images/bands/promte/live-2.jpg',
      // 'images/bands/promte/live-3.jpg',
    ],

    events: [
      // Turnédatoer bekræftes efter sommer 2026
    ],

    social: {
      instagram: 'https://instagram.com/prompteprompte',
      facebook: null,
      spotify: null,
      website: null,
    },

    bookingEmail: 'marius@lydstyrken.com',
    bookingSubject: 'Booking-forespørgsel: PROMTE',
  },

];

// ─────────────────────────────────────────────────────────────
//   HJÆLPEFUNKTIONER (bruges af band.html)
// ─────────────────────────────────────────────────────────────

function findBandById(id) {
  return BANDS.find(b => b.id === id) || null;
}

// Formatér dato fra YYYY-MM-DD til dansk: "31. maj 2026"
function formatEventDate(isoDate) {
  const d = new Date(isoDate + 'T00:00:00');
  return d.toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Returnér om et event er i fremtiden
function isUpcoming(isoDate) {
  return new Date(isoDate + 'T00:00:00') >= new Date(new Date().toDateString());
}