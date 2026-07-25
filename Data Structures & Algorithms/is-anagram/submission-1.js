class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if (s.length !== t.length) return false;

       let charMap = {};

       for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (charMap[char]) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1;
        }
       }

       for (let i = 0; i < t.length; i++) {
        const char = t[i];

        if (charMap[char] === undefined) {
            return false;
        } else {
            charMap[char] -= 1;
        }

        if (charMap[char] < 0) return false;
       }

       return true;
    }
}
