import { isString } from '../_internal/isString';

export function get(
  object: Record<string, any>,
  path: string | Array<string | number>,
  defaultValue?: any,
): any {
  // TODO: implement lodash get

  if (!object) return defaultValue;

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
      return current[key] !== undefined ? current[key] : defaultValue;
    }

    if (current[key] === undefined) {
      return defaultValue;
    }

    return helper(current[key], index + 1);
  }

  return helper(object, 0);
}
