export function includes<T>(
  collection: T[] | Record<string, T> | string | null | undefined,
  value: any,
): boolean {
  if (collection == null) return false;
  if (typeof collection === 'string') return collection.indexOf(value) !== -1;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === value || (Number.isNaN(collection[i]) && Number.isNaN(value))) {
        return true;
      }
    }
  } else if (collection && typeof collection === 'object') {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        if (collection[key] === value || (Number.isNaN(collection[key]) && Number.isNaN(value))) {
          return true;
        }
      }
    }
  }

  return false;
}
