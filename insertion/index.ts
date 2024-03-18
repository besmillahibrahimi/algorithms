import { SortOrder } from "../src/Sort";
import { insertionSort } from "./InsertionSort";

const l1 = [4, 3, 6, 7, 5, 9, 20, 1, 0];
insertionSort(l1, SortOrder.Ascending);
console.log(l1);
