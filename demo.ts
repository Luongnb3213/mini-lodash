import { findLastIndex } from './src/array/findLastIndex';

console.log('--- basic findLastIndex ---');
console.log(findLastIndex([1, 2, 3, 2], v => v === 2)); // 3

console.log(findLastIndex(['a', 'b', 'c', 'b'], v => v === 'b')); // 3

console.log('--- not found ---');
console.log(findLastIndex([1, 2, 3], v => v === 99)); // -1

console.log('--- predicate using index ---');
console.log(findLastIndex([10, 20, 30], (_, i) => i === 0)); // 0

console.log('--- predicate using array ---');
console.log(findLastIndex([5, 10, 20], (v, _, arr) => v === arr[0])); // 0

console.log('--- empty array ---');
console.log(findLastIndex([], () => true)); // -1

console.log('--- null/undefined array ---');
console.log(findLastIndex(null as any, () => true)); // -1
console.log(findLastIndex(undefined as any, () => true)); // -1

console.log('--- complex type ---');
console.log(findLastIndex([{ id: 1 }, { id: 2 }, { id: 1 }], item => item.id === 1)); // 2
