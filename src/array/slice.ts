export function slice<T>(array: T[] | null | undefined, start?: number, end?: number): T[] {
  if (Array.isArray(array) && array.length > 0) {
    const len = array.length;
    const actualStart =
      start === undefined ? 0 : start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    const actualEnd =
      end === undefined ? len : end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
    const result: T[] = [];
    for (let i = actualStart; i < actualEnd; i++) {
      result.push(array[i]);
    }
    return result;
  }
  return [];
}
