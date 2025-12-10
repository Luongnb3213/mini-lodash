import { isArray } from '../_internal/isArray';

export function unionBy<T>(arrays: (T[] | null | undefined)[], iteratee: (item: T) => any): T[] {
  if (!isArray(arrays) || arrays.length === 0) return [];

  const result: T[] = [];
  const seen = new Set<any>();

  for (const arr of arrays) {
    if (!isArray(arr)) continue;

    for (const item of arr) {
      const key = iteratee(item);
      if (!seen.has(key)) {
        seen.add(key);
        result.push(item);
      }
    }
  }

  return result;
}
