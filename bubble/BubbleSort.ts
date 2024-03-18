export function bubbleSortAcs(list: number[]): number[] {
  const l = list.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]]; // swapping
      }
    }
  }

  return list;
}

export function bubbleSortDcs(list: number[]): number[] {
  const l = list.length;

  for (let i = l; i > 0; i--) {
    for (let j = l; j > 0; j--) {
      if (list[j] > list[j - 1]) {
        [list[j], list[j - 1]] = [list[j - 1], list[j]]; // swapping
      }
    }
  }

  return list;
}
export function bubbleSort(list: number[], order: "acs" | "dsc" = "acs"): number[] {
  return order === "acs" ? bubbleSortAcs(list) : bubbleSortDcs(list);
}
