/**
 * Given a string, find the length of the longest substring which has no repeating characters.
 */

//aabccbb
function longestNonRepeatSubString(str) {
    let i = 0;
    let maxLen = 0;
    const charMap = {};
    console.log(str);
    for (let j = 0; j < str.length; j++)  {
        const char = str[j];
        if (char in charMap) {
            i = Math.max(i, charMap[char]+1);
        }
        charMap[char] = j;
        maxLen = Math.max(maxLen, j-i+1);
        console.log(`${maxLen} ${JSON.stringify(charMap)}`);
    }
    return maxLen;
}

console.log(longestNonRepeatSubString("aabccbb"));