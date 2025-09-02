export const BASE_GREEN = "#0B6623" as const;

export function getCoverageColor(
  splDb: number,
  _opts: Record<string, unknown> = {}
){
  let alpha: number;
  if(splDb <= 86) alpha = 0;           // 100% transparent
  else if(splDb <= 88) alpha = 0.2;    // 80% transparent
  else if(splDb <= 91) alpha = 0.4;    // 60% transparent
  else if(splDb <= 94) alpha = 0.6;    // 40% transparent
  else if(splDb <= 97) alpha = 0.8;    // 20% transparent
  else if(splDb >= 100) alpha = 1;     // 0% transparent
  else alpha = 0.8;                    // between 97 and 100 dB

  return { hex: BASE_GREEN, alpha: Math.round(alpha*1000)/1000, percent: Math.round(alpha*100), paletteIndex:0 };
}
