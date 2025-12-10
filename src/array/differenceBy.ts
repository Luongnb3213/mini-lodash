import { isArray } from '../_internal/isArray';

export function differenceBy<T>(
  array: T[] | null | undefined,
  values: T[] | null | undefined,
  iteratee: (item: T) => any,
): T[] {
  if (!isArray(array) || !isArray(values)) {
    return [];
  }

  const valueSet = new Set(values.map(iteratee));
  return array.filter(item => !valueSet.has(iteratee(item)));
}
