type Predicate<T> = (value: T, indexOrKey: number | string, collection: any) => boolean;

export function reject<T>(
  collection: T[] | Record<string, T> | null | undefined,
  predicate: Predicate<T>,
): T[] {
  const result: T[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (!predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        if (!predicate(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      }
    }
  }

  return result;
}
