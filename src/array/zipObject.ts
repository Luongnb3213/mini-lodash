import { isArray } from '../_internal/isArray';

export function zipObject(
  keys: PropertyKey[] | null | undefined,
  values: any[] | null | undefined,
): Record<PropertyKey, any> {
  const result: Record<PropertyKey, any> = {};
  if (!isArray(keys) || keys.length === 0) return [];
  for (let i = 0; i < (keys?.length ?? 0); i++) {
    const key = keys ? keys[i] : undefined;
    if (key !== undefined) {
      result[key] = values ? values[i] : undefined;
    }
  }
  return result;
}
