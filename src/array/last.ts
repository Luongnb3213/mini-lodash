import { isArray } from '../_internal/isArray';

/**
 * Gets the first element of an array.
 * Same behavior as lodash: _.last(array)
 *
 * @param array - The array to query.
 * @returns The last element of array, or undefined if array is empty or not an array.
 */
export function last<T>(array: T[] | null | undefined): T | undefined {
  // TODO: implement logic

  return isArray(array) && array.length > 0 ? array[array.length - 1] : undefined;
}
