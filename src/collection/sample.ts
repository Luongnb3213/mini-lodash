export function sample<T>(collection: T[] | Record<string, T> | null | undefined): T | undefined {
  if (collection == null) return undefined;

  const arr = Array.isArray(collection) ? collection : Object.values(collection);
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}
