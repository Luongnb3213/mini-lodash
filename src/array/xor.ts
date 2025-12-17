// xor.ts
export function xor<T>(...arrays: Array<T[] | null | undefined>): T[] {
  // TODO: implement
  // - return elements that appear in exactly one array
  // - treat null/undefined as empty
  // - keep output order deterministic (lodash-like: based on encounter order)
  // - equality: SameValueZero (like Array.includes): NaN equals NaN

  const elementCount = new Map<T, number>();

  for (const array of arrays) {
    if (array) {
      const uniqueElements = new Set<T>(array);
      for (const element of uniqueElements) {
        elementCount.set(element, (elementCount.get(element) || 0) + 1);
      }
    }
  }

  const result: T[] = [];
  for (const [element, count] of elementCount.entries()) {
    if (count === 1) {
      result.push(element);
    }
  }

  return result;
}
