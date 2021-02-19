/**
 * @title 338. 比特位计数
 * @url https://leetcode-cn.com/problems/counting-bits/description/
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let dp = [0];
    let n = 1;
    while(n <= num){
        dp[n] = dp[(n & (n-1))] + 1;
        n++;
    }
    return dp;
};