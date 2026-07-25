class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let numMap = {};
        let indexes = [];

        for (let i = nums.length - 1; i >= 0; i--) {
            let num = nums[i];

            if (numMap[num] === undefined) {
                numMap[num] = true;
                
            } else {
                nums.splice(i, 1)
            }

        }

        return nums.length;
    }
}
