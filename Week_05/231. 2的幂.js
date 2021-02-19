/**
 * @title 231. 2的幂
 * @url https://leetcode-cn.com/problems/power-of-two/
 * @description 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) == 0;
};

var isPowerOfTwo = function (n) {
    return Number.isInteger(Math.log2(n));
};

var isPowerOfTwo = function (n) {
    return n > 0 && (n & (-n)) == n
};

var isPowerOfTwo = function (n) {
    while (n > 1) {
        n /= 2;
    }
    if (n == 1) {
        return true;
    } else {
        return false;
    }
};