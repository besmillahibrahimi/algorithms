import { SortOrder } from "../src/Sort";

export function quickSort(list: number[], order: SortOrder = SortOrder.Ascending): number[] {
  if (list.length <= 1) return list;

  const pivot = list[list.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < list.length - 1; i++) {
    const v = list[i];
    if ((v < pivot && order === SortOrder.Ascending) || (v > pivot && order === SortOrder.Descending)) left.push(v);
    else right.push(v);
  }

  return [...quickSort(left, order), pivot, ...quickSort(right, order)];
}
