import { zipObjectDeep } from './src/array/zipObjectDeep';

console.log(zipObjectDeep(['a.b.c'], [1]));
// { a: { b: { c: 1, d: 2 } } }

// console.log(zipObjectDeep(['a[0].b', 'a[1].b'], [1, 2]));
// // { a: [ { b: 1 }, { b: 2 } ] }

// console.log(zipObjectDeep(['x'], [42]));
// // { x: 42 }

// console.log(zipObjectDeep([], [1, 2])); // {}
// console.log(zipObjectDeep(null as any, [1])); // {}
// console.log(zipObjectDeep(['a.b'], null as any)); // { a: { b: undefined } }
const obj: any = {};
let cur = obj;

cur.a = {};
cur = cur.a;

console.log('test', obj);
