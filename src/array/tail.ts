import { isArray } from '../_internal/isArray';

export function tail<T>(array: T[] | null | undefined): T[] {
  if (isArray(array) && array.length) return array.slice(1);
  return [];
}
