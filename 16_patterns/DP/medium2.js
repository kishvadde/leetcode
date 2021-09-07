/**
 * Find minimum number of coins needed to make up the sum given 1,2,5 rupee coins
*/

// recurrence relation - f(n) = min(f(n-1), f(n-2), f(n-5))+1
const memo = [];
memo[0] = 0;
memo[1] = 1;
memo[2] = 1;
memo[5] = 1;
function minimumCoinsNeedFor(n) {
    if (memo[n])
        return memo[n];
    memo[n] = Math.min(
        minimumCoinsNeedFor(n-1),
        minimumCoinsNeedFor(n-2),
        n < 5 ? Infinity : minimumCoinsNeedFor(n-5)
    )+1;
    return memo[n];
}
console.log(minimumCoinsNeedFor(12));