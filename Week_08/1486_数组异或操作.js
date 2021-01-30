/**
 * @title 1486. 数组异或操作
 * @url https://leetcode-cn.com/problems/xor-operation-in-an-array/
 * @description 
 * 给你两个整数，n 和 start 。
数组 nums 定义为：nums[i] = start + 2*i（下标从 0 开始）且 n == nums.length 。
请返回 nums 中所有元素按位异或（XOR）后得到的结果。
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let result = 0

    for (let i = 0; i < n; i++) {
        let elem = start + 2 * i
        result = result ^ elem
    }

    return result
};



/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let ans = 2 * xor(n, Math.floor(start / 2));

    if (n & start & 1) ans++; // 处理最后一位

    return ans;

    function xor(n, start) { // 将公式转换成情况 1
        if (start & 1) return (start - 1) ^ helper(n + 1, start - 1);
        else return helper(n, start);
    }

    function helper(n, start) { // 情况 1
        if (n % 2 === 0) return Math.floor(n / 2) & 1;
        else return Math.floor(n / 2) & 1 ^ (start + n - 1);
    }
};