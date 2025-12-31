import { assignIn } from './src/collection/assignIn';

const proto = { a: 1 };
const obj = Object.create(proto);
obj.b = 2;

console.log(assignIn({}, obj));
// { a: 1, b: 2 }

console.log(assignIn({ a: 0 }, { a: 1, b: 2 }));
// { a: 1, b: 2 }

console.log(assignIn(null as any, { a: 1 }));
// {}
