import { partition } from './src';

console.log(partition([1, 2, 3, 4], n => n % 2 === 0));
// [ [2, 4], [1, 3] ]

console.log(partition({ a: 1, b: 2, c: 3 }, v => v > 1));
// [ [2, 3], [1] ]

console.log(partition(null, () => true));
// [ [], [] ]
