let find_Anagrams = function(s, p) {
    let result = [];
    let pMap = new Map();
    for (let i = 0; i < p.length; i++) {
        if (pMap.has(p[i])) {
            pMap.set(p[i], pMap.get(p[i]) + 1);
        } else {
            pMap.set(p[i], 1);
        }
    }
    let left = 0;
    let right = 0;
    let count = pMap.size;
    while (right < s.length) {
        if (pMap.has(s[right])) {
            pMap.set(s[right], pMap.get(s[right]) - 1);
            if (pMap.get(s[right]) === 0) {
                count--;
            }
        }
        right++;
        while (count === 0) {
            if (right - left === p.length) {
                result.push(left);
            }
            if (pMap.has(s[left])) {
                pMap.set(s[left], pMap.get(s[left]) + 1);
                if (pMap.get(s[left]) > 0) {
                    count++;
                }
            }
            left++;
        }
    }
    return result;
};

let s = "cbaebabacd";
let p = "abc";
let result = find_Anagrams(s, p);

console.log(result); // [0, 6]