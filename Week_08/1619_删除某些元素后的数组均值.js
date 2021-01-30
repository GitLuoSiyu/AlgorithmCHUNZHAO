/**
 * @title 1619. 删除某些元素后的数组均值
 * @url https://leetcode-cn.com/problems/mean-of-array-after-removing-some-elements/
 * @description 给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。与 标准答案 误差在 10-5 的结果都被视为正确结果
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    return arr.sort((a, b) => b - a)
        .slice(arr.length / 20, -arr.length / 20)
        .reduce((acc, v) => acc + v, 0) /
        (arr.length * 0.9)
};