/**
 * @title 33_搜索旋转排序数组
 * @url https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length;
    if (target < nums[0]) {
        for (let i = len; i--;) {
            if (nums[i] === target) return i
            else if (target > nums[i] || nums[i] > nums[len - 1]) break
        }
    } else {
        for (var j = 0; j < len; j++) {
            if (nums[j] === target) return j
            else if (target < nums[j] || nums[j] < nums[0]) break
        }
    }
    return -1
};