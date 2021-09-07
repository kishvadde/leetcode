/**
 * Given a string with lowercase letters only,
 * if you are allowed to replace no more than ‘k’ letters with any letter,
 * find the length of the longest substring having the same letters after replacement.
 */

//aabccbb -> aabbbbb -> 5
function longestSubString(str, k) {
    let charMap = {};
    let start = 0;
    let maxLen = 0;
    let maxRepeatLetterCount = 0;
    for (let end = 0; end < str.length; end++) {
        const rightChar = str[end];
        if (!(rightChar in charMap)) {
            charMap[rightChar] = 0;
        }
        charMap[rightChar] += 1;
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, charMap[rightChar]);
        if ((end-start+1-maxRepeatLetterCount) > k) {
            leftChar = str[start];
            charMap[leftChar] -= 1;
            start += 1;
        }
        maxLen = Math.max(maxLen, end-start+1);
  }
  return maxLen;
}

console.log(longestSubString("aabccbb", 2));