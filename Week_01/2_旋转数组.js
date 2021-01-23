/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    const newArr = new Array(len)

    for (let i = 0; i < len; ++i) {
        newArr[(i + k) % len] = nums[i]
    }
    for (let i = 0; i < len; ++i) {
        nums[i] = newArr[i]
    }
};
// @lc code=end

