/**
 * @title 加一
 * @desc 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0)
            return digits;
    }
    digits = [1, ...digits]
    return digits;
};