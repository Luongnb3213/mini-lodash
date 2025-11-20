type Collection<T> = T[] | Record<string, T>;
type Iteratee<T, R> = (value: T, key: number | string, collection: Collection<T>) => R;

export function map<T, R>(collection: Collection<T>, iteratee: Iteratee<T, R>): R[] {
  const result: R[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(iteratee(collection[i], i, collection));
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        result.push(iteratee(collection[key], key, collection));
      }
    }
  }

  return result;
}
