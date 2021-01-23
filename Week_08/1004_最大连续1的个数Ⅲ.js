/**
 * @title 最大连续1的个数 III
 * @description 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    let i = 0
    let j = 0
    const len = A.length
    while (j < len) {
        if (A[j] === 0) {
            K--
        }
        if (K < 0) {
            if (A[i] === 0) {
                K++
            }
            i++
        }
        j++
    }
    return j - i
};