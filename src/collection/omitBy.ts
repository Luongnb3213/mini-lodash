type Predicate<T> = (value: T, key: string, object: Record<string, T>) => boolean;

export function omitBy<T>(
  object: Record<string, T> | null | undefined,
  predicate: Predicate<T>,
): Record<string, T> {
  const result: Record<string, any> = {};

  if (!object) return result;

  for (const [key, value] of Object.entries(object)) {
    if (!Object.prototype.hasOwnProperty.call(object, key)) continue;
    if (predicate(value, key, object)) continue;
    result[key] = value;
  }

  return result;
}
