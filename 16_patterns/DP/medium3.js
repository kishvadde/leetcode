/**
 * Given array of numbers find the length of the longest increasing sub sequence
*/


// LIS(n) = max(LIS(0),....LIS(n-1))+1;
const memo = [];
memo[0] = 1;
function findLISLength(arr) {
    let maxLen = 1;
    for (let i=1; i<arr.length; i++) {
        let maxSoFar = 0;
        for (let j=0; j<i; j++) {
            if (arr[i] > arr[j]) { //consider only if the number lesser than current
                maxSoFar = Math.max(maxSoFar, memo[j])
            }
        }
        memo[i] = maxSoFar+1;
        maxLen = Math.max(memo[i], maxLen);
    }
    return maxLen;
}

console.log(findLISLength([4,4,4,11]));