import { isArray } from '../_internal/isArray';

export function dropRight<T>(array: T[] | null | undefined, n: number = 1): T[] {
  if (isArray(array)) {
    return array.slice(0, n == 0 ? array.length : -n);
  }
  return [];
}
