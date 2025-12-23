type Iteratee<T> = (value: T, indexOrKey: number | string, collection: any) => PropertyKey;

export function keyBy<T>(
  collection: T[] | Record<string, T> | null | undefined,
  iteratee: Iteratee<T>,
): Record<string, T> {
  const result: Record<string, T> = {};
  if (collection == null) return result;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const groupKey = iteratee(collection[i], i, collection).toString();
      result[groupKey] = collection[i];
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        const groupKey = iteratee(collection[key], key, collection).toString();
        result[groupKey] = collection[key];
      }
    }
  }

  return result;
}
