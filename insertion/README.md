Certainly! Let's delve into the **Insertion Sort** algorithm.

### Insertion Sort:

#### Easy Explanation:
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It takes each element from the list and inserts it into its correct position within the sorted part of the array.

#### Advanced Explanation:
1. **Algorithm Steps**:
   - Start with the second element (index 1) and consider it as the key.
   - Compare the key with the elements before it, moving them forward until finding the correct position for the key.
   - Repeat this process for each element in the array.

2. **Code Snippet in TypeScript (Node.js)**:
   ```typescript
   function insertionSort(arr: number[]): number[] {
       const length = arr.length;
       for (let i = 1; i < length; i++) {
           let key = arr[i];
           let j = i - 1;
           while (j >= 0 && arr[j] > key) {
               arr[j + 1] = arr[j];
               j = j - 1;
           }
           arr[j + 1] = key;
       }
       return arr;
   }

   // Example usage:
   const arr = [64, 34, 25, 12, 22, 11, 90];
   console.log("Sorted array:", insertionSort(arr));
   ```

3. **Runtime Complexity (Big O)**: 
   - Best Case: O(n) (when the array is already sorted)
   - Worst Case: O(n^2) (when the array is sorted in reverse order)
   - Average Case: O(n^2)

4. **Space Complexity (Big O)**:
   - O(1) - Insertion Sort is an in-place sorting algorithm, meaning it doesn't require any extra space.

5. **Pros & Cons**:
   - **Pros**:
     - Efficient for small datasets or nearly sorted datasets.
     - Simple implementation and easy to understand.
     - Adaptive: Efficient for data that is already partially sorted.
   - **Cons**:
     - Inefficient for large datasets due to its quadratic time complexity.
     - Not suitable for real-world applications with large input sizes compared to more efficient sorting algorithms like Merge Sort or Quick Sort.

6. **Usage**:
   - Insertion Sort can be used when the dataset is small or nearly sorted, or when simplicity is more important than efficiency. It's commonly used in educational contexts to teach sorting algorithms and can also be useful in scenarios where the dataset is expected to be small.

Insertion Sort provides a good learning opportunity to understand sorting algorithms and their implementations, but for larger datasets, other sorting algorithms with better performance characteristics are recommended.