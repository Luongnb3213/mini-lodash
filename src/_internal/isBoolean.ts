export function isBoolean(value: unknown): value is boolean {
  return (value != null && typeof value === 'boolean') || value instanceof Boolean;
}
