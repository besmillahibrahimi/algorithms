import { SortOrder } from "../src/Sort";
import { mergeSort } from "./MergeSort";

const list = [5, 3, 6, 7, 9, 1, 0];
const acs = mergeSort(list, SortOrder.Ascending);
const desc = mergeSort(list, SortOrder.Descending);
console.log(list);
console.log(acs);
console.log(desc);
