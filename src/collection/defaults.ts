export function defaults<T extends Record<string, any>>(
  object: T | null | undefined,
  ...sources: Array<Record<string, any> | null | undefined>
): T {
  const result: any = object || {};
  if (result == null) return result as T;

  for (let i = 0; i < sources.length; i++) {
    const src = sources[i];
    if (src == null) continue;

    for (const key in src) {
      if (!Object.prototype.hasOwnProperty.call(src, key)) continue;
      if (result[key] === undefined) {
        result[key] = src[key];
      }
    }
  }

  return result;
}
