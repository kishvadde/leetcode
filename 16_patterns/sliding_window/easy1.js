/**
 * Problem: Given an array of positive numbers and a positive number ‘S’,
 * find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
 * Return 0, if no such subarray exists.
 */

function findSmallestSubArray(numbers, s) {
    let minLen = Infinity;
    const numLen = numbers.length;
    let windowStart = 0, windowEnd = 0;
    let sum = 0;

    while (windowEnd < numLen) {
        //In each step add new element to the sum
        sum += numbers[windowEnd];
        //If sum is greater than or equal to s, shrink the window by incrementing start
        while (sum >= s) {
            minLen = Math.min(minLen, windowEnd-windowStart+1);
            sum -= numbers[windowStart];
            windowStart++;
        }
        windowEnd++;
    }
    if (minLen === Infinity)
        return 0;
    return minLen;
}

const test1 = [2,1,5,2,3,2];
const test2 = [2,1,5,2,8];
const test3 = [3,4,1,1,6];

console.log(findSmallestSubArray(test1, 7));
console.log(findSmallestSubArray(test2, 7));
console.log(findSmallestSubArray(test3, 8));