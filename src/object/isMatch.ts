//  deep partial compare
export function isMatch(object: Record<string, any>, source: Record<string, any>): boolean {
  for (const key of Object.keys(source)) {
    if (!Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }

    if (source[key] == object[key]) {
      continue;
    }

    if (typeof source[key] === 'object' && source[key] !== null) {
      if (typeof object[key] !== 'object' || object[key] === null) {
        // object[key] is primative value
        return false;
      }

      if (!isMatch(object[key], source[key])) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}
