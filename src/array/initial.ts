import { isArray } from '../_internal/isArray';

export function initial<T>(array: T[] | null | undefined): T[] {
  if (isArray(array) && array.length) return array.slice(0, -1);
  return [];
}
