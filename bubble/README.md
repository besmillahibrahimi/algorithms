### Bubble Sort:

#### Easy Explanation:
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

#### Advanced Explanation:
1. **Algorithm Steps**:
   - Start from the first element and compare it with the next element.
   - If the current element is greater than the next one, swap them.
   - Move to the next pair of elements and repeat the process until the end of the list.
   - Repeat this process for each element until the list is sorted.

2. **Code Snippet in TypeScript (Node.js)**:
   ```typescript
   function bubbleSort(arr: number[]): number[] {
       const length = arr.length;
       for (let i = 0; i < length; i++) {
           for (let j = 0; j < length - 1 - i; j++) {
               if (arr[j] > arr[j + 1]) {
                   [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swapping
               }
           }
       }
       return arr;
   }

   // Example usage:
   const arr = [64, 34, 25, 12, 22, 11, 90];
   console.log("Sorted array:", bubbleSort(arr));
   ```

3. **Runtime Complexity (Big O)**: 
   - Best Case: O(n) (when the list is already sorted)
   - Worst Case: O(n^2) (when the list is sorted in reverse order)
   - Average Case: O(n^2)

4. **Space Complexity (Big O)**:
   - O(1) - Bubble Sort is an in-place sorting algorithm, meaning it doesn't require any extra space.

5. **Pros & Cons**:
   - **Pros**:
     - Simple implementation.
     - Works well for small datasets or nearly sorted datasets.
   - **Cons**:
     - Inefficient for large datasets due to its quadratic time complexity.
     - Not suitable for real-world applications with large input sizes.

6. **Usage**:
   - Bubble Sort is mostly used for educational purposes or when simplicity is more important than efficiency. It's not recommended for use in production environments where performance is critical.

Bubble Sort is a fundamental algorithm to understand, but in practice, there are more efficient sorting algorithms available like Merge Sort, Quick Sort, or Heap Sort, which perform better for larger datasets.