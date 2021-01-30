/**
 * @title 1464. 数组中两元素的最大乘积
 * @url https://leetcode-cn.com/problems/maximum-product-of-two-elements-in-an-array/
 * @description 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    var a = nums[0],
        b = nums[1];

    for (var i = 2; i < nums.length; i++) {
        if (a > b) {
            nums[i] > b && (b = nums[i]);
        } else {
            nums[i] > a && (a = nums[i]);
        }
    }

    return (a - 1) * (b - 1)
};