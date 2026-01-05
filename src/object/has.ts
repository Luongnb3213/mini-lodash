import { isString } from '../_internal/isString';

export function has(object: Record<string, any>, path: string | Array<string | number>): boolean {
  // TODO: implement lodash has

  if (!object) return false;

  if (isString(path)) {
    path = path
      .replace(/\[(\d+)\]/g, '.$1')
      .split('.')
      .filter(Boolean);
  }

  function helper(current: any, index: number) {
    const key = path[index];
    const isLast = index === path.length - 1;

    if (isLast) {
      return current[key] !== undefined ? true : false;
    }

    return helper(current[key], index + 1);
  }

  return helper(object, 0);
}
