type Predicate<T> = (value: T, key: string | number, collection: any) => boolean;

export function filter<T>(
  collection: T[] | Record<string, T> | null | undefined,
  predicate: Predicate<T>,
): T[] {
  if (!collection) return [];

  // TODO:
  // - if array: iterate index 0..length-1
  // - if object: iterate own enumerable keys
  // - push value if predicate(...) === true

  const result: T[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        if (predicate(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      }
    }
  }

  return [];
}
