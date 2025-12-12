export function fromPairs(
  pairs: [PropertyKey, any][] | null | undefined,
): Record<PropertyKey, any> {
  const result: Record<PropertyKey, any> = {};

  for (let i = 0; i < (pairs?.length ?? 0); i++) {
    if (!Array.isArray(pairs![i]) || pairs![i].length < 2) {
      continue;
    }
    const [key, value] = pairs![i];
    result[key] = value;
  }

  return result;
}
