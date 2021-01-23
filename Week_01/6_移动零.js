/**
 * @title 移动零
 * @desc 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[j] = nums[i]
            if (i != j) {
                nums[i] = 0
            }
            j++
        }
    }

};