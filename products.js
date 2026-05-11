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



// Hjælpefunktion brugt på begge sider
const formatKr = n => n.toLocaleString('da-DK') + ' kr.';

// Find produkt ud fra id (bruges på produkt.html)
function findProductById(id) {
  return PRODUCTS.find(p => String(p.id) === String(id));
}