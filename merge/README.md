Today, let's explore the **Merge Sort** algorithm.

### Merge Sort:

#### Easy Explanation:
Merge Sort is a divide-and-conquer algorithm that works by repeatedly dividing the unsorted list into smaller sublists, sorting each sublist recursively, and then merging them back together to produce a sorted list.

#### Advanced Explanation:
1. **Algorithm Steps**:
   - Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
   - Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This is the sorted list.

2. **Code Snippet in TypeScript (Node.js)**:
   ```typescript
   function merge(left: number[], right: number[]): number[] {
       let result = [];
       let leftIndex = 0;
       let rightIndex = 0;

       while (leftIndex < left.length && rightIndex < right.length) {
           if (left[leftIndex] < right[rightIndex]) {
               result.push(left[leftIndex]);
               leftIndex++;
           } else {
               result.push(right[rightIndex]);
               rightIndex++;
           }
       }

       return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
   }

   function mergeSort(arr: number[]): number[] {
       if (arr.length <= 1) {
           return arr;
       }

       const middle = Math.floor(arr.length / 2);
       const left = arr.slice(0, middle);
       const right = arr.slice(middle);

       return merge(mergeSort(left), mergeSort(right));
   }

   // Example usage:
   const arr = [64, 34, 25, 12, 22, 11, 90];
   console.log("Sorted array:", mergeSort(arr));
   ```

3. **Runtime Complexity (Big O)**: 
   - Best Case: O(n log n)
   - Worst Case: O(n log n)
   - Average Case: O(n log n)

4. **Space Complexity (Big O)**:
   - O(n) - Merge Sort requires additional space for the temporary arrays during the merging process.

5. **Pros & Cons**:
   - **Pros**:
     - Guaranteed O(n log n) performance, making it efficient for large datasets.
     - Stable sort (does not change the relative order of elements with equal keys).
     - Suitable for sorting linked lists as well as arrays.
   - **Cons**:
     - Requires additional memory space for the temporary arrays, which can be a concern for memory-constrained environments.
     - Slightly more complex implementation compared to simple algorithms like Bubble Sort or Insertion Sort.

6. **Usage**:
   - Merge Sort is widely used in practice for sorting large datasets efficiently. It's often the preferred choice for sorting arrays or linked lists in scenarios where stability and guaranteed performance are important.

Merge Sort's efficiency and stability make it a popular choice for various applications, especially when dealing with large datasets. Its recursive nature and divide-and-conquer approach make it a fascinating algorithm to study and implement.