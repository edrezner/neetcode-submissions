class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let charMap = {};

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            if (!charMap[char]) {
                charMap[char] = 1;
            } else {
                charMap[char] += 1;
            }
        }

        for (let i = 0; i < t.length; i++) {
            let char = t[i];

            if (!charMap[char]) {
                return false;
            } else {
                charMap[char] -= 1;
            }

            if (charMap[char] < 0) return false;
        }

        return true;
    }
}
