/**
 * Find number of ways to reach to stair n, when you can take 1 or 2 steps at a time
*/
//FunFact: Its nothing but a fibonacci series

 const memo = [];
 memo[0] = 1;
 memo[1] = 1;
function findNumberOfWays(n) {
    if (memo[n])
        return memo[n];
    const numberOfWays = findNumberOfWays(n-1) + findNumberOfWays(n-2);
    memo[n] = numberOfWays;
    return numberOfWays;
}

function findNumberOfWaysIterative(n) {
    const memo = [];
    memo[0] = 1;
    memo[1] = 1;
    let i = 2;
    while(i <= n) {
        memo[i] = memo[i-1]+memo[i-2];
        i++;
    }
    return memo[n];
}

console.log(findNumberOfWays(6));
console.log(findNumberOfWaysIterative(6));