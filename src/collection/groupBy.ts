import { isArray } from '../_internal/isArray';

type Iteratee<T> = (value: T, indexOrKey: number | string, collection: any) => PropertyKey;

export function groupBy<T>(
  collection: T[] | Record<string, T> | null | undefined,
  iteratee: Iteratee<T>,
): Record<string, T[]> {
  const result: Record<string, T[]> = {};
  if (collection == null) return result;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const groupKey = iteratee(collection[i], i, collection).toString();
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(collection[i]);
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        const groupKey = iteratee(collection[key], key, collection).toString();
        if (!result[groupKey]) {
          result[groupKey] = [];
        }
        result[groupKey].push(collection[key]);
      }
    }
  }

  return result;
}
