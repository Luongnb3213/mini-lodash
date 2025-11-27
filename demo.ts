import { head } from './src/array/head';
import { uniq } from './src/array/uniq';


// Basic cases
console.log(uniq([1, 1, 2, 3, 3]));
// 👉 [1, 2, 3]

console.log(uniq(['a', 'b', 'a', 'c']));
// 👉 ['a', 'b', 'c']

// Edge cases
console.log(uniq([]));
// 👉 []

console.log(uniq([1]));
// 👉 [1]

// Mixed data types
console.log(uniq([1, "1", 1, "1"]));
// 👉 [1, "1"]

console.log(uniq([true, false, true]));
// 👉 [true, false]

// Objects (reference equality)
const obj = { a: 1 };
console.log(uniq([obj, obj, { a: 1 }]));
// 👉 [obj, { a: 1 }]
// Vì object chỉ uniq theo reference, không theo value

// Special values
console.log(uniq([NaN, NaN, 1, 2, NaN]));
// 👉 [NaN, 1, 2]
// Set xử lý NaN rất đúng

console.log(uniq([undefined, undefined, null, null, 0, 0]));
// 👉 [undefined, null, 0]ined
