/**
 * Problem: Given a string, find the length of the longest substring in it with no more than K distinct characters.
 */

function longestSubString(str, k) {
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
            }``
            windowStart += 1;
        }
        longest = Math.max(longest, windowEnd-windowStart+1);
        // console.log(`Logest: ${longest} map: ${JSON.stringify(charMap)}`);
    }
    return longest;
}

console.log(longestSubString("araaci", 2));
console.log(longestSubString("araaci", 1));
console.log(longestSubString("cbbebi", 3));