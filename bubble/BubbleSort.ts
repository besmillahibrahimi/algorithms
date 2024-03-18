import { SortOrder } from "../src/Sort";

export function bubbleSort(list: number[], order: SortOrder): number[] {
  const l = list.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1; j++) {
      if ((order === SortOrder.Ascending && list[j] > list[j + 1]) || (order === SortOrder.Descending && list[j] < list[j + 1])) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]]; // swapping
      }
    }
  }

  return list;
}
