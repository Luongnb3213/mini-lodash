import { isString } from '../_internal/isString';

export function set(
  object: Record<string, any>,
  path: string | Array<string | number>,
  defaultValue?: any,
): any {
  // TODO: implement lodash set

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
      current[key] = defaultValue;
      return;
    }

    if (current[key] === undefined) {
      current[key] = {};
    }

    helper(current[key], index + 1);
  }

  helper(object, 0);
}
