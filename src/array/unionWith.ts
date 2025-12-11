import { isArray } from '../_internal/isArray';

export function unionWith<T>(
  arrays: (T[] | null | undefined)[],
  comparator: (a: T, b: T) => boolean,
): T[] {
  if (!arrays || arrays.length === 0) return [];

  const result: T[] = [];

  for (const arr of arrays) {
    if (!isArray(arr)) continue;

    for (const item of arr) {
      const exists = result.some(existing => comparator(existing, item));
      if (!exists) {
        result.push(item);
      }
    }
  }

  return result;
}
