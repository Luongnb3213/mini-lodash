export function isPlainObject(value: any): value is Record<string, any> {
  if (value === null || typeof value !== 'object') return false;

  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
