import { isArray } from '../_internal/isArray';

export function concat<T, U>(array: T[] | null | undefined, ...values: (U | U[])[]): (T | U)[] {
  const result: (T | U)[] = isArray(array) ? array.slice() : [];

  for (const value of values) {
    if (isArray(value)) {
      result.push(...value);
    } else {
      result.push(value);
    }
  }

  return result;
}
