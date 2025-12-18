// remove.ts
type Predicate<T> = (value: T, index: number, array: T[]) => boolean;

export function remove<T>(array: T[] | null | undefined, predicate: Predicate<T>): T[] {
  if (!array || array.length === 0) return [];
  const result: T[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      result.push(array[i]);
      array.splice(i, 1);
    }
  }
  return result.reverse();
}
