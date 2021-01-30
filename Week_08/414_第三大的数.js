/**
 * @title 414. 第三大的数
 * @desc 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 3) {
        return Math.max(...nums)
    }
    let a = [...new Set([...nums])].sort((a, b) => a - b)
    return a.length < 3 ? Math.max(...a) : a[a.length - 3]
};