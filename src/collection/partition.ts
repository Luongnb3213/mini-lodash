type Predicate<T> = (value: T, indexOrKey: number | string, collection: any) => boolean;

export function partition<T>(
  collection: T[] | Record<string, T> | null | undefined,
  predicate: Predicate<T>,
): [T[], T[]] {
  const result: [T[], T[]] = [[], []];
  if (collection == null) return result;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const first = predicate(collection[i], i, collection);
      if (first) {
        result[0].push(collection[i]);
      } else {
        result[1].push(collection[i]);
      }
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        const first = predicate(collection[key], key, collection);
        if (first) {
          result[0].push(collection[key]);
        } else {
          result[1].push(collection[key]);
        }
      }
    }
  }

  return result;
}
