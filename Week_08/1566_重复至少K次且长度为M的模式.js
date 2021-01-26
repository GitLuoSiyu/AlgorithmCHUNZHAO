/**
 * @title 1566. 重复至少 K 次且长度为 M 的模式
 * @description 给你一个正整数数组 arr，请你找出一个长度为 m 且在数组中至少重复 k 次的模式
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
    const n = arr.length

    for (let i = 0; i <= n - m * k; i++) {
        let curr;
        for (curr = 0; curr < m * k; curr++) {
            if (arr[i + curr] !== arr[i + curr % m]) break;
        }
        if (curr === m * k) return true
    }
    return false
};