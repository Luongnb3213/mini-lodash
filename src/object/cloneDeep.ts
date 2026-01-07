export function cloneDeep<T>(value: T): T {
  // TODO: implement lodash cloneDeep

  if (Array.isArray(value)) {
    return value.map(item => cloneDeep(item)) as unknown as T;
  }

  if (value === null || typeof value !== 'object') {
    return value;
  }
  const result = {} as T;
  for (const key in value) {
    // @ts-ignore
    result[key] = cloneDeep(value[key]);
  }
  return result;
}
