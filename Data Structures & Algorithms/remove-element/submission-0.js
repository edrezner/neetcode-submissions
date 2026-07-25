class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let left = 0;

        for (let r = 0; r < nums.length; r++) {
            let num = nums[r];

            if (num !== val) {
                nums[left] = num;
                left++;
            };
        };

        return left;
    }
}
