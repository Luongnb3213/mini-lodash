import { isArray } from '../_internal/isArray';

export function join<T>(array: T[] | null | undefined, separator: string = ','): string {
  let result: string = '';
  if (isArray(array) && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      result += String(array[i]);
      if (i < array.length - 1) {
        result += separator;
      }
    }
    return result;
  }
  return '';
}
