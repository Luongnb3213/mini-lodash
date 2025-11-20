export function isFunction(value: unknown): value is Function {
  return value != null && typeof value === 'function';
}
