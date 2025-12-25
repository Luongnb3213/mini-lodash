import { sample } from './src/collection/sample';

console.log(sample([1, 2, 3, 4])); // random one
console.log(sample({ a: 10, b: 20, c: 30 })); // random value
console.log(sample([])); // undefined
console.log(sample(null)); // undefined
