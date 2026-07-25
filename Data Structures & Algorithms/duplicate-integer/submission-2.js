class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numMap = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];

            if (numMap[num] === undefined) {
                numMap[num] = true;
            } else {
                return true;
            }
        }

        return false;
    }
}
