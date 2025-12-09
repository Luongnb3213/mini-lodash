import { isArray } from '../_internal/isArray';

// sortedLastIndexOf.ts
export function sortedLastIndexOf<T>(array: T[] | null | undefined, value: T): number {
  if (isArray(array) && array.length > 0) {
    let low = 0;
    let high = array.length - 1;
    let result = -1;
    let mid;
    while (high >= low) {
      mid = low + Math.floor((high - low) / 2);

      if (array[mid] == value) {
        result = mid;
        low = mid + 1;
      } else if (array[mid] > value) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return result;
  }
  return -1;
}
