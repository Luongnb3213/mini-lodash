import { isArray } from '../_internal/isArray';

export function pull<T>(array: T[] | null | undefined, ...values: T[]): T[] {
  if (!isArray(array) || array.length === 0) return [];

  let i = 0;
  while (i < array.length) {
    if (values.includes(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }

  return array;
}
