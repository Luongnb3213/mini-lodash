import { sortBy } from './src/collection/sortBy';

console.log(sortBy([3, 1, 2], n => n)); // [1, 2, 3]
console.log(sortBy(['bbb', 'a', 'cc'], s => s.length)); // ['a', 'cc', 'bbb']
console.log(sortBy([{ a: 2 }, { a: 1 }], o => o.a)); // [{a:1},{a:2}]
console.log(sortBy(null, (x: any) => x)); // []
