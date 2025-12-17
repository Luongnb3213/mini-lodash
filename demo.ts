import { xor } from './src/array/xor';

console.log(xor([1, 2, 3], [2, 4]));
// expect: [1, 3, 4]

console.log(xor([1, 2], [2, 3], [3, 4]));
// expect: [1, 4]

console.log(xor([1, 1, 2], [2, 3]));
// expect: [1, 3]

console.log(xor([NaN, 1], [NaN, 2]));
// expect: [1, 2]

console.log(xor([], [1, 2]));
// expect: [1, 2]

console.log(xor(null as any, undefined as any, [1]));
// expect: [1]
