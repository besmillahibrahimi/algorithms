Today, let's explore the **Quick Sort** algorithm.

### Quick Sort:

#### Easy Explanation:
Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.

#### Advanced Explanation:
1. **Algorithm Steps**:
   - Choose a pivot element from the array. (Commonly, the last element is chosen.)
   - Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
   - Recursively apply Quick Sort to the sub-arrays.
   - Concatenate the sorted sub-arrays along with the pivot to form the sorted array.

2. **Code Snippet in TypeScript (Node.js)**:
   ```typescript
   function quickSort(arr: number[]): number[] {
       if (arr.length <= 1) {
           return arr;
       }

       const pivot = arr[arr.length - 1];
       const left = [];
       const right = [];

       for (let i = 0; i < arr.length - 1; i++) {
           if (arr[i] < pivot) {
               left.push(arr[i]);
           } else {
               right.push(arr[i]);
           }
       }

       return [...quickSort(left), pivot, ...quickSort(right)];
   }

   // Example usage:
   const arr = [64, 34, 25, 12, 22, 11, 90];
   console.log("Sorted array:", quickSort(arr));
   ```

3. **Runtime Complexity (Big O)**: 
   - Best Case: O(n log n)
   - Worst Case: O(n^2) (rare, occurs when the pivot selection consistently divides the array unevenly)
   - Average Case: O(n log n)

4. **Space Complexity (Big O)**:
   - O(log n) - Quick Sort is a recursive algorithm that utilizes the call stack. The space complexity depends on the depth of the recursion stack.

5. **Pros & Cons**:
   - **Pros**:
     - Efficient for large datasets with an average time complexity of O(n log n).
     - In-place sorting algorithm, meaning it doesn't require additional memory.
     - Good average-case performance.
   - **Cons**:
     - Worst-case time complexity can degrade to O(n^2) if the pivot selection is poor.
     - Not stable, meaning the relative order of equal elements may not be preserved.

6. **Usage**:
   - Quick Sort is commonly used in practice due to its efficiency for sorting large datasets. It's often the preferred choice when average-case performance is more important than worst-case guarantees.

Quick Sort's efficiency and in-place nature make it popular for various applications, especially when dealing with large datasets where performance is critical. Understanding its pivot selection strategies and partitioning process is key to implementing it effectively.