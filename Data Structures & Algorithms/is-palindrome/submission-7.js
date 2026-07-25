class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && s[left].match(/[^A-Za-z0-9]/)) {
                left++;
            };
            
            while (left < right && s[right].match(/[^A-Za-z0-9]/)) {
                right--;
            };

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}
