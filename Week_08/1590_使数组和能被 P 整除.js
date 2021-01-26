/**
 * @title 1590. 使数组和能被 P 整除
 * @description 
    给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。 不允许 将整个数组都移除。
    请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。
    子数组 定义为原数组中连续的一组元素。
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    var preSum = [0];
    var total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        preSum.push(total);
    }

    if (total % p === 0) return 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= nums.length - i; j++) {
            let blockSum = preSum[j + i] - preSum[j];
            if ((total - blockSum) % p === 0) {
                return i;
            }
        }
    }

    return -1;
};