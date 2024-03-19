import { SortOrder } from "../src/Sort";

export function merge(left: number[], right: number[], order: SortOrder): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (
      (order === SortOrder.Ascending && left[leftIndex] < right[rightIndex]) ||
      (order === SortOrder.Descending && left[leftIndex] > right[rightIndex])
    ) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export function mergeSort(list: number[], order: SortOrder = SortOrder.Ascending): number[] {
  if (list.length <= 1) return list;

  const middle = Math.floor(list.length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(mergeSort(left, order), mergeSort(right, order), order);
}
