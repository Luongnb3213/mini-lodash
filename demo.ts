import { isMatch } from './src/object/isMatch';

/* Test cases */
console.log(isMatch({ a: 1, b: 2 }, { a: 1 })); // true

console.log(isMatch({ a: { b: 2, c: 3 } }, { a: { b: 2 } })); // true

console.log(isMatch({ a: { b: 2 } }, { a: { b: 3 } })); // false
