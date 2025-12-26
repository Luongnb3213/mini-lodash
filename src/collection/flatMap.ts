type Iteratee<T, R> = (value: T, indexOrKey: number | string, collection: any) => R[];

export function flatMap<T, R>(
  collection: T[] | Record<string, T> | null | undefined,
  iteratee: Iteratee<T, R>,
): R[] {
  if (!collection) return [];

  const result: R[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const mapped = iteratee(collection[i], i, collection);
      if (mapped && Array.isArray(mapped)) {
        result.push(...mapped);
      }
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        const mapped = iteratee(collection[key], key, collection);
        if (mapped && Array.isArray(mapped)) {
          result.push(...mapped);
        }
      }
    }
  }

  return result;
}
