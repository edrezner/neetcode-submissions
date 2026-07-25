class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length * 2);
        let concatIdx = nums.length;

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];

            ans[i] = num;
            ans[concatIdx] = num;
            concatIdx++;
        }

        return ans;
    }
}
