export function omit<T extends Record<string, any>>(object: T, paths: string[]): Partial<T> {
  // TODO: implement lodash omit

  if (!object) return {};
  const result: Partial<T> = {};

  for (const key in object) {
    if (!paths.includes(key)) {
      result[key as keyof T] = object[key as keyof T];
    }
  }

  return result;
}
