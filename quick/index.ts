import { SortOrder } from "../src/Sort";
import { quickSort } from "./QuickSort";

const list = [4, 3, 6, 7, 1, 0, 9, 8];
const acs = quickSort(list);
const dcs = quickSort(list, SortOrder.Descending);

console.log("acs", acs);
console.log("ccs", dcs);
