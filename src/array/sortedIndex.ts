export function sortedIndex<T>(array: T[] | null | undefined, value: T): number {
  if (Array.isArray(array) && array.length > 0) {
    let low = 0;
    let high = array.length - 1;
    let mid;
    while (high >= low) {
      mid = low + Math.floor((high - low) / 2);

      if (array[mid] == value) {
        while (mid - 1 >= 0 && array[mid - 1] === value) {
          mid--;
        }
        return mid;
      }

      if (array[mid] > value) high = mid - 1;
      else low = mid + 1;
    }

    return high < low ? low : high;
  }
  return 0;
}
