export function pick<T extends Record<string, any>>(object: T, paths: string[]): Partial<T> {
  if (!object) return {};

  const result: Partial<T> = {};

  for (const path of paths) {
    if (path in object) {
      result[path as keyof T] = object[path as keyof T];
    }
  }

  return result;
}
