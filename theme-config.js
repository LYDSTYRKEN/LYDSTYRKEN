/* ════════════════════════════════════════════════════════════════
   LYDSTYRKEN — GLOBAL TEMA-KONFIGURATION
   ════════════════════════════════════════════════════════════════

   ┌──────────────────────────────────────────────────────────────┐
   │  ÆNDR ÉN LINJE HER FOR AT SKIFTE TEMA PÅ HELE SITET          │
   └──────────────────────────────────────────────────────────────┘

   Sådan skifter du tema:
   ─────────────────────────
   1. Åbn denne fil (theme-config.js)
   2. Skift værdien af SITE_THEME nedenfor til ét af temaerne
   3. Gem og push til GitHub — hele sitet skifter.

   TILGÆNGELIGE TEMAER:
   ─────────────────────────
     'orange'      ← Default — LYDSTYRKEN brand (rød-orange)
     'green'       ← Naturlig grøn — frisk og rolig
     'danskflag'   ← Dannebrog rød — patriotisk
     'pride'       ← Pink/lilla med subtil regnbue-detalje
     'monochrome'  ← Sort/hvid uden farve-accent

     'electric'    ← Neon blå — koncert/club-vibe
     'sunset'      ← Varm koral/pink — festival-vibe
     'midnight'    ← Mørk lilla — eksklusiv aften-vibe
     'forest'      ← Dyb skovgrøn — outdoor/jord-vibe
     'gold'        ← Mat guld — luksus/jubilæum

   ═══════════════════════════════════════════════════════════════ */

const SITE_THEME = 'electric';


// ══════════════════════════════════════════════════════════════════
// Teknisk: Sæt data-theme på <html> så CSS i themes.css kan matche.
// Dette script loades synkront i <head> så det sker FØR rendering —
// og dermed undgår vi flicker mellem orange (HTML default) og det
// faktiske tema.
// ══════════════════════════════════════════════════════════════════
(function() {
  document.documentElement.setAttribute('data-theme', SITE_THEME);
})();