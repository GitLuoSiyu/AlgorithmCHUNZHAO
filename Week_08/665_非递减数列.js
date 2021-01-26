/**
 * @title 665. 非递减数列
 * @description 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 * @example 
 输入: nums = [4,2,3]
 输出: true
 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
 * @key 如果i大于i+1 记录count++ 如果count大于1 则返回false
    判断i+1和i-1 如果i-1 > i+1 则需要修改i+1 使 i+1 = i
    如果 i-1<i+1则修改i
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let count = 0,
        n = nums.length;
    for (let i = 0; i <= n - 2; i++) {
        if (nums[i] > nums[i + 1]) {
            if (nums[i - 1] > nums[i + 1]) {
                nums[i + 1] = nums[i]
            } else {
                nums[i] = nums[i - 1]
            }
            count++
        }
        if (count > 1) return false
    }
    return true
};