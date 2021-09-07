/**
 * Problem: Given an array of characters where each character represents a fruit tree,
 * you are given two baskets and your goal is to put maximum number of fruits in each basket.
 * The only restriction is that each basket can have only one type of fruit.
 * You can start with any tree, but once you have started you can’t skip a tree.
 * You will pick one fruit from each tree until you cannot,
 * i.e., you will stop when you have to pick from a third fruit type.
 * Write a function to return the maximum number of fruits in both the baskets.
 */

//Same as medium1.js
function maximumNoOfFruits(str, k=2) {
    const charMap = {};
    let longest = 0;
    let windowStart = 0;
    const strLen = str.length;
    for (let windowEnd = 0; windowEnd < strLen; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charMap))
            charMap[rightChar] = 0;
        charMap[rightChar] += 1;

        while (Object.keys(charMap).length > k) {
            const leftChar = str[windowStart];
            charMap[leftChar] -= 1;
            if (charMap[leftChar] === 0) {
                delete charMap[leftChar];
            }
            windowStart += 1;
        }
        longest = Math.max(longest, windowEnd-windowStart+1);
        // console.log(`Logest: ${longest} map: ${JSON.stringify(charMap)}`);
    }
    return longest;
}

console.log(maximumNoOfFruits(['A', 'B', 'C', 'A', 'C']));
console.log(maximumNoOfFruits(['A', 'B', 'C', 'B', 'B', 'C']));