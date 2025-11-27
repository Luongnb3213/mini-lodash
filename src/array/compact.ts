export function compact<T>(array: T[]): T[] {
  if (!Array.isArray(array)) return [];
  return array.filter(x => Boolean(x));
}
