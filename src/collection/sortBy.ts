type Iteratee<T> = (value: T, indexOrKey: number | string, collection: any) => any;

export function sortBy<T>(
  collection: T[] | Record<string, T> | null | undefined,
  iteratee: Iteratee<T>,
): T[] {
  if (collection == null) return [];

  const arr = Array.isArray(collection) ? collection : Object.values(collection);
  let i = 0;
  return arr.sort((a, b) => {
    const valA = iteratee(a, i++, collection);
    const valB = iteratee(b, i++, collection);

    if (valA < valB) return -1;
    if (valA > valB) return 1;
    return 0;
  });
}
