// collection/size.ts
export function size(collection: any[] | Record<string, any> | string | null | undefined): number {
  if (!collection) return 0;

  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  } else if (typeof collection === 'object') {
    return Object.keys(collection).length;
  }

  return 0;
}
