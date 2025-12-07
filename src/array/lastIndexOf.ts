import { isArray } from '../_internal/isArray';

export function lastIndexOf<T>(
  array: T[] | null | undefined,
  value: T,
  fromIndex?: number,
): number {
  if (isArray(array) && array.length > 0) {
    const length = array.length;
    let startIndex = fromIndex !== undefined ? fromIndex : length - 1;
    let result = -1;
    for (let i = startIndex; i < length; i++) {
      if (array[i] === value) {
        result = i;
      }
    }
    return result;
  }
  return -1;
}
