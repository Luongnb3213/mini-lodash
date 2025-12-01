import { isArray } from '../_internal/isArray';

export function takeRight<T>(array: T[] | null | undefined, n: number = 1): T[] {
  if (isArray(array)) {
    return array.slice(-n);
  }
  return [];
}
