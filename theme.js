/* ════════════════════════════════════════════════════════════════
   LYDSTYRKEN — GLOBAL TEMA-KONFIGURATION
   ════════════════════════════════════════════════════════════════

   ┌──────────────────────────────────────────────────────────────┐
   │  AUTOMATISK ELLER MANUEL TEMA-STYRING                        │
   └──────────────────────────────────────────────────────────────┘

   To måder at styre temaet:

   ─────────────────────────
   1. AUTOMATISK (anbefalet)
   ─────────────────────────
       const SITE_THEME = null;

   → Sitet skifter automatisk efter datoen.
   → Bruger DEFAULT_THEME nedenfor på dage uden højtid.

   ─────────────────────────
   2. MANUEL OVERRIDE
   ─────────────────────────
       const SITE_THEME = 'jul';

   → Sitet bruger 'jul' uanset hvad datoen er.
   → Brug det til at teste et tema, eller hvis du vil holde
     fast i ét specifikt look til et bestemt event.

   ═══════════════════════════════════════════════════════════════

   TILGÆNGELIGE TEMAER (55 i alt)
   ─────────────────────────

   ─── GRUND-TEMAER (5) ───
     'orange'  ← Default brand
     'green'  'danskflag'  'pride'  'monochrome'

   ─── STEMNINGS-TEMAER (5) ───
     'electric'  'sunset'  'midnight'  'forest'  'gold'

   ─── HØJTIDSTEMAER (27) — auto-trigger på dato ───
     'helligtrekonger' ← 6. januar
     'kyndelmisse'     ← 2. februar
     'valentinsdag'    ← 10.-16. februar
     'fastelavn'       ← Fredag-mandag omkring fastelavnssøndag (variabel)
     'kvindekampdag'   ← 8. marts
     'stpatricksday'   ← 17. marts
     'paaske'          ← Palmesøndag → 2. påskedag (variabel)
     'voldborgsaften'  ← 30. april
     'arbejderdag'     ← 1. maj
     'befrielsesdag'   ← 4. maj
     'morsdag'         ← 2. søndag i maj (lørdag-mandag)
     'pinse'           ← Pinsedag-weekend (variabel)
     'grundlovsdag'    ← 5. juni (vinder over fars dag)
     'sankthans'       ← 21.-23. juni
     'oktoberfest'     ← 16.-30. september
     'mikkelsdag'      ← 29. september
     'halloween'       ← 25.-31. oktober
     'allehelgen'      ← 1. november
     'mortensaften'    ← 10. november
     'blackfriday'     ← 4. fredag i november (variabel)
     'cybermonday'     ← Mandag efter Black Friday (variabel)
     'jul'             ← 1.-30. december (luciadag og nytar har forrang)
     'luciadag'        ← 13. december
     'nytar'           ← 31. december

     'farsdag'         ← (kun manuel — kolliderer med grundlovsdag 5/6)
     'bededag'         ← (kun manuel)
     'himmelfart'      ← (kun manuel)

   ─── STEMNINGS-TEMAER (8) — kun manuel, til specifikke events ───
     'club'           ← Clubs/discos — neon lilla
     'festival'       ← Festivaller — lys pink
     'bryllup'        ← Bryllupper — varm champagne
     'studenter'      ← Studenter-fester — rød/hvid
     'konfirmation'   ← Konfirmationer — sølv/hvid
     'fodselsdag'     ← Fødselsdage — koral festlig
     'studio'         ← Studier — clean grå
     'begravelse'     ← Begravelser — sober dyb

   ─── GENRE-TEMAER (5) — kun manuel ───
     'jazz'    ← Varm gylden brun
     'metal'   ← Sort/sølv hård
     'techno'  ← Neon grøn cyber
     'country' ← Varm brun rustik
     'hiphop'  ← Mørk urban gold

   ─── ELEMENT-TEMAER (5) — kun manuel ───
     'ocean'   ← Dyb havblå
     'fire'    ← Flamme orange/rød
     'ice'     ← Kold lys blå
     'neon'    ← Cyberpunk magenta
     'vintage' ← Sepia brun nostalgisk

   ════════════════════════════════════════════════════════════════ */


// ┌──────────────────────────────────────────────────────────────┐
// │  KONFIGURATION                                               │
// └──────────────────────────────────────────────────────────────┘

const SITE_THEME = null;            // null = automatisk dato-baseret
const DEFAULT_THEME = 'orange';     // bruges når ingen højtid matcher


// ┌──────────────────────────────────────────────────────────────┐
// │  HØJTIDSREGLER                                               │
// │  Tjekkes oppefra og ned — første match vinder.               │
// │  (Specifikke dage skal stå før perioder for korrekt prioritet) │
// └──────────────────────────────────────────────────────────────┘

const HOLIDAY_RULES = [

  // ─── Specifikke datoer (kun én dag — højeste prioritet) ───
  d => sameDay(d, 12, 31)  ? 'nytar'           : null,  // Nytårsaften
  d => sameDay(d, 12, 13)  ? 'luciadag'        : null,  // Luciadag
  d => sameDay(d, 11, 10)  ? 'mortensaften'    : null,  // Mortensaften
  d => sameDay(d, 11,  1)  ? 'allehelgen'      : null,  // Allehelgen
  d => sameDay(d,  9, 29)  ? 'mikkelsdag'      : null,  // Mikkelsdag
  d => sameDay(d,  6,  5)  ? 'grundlovsdag'    : null,  // Grundlovsdag (vinder over fars dag)
  d => sameDay(d,  5,  4)  ? 'befrielsesdag'   : null,  // Befrielsesdag
  d => sameDay(d,  5,  1)  ? 'arbejderdag'     : null,  // 1. maj
  d => sameDay(d,  4, 30)  ? 'voldborgsaften'  : null,  // Voldborgsaften
  d => sameDay(d,  3, 17)  ? 'stpatricksday'   : null,  // St. Patrick's Day
  d => sameDay(d,  3,  8)  ? 'kvindekampdag'   : null,  // 8. marts
  d => sameDay(d,  2,  2)  ? 'kyndelmisse'     : null,  // Kyndelmisse
  d => sameDay(d,  1,  6)  ? 'helligtrekonger' : null,  // Helligtrekonger

  // ─── Korte perioder (uger omkring en højtid) ───
  d => isInRange(d, 2, 10,  2, 16)  ? 'valentinsdag' : null,  // Valentin-uge
  d => isInRange(d, 10, 25, 10, 31) ? 'halloween'    : null,  // Halloween-uge
  d => isInRange(d, 6, 21,  6, 23)  ? 'sankthans'    : null,  // Sankt Hans ± 1 dag
  d => isInRange(d, 9, 16,  9, 30)  ? 'oktoberfest'  : null,  // Oktoberfest-perioden

  // ─── Variable datoer (kræver beregning hvert år) ───
  d => isEasterPeriod(d)  ? 'paaske'      : null,  // Palmesøndag → 2. påskedag
  d => isFastelavn(d)     ? 'fastelavn'   : null,  // Fastelavnsweekend
  d => isPentecost(d)     ? 'pinse'       : null,  // Pinsedag-weekend
  d => isCyberMonday(d)   ? 'cybermonday' : null,  // Mandag efter Black Friday
  d => isBlackFriday(d)   ? 'blackfriday' : null,  // 4. fredag i november

  // ─── Lange perioder (en hel måned — kommer sidst) ───
  d => isInRange(d, 12, 1, 12, 30) ? 'jul' : null,  // Hele december (undt. 31.)
];


// ┌──────────────────────────────────────────────────────────────┐
// │  HJÆLPEFUNKTIONER                                            │
// └──────────────────────────────────────────────────────────────┘

// Tjek om dato matcher en specifik måned/dag (uafhængig af år)
function sameDay(date, month, day) {
  return (date.getMonth() + 1) === month && date.getDate() === day;
}

// Tjek om dato falder mellem to måneder/dage (begge inklusive)
// Understøtter også perioder der krydser årsskifte (fx 28. dec - 5. jan)
function isInRange(date, fromMonth, fromDay, toMonth, toDay) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const current = m * 100 + d;
  const start = fromMonth * 100 + fromDay;
  const end = toMonth * 100 + toDay;
  if (start <= end) {
    return current >= start && current <= end;
  } else {
    // Perioden krydser årsskifte
    return current >= start || current <= end;
  }
}

// Påske-søndag — beregnet med Gauss' Easter-algoritme (gælder vest-kirken)
function getEasterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const L = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * L) / 451);
  const month = Math.floor((h + L - 7 * m + 114) / 31);  // 3 = marts, 4 = april
  const day = ((h + L - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

// Påske-perioden: palmesøndag (7 dage før) til 2. påskedag (1 dag efter)
function isEasterPeriod(date) {
  const easter = getEasterSunday(date.getFullYear());
  const palmSunday = new Date(easter);
  palmSunday.setDate(easter.getDate() - 7);
  const easterMonday = new Date(easter);
  easterMonday.setDate(easter.getDate() + 1);
  return isSameOrBetween(date, palmSunday, easterMonday);
}

// Fastelavn: weekend omkring fastelavnssøndag (7 uger før påske)
function isFastelavn(date) {
  const easter = getEasterSunday(date.getFullYear());
  const fastelavnSunday = new Date(easter);
  fastelavnSunday.setDate(easter.getDate() - 49);
  const start = new Date(fastelavnSunday);
  start.setDate(fastelavnSunday.getDate() - 2);
  const end = new Date(fastelavnSunday);
  end.setDate(fastelavnSunday.getDate() + 1);
  return isSameOrBetween(date, start, end);
}

// Pinse: pinsedag (49 dage efter påske) — weekend lørdag til mandag
function isPentecost(date) {
  const easter = getEasterSunday(date.getFullYear());
  const pentecostSunday = new Date(easter);
  pentecostSunday.setDate(easter.getDate() + 49);
  const start = new Date(pentecostSunday);
  start.setDate(pentecostSunday.getDate() - 1);  // lørdag før
  const end = new Date(pentecostSunday);
  end.setDate(pentecostSunday.getDate() + 1);    // mandag (2. pinsedag)
  return isSameOrBetween(date, start, end);
}

// Black Friday: 4. fredag i november
function isBlackFriday(date) {
  if (date.getMonth() !== 10) return false;  // november
  if (date.getDay() !== 5) return false;     // skal være fredag
  // 4. fredag falder mellem 22. og 28. november
  const day = date.getDate();
  return day >= 22 && day <= 28;
}

// Cyber Monday: mandag efter Black Friday
function isCyberMonday(date) {
  // November sidste mandag eller 1. december (hvis nov slutter på søndag)
  const m = date.getMonth();
  const dayOfWeek = date.getDay();
  if (dayOfWeek !== 1) return false;  // skal være mandag
  // November mandag d. 25-30, eller december 1-2
  if (m === 10 && date.getDate() >= 25) return true;
  if (m === 11 && date.getDate() <= 2) return true;
  return false;
}

// Hjælper: er dato mellem start og slut (begge inkl.)
function isSameOrBetween(date, start, end) {
  const d = stripTime(date).getTime();
  return d >= stripTime(start).getTime() && d <= stripTime(end).getTime();
}
function stripTime(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}


// ┌──────────────────────────────────────────────────────────────┐
// │  AUTO-DETEKTION                                              │
// └──────────────────────────────────────────────────────────────┘

function getAutoTheme(date) {
  for (const rule of HOLIDAY_RULES) {
    try {
      const match = rule(date);
      if (match) return match;
    } catch (e) {
      // Hvis en regel fejler, fortsæt til den næste
    }
  }
  return null;
}


// ┌──────────────────────────────────────────────────────────────┐
// │  ANVEND TEMA                                                 │
// │  Sker synkront i <head> så der ikke er flicker.              │
// └──────────────────────────────────────────────────────────────┘

(function() {
  let theme;
  let mode;

  if (SITE_THEME) {
    theme = SITE_THEME;
    mode = 'manual';
  } else {
    const autoTheme = getAutoTheme(new Date());
    if (autoTheme) {
      theme = autoTheme;
      mode = 'auto-holiday';
    } else {
      theme = DEFAULT_THEME;
      mode = 'auto-default';
    }
  }

  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-theme-mode', mode);
})();