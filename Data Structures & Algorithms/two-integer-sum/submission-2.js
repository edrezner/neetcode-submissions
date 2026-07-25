class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let difference = target - num;

            if (typeof numMap[num] === "number") {
                return [Math.min(numMap[num], i), Math.max(numMap[num], i)];

            } else {
                numMap[difference] = i;
            }
        }
    }
}
