import { flattenDeep } from './src/array/flattenDeep';

console.log('--- basic flattenDeep ---');
console.log(flattenDeep([1, [2, [3, [4]]]]));
// [1, 2, 3, 4]

console.log('--- already flat ---');
console.log(flattenDeep([1, 2, 3]));
// [1, 2, 3]

console.log('--- mixed types ---');
console.log(flattenDeep([1, ['a', [true, [null]]]]));
// [1, 'a', true, null]

console.log('--- empty arrays ---');
console.log(flattenDeep([])); // []
console.log(flattenDeep([[], [[]]])); // []

console.log('--- deep nesting ---');
console.log(flattenDeep([[[[[1]]]]]));
// [1]

console.log('--- null / undefined ---');
console.log(flattenDeep(null as any)); // []
console.log(flattenDeep(undefined as any)); // []
