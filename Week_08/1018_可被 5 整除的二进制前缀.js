/**
 * @title 1018. 可被 5 整除的二进制前缀
 * @description 
 * @url https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/
 * @key 位数依次升位 * 2; 只取十进制的十位个位数判断
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    let temp = 0
    return A.map((val) => {
        const result = (val + temp << 1) % 10;
        temp = result;
        return result % 5 === 0;
    })
};