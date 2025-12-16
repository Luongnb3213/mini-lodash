import { isArray } from '../_internal/isArray';

export function zipObjectDeep(
  keys: string[] | null | undefined,
  values: any[] | null | undefined,
): any {
  const result: any = {};
  if (!isArray(keys)) return result;

  for (let i = 0; i < keys.length; i++) {
    setPath(result, keys[i], isArray(values) ? values[i] : undefined);
  }

  return result;
}

function setPath(obj: any, path: string, value: any) {
  const parts = path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);

  function helper(current: any, index: number) {
    const key = parts[index];
    const isLast = index === parts.length - 1;

    if (isLast) {
      current[key] = value;
      return;
    }

    if (current[key] === undefined) {
      current[key] = {};
    }

    helper(current[key], index + 1);
  }

  helper(obj, 0);
}
