import { chunk, compact, map } from './src';
import { isUndefined } from './src/_internal/isUndefined';

// === TRUE cases ===
console.log("undefined:", isUndefined(undefined));            // true
// @ts-ignore - intentionally missing argument
console.log("no argument:", isUndefined());                   // true
console.log(isUndefined(({} as any).missing));   // true

// === FALSE cases ===
console.log("null:", isUndefined(null));                      // false
console.log("0:", isUndefined(0));                            // false
console.log("NaN:", isUndefined(NaN));                        // false
console.log("empty string:", isUndefined(""));                // false
console.log("string:", isUndefined("abc"));                   // false
console.log("false:", isUndefined(false));                    // false
console.log("object:", isUndefined({}));                      // false
console.log("array:", isUndefined([]));                       // false
console.log("function:", isUndefined(() => {}));              // false
