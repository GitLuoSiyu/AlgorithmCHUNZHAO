/**
 * @title 1663. 具有给定数值的最小字符串
 * @url https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    let result = ''
    while (k) {
        if (k > 26 + n - 1) {
            result = 'z' + result
            k -= 26
        } else {
            result = String.fromCharCode(k - n + 1 + 96) + result
            k -= (k - n + 1)
        }
        n--
    }
    return result
};

/**
 * @description
此处撰写解题思路
前面全是a后面全是z
只要求出中间的字母是啥就行
 */