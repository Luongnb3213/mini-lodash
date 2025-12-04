import { isArray } from '../_internal/isArray';

export function union<T>(...arrays: (T[] | null | undefined)[]): T[] {
  if (isArray(arrays) && arrays.length > 0) {
    const [first, ...rest] = arrays;
    if (!isArray(first)) return [];
    const seen = new Set<T>(first);
    for (const arr of rest) {
      if (!isArray(arr)) return [];
      for (const item of arr) {
        seen.add(item);
      }
    }
    return Array.from(seen);
  }

  return [];
}
