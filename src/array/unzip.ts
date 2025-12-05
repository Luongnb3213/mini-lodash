export function unzip<T extends unknown[]>(
  array: T[] | null | undefined,
): { [K in keyof T]: T[K][] } {
  if (!array || array.length === 0) {
    return [] as unknown as { [K in keyof T]: T[K][] };
  }

  const result: unknown[][] = [];

  const tupleLength = array[0].length;

  for (let i = 0; i < tupleLength; i++) {
    result[i] = [];
  }

  for (const tuple of array) {
    if (!tuple) continue;
    for (let i = 0; i < tupleLength; i++) {
      result[i].push(tuple[i]);
    }
  }

  return result as { [K in keyof T]: T[K][] };
}
