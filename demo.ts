import { chunk, compact, map } from './src';

console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(compact([0, 1, false, 2, '', 3]));

console.log(map({ a: 1, b: 2 }, (v, k) => `${k}:${v}`));
