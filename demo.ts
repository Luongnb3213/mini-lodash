import { nth } from './src/array/nth';

console.log('--- positive index ---');
console.log(nth([1, 2, 3], 0)); // 1
console.log(nth([1, 2, 3], 1)); // 2
console.log(nth([1, 2, 3], 2)); // 3

console.log('--- negative index ---');
console.log(nth([1, 2, 3], -1)); // 3
console.log(nth([1, 2, 3], -2)); // 2
console.log(nth([1, 2, 3], -3)); // 1

console.log('--- out of range positive ---');
console.log(nth([1, 2, 3], 3)); // undefined
console.log(nth([1, 2, 3], 10)); // undefined

console.log('--- out of range negative ---');
console.log(nth([1, 2, 3], -4)); // undefined
console.log(nth([1, 2, 3], -10)); // undefined

console.log('--- empty array ---');
console.log(nth([], 0)); // undefined
console.log(nth([], -1)); // undefined

console.log('--- null or undefined ---');
console.log(nth(null as any, 0)); // undefined
console.log(nth(undefined as any, 0)); // undefined

console.log('--- different types ---');
console.log(nth(['a', 'b', 'c'], 1)); // "b"
console.log(nth([true, false], -1)); // false
console.log(nth([{ x: 1 }, { x: 2 }], 1)); // {x:2}
console.log(nth([[1], [2], [3]], -2)); // [2]
