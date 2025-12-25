export function shuffle<T>(collection: T[] | Record<string, T> | null | undefined): T[] {
  if (collection == null) return [];

  const arr = Array.isArray(collection)
    ? collection
    : Object.keys(collection).map(k => (collection as Record<string, T>)[k]);
  var i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return arr;
}
