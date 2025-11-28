import { isArray } from '../_internal/isArray';

/**
 * Flattens array a single level deep.
 * Same behavior as lodash: _.flatten(array)
 *
 * @param array - The array to flatten.
 * @returns A new array flattened one level.
 */
export function flatten<T>(array: any[]): T[] {
  if (!isArray(array)) return [];
  let result: T[] = [];
  result = array.reduce((acc: T[], val: any) => acc.concat(val), []);
  return result;
}
