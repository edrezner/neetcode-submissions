class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length <= 1 || s.length % 2 !== 0) {
            return false;
        }

        let arr = [];

        let arrStr = s.split("");

        if (arrStr[arrStr.length - 1] === "{" ||
            arrStr[arrStr.length - 1] === "[" ||
            arrStr[arrStr.length - 1] === "(" ) {
                return false;
            }

        for (let i = 0; i < arrStr.length; i++) {
            let char = arrStr[i];

            if (char === "}" && arr.pop() !== "{") {
                    return false;
                } else if (char === "]" && arr.pop() !== "[") {
                    return false;
                } else if (char === ")" && arr.pop() !== "(") {
                    return false;
                } else if (char === "{" || char === "[" || char === "("){
                    arr.push(char);
                }
            }

            if (arr.length !== 0) return false;
        
        return true;
        
    }
}
