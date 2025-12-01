import { isArray } from '../_internal/isArray';

export function take<T>(array: T[] | null | undefined, n: number = 1): T[] {
  if (isArray(array)) {
    return array.slice(0, n);
  }
  return [];
}
