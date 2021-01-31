/**
 * @title 剑指 Offer 49. 丑数
 * @url https://leetcode-cn.com/problems/chou-shu-lcof/
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    if (n === 1) return 1;
    let dp = [1];
    let p2 = 0,
        p3 = 0,
        p5 = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
        if (dp[i] === dp[p2] * 2) p2++;
        if (dp[i] === dp[p3] * 3) p3++;
        if (dp[i] === dp[p5] * 5) p5++;
    }
    return dp[dp.length - 1];
};