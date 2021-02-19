/**
 * @title 605. 种花问题
 * @url https://leetcode-cn.com/problems/can-place-flowers/
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            n--;
            i++;
        }
    }
    return n <= 0
};

/**
 * 贪心
 * 思路很简单，只要满足前一个数不为1(可以为0或undefined) 或者后一个不为1(可以为0或undefined)且当前数不为1， 则把输入的n减1，且索引指针加1，为什么加指针索引，你可以理解为当前花坛没花种了花，则下一个花坛没必要看了，一定不能中花
 */