// collection/forEach.ts
type Iteratee<T> = (value: T, key: string | number, collection: any) => void;

export function forEach<T>(
  collection: T[] | Record<string, T> | null | undefined,
  iteratee: Iteratee<T>,
): void {
  if (!collection) return;

  // TODO:
  // - iterate array or object
  // - call iteratee(value, key, collection)
  // - no return value

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        iteratee(collection[key], key, collection);
      }
    }
  }
}
