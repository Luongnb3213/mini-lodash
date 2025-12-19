type Predicate<T> = (value: T, indexOrKey: number | string, collection: any) => boolean;

export function find<T>(
  collection: T[] | Record<string, T> | null | undefined,
  predicate: Predicate<T>,
): T | undefined {
  if (collection == null) return undefined;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        if (predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
  }

  return undefined;
}
