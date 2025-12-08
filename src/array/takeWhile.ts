import { isArray } from '../_internal/isArray';

export function takeWhile<T>(
  array: T[] | null | undefined,
  predicate: (value: T, index: number, array: T[]) => boolean,
): T[] {
  if (isArray(array) && array.length > 0) {
    let dropIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        dropIndex++;
      } else {
        break;
      }
    }
    return array.slice(0, dropIndex);
  }
  return [];
}
