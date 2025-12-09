export function sortedIndexOf<T>(array: T[] | null | undefined, value: T): number {
  if (Array.isArray(array) && array.length > 0) {
    let low = 0;
    let high = array.length - 1;
    let mid;
    while (high >= low) {
      mid = low + Math.floor((high - low) / 2);

      if (array[mid] == value) {
        return mid;
      }

      if (array[mid] > value) high = mid - 1;
      else low = mid + 1;
    }

    return -1;
  }
  return -1;
}
