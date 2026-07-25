/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {

        const arr = pairs.slice();
        let result = [];

        if (pairs.length < 1) {
            return [];
        }

        const keyOf = (p) => (Array.isArray(p) ? p[0] : p.key);

        result.push(arr.slice());

        for (let i = 1; i < arr.length; i++) {
            let currentElement = arr[i];
            let currentKey = keyOf(currentElement);

            let j = i - 1;

            while (j >= 0 && keyOf(arr[j]) > currentKey) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = currentElement;
            
            result.push(arr.slice());
        }

        return result;
    }
}
