export const GREEN_PALETTE = ["#0B6623","#1E7A2E","#2FA84F","#5FCF73","#7AD37A","#A4E1A6","#CDECCB"];

export function getCoverageColor(
  splDb,
  { targetSPLdB, headroomAboveTarget = 6, falloffBelowTarget = 12, minAlpha = 0.08, maxAlpha = 0.9 }
){
  const above = splDb - targetSPLdB;
  const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));
  const lerp = (a,b,t)=>a+(b-a)*t;

  const norm = above >= 0 ? clamp(above/headroomAboveTarget,0,1) : clamp(above/-falloffBelowTarget,-1,0);
  const idx  = norm >= 0 ? Math.round(2 - norm*2) : Math.round(4 + (1+norm)*2);
  const i    = clamp(idx, 0, GREEN_PALETTE.length-1);
  const alpha= norm >= 0 ? lerp(0.7, maxAlpha, norm) : lerp(minAlpha, 0.6, norm+1);
  const percent = norm >= 0 ? 50 + Math.round(norm*50) : Math.round((norm+1)*50);

  return { hex: GREEN_PALETTE[i], alpha: Math.round(alpha*1000)/1000, percent, paletteIndex:i };
}
