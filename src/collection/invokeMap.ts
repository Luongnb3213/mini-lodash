export function invokeMap<T>(
  collection: T[] | Record<string, T> | null | undefined,
  path: string | ((value: any) => any),
  ...args: any[]
): any[] {
  const result: any[] = [];
  if (collection == null) return result;

  const invoke = (val: any) => {
    if (typeof path === 'function') return path(val);
    // path can be a string representing method name (e.g., 'toString', 'slice', etc.)
    const fn = val?.[path];
    if (typeof fn !== 'function') return undefined;
    return fn.apply(val, args);
  };

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (!(i in collection)) continue;
      result.push(invoke(collection[i]));
    }
    return result;
  }

  for (const key in collection) {
    if (!Object.prototype.hasOwnProperty.call(collection, key)) continue;
    result.push(invoke((collection as Record<string, T>)[key]));
  }
  return result;
}
