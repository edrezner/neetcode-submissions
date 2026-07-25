class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {


        let idx1 = 0;
        let idx2 = s.length - 1;

        while (idx1 < idx2) {
            let char1 = s[idx1];
            let char2 = s[idx2];


            if (/[a-zA-Z0-9]/.test(char1) === false) {
                idx1++;
                continue;
            }

            if (/[a-zA-Z0-9]/.test(char2) === false) {
                idx2--;
                continue;
            }
            console.log(char2);

            if (char1.toLowerCase() !== char2.toLowerCase()) {
                return false;
            }

            idx1++;
            idx2--;

        }

        return true;
    }
}
