import { head } from './src/array/head';

console.log(head([1, 2, 3])); // 1
console.log(head(['a', 'b'])); // 'a'
console.log(head([])); // undefined
console.log(head(null)); // undefined
console.log(head(undefined)); // undefined
