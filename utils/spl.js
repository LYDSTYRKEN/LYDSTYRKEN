/**
 * @typedef {Object} SpeakerInstance
 * @property {number} x
 * @property {number} y
 * @property {number} rotDeg
 * @property {string} productId
 * @property {number} [qty]
 */

/**
 * Sum of decibel values.
 * @param {number[]} values
 * @returns {number}
 */
export function dbSum(values) {
  if (!values.length) return -Infinity;
  const lin = values.reduce((s,v)=>s+10**(v/10),0);
  return 10*Math.log10(lin);
}

/**
 * SPL at a given point from a speaker instance.
 * @param {{x:number,y:number}} p
 * @param {SpeakerInstance} s
 * @param {import('../PRODUCTS_SEED.js').Product} product
 * @returns {number}
 */
export function splAtPointFromSpeaker(p, s, product){
  const {refSPLdB, refDistM, hDeg} = product.coverage;
  const dx = p.x - s.x, dy = p.y - s.y;
  const dist = Math.hypot(dx,dy);
  if (dist < 0.1) return refSPLdB; // nærfelt guard
  const theta = Math.atan2(dy,dx) * 180/Math.PI;           // punktets vinkel
  const forward = s.rotDeg;                                 // højtalerens akse
  let delta = Math.abs((((theta-forward)+540)%360)-180);    // 0..180
  if (delta > 180) delta = 360 - delta;
  const half = hDeg/2;
  let angleLoss = 0;
  if (delta > half) return -Infinity;                       // udenfor dækning
  // blød roll-off mod kanten (op til -12 dB ved kanten)
  angleLoss = -12 * (delta/half);
  const spl = product.coverage.refSPLdB - 20*Math.log10(dist/refDistM) + angleLoss;
  return spl;
}
