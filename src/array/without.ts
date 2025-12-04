import { isArray } from '../_internal/isArray';

export function without<T>(array: T[] | null | undefined, ...values: T[]): T[] {
  if (isArray(array) && array.length > 0) {
    const result: T[] = [];
    const valuesSet = new Set<T>(values);
    for (const item of array) {
      if (!valuesSet.has(item)) {
        result.push(item);
      }
    }
    return result;
  }

  return [];
}
