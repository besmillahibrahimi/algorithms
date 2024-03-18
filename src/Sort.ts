import { bubbleSort } from "../bubble/BubbleSort";
import { insertionSort } from "../insertion/InsertionSort";

export enum SortOrder {
  Ascending = "asc",
  Descending = "desc",
}

type SortFunction = (arr: number[], order: SortOrder) => number[];

export class SortFactory {
  static sort(list: number[], sortType: string, order: SortOrder = SortOrder.Ascending): number[] {
    let sortFunction: SortFunction;
    if (sortType === "bubble") sortFunction = bubbleSort;
    else if (sortType === "insertion") sortFunction = insertionSort;
    else throw new Error("Invalid sort type.");
    return sortFunction(list, order);
  }
}
