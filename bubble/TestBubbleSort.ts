import { bubbleSort } from "./BubbleSort";

const list = [9, 4, 2, 5, 7, 1];
const acsSorted = bubbleSort([...list]);
const dscSorted = bubbleSort([...list], "dsc");
console.log(list);
console.log("acs: ", acsSorted);
console.log("dcs: ", dscSorted);
