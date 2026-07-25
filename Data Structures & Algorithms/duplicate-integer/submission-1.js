class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numMap = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (numMap[num]) {
                return true
            }

            numMap[num] = true;
        }

        return false;
    }
}
