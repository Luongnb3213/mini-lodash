type Predicate<T> = (value: T, indexOrKey: number | string, collection: any) => boolean;

export function some<T>(
  collection: T[] | Record<string, T> | null | undefined,
  predicate: Predicate<T>,
): boolean {
  if (collection == null) return false;
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return true;
      }
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        if (predicate(collection[key], key, collection)) {
          return true;
        }
      }
    }
  }

  return false;
}
