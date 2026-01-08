export function toPath(path: string | Array<string | number>): string[] {
  if (Array.isArray(path)) {
    return path.map(String);
  }

  return path
    .replace(/\[(\w+)\]/g, '.$1')
    .replace(/^\./, '')
    .split('.');
}
