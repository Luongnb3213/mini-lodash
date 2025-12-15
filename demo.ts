import { pull } from './src/array/pull';

console.log('--- pull basic ---');
const a1 = [1, 2, 3, 2];
console.log(pull(a1, 2)); // [1, 3]
console.log(a1); // [1, 3]  (bị mutate)

console.log('--- pull multiple values ---');
const a2 = [1, 2, 3, 4, 2];
console.log(pull(a2, 2, 4)); // [1, 3]
console.log(a2); // [1, 3]

console.log('--- pull no match ---');
const a3 = [1, 2, 3];
console.log(pull(a3, 99)); // [1, 2, 3]
console.log(a3); // [1, 2, 3]

console.log('--- pull empty / nullish ---');
const a4: number[] = [];
console.log(pull(a4, 1)); // []
console.log(pull(null as any, 1)); // null (tuỳ bạn muốn return [] hay array, hiện code return array as T[])
