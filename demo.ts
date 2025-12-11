import { differenceWith } from './src/array/differenceWith';

console.log(differenceWith([{ id: 1 }, { id: 2 }], [{ id: 2 }], (a, b) => a.id === b.id)); // Output: [ { id: 1 } ]
