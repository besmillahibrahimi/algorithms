import { SortOrder } from "../src/Sort";
import { bubbleSort } from "./BubbleSort";

const list = [9, 4, 2, 5, 7, 1];
const acsSorted = bubbleSort([...list], SortOrder.Ascending);
const dscSorted = bubbleSort([...list], SortOrder.Descending);
console.log(list);
console.log("acs: ", acsSorted);
console.log("dcs: ", dscSorted);
