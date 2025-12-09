import { sortedLastIndexOf } from './src/array/sortedLastIndexOf';

console.log('--- basic sortedLastIndexOf ---');
console.log(sortedLastIndexOf([1, 2, 3], 2)); // 1
console.log(sortedLastIndexOf([10, 20, 20, 30], 20)); // 2
console.log(sortedLastIndexOf([10, 20, 30], 40)); // -1

console.log('--- duplicates: should return LAST index ---');
console.log(sortedLastIndexOf([1, 2, 2, 2, 3], 2)); // 3

console.log('--- negative numbers ---');
console.log(sortedLastIndexOf([-10, -5, -5, 0], -5)); // 2

console.log('--- strings ---');
console.log(sortedLastIndexOf(['a', 'b', 'b', 'c'], 'b')); // 2

console.log('--- empty / nullish ---');
console.log(sortedLastIndexOf([], 10)); // -1
console.log(sortedLastIndexOf(null as any, 10)); // -1
console.log(sortedLastIndexOf(undefined as any, 10)); // -1
