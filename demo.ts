import { pickBy } from './src/collection/pickBy';

console.log(pickBy({ a: 1, b: 2, c: 3 }, v => v > 1));
// { b: 2, c: 3 }

console.log(pickBy({ a: 1, b: null }, v => v != null));
// { a: 1 }

console.log(pickBy(null, () => true));
// {}
