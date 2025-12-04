import { isArray } from '../_internal/isArray';

export function findLastIndex<T>(
  array: T[] | null | undefined,
  predicate: (value: T, index: number, array: T[]) => boolean,
): number {
  let result = -1;
  if (isArray(array) && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        result = i;
      }
    }
  }
  return result;
}
