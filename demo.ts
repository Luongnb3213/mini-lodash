import { flatten } from './src/array/flatten';
import { head } from './src/array/head';
import { uniq } from './src/array/uniq';

// Basic
console.log(flatten([1, [2, 3], [4, 5]]));
// 👉 [1, 2, 3, 4, 5]

// Mixed nesting
console.log(flatten([1, [2, [3]], 4]));
// 👉 [1, 2, [3], 4]   (chỉ flatten 1 level)

// Already flat
console.log(flatten([1, 2, 3]));
// 👉 [1, 2, 3]

// Empty array
console.log(flatten([]));
// 👉 []

// Many levels
console.log(flatten([[1], [[2]], [[[3]]]]));
// 👉 [1, [2], [[3]]]  (flatten 1 level thôi)

// Strings / mixed types
console.log(flatten(['a', ['b', 'c'], 'd']));
// 👉 ['a', 'b', 'c', 'd']

// Null / undefined inside
console.log(flatten([1, null, [2, undefined], 3]));
// 👉 [1, null, 2, undefined, 3]
