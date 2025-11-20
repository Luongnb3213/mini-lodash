export function isString(value: unknown): value is string {
  return (value != null && typeof value === 'string') || value instanceof String;
}
