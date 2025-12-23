type Iteratee<T> = (value: T, indexOrKey: number | string, collection: any) => PropertyKey;

export function countBy<T>(
  collection: T[] | Record<string, T> | null | undefined,
  iteratee: Iteratee<T>,
): Record<string, number> {
  const result: Record<string, number> = {};
  if (collection == null) return result;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const groupKey = iteratee(collection[i], i, collection).toString();
      if (!result[groupKey]) {
        result[groupKey] = 0;
      }
      result[groupKey]++;
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        const groupKey = iteratee(collection[key], key, collection).toString();
        if (!result[groupKey]) {
          result[groupKey] = 0;
        }
        result[groupKey]++;
      }
    }
  }

  return result;
}
