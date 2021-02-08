/**
 * @title 123. 买卖股票的最佳时机 III
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const dp = new Int32Array(4)
    dp[0] = dp[2] = -prices[0]
    for (let i = 1, t; i < prices.length; i++) {
        if ((t = -prices[i]) > dp[0]) dp[0] = t
        if ((t = dp[0] + prices[i]) > dp[1]) dp[1] = t
        if ((t = dp[1] - prices[i]) > dp[2]) dp[2] = t
        if ((t = dp[2] + prices[i]) > dp[3]) dp[3] = t
    }
    return dp[3]
};