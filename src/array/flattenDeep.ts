import { isArray } from '../_internal/isArray';

export function flattenDeep<T>(array: any[] | null | undefined): T[] {
  if (!isArray(array)) return [];
  let result: T[] = [];
  result = array.reduce((acc: T[], val: any) => {
    if (isArray(val)) {
      return acc.concat(flattenDeep(val));
    }
    return acc.concat(val);
  }, []);
  return result;
}
