export function merge(
  object: Record<string, any>,
  ...sources: Record<string, any>[]
): Record<string, any> {
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
          // primitive / array → overwrite
          target[key] = srcVal;
        }
      }
    }

    helper(object, source);
  }

  return object;
}
