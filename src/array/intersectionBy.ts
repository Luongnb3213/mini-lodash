import { isArray } from '../_internal/isArray';

export function intersectionBy<T>(
  arrays: (T[] | null | undefined)[],
  iteratee: (item: T) => any,
): T[] {
  if (isArray(arrays) && arrays.length > 0) {
    const [first, ...rest] = arrays;
    if (!isArray(first)) return [];
    const result: T[] = [];
    const seen = new Set(first);
    outer: for (const item of seen) {
      for (const arr of rest) {
        if (!isArray(arr) || !arr.map(iteratee).includes(iteratee(item))) {
          continue outer;
        }
      }
      result.push(item);
    }
    return result;
  }
  return [];
}
