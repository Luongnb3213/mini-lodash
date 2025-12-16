import { isArray } from '../_internal/isArray';

export function pullAt<T>(array: T[] | null | undefined, indexes: number[]): T[] {
  if (!isArray(array) || !isArray(indexes)) return [];

  const result: T[] = [];
  const sortedIndexes = [...indexes].sort((a, b) => b - a);

  for (const index of sortedIndexes) {
    if (index >= 0 && index < array.length) {
      result.unshift(array.splice(index, 1)[0]);
    }
  }

  return result;
}
