class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];

        let numMap = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let difference = target - num;

            if (numMap[num] !== undefined) {
                result.push(numMap[num], i);
                return result;
            } else {
                numMap[difference] = i;
            }
        }
    }
}
