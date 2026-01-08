export function defaultsDeep<T extends Record<string, any>>(
  object: T,
  ...sources: Array<Record<string, any>>
): T {
  // TODO: implement lodash defaultsDeep
  // Only assigns if target value is undefined, deep for plain objects.
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  for (const source of sources) {
    if (typeof source !== 'object' || source === null) continue;

    function helper(target: Record<string, any>, src: Record<string, any>) {
      for (const key in src) {
        if (!Object.prototype.hasOwnProperty.call(src, key)) continue;

        const tgtVal = target[key];
        const srcVal = src[key];

        // deep merge object thường
        if (typeof srcVal === 'object' && srcVal !== null && !Array.isArray(srcVal)) {
          if (typeof tgtVal !== 'object' || tgtVal === null || Array.isArray(tgtVal)) {
            target[key] = {};
          }

          helper(target[key], srcVal);
        } else {
          // primitive / array → only assign if target value is undefined
          if (tgtVal === undefined) {
            target[key] = srcVal;
          }
        }
      }
    }

    helper(object, source);
  }

  return object;
}
