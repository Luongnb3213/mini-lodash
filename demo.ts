import { unionBy } from './src/array/unionBy';

console.log('--- basic unionBy ---');
console.log(unionBy([[2.1], [1.2, 2.3]], Math.floor));
// => [2.1, 1.2]
// floor: 2 (from 2.1, 2.3), 1 (from 1.2)

console.log('--- unionBy with objects ---');
console.log(
  unionBy(
    [
      [{ id: 1 }, { id: 2 }],
      [{ id: 2 }, { id: 3 }],
    ],
    item => item.id,
  ),
);
// => [{ id: 1 }, { id: 2 }, { id: 3 }]

console.log('--- unionBy with duplicates ---');
console.log(
  unionBy(
    [
      [1, 2, 2, 3],
      [2, 3, 4],
    ],
    v => v,
  ),
);
// => [1, 2, 3, 4]

console.log('--- order should follow first appearance ---');
console.log(
  unionBy(
    [
      [3, 2, 1],
      [1, 2, 3, 4],
    ],
    v => v,
  ),
);
// => [3, 2, 1, 4]

console.log('--- null & empty ---');
console.log(unionBy([null as any, [1, 2], []], v => v));
// => [1, 2]
