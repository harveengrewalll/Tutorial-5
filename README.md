# SE2202-001-Tutorial-5

## Overview

This tutorial will help you understand fundamental sorting algorithms and improve your programming skills using JavaScript.

You will complete two main parts:

1. **Part 1:** Implement the **Selection Sort** algorithm.
2. **Part 2:** Implement the **Bubble Sort** algorithm.

---

## Assignment Structure

- **Files to Complete:**
  - `selectionSort.js`
  - `bubbleSort.js`

---

## Part 1: Selection Sort

### Objective

Implement the **Selection Sort** algorithm to sort an array of numbers in ascending order.

### Instructions

1. **Open `selectionSort.js`:**

   - You will find a function named `selectionSort(arr)`.
   - Your task is to complete this function.

2. **Implement Selection Sort Logic:**

   - Use nested loops to iterate over the array.
   - In each pass, find the minimum element in the unsorted portion and swap it with the first unsorted element.

3. **Test Cases:**

   ```javascript
   let testArray1 = [64, 25, 12, 22, 11, 75, 43, 58, 19];
   let testArray2 = [29, 10, 14, 37, 13, 48, 76, 5, 33];
   let testArray3 = [90, 70, 50, 80, 60, 85, 65, 55, 75];
   ```

   - After sorting, print the sorted arrays to the console.
   - **Take screenshots of the output for each test case.**
   - Expected results
     
   ```javascript
   let testArray1 = [64, 25, 12, 22, 11, 75, 43, 58, 19];
    // Expected result: [11, 12, 19, 22, 25, 43, 58, 64, 75]

   let testArray2 = [29, 10, 14, 37, 13, 48, 76, 5, 33];
    // Expected result: [5, 10, 13, 14, 29, 33, 37, 48, 76]

   let testArray3 = [90, 70, 50, 80, 60, 85, 65, 55, 75];
   // Expected result: [50, 55, 60, 65, 70, 75, 80, 85, 90]
   ```

---

## Part 2: Bubble Sort

### Objective

Implement the **Bubble Sort** algorithm to sort an array of numbers in ascending order.

### Instructions

1. **Open `bubbleSort.js`:**

   - You will find a function named `bubbleSort(arr)`.
   - Complete this function with the bubble sort logic.

2. **Implement Bubble Sort Logic:**

   - Use loops to compare and swap adjacent elements.
   - Continue passes until the array is sorted.

3. **Test Cases:**

   ```javascript
   let testArray1 = [34, 8, 64, 51, 32, 21, 77, 29, 18];
   let testArray2 = [45, 22, 11, 89, 77, 98, 4, 28, 65];
   let testArray3 = [3, 44, 38, 5, 47, 15, 36, 26, 27];
   ```
   
   - After sorting, print the sorted arrays to the console.
   - **Take screenshots of the output for each test case.**
   - Expected results
   ```javascript
   let testArray1 = [34, 8, 64, 51, 32, 21, 77, 29, 18];
   // Expected result: [8, 18, 21, 29, 32, 34, 51, 64, 77]

   let testArray2 = [45, 22, 11, 89, 77, 98, 4, 28, 65];
   // Expected result: [4, 11, 22, 28, 45, 65, 77, 89, 98]

   let testArray3 = [3, 44, 38, 5, 47, 15, 36, 26, 27];
   // Expected result: [3, 5, 15, 26, 27, 36, 38, 44, 47]
   ```

---

## Submission Guidelines

- **Code Files(here):**
  - Push your completed `selectionSort.js` and `bubbleSort.js` files.

- **Screenshots(on Brightspace):**
  - Include screenshots of the console output for all test cases.
  - Ensure the outputs are clearly visible.

---

## Grading Rubric (Total: 4 Points)

| Criteria                                    | Points |
| ------------------------------------------- | ------ |
| **Selection Sort Implementation**           |        |
| - Screenshot shows correct output           | 1      |
| - Uses correct sorting logic                | 1      |
| **Bubble Sort Implementation**              |        |
| - Screenshot shows correct output           | 1      |
| - Uses correct sorting logic                | 1      |

---

## Academic Integrity

It is important to maintain academic integrity throughout this assignment. If you attempt to bypass the sorting logic and directly print out the correct sorted arrays (e.g., by manually sorting the array without implementing the sorting algorithm), this will be considered a breach of academic integrity. Any such cases will be reported to the dean's office for further investigation.

---

## Tips

- **Understanding the Algorithms:**
  - **Selection Sort:** Selects the minimum element from the unsorted portion and moves it to the beginning.
  - **Bubble Sort:** Repeatedly swaps adjacent elements if they are in the wrong order.

- **Debugging:**
  - Use `console.log` to trace your code execution.
  - Check array states at different steps.

---

**Happy Coding!**
