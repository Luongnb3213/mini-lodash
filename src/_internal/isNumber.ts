export function isNumber(value: unknown): value is number {
  return value != null && typeof value === 'number';
}
