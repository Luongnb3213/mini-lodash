import { isArray } from '../_internal/isArray';

export function pullAll<T>(array: T[] | null | undefined, values: T[] | null | undefined): T[] {
  if (!isArray(array) || !isArray(values) || values.length === 0) {
    return array as T[];
  }

  return array.filter(item => !values.includes(item));
}
