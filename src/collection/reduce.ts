export type Reducer<T, R> = (
  accumulator: R,
  value: T,
  indexOrKey: number | string | any,
  collection: any,
) => R;

export function reduce<T, R>(
  collection: T[] | Record<string, T> | null | undefined,
  iteratee: Reducer<T, R>,
  accumulator: R,
): R {
  if (collection == null) return accumulator;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      accumulator = iteratee(accumulator, collection[i], i, collection);
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        accumulator = iteratee(accumulator, collection[key], key, collection);
      }
    }
  }

  return accumulator;
}
