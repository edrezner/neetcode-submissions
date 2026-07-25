class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/\p{P}/gu, '').toLowerCase().split(" ").join("");
        let idx1 = 0;
        let idx2 = str.length - 1;

        while (idx1 < idx2) {
            if (/^[A-Za-z0-9]+$/.test(str[idx1]) === false) idx1++;
            if (/^[A-Za-z0-9]+$/.test(str[idx2]) === false) idx2--;

            if (str[idx1] !== str[idx2]) return false;
            idx1++;
            idx2--;
        }

        return true;
    }
}
