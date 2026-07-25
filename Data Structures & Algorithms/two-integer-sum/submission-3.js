class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 2) return false;

        let numMap = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const difference = target - num;

            if (numMap[num] !== undefined) {
                return [numMap[num], i]
            } else {
                numMap[difference] = i;
            }
            console.log(numMap);
        }
    }
}
