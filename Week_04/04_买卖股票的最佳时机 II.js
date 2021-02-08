/**
 * @title 122. 买卖股票的最佳时机 II
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length;
    if (len < 2) {
        return 0;
    };
    const dp = new Array(len);
    dp[0] = [0, -prices[0]];
    for (let i = 1; i < len; i++) {
        dp[i] = new Array(2);
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]); // 没有股票
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]); // 有股票
    }
    return dp[len - 1][0]
};