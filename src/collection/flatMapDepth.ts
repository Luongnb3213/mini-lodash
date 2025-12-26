import { flattenDepth } from '../array/flattenDepth';

type Iteratee<T> = (value: T, indexOrKey: number | string, collection: any) => any;

export function flatMapDepth<T>(
  collection: T[] | Record<string, T> | null | undefined,
  iteratee: Iteratee<T>,
  depth: number = 1,
): any[] {
  if (collection == null) return [];

  const result: any[] = [];

  const d = Math.max(1, (Number.isFinite(depth) ? depth : 1) - 1);

  const handleMapped = (mapped: any) => {
    if (Array.isArray(mapped)) result.push(...flattenDepth(mapped, d));
    else result.push(mapped);
  };

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (!(i in collection)) continue;
      handleMapped(iteratee(collection[i], i, collection));
    }
  } else {
    for (const key in collection) {
      if (!Object.prototype.hasOwnProperty.call(collection, key)) continue;
      handleMapped(iteratee(collection[key], key, collection));
    }
  }

  return result;
}
