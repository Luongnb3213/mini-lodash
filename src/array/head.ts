import { isArray } from '../_internal/isArray';

/**
 * Gets the first element of an array.
 * Same behavior as lodash: _.head(array)
 *
 * @param array - The array to query.
 * @returns The first element of array, or undefined if array is empty or not an array.
 */
export function head<T>(array: T[] | null | undefined): T | undefined {
  // TODO: implement logic

  return isArray(array) && array.length > 0 ? array[0] : undefined;
}
