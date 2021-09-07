/**
 * Given an array of positive numbers and a positive number ‘k’,
 * find the maximum sum of any contiguous subarray of size ‘k’.
 */

function maximumContiguousSum(arr, k) {
    let maxSum = Infinity;
    let i = 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
        if (j >= k-1) {
            maxSum = Math.max(maxSum, sum);
            sum -= arr[i];
            i++;
        }
    }
    return maxSum;
}

console.log(maximumContiguousSum([2, 1, 5, 1, 3, 2], 3));
console.log(maximumContiguousSum([2, 3, 4, 1, 5], 2));
// console.log(maximumContiguousSum([2, 1, 5, 1, 3, 2], 3));