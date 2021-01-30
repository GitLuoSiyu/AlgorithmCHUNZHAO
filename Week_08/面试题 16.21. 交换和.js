/**
 * @title 面试题 16.21. 交换和
 * @description 给定两个整数数组，请交换一对数值（每个数组中取一个数值），使得两个数组所有元素的和相等
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function (array1, array2) {
    // 计算当前的和
    let sum1 = array1.reduce((sum, item) => sum + item);
    let sum2 = array2.reduce((sum, item) => sum + item);
    // 去重
    array1 = [...new Set(array1)];
    array2 = [...new Set(array2)];
    // 循环比较
    for (let i = 0; i < array1.length; i++) {
        sum1 -= array1[i];
        sum2 += array1[i];
        for (let j = 0; j < array2.length; j++) {
            if (sum1 + array2[j] === sum2 - array2[j]) {
                return [array1[i], array2[j]];
            }
        }
        sum1 += array1[i];
        sum2 -= array1[i];
    }
    return []
};