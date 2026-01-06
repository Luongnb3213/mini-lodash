import { merge } from './src/object/merge';

/* Test cases */
const obj1 = { a: { b: 1 } };
const obj2 = { a: { c: 2 } };

console.log(merge({}, obj1, obj2));
// { a: { b: 1, c: 2 } }

const obj3 = { a: { b: { d: 3 } } };
console.log(merge({}, obj1, obj3));
// { a: { b: { d: 3 } } }
