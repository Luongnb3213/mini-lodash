import { isArray } from '../_internal/isArray';

export function intersection<T>(...arrays: (T[] | null | undefined)[]): T[] {
  if (isArray(arrays) && arrays.length > 0) {
    const [first, ...rest] = arrays;
    if (!isArray(first)) return [];
    const result: T[] = [];
    const seen = new Set<T>(first);
    outer: for (const item of seen) {
      for (const arr of rest) {
        if (!isArray(arr) || !arr.includes(item)) {
          continue outer;
        }
      }
      result.push(item);
    }
    return result;
  }
  return [];
}
