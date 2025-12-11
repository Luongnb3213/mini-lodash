import { isArray } from '../_internal/isArray';

export function intersectionWith<T>(
  arrays: (T[] | null | undefined)[],
  comparator: (a: T, b: T) => boolean,
): T[] {
  if (!isArray(arrays) || arrays.length === 0) return [];

  const [first, ...rest] = arrays;
  if (!isArray(first) || first.length === 0) return [];

  const result: T[] = [];

  outer: for (const item of first) {
    if (result.some(existing => comparator(existing, item))) {
      continue;
    }

    for (const arr of rest) {
      if (!isArray(arr) || !arr.some(other => comparator(item, other))) {
        continue outer;
      }
    }

    result.push(item);
  }

  return result;
}
