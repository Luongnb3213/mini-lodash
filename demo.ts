import { flattenDepth } from './src';
import { flatMapDepth } from './src/collection/flatMapDepth';

console.log(flatMapDepth([1, 2], n => [n, [n * 2]], 1));
// [1,2,2,4]

console.log(flatMapDepth([1], () => [[[1]]], 2));
// [[1]]

console.log(flatMapDepth(null, () => [1], 2));
// []
