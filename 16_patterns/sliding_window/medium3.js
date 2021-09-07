/**
 * Given an array of unique characters arr and a string str, implement a function that finds
 * the smallest substring of str containing all the characters in arr. Return "" if such 
 * substring doesn't exist.
 * Example:
 *  input: arr = [x, y, z] str = "xyyzyzyz"
 *  output: "zyx"
 * */


function getShortestUniqueSubstring(arr, str) {
    const charMap = {};
    let start = 0, end = 0;
    let minLen = Infinity;
    arr.forEach((ch) => charMap[ch]=0);
    const computeTruthy = vals => vals.every(v=>v>0);
    while (end < str.length) {
        charMap[str[end]] += 1;
        while (computeTruthy(Object.values(charMap))) {
            minLen = Math.min(minLen, end-start+1);
            charMap[str[start]]-=1;
            start += 1;
        }
        end += 1;
    }
    return minLen;
}

console.log(getShortestUniqueSubstring(['x', 'y', 'z'], "xyyzyzyx"));
