import {dbSum, splAtPointFromSpeaker} from './spl.js';
import {getCoverageColor} from './coverageColor.js';
import {PRODUCTS_SEED} from '../PRODUCTS_SEED.js';

/**
 * Calculate coverage grid for a rectangular area.
 * @param {Object} params
 * @param {number} params.widthM - Width of the area in meters.
 * @param {number} params.heightM - Height of the area in meters.
 * @param {number} [params.cellSizeM=1] - Grid cell size in meters.
 * @param {import('./spl.js').SpeakerInstance[]} params.speakers - Array of speakers.
 * @param {import('../PRODUCTS_SEED.js').Product[]} [params.products=PRODUCTS_SEED]
 * @param {number} [params.targetSPLdB=94]
 */
export function calcCoverageGrid({widthM, heightM, cellSizeM=1, speakers, products=PRODUCTS_SEED, targetSPLdB=94}){
  const cols = Math.ceil(widthM / cellSizeM);
  const rows = Math.ceil(heightM / cellSizeM);
  const prodMap = new Map(products.map(p => [p.id, p]));
  const data = [];
  for (let r=0; r<rows; r++){
    const row = [];
    const y = (r+0.5)*cellSizeM;
    for (let c=0; c<cols; c++){
      const x = (c+0.5)*cellSizeM;
      const splVals = speakers.map(s => {
        const prod = prodMap.get(s.productId);
        return prod ? splAtPointFromSpeaker({x, y}, s, prod) : -Infinity;
      }).filter(v => v > -Infinity);
      const spl = splVals.length ? dbSum(splVals) : -Infinity;
      const color = spl > -Infinity ? getCoverageColor(spl, {targetSPLdB}) : {hex:'transparent',alpha:0,percent:0,paletteIndex:-1};
      row.push({x, y, spl, color});
    }
    data.push(row);
  }
  return {rows, cols, cellSizeM, data};
}
