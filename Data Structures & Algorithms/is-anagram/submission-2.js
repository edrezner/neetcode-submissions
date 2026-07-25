class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sMap = {};

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            if (sMap[char] === undefined) {
                sMap[char] = 1;
            } else {
                sMap[char]++;
            }
        }

        for (let i = 0; i < t.length; i++) {
            let char = t[i];

            if (sMap[char] === undefined) {
                return false;
            } else if (sMap[char] === 1) {
                delete sMap[char];
            } else {
                sMap[char]--;
            }
        }
        
        return Object.keys(sMap).length === 0 ? true : false;
    }
}
