import {dbSum, splAtPointFromSpeaker, SpeakerInstance} from './spl';
import {getCoverageColor} from './coverageColor';
import {PRODUCTS_SEED, Product} from '../PRODUCTS_SEED';

export interface CoverageCell {
  x: number;
  y: number;
  spl: number;
  color: ReturnType<typeof getCoverageColor> | {hex:string;alpha:number;percent:number;paletteIndex:number};
}
export interface CoverageGrid {
  rows: number;
  cols: number;
  cellSizeM: number;
  data: CoverageCell[][];
}

export function calcCoverageGrid({widthM, heightM, cellSizeM=1, speakers, products=PRODUCTS_SEED, targetSPLdB=94}:{widthM:number;heightM:number;cellSizeM?:number;speakers:SpeakerInstance[];products?:Product[];targetSPLdB?:number;}): CoverageGrid {
  const cols = Math.ceil(widthM / cellSizeM);
  const rows = Math.ceil(heightM / cellSizeM);
  const prodMap = new Map(products.map(p => [p.id, p]));
  const data: CoverageCell[][] = [];
  for (let r=0; r<rows; r++){
    const row: CoverageCell[] = [];
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
