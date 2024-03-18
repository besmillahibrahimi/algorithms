export function insertionSort(list: number[]): number[] {
  for (let i = 1; i < list.length; i++) {
    const v = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > v) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = v;
  }
  return list;
}
