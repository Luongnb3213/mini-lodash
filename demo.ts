import { every } from './src/collection/every';

console.log(every([2, 4, 6], n => n % 2 === 0));
// => true

console.log(every([2, 3, 6], n => n % 2 === 0));
// => false

console.log(every([], () => false));
// => true

console.log(every({ a: 1, b: 2 }, v => typeof v === 'number'));
// => true
