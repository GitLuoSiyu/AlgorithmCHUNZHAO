/**
 * @title 643. 子数组最大平均数 I
 * @url https://leetcode-cn.com/problems/maximum-average-subarray-i/
 * @description 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let max = 0,
        sum = 0;
    for (let i = 0; i < k && i < nums.length; i++) {
        sum += nums[i];
    }
    max = sum;
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        if (sum > max) {
            max = sum;
        }
    }
    return max / k
};