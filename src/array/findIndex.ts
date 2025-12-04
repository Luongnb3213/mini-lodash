import { isArray } from '../_internal/isArray';

export function findIndex<T>(
  array: T[] | null | undefined,
  predicate: (value: T, index: number, array: T[]) => boolean,
): number {
  if (isArray(array) && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
  }
  return -1;
}
