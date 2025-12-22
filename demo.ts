import { groupBy } from './src/collection/groupBy';

console.log(groupBy([6.1, 4.2, 6.3], n => Math.floor(n)));
// { "4": [4.2], "6": [6.1, 6.3] }

console.log(groupBy(['one', 'two', 'three'], s => s.length));
// { "3": ["one","two"], "5": ["three"] }

console.log(groupBy([], () => 'x')); // {}
console.log(groupBy(null, () => 'x')); // {}
