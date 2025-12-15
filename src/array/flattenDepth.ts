import { isArray } from '../_internal/isArray';

export function flattenDepth(array: any[] | null | undefined, depth: number = 1): any[] {
  if (depth < 1) return array || [];
  if (!isArray(array)) return [];
  let result: any[] = [];
  result = array.reduce((acc: any[], val: any) => {
    if (isArray(val)) {
      return acc.concat(flattenDepth(val, depth - 1));
    }
    return acc.concat(val);
  }, []);
  return result;
}
