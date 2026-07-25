class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length < 2) return false;

        let stack =[];

        for (let i = 0; i < s.length; i++) {
            let bracket = s[i];
            console.log(bracket);

            if (bracket === '(' || bracket === '[' || bracket === '{') stack.push(bracket);
            console.log(stack);

            if (bracket === ')' && stack.pop() !== '(') {
                return false;
            }

            if (bracket === ']' && stack.pop() !== '[') {
                return false;
            }

            if (bracket === '}' && stack.pop() !== '{') {
                return false;
            }
        };

        if (stack.length !== 0) return false;

        return true;
        
    }
}
