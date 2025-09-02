import assert from 'node:assert/strict';
import {getCoverageColor} from '../utils/coverageColor.js';
import {dbSum, splAtPointFromSpeaker} from '../utils/spl.js';
import {PRODUCTS_SEED} from '../PRODUCTS_SEED.js';

// test getCoverageColor
const color = getCoverageColor(96, {targetSPLdB:94});
assert.equal(color.hex, '#1E7A2E');

// test dbSum for two equal sources
const sum = dbSum([90,90]);
assert(Math.abs(sum - (90 + 10*Math.log10(2))) < 1e-6);

// test splAtPointFromSpeaker returns lower SPL at 2m than reference
const product = PRODUCTS_SEED[0];
const spl = splAtPointFromSpeaker({x:2,y:0}, {x:0,y:0,rotDeg:0,productId:product.id}, product);
assert(spl < product.coverage.refSPLdB);

console.log('All utility tests passed');
