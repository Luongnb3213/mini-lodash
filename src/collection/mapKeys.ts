type Iteratee<T> = (value: T, key: string, object: Record<string, T>) => any;

export function mapKeys<T>(
  object: Record<string, T> | null | undefined,
  iteratee: Iteratee<T>,
): Record<string, any> {
  const result: Record<string, any> = {};

  if (!object) return result;

  for (const [key, value] of Object.entries(object)) {
    if (!Object.prototype.hasOwnProperty.call(object, key)) continue;
    const newKey = iteratee(value, key, object);
    result[newKey] = value;
  }

  return result;
}
