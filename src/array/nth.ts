import { isArray } from '../_internal/isArray';

export function nth<T>(array: T[] | null | undefined, n: number = 0): T | undefined {
  if (isArray(array)) {
    const length = array.length;

    const index = n < 0 ? length + n : n;

    return array.slice(index, index + 1)[0];
  }
  return undefined;
}
