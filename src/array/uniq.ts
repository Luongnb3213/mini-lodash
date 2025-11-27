/**
 * Creates a duplicate-free version of an array.
 * Same behavior as lodash: _.uniq(array)
 *
 * @param array - The array to inspect.
 * @returns A new array without duplicate values.
 */
export function uniq<T>(array: T[]): T[] {
  // TODO: implement logic
  return Array.from(new Set(array));
}
