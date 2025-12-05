export function zipWith<T extends unknown[], R>(
  ...args: [
    ...{ [K in keyof T]: T[K][] | null | undefined },
    (...values: { [K in keyof T]: T[K] | undefined }) => R,
  ]
): R[] {
  const arrays = args.slice(0, -1) as { [K in keyof T]: T[K][] | null | undefined };
  const iteratee = args[args.length - 1] as (...values: { [K in keyof T]: T[K] | undefined }) => R;

  if (arrays.length === 0) {
    return [];
  }

  const maxLength = arrays.reduce((max, arr) => {
    const len = arr ? arr.length : 0;
    return len > max ? len : max;
  }, 0);

  const result: R[] = [];

  for (let i = 0; i < maxLength; i++) {
    const values = arrays.map(arr => (arr ? arr[i] : undefined)) as unknown as {
      [K in keyof T]: T[K] | undefined;
    };
    result.push(iteratee(...values));
  }

  return result;
}
