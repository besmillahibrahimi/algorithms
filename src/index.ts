import { SortFactory, SortOrder } from "./Sort";

const l1 = [1, 9, 8, 4, 3, 5, 0];

const bubble1 = SortFactory.sort([...l1], "bubble", SortOrder.Ascending);
const bubble2 = SortFactory.sort([...l1], "bubble", SortOrder.Descending);

console.log("Bubble Ascending: ", bubble1);
console.log("Bubble Descending: ", bubble2);

const insertion1 = SortFactory.sort([...l1], "insertion", SortOrder.Ascending);
const insertion2 = SortFactory.sort([...l1], "insertion", SortOrder.Descending);

console.log("Insertion Ascending: ", insertion1);
console.log("Insertion Descending: ", insertion2);
