import { isArray } from '../_internal/isArray';

export function zip<T extends unknown[]>(
  ...arrays: { [K in keyof T]: T[K][] | null | undefined }
): T[] {
  if (isArray(arrays) && arrays.length) {
    const result: T[] = [];
    const maxLength = Math.max(...arrays.map(arr => (arr ? arr.length : 0)));
    for (let i = 0; i < maxLength; i++) {
      const group: T = [] as unknown as T;
      for (let j = 0; j < arrays.length; j++) {
        const arr = arrays[j];
        if (arr && i < arr.length) {
          group.push(arr[i]);
        } else {
          group.push(undefined as unknown as T);
        }
      }
      result.push(group);
    }

    return result;
  }

  return [];
}
