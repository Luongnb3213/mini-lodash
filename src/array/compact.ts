export function compact<T>(array: T[]): T[] {
  if (!Array.isArray(array)) return [];
  return array.filter(Boolean as unknown as (value: T) => value is T);
}
