import { isArray } from '../_internal/isArray';

export function indexOf<T>(array: T[] | null | undefined, value: T, fromIndex: number = 0): number {
  if (isArray(array) && array.length > 0) {
    const length = array.length;
    let startIndex = fromIndex;

    if (fromIndex < 0) {
      startIndex = Math.max(length + fromIndex, 0);
    }
    for (let i = startIndex; i < length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
  }
  return -1;
}
