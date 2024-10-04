/**
 * Implement the bubble sort algorithm to sort the array in ascending order.
 *
 * @param {number[]} arr - The array of numbers to sort.
 */
function bubbleSort(arr) {
    // TODO: Implement the bubble sort algorithm here.
    // Hints:
    // - Compare each pair of adjacent elements and swap them if they are in the wrong order.
    // - Repeat the process until no more swaps are needed.
    // - You can track if a swap was made to optimize the algorithm.
}

// Test cases
let testArray1 = [34, 8, 64, 51, 32, 21, 77, 29, 18];
bubbleSort(testArray1);
console.log("Sorted Array 1:", testArray1);

let testArray2 = [45, 22, 11, 89, 77, 98, 4, 28, 65];
bubbleSort(testArray2);
console.log("Sorted Array 2:", testArray2);

let testArray3 = [3, 44, 38, 5, 47, 15, 36, 26, 27];
bubbleSort(testArray3);
console.log("Sorted Array 3:", testArray3);
