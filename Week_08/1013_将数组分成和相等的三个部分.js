/**
 * @title 将数组分成和相等的三个部分
 * @desc 给你一个整数数组 arr，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    let sum = arr.reduce((acc, cur) => acc + cur) //sum数组之和
    let temp = 0 //temp累加
    let cnt = 0 //cnt计数
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i]
        if (temp == sum / 3) {
            cnt++
            temp = 0
        }
    }
    return (sum != 0 && cnt == 3) || (sum == 0 && cnt > 2)
};