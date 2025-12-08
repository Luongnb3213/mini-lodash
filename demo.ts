import { sortedIndex } from './src/array/sortedIndex';

console.log('--- basic numeric sortedIndex ---');
console.log(sortedIndex([10, 20, 30], 25)); // 2
console.log(sortedIndex([10, 20, 30], 5)); // 0
console.log(sortedIndex([10, 20, 30], 35)); // 3

console.log('--- inserting duplicates ---');
console.log(sortedIndex([1, 2, 2, 2, 3], 2)); // 1  (lodash inserts BEFORE duplicates)

console.log('--- small arrays ---');
console.log(sortedIndex([1], 0)); // 0
console.log(sortedIndex([1], 2)); // 1

console.log('--- empty array ---');
console.log(sortedIndex([], 10)); // 0

console.log('--- null or undefined array ---');
console.log(sortedIndex(null as any, 10)); // 0
console.log(sortedIndex(undefined as any, 10)); // 0

console.log('--- negative numbers ---');
console.log(sortedIndex([-10, -5, 0, 5], -7)); // 1
console.log(sortedIndex([-10, -5, 0, 5], 1)); // 3

console.log('--- float values ---');
console.log(sortedIndex([0.1, 0.2, 0.3], 0.25)); // 2

console.log('--- sortedIndex with strings ---');
console.log(sortedIndex(['a', 'c', 'd'], 'b')); // 1
console.log(sortedIndex(['apple', 'banana'], 'aardvark')); // 0
console.log(sortedIndex(['apple', 'banana'], 'carrot')); // 2

console.log('--- sortedIndex with booleans ---');
// In JS: false < true
console.log(sortedIndex([false, true], false)); // 0
console.log(sortedIndex([false, true], true)); // 1

console.log('--- edge cases: identical values ---');
console.log(sortedIndex([2, 2, 2], 2)); // 0

console.log('--- edge cases: large array ---');
// Bạn test logic performance sau nếu cần
console.log(sortedIndex([1, 100, 200, 300, 400], 350)); // 4

console.log('--- custom objects (not supported in basic version) ---');
console.log(sortedIndex([{ x: 1 }, { x: 5 }], { x: 3 })); // Kết quả không meaningful vì so sánh object === object
