class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 1) return false;

        if (s[s.length - 1] === '(' || s[s.length - 1] === '[' || s[s.length - 1] === '{') return false;

        let brackets = [];


        for (let i = 0; i < s.length; i++) {
            let bracket = s[i];

            if (bracket === ')' && brackets.pop() !== '(') {
                return false;
            } else if (bracket === ']' && brackets.pop() !== '[') {
                return false;
            } else if (bracket === '}' && brackets.pop() !== '{') {
                return false;
            } else if (bracket === '(' || bracket === '[' || bracket === '{'){
                brackets.push(bracket);
            }
        }

        return brackets.length === 0;
    }
}
