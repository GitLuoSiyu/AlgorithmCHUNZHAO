/**
 * @title 238. 除自身以外数组的乘积
 * @description 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * @key 先进行一次遍历， 然后维护一个数组，第i项代表前i个元素（不包括i）的乘积。
然后我们反向遍历一次，然后维护另一个数组，同样是第i项代表前i个元素（不包括i）的乘积。
 * 两次遍历， 一次正向，一次反向。
 * 维护一个数组，第i项代表前i个元素（不包括i）的乘积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = []

    for (let i = 0, temp = 1; i < nums.length; i++) {
        result[i] = temp
        temp *= nums[i]
    }
    for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
        result[i] *= temp
        temp *= nums[i]
    }
    return result
};