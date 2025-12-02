import { isArray } from '../_internal/isArray';

export function difference<T>(array: T[] | null | undefined, values: T[]): T[] {
  if (!isArray(array) || !isArray(values)) {
    return [];
  }

  const valueSet = new Set(values);
  return array.filter(item => !valueSet.has(item));
}
