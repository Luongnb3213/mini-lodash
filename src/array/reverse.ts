import { isArray } from '../_internal/isArray';

export function reverse<T>(array: T[] | null | undefined): T[] {
  if (isArray(array)) {
    const result: T[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    return result;
  }
  return [];
}
