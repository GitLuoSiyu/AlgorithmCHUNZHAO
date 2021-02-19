/**
 * @title 191. 位1的个数
 * @url https://leetcode-cn.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    let mask = 1
    for(let i = 0;i < 32;i++){
        if((n & mask) != 0){
            count++
        }
        mask <<= 1
    }
    return count
};


/**
 * @title 191. 位1的个数
 * @url https://leetcode-cn.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0
    while(n != 0){
        sum++
        n &= (n-1)
    }
    return sum
};


/**
 * @title 191. 位1的个数
 * @url https://leetcode-cn.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return ((n.toString(2).match(/1/g)) ||[]).length;
};


/**
 * @title 191. 位1的个数
 * @url https://leetcode-cn.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n){
        // n % 2 == 1
        if(n & 1 == 1){
            count++;
        }
        n >>>= 1;
    }
    return count;
};
