import { isArray } from '../_internal/isArray';

export function fill<T>(
  array: T[] | null | undefined,
  value: T,
  start: number = 0,
  end?: number,
): T[] {
  if (isArray(array) && array.length > 0) {
    const len = array.length;
    const normalizedStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    const normalizedEnd =
      end === undefined ? len : end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

    for (let i = normalizedStart; i < normalizedEnd; i++) {
      array[i] = value;
    }
    return array;
  }
  return [];
}
