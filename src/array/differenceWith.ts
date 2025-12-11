import { isArray } from '../_internal/isArray';

export function differenceWith<T>(
  array: T[] | null | undefined,
  values: T[] | null | undefined,
  comparator: (a: T, b: T) => boolean,
): T[] {
  if (!isArray(array) || !isArray(values)) {
    return [];
  }

  return array.filter(item => !values.some(value => comparator(item, value)));
}
