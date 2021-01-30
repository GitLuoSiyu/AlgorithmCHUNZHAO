/**
 * @title 900. RLE 迭代器
 * @url https://leetcode-cn.com/problems/rle-iterator/
 * @description 
 * @param {number[]} A
 */
var RLEIterator = function (A) {
    this.data = A
    this.count = this.data.shift() || 0
    this.num = this.data.shift()
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
    this.count -= n
    while (this.count < 0 && this.data.length > 0) {
        this.count += this.data.shift()
        this.num = this.data.shift()
    }

    if (this.count < 0) {
        return -1
    } else {
        return this.num
    }
};