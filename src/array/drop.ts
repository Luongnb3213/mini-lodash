import { isArray } from '../_internal/isArray';

export function drop<T>(array: T[] | null | undefined, n: number = 1): T[] {
  if (isArray(array)) {
    return array.slice(n);
  }
  return [];
}
