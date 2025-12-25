export function sampleSize<T>(
  collection: T[] | Record<string, T> | null | undefined,
  n: number,
): T[] {
  if (collection == null) return [];
  if (!Number.isFinite(n) || n <= 0) return [];

  const arr: T[] = Array.isArray(collection)
    ? collection.slice()
    : Object.keys(collection).map(k => (collection as Record<string, T>)[k]);

  if (arr.length === 0) return [];
  if (n >= arr.length) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}
