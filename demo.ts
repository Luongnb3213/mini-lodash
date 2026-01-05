import { get } from './src/object/get';
import { has } from './src/object/has';
import { set } from './src/object/set';

/* Test cases */
const obj = { a: { b: { c: 1 } } };

console.log(has(obj, 'a')); // true
console.log(has(obj, 'a.b.c')); // true
console.log(has(obj, 'a.b.d')); // false
console.log(has(obj, ['a', 'b'])); // true
