import { cloneDeep } from './src/object/cloneDeep';
import { defaultsDeep } from './src/object/defaultsDeep';
import { isEqual } from './src/object/isEqual';
import { merge } from './src/object/merge';

console.log(isEqual(1, 1)); // true
console.log(isEqual(1, '1')); // false

console.log(isEqual({ a: 1 }, { a: 1 })); // true
console.log(isEqual({ a: 1 }, { a: 2 })); // false
