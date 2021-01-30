/**
 * @title 面试题 17.19. 消失的两个数字
 * @description 给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
    let len = nums.length + 2,
        hash = {};
    for (let i = 1; i <= len; i++) {
        hash[nums[i - 1]] = true
        if (hash[i] === true) continue;
        hash[i] = false
    }
    let result = [];
    for (let key in hash) {
        if (hash[key] === false) {
            result.push(key / 1)
        }
    }
    return result
};