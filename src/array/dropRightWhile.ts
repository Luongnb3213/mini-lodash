// dropRightWhile.ts
export type Predicate<T> = (value: T, index: number, array: T[]) => boolean;

export function dropRightWhile<T>(array: T[] | null | undefined, predicate: Predicate<T>): T[] {
  if (!array || array.length === 0) return [];

  let dropIndex = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      dropIndex++;
    } else {
      break;
    }
  }
  return array.slice(0, array.length - dropIndex);
}
