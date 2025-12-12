export function toPairs(object: Record<PropertyKey, any> | null | undefined): [PropertyKey, any][] {
  if (!object) return [];

  const result: [PropertyKey, any][] = [];

  for (const key of Object.keys(object)) {
    result.push([key, (object as any)[key]]);
  }

  for (const sym of Object.getOwnPropertySymbols(object)) {
    const desc = Object.getOwnPropertyDescriptor(object, sym);
    if (desc?.enumerable) {
      result.push([sym, (object as any)[sym]]);
    }
  }

  return result;
}
